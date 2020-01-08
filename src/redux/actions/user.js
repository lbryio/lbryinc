import { Lbry, doToast, doFetchChannelListMine, batchActions } from 'lbry-redux';
import * as ACTIONS from 'constants/action_types';
import { doClaimRewardType, doRewardList } from 'redux/actions/rewards';
import {
  selectEmailToVerify,
  selectPhoneToVerify,
  selectUserCountryCode,
} from 'redux/selectors/user';
import rewards from 'rewards';
import Lbryio from 'lbryio';

export function doFetchInviteStatus() {
  return dispatch => {
    dispatch({
      type: ACTIONS.USER_INVITE_STATUS_FETCH_STARTED,
    });

    Promise.all([Lbryio.call('user', 'invite_status'), Lbryio.call('user_referral_code', 'list')])
      .then(([status, code]) => {
        dispatch(doRewardList());

        dispatch({
          type: ACTIONS.USER_INVITE_STATUS_FETCH_SUCCESS,
          data: {
            invitesRemaining: status.invites_remaining ? status.invites_remaining : 0,
            invitees: status.invitees,
            referralLink: `${Lbryio.CONNECTION_STRING}user/refer?r=${code}`,
            referralCode: code,
          },
        });
      })
      .catch(error => {
        dispatch({
          type: ACTIONS.USER_INVITE_STATUS_FETCH_FAILURE,
          data: { error },
        });
      });
  };
}

export function doInstallNew(appVersion, os = null, firebaseToken = null) {
  const payload = { app_version: appVersion };
  if (firebaseToken) {
    payload.firebase_token = firebaseToken;
  }

  Lbry.status().then(status => {
    payload.app_id = status.installation_id;
    payload.node_id = status.lbry_id;
    Lbry.version().then(version => {
      payload.daemon_version = version.lbrynet_version;
      payload.operating_system = os || version.os_system;
      payload.platform = version.platform;
      Lbryio.call('install', 'new', payload);
    });
  });
}

// TODO: Call doInstallNew separately so we don't have to pass appVersion and os_system params?
export function doAuthenticate(appVersion, os = null, firebaseToken = null) {
  return dispatch => {
    dispatch({
      type: ACTIONS.AUTHENTICATION_STARTED,
    });

    Lbryio.authenticate()
      .then(accessToken => {
        // analytics.setUser(user);
        dispatch({
          type: ACTIONS.AUTHENTICATION_SUCCESS,
          data: { accessToken },
        });
        dispatch(doRewardList());
        dispatch(doFetchInviteStatus());
        doInstallNew(appVersion, os, firebaseToken);
      })
      .catch(error => {
        dispatch({
          type: ACTIONS.AUTHENTICATION_FAILURE,
          data: { error },
        });
      });
  };
}

export function doUserFetch() {
  return dispatch => {
    dispatch({
      type: ACTIONS.USER_FETCH_STARTED,
    });
    Lbryio.getCurrentUser()
      .then(user => {
        dispatch(doRewardList());
        dispatch({
          type: ACTIONS.USER_FETCH_SUCCESS,
          data: { user },
        });
      })
      .catch(error => {
        dispatch({
          type: ACTIONS.USER_FETCH_FAILURE,
          data: { error },
        });
      });
  };
}

export function doUserCheckEmailVerified() {
  // This will happen in the background so we don't need loading booleans
  return dispatch => {
    Lbryio.getCurrentUser().then(user => {
      if (user.has_verified_email) {
        dispatch(doRewardList());

        dispatch({
          type: ACTIONS.USER_FETCH_SUCCESS,
          data: { user },
        });
      }
    });
  };
}

export function doUserPhoneReset() {
  return {
    type: ACTIONS.USER_PHONE_RESET,
  };
}

export function doUserPhoneNew(phone, countryCode) {
  return dispatch => {
    dispatch({
      type: ACTIONS.USER_PHONE_NEW_STARTED,
      data: { phone, country_code: countryCode },
    });

    const success = () => {
      dispatch({
        type: ACTIONS.USER_PHONE_NEW_SUCCESS,
        data: { phone },
      });
    };

    const failure = error => {
      dispatch({
        type: ACTIONS.USER_PHONE_NEW_FAILURE,
        data: { error },
      });
    };

    Lbryio.call(
      'user',
      'phone_number_new',
      { phone_number: phone, country_code: countryCode },
      'post'
    ).then(success, failure);
  };
}

