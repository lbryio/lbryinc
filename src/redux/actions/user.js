import { ACTIONS, MODALS, Lbry, doNotify, doHideNotification } from 'lbry-redux';
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

    Lbryio.call('user', 'invite_status')
      .then(status => {
        dispatch({
          type: ACTIONS.USER_INVITE_STATUS_FETCH_SUCCESS,
          data: {
            invitesRemaining: status.invites_remaining ? status.invites_remaining : 0,
            invitees: status.invitees,
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

export function doInstallNew(appVersion, deviceId = null) {
  const payload = { app_version: appVersion, device_id: deviceId };
  Lbry.status().then(status => {
    payload.app_id = status.installation_id;
    payload.node_id = status.lbry_id;
    Lbry.version().then(version => {
      payload.daemon_version = version.lbrynet_version;
      payload.operating_system = version.os_system;
      payload.platform = version.platform;
      Lbryio.call('install', 'new', payload);
    });
  });
}

// TODO: Call doInstallNew separately so we don't have to pass appVersion and deviceId params?
export function doAuthenticate(appVersion, deviceId = null) {
  return dispatch => {
    dispatch({
      type: ACTIONS.AUTHENTICATION_STARTED,
    });
    Lbryio.authenticate()
      .then(user => {
        // analytics.setUser(user);
        dispatch({
          type: ACTIONS.AUTHENTICATION_SUCCESS,
          data: { user },
        });
        dispatch(doRewardList());
        dispatch(doFetchInviteStatus());
        doInstallNew(appVersion, deviceId);
      })
      .catch(error => {
        dispatch(doNotify({ id: MODALS.AUTHENTICATION_FAILURE }));
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
        // analytics.setUser(user);
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
          dispatch(doHideNotification());
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