export function doUserPhoneVerifyFailure(error) {
  return {
    type: ACTIONS.USER_PHONE_VERIFY_FAILURE,
    data: { error },
  };
}

export function doUserPhoneVerify(verificationCode) {
  return (dispatch, getState) => {
    const phoneNumber = selectPhoneToVerify(getState());
    const countryCode = selectUserCountryCode(getState());

    dispatch({
      type: ACTIONS.USER_PHONE_VERIFY_STARTED,
      code: verificationCode,
    });

    Lbryio.call(
      'user',
      'phone_number_confirm',
      {
        verification_code: verificationCode,
        phone_number: phoneNumber,
        country_code: countryCode,
      },
      'post'
    )
      .then(user => {
        if (user.is_identity_verified) {
          dispatch({
            type: ACTIONS.USER_PHONE_VERIFY_SUCCESS,
            data: { user },
          });
          dispatch(doClaimRewardType(rewards.TYPE_NEW_USER));
        }
      })
      .catch(error => dispatch(doUserPhoneVerifyFailure(error)));
  };
}

export function doUserEmailToVerify(email) {
  return dispatch => {
    dispatch({
      type: ACTIONS.USER_EMAIL_VERIFY_SET,
      data: { email },
    });
  };
}

export function doUserEmailNew(email) {
  return dispatch => {
    dispatch({
      type: ACTIONS.USER_EMAIL_NEW_STARTED,
      email,
    });

    const success = () => {
      dispatch({
        type: ACTIONS.USER_EMAIL_NEW_SUCCESS,
        data: { email },
      });
      dispatch(doUserFetch());
    };

    const failure = error => {
      dispatch({
        type: ACTIONS.USER_EMAIL_NEW_FAILURE,
        data: { error },
      });
    };

    Lbryio.call('user_email', 'new', { email, send_verification_email: true }, 'post')
      .catch(error => {
        if (error.response && error.response.status === 409) {
          dispatch({
            type: ACTIONS.USER_EMAIL_NEW_EXISTS,
          });

          return Lbryio.call(
            'user_email',
            'resend_token',
            { email, only_if_expired: true },
            'post'
          ).then(success, failure);
        }
        throw error;
      })
      .then(success, failure);
  };
}

export function doUserResendVerificationEmail(email) {
  return dispatch => {
    dispatch({
      type: ACTIONS.USER_EMAIL_VERIFY_RETRY_STARTED,
    });

    const success = () => {
      dispatch({
        type: ACTIONS.USER_EMAIL_VERIFY_RETRY_SUCCESS,
      });
    };

    const failure = error => {
      dispatch({
        type: ACTIONS.USER_EMAIL_VERIFY_RETRY_FAILURE,
        data: { error },
      });
    };

    Lbryio.call('user_email', 'resend_token', { email }, 'post')
      .catch(error => {
        if (error.response && error.response.status === 409) {
          throw error;
        }
      })
      .then(success, failure);
  };
}

export function doUserEmailVerifyFailure(error) {
  return {
    type: ACTIONS.USER_EMAIL_VERIFY_FAILURE,
    data: { error },
  };
}

export function doUserEmailVerify(verificationToken, recaptcha) {
  return (dispatch, getState) => {
    const email = selectEmailToVerify(getState());

    dispatch({
      type: ACTIONS.USER_EMAIL_VERIFY_STARTED,
      code: verificationToken,
      recaptcha,
    });

    Lbryio.call(
      'user_email',
      'confirm',
      {
        verification_token: verificationToken,
        email,
        recaptcha,
      },
      'post'
    )
      .then(userEmail => {
        if (userEmail.is_verified) {
          dispatch({
            type: ACTIONS.USER_EMAIL_VERIFY_SUCCESS,
            data: { email },
          });
          dispatch(doUserFetch());
        } else {
          throw new Error('Your email is still not verified.'); // shouldn't happen
        }
      })
      .catch(error => dispatch(doUserEmailVerifyFailure(error)));
  };
}

export function doFetchAccessToken() {
  return dispatch => {
    const success = token =>
      dispatch({
        type: ACTIONS.FETCH_ACCESS_TOKEN_SUCCESS,
        data: { token },
      });
    Lbryio.getAuthToken().then(success);
  };
}

export function doUserIdentityVerify(stripeToken) {
  return dispatch => {
    dispatch({
      type: ACTIONS.USER_IDENTITY_VERIFY_STARTED,
      token: stripeToken,
    });

    Lbryio.call('user', 'verify_identity', { stripe_token: stripeToken }, 'post')
      .then(user => {
        if (user.is_identity_verified) {
          dispatch({
            type: ACTIONS.USER_IDENTITY_VERIFY_SUCCESS,
            data: { user },
          });
          dispatch(doClaimRewardType(rewards.TYPE_NEW_USER));
        } else {
          throw new Error('Your identity is still not verified. This should not happen.'); // shouldn't happen
        }
      })
      .catch(error => {
        dispatch({
          type: ACTIONS.USER_IDENTITY_VERIFY_FAILURE,
          data: { error: error.toString() },
        });
      });
  };
}

export function doUserInviteNew(email) {
  return dispatch => {
    dispatch({
      type: ACTIONS.USER_INVITE_NEW_STARTED,
    });

    return Lbryio.call('user', 'invite', { email }, 'post')
      .then(success => {
        dispatch({
          type: ACTIONS.USER_INVITE_NEW_SUCCESS,
          data: { email },
        });

        dispatch(
          doToast({
            message: __(`Invite sent to ${email}`),
          })
        );

        dispatch(doFetchInviteStatus());
        return success;
      })
      .catch(error => {
        dispatch({
          type: ACTIONS.USER_INVITE_NEW_FAILURE,
          data: { error },
        });
      });
  };
}

export function doUserSetReferrer(referrer, shouldClaim) {
  return dispatch => {
    dispatch({
      type: ACTIONS.USER_SET_REFERRER_STARTED,
    });

    return Lbryio.call('user', 'referral', { referrer }, 'post')
      .then(() => {
        dispatch({
          type: ACTIONS.USER_SET_REFERRER_SUCCESS,
        });
        // for testing
        dispatch(
          doToast({
            message: __(`Set Referrer to ${referrer}`),
          })
        );
        // we need to userFetch because once you claim this,
        if (shouldClaim) {
          dispatch(doClaimRewardType(rewards.TYPE_REFEREE));
          dispatch(doUserFetch());
        } else {
          dispatch(doUserFetch());
        }
      })
      .catch(error => {
        dispatch({
          type: ACTIONS.USER_SET_REFERRER_FAILURE,
          data: { error },
        });
      });
  };
}

export function doClaimYoutubeChannels() {
  return dispatch => {
    dispatch({
      type: ACTIONS.USER_YOUTUBE_IMPORT_STARTED,
    });

    let transferResponse;
    return Lbry.address_list({ page: 1, page_size: 99999 })
      .then(addressList => addressList.items.sort((a, b) => a.used_times - b.used_times)[0])
      .then(address =>
        Lbryio.call('yt', 'transfer', {
          address: address.address,
          public_key: address.pubkey,
        }).then(response => {
          if (response && response.length) {
            transferResponse = response;
            return Promise.all(
              response.map(channelMeta => {
                if (channelMeta && channelMeta.channel && channelMeta.channel.channel_certificate) {
                  return Lbry.channel_import({
                    channel_data: channelMeta.channel.channel_certificate,
                  });
                }
                return null;
              })
            ).then(() => {
              const actions = [
                {
                  type: ACTIONS.USER_YOUTUBE_IMPORT_SUCCESS,
                  data: transferResponse,
                },
              ];
              actions.push(doUserFetch());
              actions.push(doFetchChannelListMine());
              dispatch(batchActions(...actions));
            });
          }
        })
      )
      .catch(error => {
        dispatch({
          type: ACTIONS.USER_YOUTUBE_IMPORT_FAILURE,
          data: String(error),
        });
      });
  };
}

export function doCheckYoutubeTransfer() {
  return dispatch => {
    dispatch({
      type: ACTIONS.USER_YOUTUBE_IMPORT_STARTED,
    });

    return Lbryio.call('yt', 'transfer')
      .then(response => {
        if (response && response.length) {
          dispatch({
            type: ACTIONS.USER_YOUTUBE_IMPORT_SUCCESS,
            data: response,
          });
        } else {
          throw new Error();
        }
      })
      .catch(error => {
        dispatch({
          type: ACTIONS.USER_YOUTUBE_IMPORT_FAILURE,
          data: String(error),
        });
      });
  };
}
