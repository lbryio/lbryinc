'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var lbryRedux = require('lbry-redux');
var querystring = _interopDefault(require('querystring'));
var reselect = require('reselect');

// Auth Token
const GENERATE_AUTH_TOKEN_FAILURE = 'GENERATE_AUTH_TOKEN_FAILURE';
const GENERATE_AUTH_TOKEN_STARTED = 'GENERATE_AUTH_TOKEN_STARTED';
const GENERATE_AUTH_TOKEN_SUCCESS = 'GENERATE_AUTH_TOKEN_SUCCESS'; // Claims

const FETCH_FEATURED_CONTENT_STARTED = 'FETCH_FEATURED_CONTENT_STARTED';
const FETCH_FEATURED_CONTENT_COMPLETED = 'FETCH_FEATURED_CONTENT_COMPLETED';
const FETCH_TRENDING_CONTENT_STARTED = 'FETCH_TRENDING_CONTENT_STARTED';
const FETCH_TRENDING_CONTENT_COMPLETED = 'FETCH_TRENDING_CONTENT_COMPLETED';
const RESOLVE_URIS_STARTED = 'RESOLVE_URIS_STARTED';
const RESOLVE_URIS_COMPLETED = 'RESOLVE_URIS_COMPLETED';
const FETCH_CHANNEL_CLAIMS_STARTED = 'FETCH_CHANNEL_CLAIMS_STARTED';
const FETCH_CHANNEL_CLAIMS_COMPLETED = 'FETCH_CHANNEL_CLAIMS_COMPLETED';
const FETCH_CHANNEL_CLAIM_COUNT_STARTED = 'FETCH_CHANNEL_CLAIM_COUNT_STARTED';
const FETCH_CHANNEL_CLAIM_COUNT_COMPLETED = 'FETCH_CHANNEL_CLAIM_COUNT_COMPLETED';
const FETCH_CLAIM_LIST_MINE_STARTED = 'FETCH_CLAIM_LIST_MINE_STARTED';
const FETCH_CLAIM_LIST_MINE_COMPLETED = 'FETCH_CLAIM_LIST_MINE_COMPLETED';
const ABANDON_CLAIM_STARTED = 'ABANDON_CLAIM_STARTED';
const ABANDON_CLAIM_SUCCEEDED = 'ABANDON_CLAIM_SUCCEEDED';
const FETCH_CHANNEL_LIST_STARTED = 'FETCH_CHANNEL_LIST_STARTED';
const FETCH_CHANNEL_LIST_COMPLETED = 'FETCH_CHANNEL_LIST_COMPLETED';
const CREATE_CHANNEL_STARTED = 'CREATE_CHANNEL_STARTED';
const CREATE_CHANNEL_COMPLETED = 'CREATE_CHANNEL_COMPLETED';
const PUBLISH_STARTED = 'PUBLISH_STARTED';
const PUBLISH_COMPLETED = 'PUBLISH_COMPLETED';
const PUBLISH_FAILED = 'PUBLISH_FAILED';
const SET_PLAYING_URI = 'SET_PLAYING_URI';
const SET_CONTENT_POSITION = 'SET_CONTENT_POSITION';
const SET_CONTENT_LAST_VIEWED = 'SET_CONTENT_LAST_VIEWED';
const CLEAR_CONTENT_HISTORY_URI = 'CLEAR_CONTENT_HISTORY_URI';
const CLEAR_CONTENT_HISTORY_ALL = 'CLEAR_CONTENT_HISTORY_ALL'; // Subscriptions

const CHANNEL_SUBSCRIBE = 'CHANNEL_SUBSCRIBE';
const CHANNEL_UNSUBSCRIBE = 'CHANNEL_UNSUBSCRIBE';
const CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS = 'CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS';
const CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS = 'CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS';
const HAS_FETCHED_SUBSCRIPTIONS = 'HAS_FETCHED_SUBSCRIPTIONS';
const SET_SUBSCRIPTION_LATEST = 'SET_SUBSCRIPTION_LATEST';
const UPDATE_SUBSCRIPTION_UNREADS = 'UPDATE_SUBSCRIPTION_UNREADS';
const REMOVE_SUBSCRIPTION_UNREADS = 'REMOVE_SUBSCRIPTION_UNREADS';
const CHECK_SUBSCRIPTION_STARTED = 'CHECK_SUBSCRIPTION_STARTED';
const CHECK_SUBSCRIPTION_COMPLETED = 'CHECK_SUBSCRIPTION_COMPLETED';
const CHECK_SUBSCRIPTIONS_SUBSCRIBE = 'CHECK_SUBSCRIPTIONS_SUBSCRIBE';
const FETCH_SUBSCRIPTIONS_START = 'FETCH_SUBSCRIPTIONS_START';
const FETCH_SUBSCRIPTIONS_FAIL = 'FETCH_SUBSCRIPTIONS_FAIL';
const FETCH_SUBSCRIPTIONS_SUCCESS = 'FETCH_SUBSCRIPTIONS_SUCCESS';
const SET_VIEW_MODE = 'SET_VIEW_MODE';
const GET_SUGGESTED_SUBSCRIPTIONS_START = 'GET_SUGGESTED_SUBSCRIPTIONS_START';
const GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS = 'GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS';
const GET_SUGGESTED_SUBSCRIPTIONS_FAIL = 'GET_SUGGESTED_SUBSCRIPTIONS_FAIL';
const SUBSCRIPTION_FIRST_RUN_COMPLETED = 'SUBSCRIPTION_FIRST_RUN_COMPLETED';
const VIEW_SUGGESTED_SUBSCRIPTIONS = 'VIEW_SUGGESTED_SUBSCRIPTIONS'; // Blacklist

const FETCH_BLACK_LISTED_CONTENT_STARTED = 'FETCH_BLACK_LISTED_CONTENT_STARTED';
const FETCH_BLACK_LISTED_CONTENT_COMPLETED = 'FETCH_BLACK_LISTED_CONTENT_COMPLETED';
const FETCH_BLACK_LISTED_CONTENT_FAILED = 'FETCH_BLACK_LISTED_CONTENT_FAILED';
const BLACK_LISTED_CONTENT_SUBSCRIBE = 'BLACK_LISTED_CONTENT_SUBSCRIBE'; // Filtered list

const FETCH_FILTERED_CONTENT_STARTED = 'FETCH_FILTERED_CONTENT_STARTED';
const FETCH_FILTERED_CONTENT_COMPLETED = 'FETCH_FILTERED_CONTENT_COMPLETED';
const FETCH_FILTERED_CONTENT_FAILED = 'FETCH_FILTERED_CONTENT_FAILED';
const FILTERED_CONTENT_SUBSCRIBE = 'FILTERED_CONTENT_SUBSCRIBE'; // Cost Info

const FETCH_COST_INFO_STARTED = 'FETCH_COST_INFO_STARTED';
const FETCH_COST_INFO_COMPLETED = 'FETCH_COST_INFO_COMPLETED'; // File Stats

const FETCH_VIEW_COUNT_STARTED = 'FETCH_VIEW_COUNT_STARTED';
const FETCH_VIEW_COUNT_FAILED = 'FETCH_VIEW_COUNT_FAILED';
const FETCH_VIEW_COUNT_COMPLETED = 'FETCH_VIEW_COUNT_COMPLETED'; // Cross-device Sync

const GET_SYNC_STARTED = 'GET_SYNC_STARTED';
const GET_SYNC_COMPLETED = 'GET_SYNC_COMPLETED';
const SET_SYNC_STARTED = 'SET_SYNC_STARTED';
const SET_SYNC_FAILED = 'SET_SYNC_FAILED';
const SET_SYNC_COMPLETED = 'SET_SYNC_COMPLETED';
const SET_DEFAULT_ACCOUNT = 'SET_DEFAULT_ACCOUNT';
const SYNC_APPLY_STARTED = 'SYNC_APPLY_STARTED';
const SYNC_APPLY_COMPLETED = 'SYNC_APPLY_COMPLETED';
const SYNC_APPLY_FAILED = 'SYNC_APPLY_FAILED';

var action_types = /*#__PURE__*/Object.freeze({
  GENERATE_AUTH_TOKEN_FAILURE: GENERATE_AUTH_TOKEN_FAILURE,
  GENERATE_AUTH_TOKEN_STARTED: GENERATE_AUTH_TOKEN_STARTED,
  GENERATE_AUTH_TOKEN_SUCCESS: GENERATE_AUTH_TOKEN_SUCCESS,
  FETCH_FEATURED_CONTENT_STARTED: FETCH_FEATURED_CONTENT_STARTED,
  FETCH_FEATURED_CONTENT_COMPLETED: FETCH_FEATURED_CONTENT_COMPLETED,
  FETCH_TRENDING_CONTENT_STARTED: FETCH_TRENDING_CONTENT_STARTED,
  FETCH_TRENDING_CONTENT_COMPLETED: FETCH_TRENDING_CONTENT_COMPLETED,
  RESOLVE_URIS_STARTED: RESOLVE_URIS_STARTED,
  RESOLVE_URIS_COMPLETED: RESOLVE_URIS_COMPLETED,
  FETCH_CHANNEL_CLAIMS_STARTED: FETCH_CHANNEL_CLAIMS_STARTED,
  FETCH_CHANNEL_CLAIMS_COMPLETED: FETCH_CHANNEL_CLAIMS_COMPLETED,
  FETCH_CHANNEL_CLAIM_COUNT_STARTED: FETCH_CHANNEL_CLAIM_COUNT_STARTED,
  FETCH_CHANNEL_CLAIM_COUNT_COMPLETED: FETCH_CHANNEL_CLAIM_COUNT_COMPLETED,
  FETCH_CLAIM_LIST_MINE_STARTED: FETCH_CLAIM_LIST_MINE_STARTED,
  FETCH_CLAIM_LIST_MINE_COMPLETED: FETCH_CLAIM_LIST_MINE_COMPLETED,
  ABANDON_CLAIM_STARTED: ABANDON_CLAIM_STARTED,
  ABANDON_CLAIM_SUCCEEDED: ABANDON_CLAIM_SUCCEEDED,
  FETCH_CHANNEL_LIST_STARTED: FETCH_CHANNEL_LIST_STARTED,
  FETCH_CHANNEL_LIST_COMPLETED: FETCH_CHANNEL_LIST_COMPLETED,
  CREATE_CHANNEL_STARTED: CREATE_CHANNEL_STARTED,
  CREATE_CHANNEL_COMPLETED: CREATE_CHANNEL_COMPLETED,
  PUBLISH_STARTED: PUBLISH_STARTED,
  PUBLISH_COMPLETED: PUBLISH_COMPLETED,
  PUBLISH_FAILED: PUBLISH_FAILED,
  SET_PLAYING_URI: SET_PLAYING_URI,
  SET_CONTENT_POSITION: SET_CONTENT_POSITION,
  SET_CONTENT_LAST_VIEWED: SET_CONTENT_LAST_VIEWED,
  CLEAR_CONTENT_HISTORY_URI: CLEAR_CONTENT_HISTORY_URI,
  CLEAR_CONTENT_HISTORY_ALL: CLEAR_CONTENT_HISTORY_ALL,
  CHANNEL_SUBSCRIBE: CHANNEL_SUBSCRIBE,
  CHANNEL_UNSUBSCRIBE: CHANNEL_UNSUBSCRIBE,
  CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS: CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS,
  CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS: CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS,
  HAS_FETCHED_SUBSCRIPTIONS: HAS_FETCHED_SUBSCRIPTIONS,
  SET_SUBSCRIPTION_LATEST: SET_SUBSCRIPTION_LATEST,
  UPDATE_SUBSCRIPTION_UNREADS: UPDATE_SUBSCRIPTION_UNREADS,
  REMOVE_SUBSCRIPTION_UNREADS: REMOVE_SUBSCRIPTION_UNREADS,
  CHECK_SUBSCRIPTION_STARTED: CHECK_SUBSCRIPTION_STARTED,
  CHECK_SUBSCRIPTION_COMPLETED: CHECK_SUBSCRIPTION_COMPLETED,
  CHECK_SUBSCRIPTIONS_SUBSCRIBE: CHECK_SUBSCRIPTIONS_SUBSCRIBE,
  FETCH_SUBSCRIPTIONS_START: FETCH_SUBSCRIPTIONS_START,
  FETCH_SUBSCRIPTIONS_FAIL: FETCH_SUBSCRIPTIONS_FAIL,
  FETCH_SUBSCRIPTIONS_SUCCESS: FETCH_SUBSCRIPTIONS_SUCCESS,
  SET_VIEW_MODE: SET_VIEW_MODE,
  GET_SUGGESTED_SUBSCRIPTIONS_START: GET_SUGGESTED_SUBSCRIPTIONS_START,
  GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS: GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS,
  GET_SUGGESTED_SUBSCRIPTIONS_FAIL: GET_SUGGESTED_SUBSCRIPTIONS_FAIL,
  SUBSCRIPTION_FIRST_RUN_COMPLETED: SUBSCRIPTION_FIRST_RUN_COMPLETED,
  VIEW_SUGGESTED_SUBSCRIPTIONS: VIEW_SUGGESTED_SUBSCRIPTIONS,
  FETCH_BLACK_LISTED_CONTENT_STARTED: FETCH_BLACK_LISTED_CONTENT_STARTED,
  FETCH_BLACK_LISTED_CONTENT_COMPLETED: FETCH_BLACK_LISTED_CONTENT_COMPLETED,
  FETCH_BLACK_LISTED_CONTENT_FAILED: FETCH_BLACK_LISTED_CONTENT_FAILED,
  BLACK_LISTED_CONTENT_SUBSCRIBE: BLACK_LISTED_CONTENT_SUBSCRIBE,
  FETCH_FILTERED_CONTENT_STARTED: FETCH_FILTERED_CONTENT_STARTED,
  FETCH_FILTERED_CONTENT_COMPLETED: FETCH_FILTERED_CONTENT_COMPLETED,
  FETCH_FILTERED_CONTENT_FAILED: FETCH_FILTERED_CONTENT_FAILED,
  FILTERED_CONTENT_SUBSCRIBE: FILTERED_CONTENT_SUBSCRIBE,
  FETCH_COST_INFO_STARTED: FETCH_COST_INFO_STARTED,
  FETCH_COST_INFO_COMPLETED: FETCH_COST_INFO_COMPLETED,
  FETCH_VIEW_COUNT_STARTED: FETCH_VIEW_COUNT_STARTED,
  FETCH_VIEW_COUNT_FAILED: FETCH_VIEW_COUNT_FAILED,
  FETCH_VIEW_COUNT_COMPLETED: FETCH_VIEW_COUNT_COMPLETED,
  GET_SYNC_STARTED: GET_SYNC_STARTED,
  GET_SYNC_COMPLETED: GET_SYNC_COMPLETED,
  SET_SYNC_STARTED: SET_SYNC_STARTED,
  SET_SYNC_FAILED: SET_SYNC_FAILED,
  SET_SYNC_COMPLETED: SET_SYNC_COMPLETED,
  SET_DEFAULT_ACCOUNT: SET_DEFAULT_ACCOUNT,
  SYNC_APPLY_STARTED: SYNC_APPLY_STARTED,
  SYNC_APPLY_COMPLETED: SYNC_APPLY_COMPLETED,
  SYNC_APPLY_FAILED: SYNC_APPLY_FAILED
});

const Lbryio = {
  enabled: true,
  authenticationPromise: null,
  exchangePromise: null,
  exchangeLastFetched: null,
  CONNECTION_STRING: 'https://api.lbry.com/'
};
const EXCHANGE_RATE_TIMEOUT = 20 * 60 * 1000; // We can't use env's because they aren't passed into node_modules

Lbryio.setLocalApi = endpoint => {
  Lbryio.CONNECTION_STRING = endpoint.replace(/\/*$/, '/'); // exactly one slash at the end;
};

Lbryio.call = (resource, action, params = {}, method = 'get') => {
  if (!Lbryio.enabled) {
    return Promise.reject(new Error(__('LBRY internal API is disabled')));
  }

  if (!(method === 'get' || method === 'post')) {
    return Promise.reject(new Error(__('Invalid method')));
  }

  function checkAndParse(response) {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }

    return response.json().then(json => {
      let error;

      if (json.error) {
        error = new Error(json.error);
      } else {
        error = new Error('Unknown API error signature');
      }

      error.response = response; // This is primarily a hack used in actions/user.js

      return Promise.reject(error);
    });
  }

  function makeRequest(url, options) {
    return fetch(url, options).then(checkAndParse);
  }

  return Lbryio.getAuthToken().then(token => {
    const fullParams = {
      auth_token: token,
      ...params
    };
    const qs = querystring.stringify(fullParams);
    let url = `${Lbryio.CONNECTION_STRING}${resource}/${action}?${qs}`;
    let options = {
      method: 'GET'
    };

    if (method === 'post') {
      options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: qs
      };
      url = `${Lbryio.CONNECTION_STRING}${resource}/${action}`;
    }

    return makeRequest(url, options).then(response => response.data);
  });
};

Lbryio.authToken = null;

Lbryio.getAuthToken = () => new Promise(resolve => {
  if (Lbryio.authToken) {
    resolve(Lbryio.authToken);
  } else if (Lbryio.overrides.getAuthToken) {
    Lbryio.overrides.getAuthToken().then(token => {
      resolve(token);
    });
  } else {
    const {
      store
    } = window;

    if (store) {
      const state = store.getState();
      const token = state.auth ? state.auth.authToken : null;
      Lbryio.authToken = token;
      resolve(token);
    }

    resolve(null);
  }
});

Lbryio.getCurrentUser = () => Lbryio.call('user', 'me');

Lbryio.authenticate = () => {
  if (!Lbryio.enabled) {
    return new Promise(resolve => {
      resolve({
        id: 1,
        language: 'en',
        primary_email: 'disabled@lbry.io',
        has_verified_email: true,
        is_identity_verified: true,
        is_reward_approved: false
      });
    });
  }

  if (Lbryio.authenticationPromise === null) {
    Lbryio.authenticationPromise = new Promise((resolve, reject) => {
      Lbryio.getAuthToken().then(token => {
        if (!token || token.length > 60) {
          return false;
        } // check that token works


        return Lbryio.getCurrentUser().then(user => user).catch(() => false);
      }).then(user => {
        if (user) {
          return user;
        }

        return lbryRedux.Lbry.status().then(status => {
          if (Lbryio.overrides.setAuthToken) {
            return Lbryio.overrides.setAuthToken(status);
          } // simply call the logic to create a new user, and obtain the auth token


          return new Promise((res, rej) => {
            Lbryio.call('user', 'new', {
              auth_token: '',
              language: 'en',
              app_id: status.installation_id
            }, 'post').then(response => {
              if (!response.auth_token) {
                throw new Error('auth_token was not set in the response');
              }

              const {
                store
              } = window;

              if (store) {
                store.dispatch({
                  type: GENERATE_AUTH_TOKEN_SUCCESS,
                  data: {
                    authToken: response.auth_token
                  }
                });
              }

              Lbryio.authToken = response.auth_token;
              res(response);
            }).catch(error => rej(error));
          });
        });
      }).then(user => {
        if (!user) {
          return Lbryio.getCurrentUser();
        }

        return user;
      }).then(resolve, reject);
    });
  }

  return Lbryio.authenticationPromise;
};

Lbryio.getStripeToken = () => Lbryio.CONNECTION_STRING.startsWith('http://localhost:') ? 'pk_test_NoL1JWL7i1ipfhVId5KfDZgo' : 'pk_live_e8M4dRNnCCbmpZzduEUZBgJO';

Lbryio.getExchangeRates = () => {
  if (!Lbryio.exchangeLastFetched || Date.now() - Lbryio.exchangeLastFetched > EXCHANGE_RATE_TIMEOUT) {
    Lbryio.exchangePromise = new Promise((resolve, reject) => {
      Lbryio.call('lbc', 'exchange_rate', {}, 'get', true).then(({
        lbc_usd: LBC_USD,
        lbc_btc: LBC_BTC,
        btc_usd: BTC_USD
      }) => {
        const rates = {
          LBC_USD,
          LBC_BTC,
          BTC_USD
        };
        resolve(rates);
      }).catch(reject);
    });
    Lbryio.exchangeLastFetched = Date.now();
  }

  return Lbryio.exchangePromise;
}; // Allow overriding lbryio methods
// The desktop app will need to use it for getAuthToken because we use electron's ipcRenderer


Lbryio.overrides = {};

Lbryio.setOverride = (methodName, newMethod) => {
  Lbryio.overrides[methodName] = newMethod;
};

const rewards = {};
rewards.TYPE_NEW_DEVELOPER = 'new_developer';
rewards.TYPE_NEW_USER = 'new_user';
rewards.TYPE_CONFIRM_EMAIL = 'verified_email';
rewards.TYPE_FIRST_CHANNEL = 'new_channel';
rewards.TYPE_FIRST_STREAM = 'first_stream';
rewards.TYPE_MANY_DOWNLOADS = 'many_downloads';
rewards.TYPE_FIRST_PUBLISH = 'first_publish';
rewards.TYPE_FEATURED_DOWNLOAD = 'featured_download';
rewards.TYPE_REFERRAL = 'referral';
rewards.TYPE_REWARD_CODE = 'reward_code';
rewards.TYPE_SUBSCRIPTION = 'subscription';
rewards.YOUTUBE_CREATOR = 'youtube_creator';
rewards.TYPE_DAILY_VIEW = 'daily_view';

rewards.claimReward = (type, rewardParams) => {
  function requestReward(resolve, reject, params) {
    if (!Lbryio.enabled) {
      reject(new Error(__('Rewards are not enabled.')));
      return;
    }

    Lbryio.call('reward', 'new', params, 'post').then(reward => {
      const message = reward.reward_notification || `You have claimed a ${reward.reward_amount} LBC reward.`; // Display global notice

      const action = lbryRedux.doToast({
        message,
        linkText: __('Show All'),
        linkTarget: '/rewards'
      });
      window.store.dispatch(action);

      if (rewards.callbacks.claimRewardSuccess) {
        rewards.callbacks.claimRewardSuccess();
      }

      resolve(reward);
    }, reject);
  }

  return new Promise((resolve, reject) => {
    lbryRedux.Lbry.address_unused().then(address => {
      const params = {
        reward_type: type,
        wallet_address: address,
        ...rewardParams
      };

      switch (type) {
        case rewards.TYPE_FIRST_CHANNEL:
          lbryRedux.Lbry.claim_list().then(claims => {
            const claim = claims.find(foundClaim => foundClaim.name.length && foundClaim.name[0] === '@' && foundClaim.txid.length && foundClaim.type === 'claim');

            if (claim) {
              params.transaction_id = claim.txid;
              requestReward(resolve, reject, params);
            } else {
              reject(new Error(__('Please create a channel identity first.')));
            }
          }).catch(reject);
          break;

        case rewards.TYPE_FIRST_PUBLISH:
          lbryRedux.Lbry.claim_list().then(claims => {
            const claim = claims.find(foundClaim => foundClaim.name.length && foundClaim.name[0] !== '@' && foundClaim.txid.length && foundClaim.type === 'claim');

            if (claim) {
              params.transaction_id = claim.txid;
              requestReward(resolve, reject, params);
            } else {
              reject(claims.length ? new Error(__('Please publish something and wait for confirmation by the network to claim this reward.')) : new Error(__('Please publish something to claim this reward.')));
            }
          }).catch(reject);
          break;

        case rewards.TYPE_FIRST_STREAM:
        case rewards.TYPE_NEW_USER:
        default:
          requestReward(resolve, reject, params);
      }
    });
  });
};

rewards.callbacks = {
  // Set any callbacks that require code not found in this project
  claimRewardSuccess: null,
  claimFirstRewardSuccess: null,
  rewardApprovalRequired: null
};

rewards.setCallback = (name, method) => {
  rewards.callbacks[name] = method;
};

const VIEW_ALL = 'view_all';

const DOWNLOADING = 'DOWNLOADING';
const NOTIFY_ONLY = 'NOTIFY_ONLY;'; // Suggested types
const SUGGESTED_TOP_SUBSCRIBED = 'top_subscribed';
const SUGGESTED_FEATURED = 'featured';

// util for creating reducers
// based off of redux-actions
// https://redux-actions.js.org/docs/api/handleAction.html#handleactions
// eslint-disable-next-line import/prefer-default-export
const handleActions = (actionMap, defaultState) => (state = defaultState, action) => {
  const handler = actionMap[action.type];

  if (handler) {
    const newState = handler(state, action);
    return Object.assign({}, state, newState);
  } // just return the original state if no handler
  // returning a copy here breaks redux-persist


  return state;
};

//      
const defaultState = {
  enabledChannelNotifications: [],
  subscriptions: [],
  unread: {},
  suggested: {},
  loading: false,
  viewMode: VIEW_ALL,
  loadingSuggested: false,
  firstRunCompleted: false,
  showSuggestedSubs: false
};
var subscriptions = handleActions({
  [CHANNEL_SUBSCRIBE]: (state, action) => {
    const newSubscription = action.data;
    const newSubscriptions = state.subscriptions.slice();
    newSubscriptions.unshift(newSubscription);
    return { ...state,
      subscriptions: newSubscriptions
    };
  },
  [CHANNEL_UNSUBSCRIBE]: (state, action) => {
    const subscriptionToRemove = action.data;
    const newSubscriptions = state.subscriptions.slice().filter(subscription => subscription.channelName !== subscriptionToRemove.channelName); // Check if we need to remove it from the 'unread' state

    const {
      unread
    } = state;

    if (unread[subscriptionToRemove.uri]) {
      delete unread[subscriptionToRemove.uri];
    }

    return { ...state,
      unread: { ...unread
      },
      subscriptions: newSubscriptions
    };
  },
  [SET_SUBSCRIPTION_LATEST]: (state, action) => ({ ...state,
    subscriptions: state.subscriptions.map(subscription => subscription.channelName === action.data.subscription.channelName ? { ...subscription,
      latest: action.data.uri
    } : subscription)
  }),
  [UPDATE_SUBSCRIPTION_UNREADS]: (state, action) => {
    const {
      channel,
      uris,
      type
    } = action.data;
    return { ...state,
      unread: { ...state.unread,
        [channel]: {
          uris,
          type
        }
      }
    };
  },
  [REMOVE_SUBSCRIPTION_UNREADS]: (state, action) => {
    const {
      channel,
      uris
    } = action.data; // If no channel is passed in, remove all unreads

    let newUnread;

    if (channel) {
      newUnread = { ...state.unread
      };

      if (!uris) {
        delete newUnread[channel];
      } else {
        newUnread[channel].uris = uris;
      }
    } else {
      newUnread = {};
    }

    return { ...state,
      unread: { ...newUnread
      }
    };
  },
  [CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS]: (state, action) => {
    const channelName = action.data;
    const newEnabledChannelNotifications = state.enabledChannelNotifications.slice();

    if (channelName && channelName.trim().length > 0 && newEnabledChannelNotifications.indexOf(channelName) === -1) {
      newEnabledChannelNotifications.push(channelName);
    }

    return { ...state,
      enabledChannelNotifications: newEnabledChannelNotifications
    };
  },
  [CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS]: (state, action) => {
    const channelName = action.data;
    const newEnabledChannelNotifications = state.enabledChannelNotifications.slice();
    const index = newEnabledChannelNotifications.indexOf(channelName);

    if (index > -1) {
      newEnabledChannelNotifications.splice(index, 1);
    }

    return { ...state,
      enabledChannelNotifications: newEnabledChannelNotifications
    };
  },
  [FETCH_SUBSCRIPTIONS_START]: state => ({ ...state,
    loading: true
  }),
  [FETCH_SUBSCRIPTIONS_FAIL]: state => ({ ...state,
    loading: false
  }),
  [FETCH_SUBSCRIPTIONS_SUCCESS]: (state, action) => ({ ...state,
    loading: false,
    subscriptions: action.data
  }),
  [SET_VIEW_MODE]: (state, action) => ({ ...state,
    viewMode: action.data
  }),
  [GET_SUGGESTED_SUBSCRIPTIONS_START]: state => ({ ...state,
    loadingSuggested: true
  }),
  [GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS]: (state, action) => ({ ...state,
    suggested: action.data,
    loadingSuggested: false
  }),
  [GET_SUGGESTED_SUBSCRIPTIONS_FAIL]: state => ({ ...state,
    loadingSuggested: false
  }),
  [SUBSCRIPTION_FIRST_RUN_COMPLETED]: state => ({ ...state,
    firstRunCompleted: true
  }),
  [VIEW_SUGGESTED_SUBSCRIPTIONS]: state => ({ ...state,
    showSuggestedSubs: true
  })
}, defaultState);

function doGenerateAuthToken(installationId) {
  return dispatch => {
    dispatch({
      type: GENERATE_AUTH_TOKEN_STARTED
    });
    Lbryio.call('user', 'new', {
      auth_token: '',
      language: 'en',
      app_id: installationId
    }, 'post').then(response => {
      if (!response.auth_token) {
        dispatch({
          type: GENERATE_AUTH_TOKEN_FAILURE
        });
      } else {
        dispatch({
          type: GENERATE_AUTH_TOKEN_SUCCESS,
          data: {
            authToken: response.auth_token
          }
        });
      }
    }).catch(() => {
      dispatch({
        type: GENERATE_AUTH_TOKEN_FAILURE
      });
    });
  };
}

const selectState = state => state.rewards || {};

const selectUnclaimedRewardsByType = reselect.createSelector(selectState, state => state.unclaimedRewardsByType);
const selectClaimedRewardsById = reselect.createSelector(selectState, state => state.claimedRewardsById);
const selectClaimedRewards = reselect.createSelector(selectClaimedRewardsById, byId => Object.values(byId) || []);
const selectClaimedRewardsByTransactionId = reselect.createSelector(selectClaimedRewards, rewards => rewards.reduce((mapParam, reward) => {
  const map = mapParam;
  map[reward.transaction_id] = reward;
  return map;
}, {}));
const selectUnclaimedRewards = reselect.createSelector(selectState, state => state.unclaimedRewards);
const selectFetchingRewards = reselect.createSelector(selectState, state => !!state.fetching);
const selectUnclaimedRewardValue = reselect.createSelector(selectUnclaimedRewards, rewards => rewards.reduce((sum, reward) => sum + reward.reward_amount, 0));
const selectClaimsPendingByType = reselect.createSelector(selectState, state => state.claimPendingByType);

const selectIsClaimRewardPending = (state, props) => selectClaimsPendingByType(state, props)[props.reward_type];

const makeSelectIsRewardClaimPending = () => reselect.createSelector(selectIsClaimRewardPending, isClaiming => isClaiming);
const selectClaimErrorsByType = reselect.createSelector(selectState, state => state.claimErrorsByType);

const selectClaimRewardError = (state, props) => selectClaimErrorsByType(state, props)[props.reward_type];

const makeSelectClaimRewardError = () => reselect.createSelector(selectClaimRewardError, errorMessage => errorMessage);

const selectRewardByType = (state, rewardType) => selectUnclaimedRewards(state).find(reward => reward.reward_type === rewardType);

const makeSelectRewardByType = () => reselect.createSelector(selectRewardByType, reward => reward);
const makeSelectRewardAmountByType = () => reselect.createSelector(selectRewardByType, reward => reward ? reward.reward_amount : 0);
const selectRewardContentClaimIds = reselect.createSelector(selectState, state => state.rewardedContentClaimIds);
const selectReferralReward = reselect.createSelector(selectUnclaimedRewards, unclaimedRewards => unclaimedRewards.filter(reward => reward.reward_type === rewards.TYPE_REFERRAL)[0]);

const selectState$1 = state => state.user || {};
const selectAuthenticationIsPending = reselect.createSelector(selectState$1, state => state.authenticationIsPending);
const selectUserIsPending = reselect.createSelector(selectState$1, state => state.userIsPending);
const selectUser = reselect.createSelector(selectState$1, state => state.user);
const selectUserEmail = reselect.createSelector(selectUser, user => user ? user.primary_email : null);
const selectUserPhone = reselect.createSelector(selectUser, user => user ? user.phone_number : null);
const selectUserCountryCode = reselect.createSelector(selectUser, user => user ? user.country_code : null);
const selectEmailToVerify = reselect.createSelector(selectState$1, selectUserEmail, (state, userEmail) => state.emailToVerify || userEmail);
const selectPhoneToVerify = reselect.createSelector(selectState$1, selectUserPhone, (state, userPhone) => state.phoneToVerify || userPhone);
const selectUserIsRewardApproved = reselect.createSelector(selectUser, user => user && user.is_reward_approved);
const selectEmailNewIsPending = reselect.createSelector(selectState$1, state => state.emailNewIsPending);
const selectEmailNewErrorMessage = reselect.createSelector(selectState$1, state => state.emailNewErrorMessage);
const selectPhoneNewErrorMessage = reselect.createSelector(selectState$1, state => state.phoneNewErrorMessage);
const selectEmailVerifyIsPending = reselect.createSelector(selectState$1, state => state.emailVerifyIsPending);
const selectEmailVerifyErrorMessage = reselect.createSelector(selectState$1, state => state.emailVerifyErrorMessage);
const selectPhoneNewIsPending = reselect.createSelector(selectState$1, state => state.phoneNewIsPending);
const selectPhoneVerifyIsPending = reselect.createSelector(selectState$1, state => state.phoneVerifyIsPending);
const selectPhoneVerifyErrorMessage = reselect.createSelector(selectState$1, state => state.phoneVerifyErrorMessage);
const selectIdentityVerifyIsPending = reselect.createSelector(selectState$1, state => state.identityVerifyIsPending);
const selectIdentityVerifyErrorMessage = reselect.createSelector(selectState$1, state => state.identityVerifyErrorMessage);
const selectUserIsVerificationCandidate = reselect.createSelector(selectUser, user => user && (!user.has_verified_email || !user.is_identity_verified));
const selectAccessToken = reselect.createSelector(selectState$1, state => state.accessToken);
const selectUserInviteStatusIsPending = reselect.createSelector(selectState$1, state => state.inviteStatusIsPending);
const selectUserInvitesRemaining = reselect.createSelector(selectState$1, state => state.invitesRemaining);
const selectUserInvitees = reselect.createSelector(selectState$1, state => state.invitees);
const selectUserInviteStatusFailed = reselect.createSelector(selectUserInvitesRemaining, () => selectUserInvitesRemaining === null);
const selectUserInviteNewIsPending = reselect.createSelector(selectState$1, state => state.inviteNewIsPending);
const selectUserInviteNewErrorMessage = reselect.createSelector(selectState$1, state => state.inviteNewErrorMessage);
const selectUserInviteReferralLink = reselect.createSelector(selectState$1, state => state.referralLink);

function doFetchInviteStatus() {
  return dispatch => {
    dispatch({
      type: lbryRedux.ACTIONS.USER_INVITE_STATUS_FETCH_STARTED
    });
    Promise.all([Lbryio.call('user', 'invite_status'), Lbryio.call('user_referral_code', 'list')]).then(([status, code]) => {
      dispatch(doRewardList());
      dispatch({
        type: lbryRedux.ACTIONS.USER_INVITE_STATUS_FETCH_SUCCESS,
        data: {
          invitesRemaining: status.invites_remaining ? status.invites_remaining : 0,
          invitees: status.invitees,
          referralLink: `${Lbryio.CONNECTION_STRING}user/refer?r=${code}`
        }
      });
    }).catch(error => {
      dispatch({
        type: lbryRedux.ACTIONS.USER_INVITE_STATUS_FETCH_FAILURE,
        data: {
          error
        }
      });
    });
  };
}
function doInstallNew(appVersion, os = null) {
  const payload = {
    app_version: appVersion
  };
  lbryRedux.Lbry.status().then(status => {
    payload.app_id = status.installation_id;
    payload.node_id = status.lbry_id;
    lbryRedux.Lbry.version().then(version => {
      payload.daemon_version = version.lbrynet_version;
      payload.operating_system = os || version.os_system;
      payload.platform = version.platform;
      Lbryio.call('install', 'new', payload);
    });
  });
} // TODO: Call doInstallNew separately so we don't have to pass appVersion and os_system params?

function doAuthenticate(appVersion, os = null) {
  return dispatch => {
    dispatch({
      type: lbryRedux.ACTIONS.AUTHENTICATION_STARTED
    });
    Lbryio.authenticate().then(user => {
      // analytics.setUser(user);
      dispatch({
        type: lbryRedux.ACTIONS.AUTHENTICATION_SUCCESS,
        data: {
          user
        }
      });
      dispatch(doRewardList());
      dispatch(doFetchInviteStatus());
      doInstallNew(appVersion, os);
    }).catch(error => {
      dispatch({
        type: lbryRedux.ACTIONS.AUTHENTICATION_FAILURE,
        data: {
          error
        }
      });
    });
  };
}
function doUserFetch() {
  return dispatch => {
    dispatch({
      type: lbryRedux.ACTIONS.USER_FETCH_STARTED
    });
    Lbryio.getCurrentUser().then(user => {
      // analytics.setUser(user);
      dispatch(doRewardList());
      dispatch({
        type: lbryRedux.ACTIONS.USER_FETCH_SUCCESS,
        data: {
          user
        }
      });
    }).catch(error => {
      dispatch({
        type: lbryRedux.ACTIONS.USER_FETCH_FAILURE,
        data: {
          error
        }
      });
    });
  };
}
function doUserCheckEmailVerified() {
  // This will happen in the background so we don't need loading booleans
  return dispatch => {
    Lbryio.getCurrentUser().then(user => {
      if (user.has_verified_email) {
        dispatch(doRewardList());
        dispatch({
          type: lbryRedux.ACTIONS.USER_FETCH_SUCCESS,
          data: {
            user
          }
        });
      }
    });
  };
}
function doUserPhoneReset() {
  return {
    type: lbryRedux.ACTIONS.USER_PHONE_RESET
  };
}
function doUserPhoneNew(phone, countryCode) {
  return dispatch => {
    dispatch({
      type: lbryRedux.ACTIONS.USER_PHONE_NEW_STARTED,
      data: {
        phone,
        country_code: countryCode
      }
    });

    const success = () => {
      dispatch({
        type: lbryRedux.ACTIONS.USER_PHONE_NEW_SUCCESS,
        data: {
          phone
        }
      });
    };

    const failure = error => {
      dispatch({
        type: lbryRedux.ACTIONS.USER_PHONE_NEW_FAILURE,
        data: {
          error
        }
      });
    };

    Lbryio.call('user', 'phone_number_new', {
      phone_number: phone,
      country_code: countryCode
    }, 'post').then(success, failure);
  };
}
function doUserPhoneVerifyFailure(error) {
  return {
    type: lbryRedux.ACTIONS.USER_PHONE_VERIFY_FAILURE,
    data: {
      error
    }
  };
}
function doUserPhoneVerify(verificationCode) {
  return (dispatch, getState) => {
    const phoneNumber = selectPhoneToVerify(getState());
    const countryCode = selectUserCountryCode(getState());
    dispatch({
      type: lbryRedux.ACTIONS.USER_PHONE_VERIFY_STARTED,
      code: verificationCode
    });
    Lbryio.call('user', 'phone_number_confirm', {
      verification_code: verificationCode,
      phone_number: phoneNumber,
      country_code: countryCode
    }, 'post').then(user => {
      if (user.is_identity_verified) {
        dispatch({
          type: lbryRedux.ACTIONS.USER_PHONE_VERIFY_SUCCESS,
          data: {
            user
          }
        });
        dispatch(doClaimRewardType(rewards.TYPE_NEW_USER));
      }
    }).catch(error => dispatch(doUserPhoneVerifyFailure(error)));
  };
}
function doUserEmailToVerify(email) {
  return dispatch => {
    dispatch({
      type: lbryRedux.ACTIONS.USER_EMAIL_VERIFY_SET,
      data: {
        email
      }
    });
  };
}
function doUserEmailNew(email) {
  return dispatch => {
    dispatch({
      type: lbryRedux.ACTIONS.USER_EMAIL_NEW_STARTED,
      email
    });

    const success = () => {
      dispatch({
        type: lbryRedux.ACTIONS.USER_EMAIL_NEW_SUCCESS,
        data: {
          email
        }
      });
      dispatch(doUserFetch());
    };

    const failure = error => {
      dispatch({
        type: lbryRedux.ACTIONS.USER_EMAIL_NEW_FAILURE,
        data: {
          error
        }
      });
    };

    Lbryio.call('user_email', 'new', {
      email,
      send_verification_email: true
    }, 'post').catch(error => {
      if (error.response && error.response.status === 409) {
        return Lbryio.call('user_email', 'resend_token', {
          email,
          only_if_expired: true
        }, 'post').then(success, failure);
      }

      throw error;
    }).then(success, failure);
  };
}
function doUserResendVerificationEmail(email) {
  return dispatch => {
    dispatch({
      type: lbryRedux.ACTIONS.USER_EMAIL_VERIFY_RETRY,
      email
    });

    const success = () => {
      dispatch({
        type: lbryRedux.ACTIONS.USER_EMAIL_NEW_SUCCESS,
        data: {
          email
        }
      });
      dispatch(doUserFetch());
    };

    const failure = error => {
      dispatch({
        type: lbryRedux.ACTIONS.USER_EMAIL_NEW_FAILURE,
        data: {
          error
        }
      });
    };

    Lbryio.call('user_email', 'resend_token', {
      email
    }, 'post').catch(error => {
      if (error.response && error.response.status === 409) {
        throw error;
      }
    }).then(success, failure);
  };
}
function doUserEmailVerifyFailure(error) {
  return {
    type: lbryRedux.ACTIONS.USER_EMAIL_VERIFY_FAILURE,
    data: {
      error
    }
  };
}
function doUserEmailVerify(verificationToken, recaptcha) {
  return (dispatch, getState) => {
    const email = selectEmailToVerify(getState());
    dispatch({
      type: lbryRedux.ACTIONS.USER_EMAIL_VERIFY_STARTED,
      code: verificationToken,
      recaptcha
    });
    Lbryio.call('user_email', 'confirm', {
      verification_token: verificationToken,
      email,
      recaptcha
    }, 'post').then(userEmail => {
      if (userEmail.is_verified) {
        dispatch({
          type: lbryRedux.ACTIONS.USER_EMAIL_VERIFY_SUCCESS,
          data: {
            email
          }
        });
        dispatch(doUserFetch());
      } else {
        throw new Error('Your email is still not verified.'); // shouldn't happen
      }
    }).catch(error => dispatch(doUserEmailVerifyFailure(error)));
  };
}
function doFetchAccessToken() {
  return dispatch => {
    const success = token => dispatch({
      type: lbryRedux.ACTIONS.FETCH_ACCESS_TOKEN_SUCCESS,
      data: {
        token
      }
    });

    Lbryio.getAuthToken().then(success);
  };
}
function doUserIdentityVerify(stripeToken) {
  return dispatch => {
    dispatch({
      type: lbryRedux.ACTIONS.USER_IDENTITY_VERIFY_STARTED,
      token: stripeToken
    });
    Lbryio.call('user', 'verify_identity', {
      stripe_token: stripeToken
    }, 'post').then(user => {
      if (user.is_identity_verified) {
        dispatch({
          type: lbryRedux.ACTIONS.USER_IDENTITY_VERIFY_SUCCESS,
          data: {
            user
          }
        });
        dispatch(doClaimRewardType(rewards.TYPE_NEW_USER));
      } else {
        throw new Error('Your identity is still not verified. This should not happen.'); // shouldn't happen
      }
    }).catch(error => {
      dispatch({
        type: lbryRedux.ACTIONS.USER_IDENTITY_VERIFY_FAILURE,
        data: {
          error: error.toString()
        }
      });
    });
  };
}
function doUserInviteNew(email) {
  return dispatch => {
    dispatch({
      type: lbryRedux.ACTIONS.USER_INVITE_NEW_STARTED
    });
    Lbryio.call('user', 'invite', {
      email
    }, 'post').then(() => {
      dispatch({
        type: lbryRedux.ACTIONS.USER_INVITE_NEW_SUCCESS,
        data: {
          email
        }
      });
      dispatch(lbryRedux.doToast({
        message: __('Invite sent to %s', email)
      }));
      dispatch(doFetchInviteStatus());
    }).catch(error => {
      dispatch({
        type: lbryRedux.ACTIONS.USER_INVITE_NEW_FAILURE,
        data: {
          error
        }
      });
    });
  };
}

function doRewardList() {
  return dispatch => {
    dispatch({
      type: lbryRedux.ACTIONS.FETCH_REWARDS_STARTED
    });
    Lbryio.call('reward', 'list', {
      multiple_rewards_per_type: true
    }).then(userRewards => {
      dispatch({
        type: lbryRedux.ACTIONS.FETCH_REWARDS_COMPLETED,
        data: {
          userRewards
        }
      });
    }).catch(() => {
      dispatch({
        type: lbryRedux.ACTIONS.FETCH_REWARDS_COMPLETED,
        data: {
          userRewards: []
        }
      });
    });
  };
}
function doClaimRewardType(rewardType, options = {}) {
  return (dispatch, getState) => {
    const state = getState();
    const userIsRewardApproved = selectUserIsRewardApproved(state);
    const unclaimedRewards = selectUnclaimedRewards(state);
    const reward = rewardType === rewards.TYPE_REWARD_CODE ? {
      reward_type: rewards.TYPE_REWARD_CODE
    } : unclaimedRewards.find(ur => ur.reward_type === rewardType);

    if (rewardType !== rewards.TYPE_REWARD_CODE) {
      if (!reward || reward.transaction_id) {
        // already claimed or doesn't exist, do nothing
        return;
      }
    }

    if (!userIsRewardApproved && rewardType !== rewards.TYPE_CONFIRM_EMAIL) {
      if (!options || !options.failSilently && rewards.callbacks.rewardApprovalRequested) {
        rewards.callbacks.rewardApprovalRequested();
      }

      return;
    } // Set `claim_code` so the api knows which reward to give if there are multiple of the same type


    const params = options.params || {};
    params.claim_code = reward.claim_code;
    dispatch({
      type: lbryRedux.ACTIONS.CLAIM_REWARD_STARTED,
      data: {
        reward
      }
    });

    const success = successReward => {
      dispatch({
        type: lbryRedux.ACTIONS.CLAIM_REWARD_SUCCESS,
        data: {
          reward: successReward
        }
      });

      if (successReward.reward_type === rewards.TYPE_NEW_USER && rewards.callbacks.claimFirstRewardSuccess) {
        rewards.callbacks.claimFirstRewardSuccess();
      } else if (successReward.reward_type === rewards.TYPE_REFERRAL) {
        dispatch(doFetchInviteStatus());
      }

      dispatch(doRewardList());
    };

    const failure = error => {
      dispatch({
        type: lbryRedux.ACTIONS.CLAIM_REWARD_FAILURE,
        data: {
          reward,
          error: !options || !options.failSilently ? error : undefined
        }
      });

      if (options.notifyError) {
        dispatch(lbryRedux.doToast({
          message: error.message,
          isError: true
        }));
      }
    };

    rewards.claimReward(rewardType, params).then(success, failure);
  };
}
function doClaimEligiblePurchaseRewards() {
  return (dispatch, getState) => {
    const state = getState();
    const unclaimedRewards = selectUnclaimedRewards(state);
    const userIsRewardApproved = selectUserIsRewardApproved(state);

    if (!userIsRewardApproved || !Lbryio.enabled) {
      return;
    }

    if (unclaimedRewards.find(ur => ur.reward_type === rewards.TYPE_FIRST_STREAM)) {
      dispatch(doClaimRewardType(rewards.TYPE_FIRST_STREAM));
    } else {
      [rewards.TYPE_MANY_DOWNLOADS, rewards.TYPE_FEATURED_DOWNLOAD, rewards.TYPE_DAILY_VIEW].forEach(type => {
        dispatch(doClaimRewardType(type, {
          failSilently: true
        }));
      });
    }
  };
}
function doClaimRewardClearError(reward) {
  return dispatch => {
    dispatch({
      type: lbryRedux.ACTIONS.CLAIM_REWARD_CLEAR_ERROR,
      data: {
        reward
      }
    });
  };
}
function doFetchRewardedContent() {
  return dispatch => {
    const success = nameToClaimId => {
      dispatch({
        type: lbryRedux.ACTIONS.FETCH_REWARD_CONTENT_COMPLETED,
        data: {
          claimIds: Object.values(nameToClaimId),
          success: true
        }
      });
    };

    const failure = () => {
      dispatch({
        type: lbryRedux.ACTIONS.FETCH_REWARD_CONTENT_COMPLETED,
        data: {
          claimIds: [],
          success: false
        }
      });
    };

    Lbryio.call('reward', 'list_featured').then(success, failure);
  };
}

const PAGE_SIZE = 20;

function swapKeyAndValue(dict) {
  const ret = {}; // eslint-disable-next-line no-restricted-syntax

  for (const key in dict) {
    if (dict.hasOwnProperty(key)) {
      ret[dict[key]] = key;
    }
  }

  return ret;
}

const selectState$2 = state => state.subscriptions || {}; // Returns the list of channel uris a user is subscribed to


const selectSubscriptions = reselect.createSelector(selectState$2, state => state.subscriptions); // Fetching list of users subscriptions

const selectIsFetchingSubscriptions = reselect.createSelector(selectState$2, state => state.loading); // The current view mode on the subscriptions page

const selectViewMode = reselect.createSelector(selectState$2, state => state.viewMode); // Suggested subscriptions from internal apis

const selectSuggested = reselect.createSelector(selectState$2, state => state.suggested);
const selectIsFetchingSuggested = reselect.createSelector(selectState$2, state => state.loadingSuggested);
const selectSuggestedChannels = reselect.createSelector(selectSubscriptions, selectSuggested, (userSubscriptions, suggested) => {
  if (!suggested) {
    return null;
  } // Swap the key/value because we will use the uri for everything, this just makes it easier
  // suggested is returned from the api with the form:
  // {
  //   featured: { "Channel label": uri, ... },
  //   top_subscribed: { "@channel": uri, ... }
  //   top_bid: { "@channel": uri, ... }
  // }
  // To properly compare the suggested subscriptions from our current subscribed channels
  // We only care about the uri, not the label
  // We also only care about top_subscribed and featured
  // top_bid could just be porn or a channel with no content


  const topSubscribedSuggestions = swapKeyAndValue(suggested[SUGGESTED_TOP_SUBSCRIBED]);
  const featuredSuggestions = swapKeyAndValue(suggested[SUGGESTED_FEATURED]); // Make sure there are no duplicates
  // If a uri isn't already in the suggested object, add it

  const suggestedChannels = { ...topSubscribedSuggestions
  };
  Object.keys(featuredSuggestions).forEach(uri => {
    if (!suggestedChannels[uri]) {
      const channelLabel = featuredSuggestions[uri];
      suggestedChannels[uri] = channelLabel;
    }
  });
  userSubscriptions.forEach(({
    uri
  }) => {
    // Note to passer bys:
    // Maybe we should just remove the `lbry://` prefix from subscription uris
    // Most places don't store them like that
    const subscribedUri = uri.slice('lbry://'.length);

    if (suggestedChannels[subscribedUri]) {
      delete suggestedChannels[subscribedUri];
    }
  });
  return Object.keys(suggestedChannels).map(uri => ({
    uri,
    label: suggestedChannels[uri]
  })).slice(0, 5);
});
const selectFirstRunCompleted = reselect.createSelector(selectState$2, state => state.firstRunCompleted);
const selectShowSuggestedSubs = reselect.createSelector(selectState$2, state => state.showSuggestedSubs); // Fetching any claims that are a part of a users subscriptions

const selectSubscriptionsBeingFetched = reselect.createSelector(selectSubscriptions, lbryRedux.selectAllFetchingChannelClaims, (subscriptions, fetchingChannelClaims) => {
  const fetchingSubscriptionMap = {};
  subscriptions.forEach(sub => {
    const isFetching = fetchingChannelClaims && fetchingChannelClaims[sub.uri];

    if (isFetching) {
      fetchingSubscriptionMap[sub.uri] = true;
    }
  });
  return fetchingSubscriptionMap;
});
const selectUnreadByChannel = reselect.createSelector(selectState$2, state => state.unread); // Returns the current total of unread subscriptions

const selectUnreadAmount = reselect.createSelector(selectUnreadByChannel, unreadByChannel => {
  const unreadChannels = Object.keys(unreadByChannel);
  let badges = 0;

  if (!unreadChannels.length) {
    return badges;
  }

  unreadChannels.forEach(channel => {
    badges += unreadByChannel[channel].uris.length;
  });
  return badges;
}); // Returns the uris with channels as an array with the channel with the newest content first
// If you just want the `unread` state, use selectUnread

const selectUnreadSubscriptions = reselect.createSelector(selectUnreadAmount, selectUnreadByChannel, lbryRedux.selectClaimsByUri, (unreadAmount, unreadByChannel, claimsByUri) => {
  // determine which channel has the newest content
  const unreadList = [];

  if (!unreadAmount) {
    return unreadList;
  }

  const channelUriList = Object.keys(unreadByChannel); // There is only one channel with unread notifications

  if (unreadAmount === 1) {
    channelUriList.forEach(channel => {
      const unreadChannel = {
        channel,
        uris: unreadByChannel[channel].uris
      };
      unreadList.push(unreadChannel);
    });
    return unreadList;
  }

  channelUriList.sort((channel1, channel2) => {
    const latestUriFromChannel1 = unreadByChannel[channel1].uris[0];
    const latestClaimFromChannel1 = claimsByUri[latestUriFromChannel1] || {};
    const latestUriFromChannel2 = unreadByChannel[channel2].uris[0];
    const latestClaimFromChannel2 = claimsByUri[latestUriFromChannel2] || {};
    const latestHeightFromChannel1 = latestClaimFromChannel1.height || 0;
    const latestHeightFromChannel2 = latestClaimFromChannel2.height || 0;

    if (latestHeightFromChannel1 !== latestHeightFromChannel2) {
      return latestHeightFromChannel2 - latestHeightFromChannel1;
    }

    return 0;
  }).forEach(channel => {
    const unreadSubscription = unreadByChannel[channel];
    const unreadChannel = {
      channel,
      uris: unreadSubscription.uris
    };
    unreadList.push(unreadChannel);
  });
  return unreadList;
}); // Returns all unread subscriptions for a uri passed in

const makeSelectUnreadByChannel = uri => reselect.createSelector(selectUnreadByChannel, unread => unread[uri]); // Returns the first page of claims for every channel a user is subscribed to

const selectSubscriptionClaims = reselect.createSelector(lbryRedux.selectAllClaimsByChannel, lbryRedux.selectClaimsById, selectSubscriptions, selectUnreadByChannel, (channelIds, allClaims, savedSubscriptions, unreadByChannel) => {
  // no claims loaded yet
  if (!Object.keys(channelIds).length) {
    return [];
  }

  let fetchedSubscriptions = [];
  savedSubscriptions.forEach(subscription => {
    let channelClaims = []; // if subscribed channel has content

    if (channelIds[subscription.uri] && channelIds[subscription.uri]['1']) {
      // This will need to be more robust, we will want to be able to load more than the first page
      // Strip out any ids that will be shown as notifications
      const pageOneChannelIds = channelIds[subscription.uri]['1']; // we have the channel ids and the corresponding claims
      // loop over the list of ids and grab the claim

      pageOneChannelIds.forEach(id => {
        const grabbedClaim = allClaims[id];

        if (unreadByChannel[subscription.uri] && unreadByChannel[subscription.uri].uris.some(uri => uri.includes(id))) {
          grabbedClaim.isNew = true;
        }

        channelClaims = channelClaims.concat([grabbedClaim]);
      });
    }

    fetchedSubscriptions = fetchedSubscriptions.concat(channelClaims);
  });
  return fetchedSubscriptions;
}); // Returns true if a user is subscribed to the channel associated with the uri passed in
// Accepts content or channel uris

const makeSelectIsSubscribed = uri => reselect.createSelector(selectSubscriptions, lbryRedux.makeSelectChannelForClaimUri(uri, true), (subscriptions, channelUri) => {
  if (channelUri) {
    return subscriptions.some(sub => sub.uri === channelUri);
  } // If we couldn't get a channel uri from the claim uri, the uri passed in might be a channel already


  const {
    isChannel
  } = lbryRedux.parseURI(uri);

  if (isChannel) {
    const uriWithPrefix = uri.startsWith('lbry://') ? uri : `lbry://${uri}`;
    return subscriptions.some(sub => sub.uri === uriWithPrefix);
  }

  return false;
});
const makeSelectIsNew = uri => reselect.createSelector(makeSelectIsSubscribed(uri), lbryRedux.makeSelectChannelForClaimUri(uri), selectUnreadByChannel, (isSubscribed, channel, unreadByChannel) => {
  if (!isSubscribed) {
    return false;
  }

  const unreadForChannel = unreadByChannel[`lbry://${channel}`];

  if (unreadForChannel) {
    return unreadForChannel.uris.includes(uri);
  }

  return false; // If they are subscribed, check to see if this uri is in the list of unreads
});
const selectEnabledChannelNotifications = reselect.createSelector(selectState$2, state => state.enabledChannelNotifications);

//      
const CHECK_SUBSCRIPTIONS_INTERVAL = 15 * 60 * 1000;
const doSetViewMode = viewMode => dispatch => dispatch({
  type: SET_VIEW_MODE,
  data: viewMode
});
const setSubscriptionLatest = (subscription, uri) => dispatch => dispatch({
  type: SET_SUBSCRIPTION_LATEST,
  data: {
    subscription,
    uri
  }
}); // Populate a channels unread subscriptions or update the type

const doUpdateUnreadSubscriptions = (channelUri, uris, type) => (dispatch, getState) => {
  const state = getState();
  const unreadByChannel = selectUnreadByChannel(state);
  const currentUnreadForChannel = unreadByChannel[channelUri];
  let newUris = [];
  let newType = null;

  if (!currentUnreadForChannel) {
    newUris = uris;
    newType = type;
  } else {
    if (uris) {
      // If a channel currently has no unread uris, just add them all
      if (!currentUnreadForChannel.uris || !currentUnreadForChannel.uris.length) {
        newUris = uris;
      } else {
        // They already have unreads and now there are new ones
        // Add the new ones to the beginning of the list
        // Make sure there are no duplicates
        const currentUnreadUris = currentUnreadForChannel.uris;
        newUris = uris.filter(uri => !currentUnreadUris.includes(uri)).concat(currentUnreadUris);
      }
    } else {
      newUris = currentUnreadForChannel.uris;
    }

    newType = type || currentUnreadForChannel.type;
  }

  dispatch({
    type: UPDATE_SUBSCRIPTION_UNREADS,
    data: {
      channel: channelUri,
      uris: newUris,
      type: newType
    }
  });
}; // Remove multiple files (or all) from a channels unread subscriptions

const doRemoveUnreadSubscriptions = (channelUri, readUris) => (dispatch, getState) => {
  const state = getState();
  const unreadByChannel = selectUnreadByChannel(state); // If no channel is passed in, remove all unread subscriptions from all channels

  if (!channelUri) {
    return dispatch({
      type: REMOVE_SUBSCRIPTION_UNREADS,
      data: {
        channel: null
      }
    });
  }

  const currentChannelUnread = unreadByChannel[channelUri];

  if (!currentChannelUnread || !currentChannelUnread.uris) {
    // Channel passed in doesn't have any unreads
    return null;
  } // For each uri passed in, remove it from the list of unread uris
  // If no uris are passed in, remove them all


  let newUris;

  if (readUris) {
    const urisToRemoveMap = readUris.reduce((acc, val) => ({ ...acc,
      [val]: true
    }), {});
    const filteredUris = currentChannelUnread.uris.filter(uri => !urisToRemoveMap[uri]);
    newUris = filteredUris.length ? filteredUris : null;
  } else {
    newUris = null;
  }

  return dispatch({
    type: REMOVE_SUBSCRIPTION_UNREADS,
    data: {
      channel: channelUri,
      uris: newUris
    }
  });
}; // Remove a single file from a channels unread subscriptions

const doRemoveUnreadSubscription = (channelUri, readUri) => dispatch => {
  dispatch(doRemoveUnreadSubscriptions(channelUri, [readUri]));
};
const doCheckSubscription = (subscriptionUri, shouldNotify) => (dispatch, getState) => {
  // no dispatching FETCH_CHANNEL_CLAIMS_STARTED; causes loading issues on <SubscriptionsPage>
  const state = getState();

  const savedSubscription = state.subscriptions.subscriptions.find(sub => sub.uri === subscriptionUri);

  if (!savedSubscription) {
    throw Error(`Trying to find new content for ${subscriptionUri} but it doesn't exist in your subscriptions`);
  } // We may be duplicating calls here. Can this logic be baked into doFetchClaimsByChannel?


  lbryRedux.Lbry.claim_search({
    channel: subscriptionUri,
    valid_channel_signature: true,
    order_by: ['release_time'],
    page: 1,
    page_size: PAGE_SIZE
  }).then(claimListByChannel => {
    const {
      items: claimsInChannel
    } = claimListByChannel; // may happen if subscribed to an abandoned channel or an empty channel

    if (!claimsInChannel || !claimsInChannel.length) {
      return;
    } // Determine if the latest subscription currently saved is actually the latest subscription


    const latestIndex = claimsInChannel.findIndex(claim => claim.permanent_url === savedSubscription.latest); // If latest is -1, it is a newly subscribed channel or there have been 10+ claims published since last viewed

    const latestIndexToNotify = latestIndex === -1 ? 10 : latestIndex; // If latest is 0, nothing has changed
    // Do not download/notify about new content, it would download/notify 10 claims per channel

    if (latestIndex !== 0 && savedSubscription.latest) {
      let downloadCount = 0;
      const newUnread = [];
      claimsInChannel.slice(0, latestIndexToNotify).forEach(claim => {
        const uri = claim.permanent_url;

        if (shouldNotify) {
          newUnread.push(uri);
        }
      });
      dispatch(doUpdateUnreadSubscriptions(subscriptionUri, newUnread, downloadCount > 0 ? DOWNLOADING : NOTIFY_ONLY));
    } // Set the latest piece of content for a channel
    // This allows the app to know if there has been new content since it was last set


    const latest = claimsInChannel[0];
    dispatch(setSubscriptionLatest({
      channelName: latest.signing_channel.name,
      uri: latest.signing_channel.permanent_url
    }, latest.permanent_url)); // calling FETCH_CHANNEL_CLAIMS_COMPLETED after not calling STARTED
    // means it will delete a non-existant fetchingChannelClaims[uri]

    dispatch({
      type: FETCH_CHANNEL_CLAIMS_COMPLETED,
      data: {
        uri: subscriptionUri,
        claims: claimsInChannel || [],
        page: 1
      }
    });
  });
};
const doChannelSubscribe = subscription => (dispatch, getState) => {
  const {
    settings: {
      daemonSettings
    }
  } = getState();
  const isSharingData = daemonSettings ? daemonSettings.share_usage_data : true;
  const subscriptionUri = subscription.uri;

  if (!subscriptionUri.startsWith('lbry://')) {
    throw Error(`Subscription uris must inclue the "lbry://" prefix.\nTried to subscribe to ${subscriptionUri}`);
  }

  dispatch({
    type: CHANNEL_SUBSCRIBE,
    data: subscription
  }); // if the user isn't sharing data, keep the subscriptions entirely in the app

  if (isSharingData) {
    const {
      channelClaimId
    } = lbryRedux.parseURI(subscription.uri); // They are sharing data, we can store their subscriptions in our internal database

    Lbryio.call('subscription', 'new', {
      channel_name: subscription.channelName,
      claim_id: channelClaimId
    });
    dispatch(doClaimRewardType(rewards.TYPE_SUBSCRIPTION, {
      failSilently: true
    }));
  }

  dispatch(doCheckSubscription(subscription.uri, true));
};
const doChannelUnsubscribe = subscription => (dispatch, getState) => {
  const {
    settings: {
      daemonSettings
    }
  } = getState();
  const isSharingData = daemonSettings ? daemonSettings.share_usage_data : true;
  dispatch({
    type: CHANNEL_UNSUBSCRIBE,
    data: subscription
  });

  if (isSharingData) {
    const {
      channelClaimId
    } = lbryRedux.parseURI(subscription.uri);
    Lbryio.call('subscription', 'delete', {
      claim_id: channelClaimId
    });
  }
};
const doCheckSubscriptions = () => (dispatch, getState) => {
  const state = getState();
  const subscriptions = selectSubscriptions(state);
  subscriptions.forEach(sub => {
    dispatch(doCheckSubscription(sub.uri, true));
  });
};
const doFetchMySubscriptions = () => (dispatch, getState) => {
  const state = getState();
  const {
    subscriptions: reduxSubscriptions
  } = state.subscriptions; // default to true if daemonSettings not found

  const isSharingData = state.settings && state.settings.daemonSettings ? state.settings.daemonSettings.share_usage_data : true;

  if (!isSharingData && isSharingData !== undefined) {
    // They aren't sharing their data, subscriptions will be handled by persisted redux state
    return;
  } // most of this logic comes from scenarios where the db isn't synced with redux
  // this will happen if the user stops sharing data


  dispatch({
    type: FETCH_SUBSCRIPTIONS_START
  });
  Lbryio.call('subscription', 'list').then(dbSubscriptions => {
    const storedSubscriptions = dbSubscriptions || []; // User has no subscriptions in db or redux

    if (!storedSubscriptions.length && (!reduxSubscriptions || !reduxSubscriptions.length)) {
      return [];
    } // There is some mismatch between redux state and db state
    // If something is in the db, but not in redux, add it to redux
    // If something is in redux, but not in the db, add it to the db


    if (storedSubscriptions.length !== reduxSubscriptions.length) {
      const dbSubMap = {};
      const reduxSubMap = {};
      const subsNotInDB = [];
      const subscriptionsToReturn = reduxSubscriptions.slice();
      storedSubscriptions.forEach(sub => {
        dbSubMap[sub.claim_id] = 1;
      });
      reduxSubscriptions.forEach(sub => {
        const {
          channelClaimId
        } = lbryRedux.parseURI(sub.uri);
        reduxSubMap[channelClaimId] = 1;
      });
      storedSubscriptions.forEach(sub => {
        if (!reduxSubMap[sub.claim_id]) {
          const uri = `lbry://${sub.channel_name}#${sub.claim_id}`;
          subscriptionsToReturn.push({
            uri,
            channelName: sub.channel_name
          });
        }
      });
      return Promise.all(subsNotInDB.map(payload => Lbryio.call('subscription', 'new', payload))).then(() => subscriptionsToReturn).catch(() => // let it fail, we will try again when the navigate to the subscriptions page
      subscriptionsToReturn);
    } // DB is already synced, just return the subscriptions in redux


    return reduxSubscriptions;
  }).then(subscriptions => {
    dispatch({
      type: FETCH_SUBSCRIPTIONS_SUCCESS,
      data: subscriptions
    });
    dispatch(lbryRedux.doResolveUris(subscriptions.map(({
      uri
    }) => uri)));
    dispatch(doCheckSubscriptions());
  }).catch(() => {
    dispatch({
      type: FETCH_SUBSCRIPTIONS_FAIL
    });
  });
};
const doCheckSubscriptionsInit = () => dispatch => {
  // doCheckSubscriptionsInit is called by doDaemonReady
  // setTimeout below is a hack to ensure redux is hydrated when subscriptions are checked
  // this will be replaced with <PersistGate> which reqiures a package upgrade
  setTimeout(() => dispatch(doFetchMySubscriptions()), 5000);
  const checkSubscriptionsTimer = setInterval(() => dispatch(doCheckSubscriptions()), CHECK_SUBSCRIPTIONS_INTERVAL);
  dispatch({
    type: CHECK_SUBSCRIPTIONS_SUBSCRIBE,
    data: {
      checkSubscriptionsTimer
    }
  });
  setInterval(() => dispatch(doCheckSubscriptions()), CHECK_SUBSCRIPTIONS_INTERVAL);
};
const doFetchRecommendedSubscriptions = () => dispatch => {
  dispatch({
    type: GET_SUGGESTED_SUBSCRIPTIONS_START
  });
  return Lbryio.call('subscription', 'suggest').then(suggested => dispatch({
    type: GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS,
    data: suggested
  })).catch(error => dispatch({
    type: GET_SUGGESTED_SUBSCRIPTIONS_FAIL,
    error
  }));
};
const doCompleteFirstRun = () => dispatch => dispatch({
  type: SUBSCRIPTION_FIRST_RUN_COMPLETED
});
const doShowSuggestedSubs = () => dispatch => dispatch({
  type: VIEW_SUGGESTED_SUBSCRIPTIONS
});
const doChannelSubscriptionEnableNotifications = channelName => dispatch => dispatch({
  type: CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS,
  data: channelName
});
const doChannelSubscriptionDisableNotifications = channelName => dispatch => dispatch({
  type: CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS,
  data: channelName
});

function doFetchCostInfoForUri(uri) {
  return (dispatch, getState) => {
    const state = getState();
    const claim = lbryRedux.selectClaimsByUri(state)[uri];
    if (!claim) return;

    function resolve(costInfo) {
      dispatch({
        type: FETCH_COST_INFO_COMPLETED,
        data: {
          uri,
          costInfo
        }
      });
    }

    const fee = claim.value ? claim.value.fee : undefined;

    if (fee === undefined) {
      resolve({
        cost: 0,
        includesData: true
      });
    } else if (fee.currency === 'LBC') {
      resolve({
        cost: fee.amount,
        includesData: true
      });
    } else {
      Lbryio.getExchangeRates().then(({
        LBC_USD
      }) => {
        resolve({
          cost: fee.amount / LBC_USD,
          includesData: true
        });
      });
    }
  };
}

const CHECK_BLACK_LISTED_CONTENT_INTERVAL = 60 * 60 * 1000;
function doFetchBlackListedOutpoints() {
  return dispatch => {
    dispatch({
      type: FETCH_BLACK_LISTED_CONTENT_STARTED
    });

    const success = ({
      outpoints
    }) => {
      const splitedOutpoints = [];
      outpoints.forEach((outpoint, index) => {
        const [txid, nout] = outpoint.split(':');
        splitedOutpoints[index] = {
          txid,
          nout: Number.parseInt(nout, 10)
        };
      });
      dispatch({
        type: FETCH_BLACK_LISTED_CONTENT_COMPLETED,
        data: {
          outpoints: splitedOutpoints,
          success: true
        }
      });
    };

    const failure = ({
      error
    }) => {
      dispatch({
        type: FETCH_BLACK_LISTED_CONTENT_FAILED,
        data: {
          error,
          success: false
        }
      });
    };

    Lbryio.call('file', 'list_blocked').then(success, failure);
  };
}
function doBlackListedOutpointsSubscribe() {
  return dispatch => {
    dispatch(doFetchBlackListedOutpoints());
    setInterval(() => dispatch(doFetchBlackListedOutpoints()), CHECK_BLACK_LISTED_CONTENT_INTERVAL);
  };
}

const CHECK_FILTERED_CONTENT_INTERVAL = 60 * 60 * 1000;
function doFetchFilteredOutpoints() {
  return dispatch => {
    dispatch({
      type: FETCH_FILTERED_CONTENT_STARTED
    });

    const success = ({
      outpoints
    }) => {
      const formattedOutpoints = outpoints.map(outpoint => {
        const [txid, nout] = outpoint.split(':');
        return {
          txid,
          nout: Number.parseInt(nout, 10)
        };
      });
      dispatch({
        type: FETCH_FILTERED_CONTENT_COMPLETED,
        data: {
          outpoints: formattedOutpoints
        }
      });
    };

    const failure = ({
      error
    }) => {
      dispatch({
        type: FETCH_FILTERED_CONTENT_FAILED,
        data: {
          error
        }
      });
    };

    Lbryio.call('file', 'list_filtered').then(success, failure);
  };
}
function doFilteredOutpointsSubscribe() {
  return dispatch => {
    dispatch(doFetchFilteredOutpoints());
    setInterval(() => dispatch(doFetchFilteredOutpoints()), CHECK_FILTERED_CONTENT_INTERVAL);
  };
}

function doFetchFeaturedUris(offloadResolve = false) {
  return dispatch => {
    dispatch({
      type: FETCH_FEATURED_CONTENT_STARTED
    });

    const success = ({
      Uris
    }) => {
      let urisToResolve = [];
      Object.keys(Uris).forEach(category => {
        urisToResolve = [...urisToResolve, ...Uris[category]];
      });
      const actions = [{
        type: FETCH_FEATURED_CONTENT_COMPLETED,
        data: {
          uris: Uris,
          success: true
        }
      }];

      if (urisToResolve.length && !offloadResolve) {
        actions.push(lbryRedux.doResolveUris(urisToResolve));
      }

      dispatch(lbryRedux.batchActions(...actions));
    };

    const failure = () => {
      dispatch({
        type: FETCH_FEATURED_CONTENT_COMPLETED,
        data: {
          uris: {}
        }
      });
    };

    Lbryio.call('file', 'list_homepage').then(success, failure);
  };
}
function doFetchTrendingUris() {
  return dispatch => {
    dispatch({
      type: FETCH_TRENDING_CONTENT_STARTED
    });

    const success = data => {
      const urisToResolve = data.map(uri => uri.url);
      const actions = [lbryRedux.doResolveUris(urisToResolve), {
        type: FETCH_TRENDING_CONTENT_COMPLETED,
        data: {
          uris: data,
          success: true
        }
      }];
      dispatch(lbryRedux.batchActions(...actions));
    };

    const failure = () => {
      dispatch({
        type: FETCH_TRENDING_CONTENT_COMPLETED,
        data: {
          uris: []
        }
      });
    };

    Lbryio.call('file', 'list_trending').then(success, failure);
  };
}

//      
const doFetchViewCount = claimId => dispatch => {
  dispatch({
    type: FETCH_VIEW_COUNT_STARTED
  });
  return Lbryio.call('file', 'view_count', {
    claim_id: claimId
  }).then(result => {
    const viewCount = result[0];
    dispatch({
      type: FETCH_VIEW_COUNT_COMPLETED,
      data: {
        claimId,
        viewCount
      }
    });
  }).catch(error => {
    dispatch({
      type: FETCH_VIEW_COUNT_FAILED,
      data: error
    });
  });
};

function doSetSync(oldHash, newHash, data) {
  return dispatch => {
    dispatch({
      type: SET_SYNC_STARTED
    });
    Lbryio.call('sync', 'set', {
      old_hash: oldHash,
      new_hash: newHash,
      data
    }, 'post').then(response => {
      if (!response.hash) {
        return dispatch({
          type: SET_SYNC_FAILED,
          data: {
            error: 'No hash returned for sync/set.'
          }
        });
      }

      return dispatch({
        type: SET_SYNC_COMPLETED,
        data: {
          syncHash: response.hash
        }
      });
    }).catch(error => {
      dispatch({
        type: SET_SYNC_FAILED,
        data: {
          error
        }
      });
    });
  };
}
function doSetDefaultAccount(success, failure) {
  return dispatch => {
    dispatch({
      type: SET_DEFAULT_ACCOUNT
    });
    lbryRedux.Lbry.account_list().then(accountList => {
      const {
        lbc_mainnet: accounts
      } = accountList;
      let defaultId;

      for (let i = 0; i < accounts.length; ++i) {
        if (accounts[i].satoshis > 0) {
          defaultId = accounts[i].id;
          break;
        }
      } // In a case where there's no balance on either account
      // assume the second (which is created after sync) as default


      if (!defaultId && accounts.length > 1) {
        defaultId = accounts[1].id;
      } // Set the default account


      if (defaultId) {
        lbryRedux.Lbry.account_set({
          account_id: defaultId,
          default: true
        }).then(() => {
          if (success) {
            success();
          }
        }).catch(err => {
          if (failure) {
            failure(err);
          }
        });
      } else {
        // no default account to set
        if (failure) {
          failure('Could not set a default account'); // fail
        }
      }
    }).catch(err => {
      if (failure) {
        failure(err);
      }
    });
  };
}
function doGetSync(password) {
  return dispatch => {
    dispatch({
      type: GET_SYNC_STARTED
    });
    lbryRedux.Lbry.sync_hash().then(hash => {
      Lbryio.call('sync', 'get', {
        hash
      }, 'post').then(response => {
        const data = {
          hasSyncedWallet: true
        };

        if (response.changed) {
          const syncHash = response.hash;
          data.syncHash = syncHash;
          data.syncData = response.data;
          lbryRedux.Lbry.sync_apply({
            password,
            data: response.data
          }).then(({
            hash: walletHash,
            data: walletData
          }) => {
            if (walletHash !== syncHash) {
              // different local hash, need to synchronise
              dispatch(doSetSync(syncHash, walletHash, walletData));
            }
          });
        }

        dispatch({
          type: GET_SYNC_COMPLETED,
          data
        });
      }).catch(() => {
        // user doesn't have a synced wallet
        dispatch({
          type: GET_SYNC_COMPLETED,
          data: {
            hasSyncedWallet: false,
            syncHash: null
          }
        }); // call sync_apply to get data to sync
        // first time sync. use any string for old hash

        lbryRedux.Lbry.sync_apply({
          password
        }).then(({
          hash: walletHash,
          data
        }) => dispatch(doSetSync(null, walletHash, data)));
      });
    });
  };
}
function doSyncApply(syncHash, syncData, password) {
  return dispatch => {
    dispatch({
      type: SYNC_APPLY_STARTED
    });
    lbryRedux.Lbry.sync_apply({
      password,
      data: syncData
    }).then(({
      hash: walletHash,
      data: walletData
    }) => {
      dispatch({
        type: SYNC_APPLY_COMPLETED
      });

      if (walletHash !== syncHash) {
        // different local hash, need to synchronise
        dispatch(doSetSync(syncHash, walletHash, walletData));
      }
    }).catch(() => {
      dispatch({
        type: SYNC_APPLY_FAILED,
        data: {
          error: 'Invalid password specified. Please enter the password for your previously synchronised wallet.'
        }
      });
    });
  };
}
function doCheckSync() {
  return dispatch => {
    dispatch({
      type: GET_SYNC_STARTED
    });
    lbryRedux.Lbry.sync_hash().then(hash => {
      Lbryio.call('sync', 'get', {
        hash
      }, 'post').then(response => {
        const data = {
          hasSyncedWallet: true,
          syncHash: response.hash,
          syncData: response.data,
          hashChanged: response.changed
        };
        dispatch({
          type: GET_SYNC_COMPLETED,
          data
        });
      }).catch(() => {
        // user doesn't have a synced wallet
        dispatch({
          type: GET_SYNC_COMPLETED,
          data: {
            hasSyncedWallet: false,
            syncHash: null
          }
        });
      });
    });
  };
}

const reducers = {};
const defaultState$1 = {
  authenticating: false
};

reducers[GENERATE_AUTH_TOKEN_FAILURE] = state => Object.assign({}, state, {
  authToken: null,
  authenticating: false
});

reducers[GENERATE_AUTH_TOKEN_STARTED] = state => Object.assign({}, state, {
  authenticating: true
});

reducers[GENERATE_AUTH_TOKEN_SUCCESS] = (state, action) => Object.assign({}, state, {
  authToken: action.data.authToken,
  authenticating: false
});

function authReducer(state = defaultState$1, action) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

const reducers$1 = {};
const defaultState$2 = {
  fetching: false,
  claimedRewardsById: {},
  // id => reward
  unclaimedRewards: [],
  claimPendingByType: {},
  claimErrorsByType: {},
  rewardedContentClaimIds: []
};

reducers$1[lbryRedux.ACTIONS.FETCH_REWARDS_STARTED] = state => Object.assign({}, state, {
  fetching: true
});

reducers$1[lbryRedux.ACTIONS.FETCH_REWARDS_COMPLETED] = (state, action) => {
  const {
    userRewards
  } = action.data;
  const unclaimedRewards = [];
  const claimedRewards = {};
  userRewards.forEach(reward => {
    if (reward.transaction_id) {
      claimedRewards[reward.id] = reward;
    } else {
      unclaimedRewards.push(reward);
    }
  });
  return Object.assign({}, state, {
    claimedRewardsById: claimedRewards,
    unclaimedRewards,
    fetching: false
  });
};

function setClaimRewardState(state, reward, isClaiming, errorMessage = '') {
  const newClaimPendingByType = Object.assign({}, state.claimPendingByType);
  const newClaimErrorsByType = Object.assign({}, state.claimErrorsByType); // Currently, for multiple rewards of the same type, they will both show "claiming" when one is beacuse we track this by `reward_type`
  // To fix this we will need to use `claim_code` instead, and change all selectors to match

  if (isClaiming) {
    newClaimPendingByType[reward.reward_type] = isClaiming;
  } else {
    delete newClaimPendingByType[reward.reward_type];
  }

  if (errorMessage) {
    newClaimErrorsByType[reward.reward_type] = errorMessage;
  } else {
    delete newClaimErrorsByType[reward.reward_type];
  }

  return Object.assign({}, state, {
    claimPendingByType: newClaimPendingByType,
    claimErrorsByType: newClaimErrorsByType
  });
}

reducers$1[lbryRedux.ACTIONS.CLAIM_REWARD_STARTED] = (state, action) => {
  const {
    reward
  } = action.data;
  return setClaimRewardState(state, reward, true, '');
};

reducers$1[lbryRedux.ACTIONS.CLAIM_REWARD_SUCCESS] = (state, action) => {
  const {
    reward
  } = action.data;
  const {
    unclaimedRewards
  } = state;
  const index = unclaimedRewards.findIndex(ur => ur.claim_code === reward.claim_code);
  unclaimedRewards.splice(index, 1);
  const {
    claimedRewardsById
  } = state;
  claimedRewardsById[reward.id] = reward;
  const newState = { ...state,
    unclaimedRewards: [...unclaimedRewards],
    claimedRewardsById: { ...claimedRewardsById
    }
  };
  return setClaimRewardState(newState, reward, false, '');
};

reducers$1[lbryRedux.ACTIONS.CLAIM_REWARD_FAILURE] = (state, action) => {
  const {
    reward,
    error
  } = action.data;
  return setClaimRewardState(state, reward, false, error ? error.message : '');
};

reducers$1[lbryRedux.ACTIONS.CLAIM_REWARD_CLEAR_ERROR] = (state, action) => {
  const {
    reward
  } = action.data;
  return setClaimRewardState(state, reward, state.claimPendingByType[reward.reward_type], '');
};

reducers$1[lbryRedux.ACTIONS.FETCH_REWARD_CONTENT_COMPLETED] = (state, action) => {
  const {
    claimIds
  } = action.data;
  return Object.assign({}, state, {
    rewardedContentClaimIds: claimIds
  });
};

function rewardsReducer(state = defaultState$2, action) {
  const handler = reducers$1[action.type];
  if (handler) return handler(state, action);
  return state;
}

const reducers$2 = {};
const defaultState$3 = {
  authenticationIsPending: false,
  userIsPending: false,
  emailNewIsPending: false,
  emailNewErrorMessage: '',
  emailToVerify: '',
  inviteNewErrorMessage: '',
  inviteNewIsPending: false,
  inviteStatusIsPending: false,
  invitesRemaining: undefined,
  invitees: undefined,
  user: undefined
};

reducers$2[lbryRedux.ACTIONS.AUTHENTICATION_STARTED] = state => Object.assign({}, state, {
  authenticationIsPending: true,
  userIsPending: true,
  user: defaultState$3.user
});

reducers$2[lbryRedux.ACTIONS.AUTHENTICATION_SUCCESS] = (state, action) => Object.assign({}, state, {
  authenticationIsPending: false,
  userIsPending: false,
  user: action.data.user
});

reducers$2[lbryRedux.ACTIONS.AUTHENTICATION_FAILURE] = state => Object.assign({}, state, {
  authenticationIsPending: false,
  userIsPending: false,
  user: null
});

reducers$2[lbryRedux.ACTIONS.USER_FETCH_STARTED] = state => Object.assign({}, state, {
  userIsPending: true
});

reducers$2[lbryRedux.ACTIONS.USER_FETCH_SUCCESS] = (state, action) => Object.assign({}, state, {
  userIsPending: false,
  user: action.data.user
});

reducers$2[lbryRedux.ACTIONS.USER_FETCH_FAILURE] = state => Object.assign({}, state, {
  userIsPending: true,
  user: null
});

reducers$2[lbryRedux.ACTIONS.USER_PHONE_NEW_STARTED] = (state, action) => {
  const user = Object.assign({}, state.user);
  user.country_code = action.data.country_code;
  return Object.assign({}, state, {
    phoneNewIsPending: true,
    phoneNewErrorMessage: '',
    user
  });
};

reducers$2[lbryRedux.ACTIONS.USER_PHONE_NEW_SUCCESS] = (state, action) => Object.assign({}, state, {
  phoneToVerify: action.data.phone,
  phoneNewIsPending: false
});

reducers$2[lbryRedux.ACTIONS.USER_PHONE_RESET] = state => Object.assign({}, state, {
  phoneToVerify: null
});

reducers$2[lbryRedux.ACTIONS.USER_PHONE_NEW_FAILURE] = (state, action) => Object.assign({}, state, {
  phoneNewIsPending: false,
  phoneNewErrorMessage: action.data.error
});

reducers$2[lbryRedux.ACTIONS.USER_PHONE_VERIFY_STARTED] = state => Object.assign({}, state, {
  phoneVerifyIsPending: true,
  phoneVerifyErrorMessage: ''
});

reducers$2[lbryRedux.ACTIONS.USER_PHONE_VERIFY_SUCCESS] = (state, action) => Object.assign({}, state, {
  phoneToVerify: '',
  phoneVerifyIsPending: false,
  user: action.data.user
});

reducers$2[lbryRedux.ACTIONS.USER_PHONE_VERIFY_FAILURE] = (state, action) => Object.assign({}, state, {
  phoneVerifyIsPending: false,
  phoneVerifyErrorMessage: action.data.error
});

reducers$2[lbryRedux.ACTIONS.USER_EMAIL_NEW_STARTED] = state => Object.assign({}, state, {
  emailNewIsPending: true,
  emailNewErrorMessage: ''
});

reducers$2[lbryRedux.ACTIONS.USER_EMAIL_NEW_SUCCESS] = (state, action) => {
  const user = Object.assign({}, state.user);
  user.primary_email = action.data.email;
  return Object.assign({}, state, {
    emailToVerify: action.data.email,
    emailNewIsPending: false,
    user
  });
};

reducers$2[lbryRedux.ACTIONS.USER_EMAIL_NEW_EXISTS] = (state, action) => Object.assign({}, state, {
  emailToVerify: action.data.email,
  emailNewIsPending: false
});

reducers$2[lbryRedux.ACTIONS.USER_EMAIL_NEW_FAILURE] = (state, action) => Object.assign({}, state, {
  emailNewIsPending: false,
  emailNewErrorMessage: action.data.error
});

reducers$2[lbryRedux.ACTIONS.USER_EMAIL_VERIFY_STARTED] = state => Object.assign({}, state, {
  emailVerifyIsPending: true,
  emailVerifyErrorMessage: ''
});

reducers$2[lbryRedux.ACTIONS.USER_EMAIL_VERIFY_SUCCESS] = (state, action) => {
  const user = Object.assign({}, state.user);
  user.primary_email = action.data.email;
  return Object.assign({}, state, {
    emailToVerify: '',
    emailVerifyIsPending: false,
    user
  });
};

reducers$2[lbryRedux.ACTIONS.USER_EMAIL_VERIFY_FAILURE] = (state, action) => Object.assign({}, state, {
  emailVerifyIsPending: false,
  emailVerifyErrorMessage: action.data.error
});

reducers$2[lbryRedux.ACTIONS.USER_EMAIL_VERIFY_SET] = (state, action) => Object.assign({}, state, {
  emailToVerify: action.data.email
});

reducers$2[lbryRedux.ACTIONS.USER_IDENTITY_VERIFY_STARTED] = state => Object.assign({}, state, {
  identityVerifyIsPending: true,
  identityVerifyErrorMessage: ''
});

reducers$2[lbryRedux.ACTIONS.USER_IDENTITY_VERIFY_SUCCESS] = (state, action) => Object.assign({}, state, {
  identityVerifyIsPending: false,
  identityVerifyErrorMessage: '',
  user: action.data.user
});

reducers$2[lbryRedux.ACTIONS.USER_IDENTITY_VERIFY_FAILURE] = (state, action) => Object.assign({}, state, {
  identityVerifyIsPending: false,
  identityVerifyErrorMessage: action.data.error
});

reducers$2[lbryRedux.ACTIONS.FETCH_ACCESS_TOKEN_SUCCESS] = (state, action) => {
  const {
    token
  } = action.data;
  return Object.assign({}, state, {
    accessToken: token
  });
};

reducers$2[lbryRedux.ACTIONS.USER_INVITE_STATUS_FETCH_STARTED] = state => Object.assign({}, state, {
  inviteStatusIsPending: true
});

reducers$2[lbryRedux.ACTIONS.USER_INVITE_STATUS_FETCH_SUCCESS] = (state, action) => Object.assign({}, state, {
  inviteStatusIsPending: false,
  invitesRemaining: action.data.invitesRemaining,
  invitees: action.data.invitees,
  referralLink: action.data.referralLink
});

reducers$2[lbryRedux.ACTIONS.USER_INVITE_NEW_STARTED] = state => Object.assign({}, state, {
  inviteNewIsPending: true,
  inviteNewErrorMessage: ''
});

reducers$2[lbryRedux.ACTIONS.USER_INVITE_NEW_SUCCESS] = state => Object.assign({}, state, {
  inviteNewIsPending: false,
  inviteNewErrorMessage: ''
});

reducers$2[lbryRedux.ACTIONS.USER_INVITE_NEW_FAILURE] = (state, action) => Object.assign({}, state, {
  inviteNewIsPending: false,
  inviteNewErrorMessage: action.data.error.message
});

reducers$2[lbryRedux.ACTIONS.USER_INVITE_STATUS_FETCH_FAILURE] = state => Object.assign({}, state, {
  inviteStatusIsPending: false,
  invitesRemaining: null,
  invitees: null
});

function userReducer(state = defaultState$3, action) {
  const handler = reducers$2[action.type];
  if (handler) return handler(state, action);
  return state;
}

const defaultState$4 = {
  fetching: {},
  byUri: {}
};
const costInfoReducer = handleActions({
  [FETCH_COST_INFO_STARTED]: (state, action) => {
    const {
      uri
    } = action.data;
    const newFetching = Object.assign({}, state.fetching);
    newFetching[uri] = true;
    return { ...state,
      fetching: newFetching
    };
  },
  [FETCH_COST_INFO_COMPLETED]: (state, action) => {
    const {
      uri,
      costInfo
    } = action.data;
    const newByUri = Object.assign({}, state.byUri);
    const newFetching = Object.assign({}, state.fetching);
    newByUri[uri] = costInfo;
    delete newFetching[uri];
    return { ...state,
      byUri: newByUri,
      fetching: newFetching
    };
  }
}, defaultState$4);

const defaultState$5 = {
  fetchingBlackListedOutpoints: false,
  fetchingBlackListedOutpointsSucceed: undefined,
  blackListedOutpoints: undefined
};
const blacklistReducer = handleActions({
  [FETCH_BLACK_LISTED_CONTENT_STARTED]: state => ({ ...state,
    fetchingBlackListedOutpoints: true
  }),
  [FETCH_BLACK_LISTED_CONTENT_COMPLETED]: (state, action) => {
    const {
      outpoints,
      success
    } = action.data;
    return { ...state,
      fetchingBlackListedOutpoints: false,
      fetchingBlackListedOutpointsSucceed: success,
      blackListedOutpoints: outpoints
    };
  },
  [FETCH_BLACK_LISTED_CONTENT_FAILED]: (state, action) => {
    const {
      error,
      success
    } = action.data;
    return { ...state,
      fetchingBlackListedOutpoints: false,
      fetchingBlackListedOutpointsSucceed: success,
      fetchingBlackListedOutpointsError: error
    };
  }
}, defaultState$5);

const defaultState$6 = {
  loading: false,
  filteredOutpoints: undefined
};
const filteredReducer = handleActions({
  [FETCH_FILTERED_CONTENT_STARTED]: state => ({ ...state,
    loading: true
  }),
  [FETCH_FILTERED_CONTENT_COMPLETED]: (state, action) => {
    const {
      outpoints
    } = action.data;
    return { ...state,
      loading: false,
      filteredOutpoints: outpoints
    };
  },
  [FETCH_FILTERED_CONTENT_FAILED]: (state, action) => {
    const {
      error
    } = action.data;
    return { ...state,
      loading: false,
      fetchingFilteredOutpointsError: error
    };
  }
}, defaultState$6);

const defaultState$7 = {
  fetchingFeaturedContent: false,
  fetchingFeaturedContentFailed: false,
  featuredUris: undefined,
  fetchingTrendingContent: false,
  fetchingTrendingContentFailed: false,
  trendingUris: undefined
};
const homepageReducer = handleActions({
  [FETCH_FEATURED_CONTENT_STARTED]: state => ({ ...state,
    fetchingFeaturedContent: true
  }),
  [FETCH_FEATURED_CONTENT_COMPLETED]: (state, action) => {
    const {
      uris,
      success
    } = action.data;
    return { ...state,
      fetchingFeaturedContent: false,
      fetchingFeaturedContentFailed: !success,
      featuredUris: uris
    };
  },
  [FETCH_TRENDING_CONTENT_STARTED]: state => ({ ...state,
    fetchingTrendingContent: true
  }),
  [FETCH_TRENDING_CONTENT_COMPLETED]: (state, action) => {
    const {
      uris,
      success
    } = action.data;
    return { ...state,
      fetchingTrendingContent: false,
      fetchingTrendingContentFailed: !success,
      trendingUris: uris
    };
  }
}, defaultState$7);

const defaultState$8 = {
  fetchingViewCount: false,
  viewCountError: undefined,
  viewCountById: {}
};
const statsReducer = handleActions({
  [FETCH_VIEW_COUNT_STARTED]: state => ({ ...state,
    fetchingViewCount: true
  }),
  [FETCH_VIEW_COUNT_FAILED]: (state, action) => ({ ...state,
    viewCountError: action.data
  }),
  [FETCH_VIEW_COUNT_COMPLETED]: (state, action) => {
    const {
      claimId,
      viewCount
    } = action.data;
    const viewCountById = { ...state.viewCountById,
      [claimId]: viewCount
    };
    return { ...state,
      fetchingViewCount: false,
      viewCountById
    };
  }
}, defaultState$8);

const reducers$3 = {};
const defaultState$9 = {
  hasSyncedWallet: false,
  syncHash: null,
  syncData: null,
  setSyncErrorMessage: null,
  syncApplyErrorMessage: '',
  syncApplyIsPending: false,
  getSyncIsPending: false,
  setSyncIsPending: false,
  hashChanged: false
};

reducers$3[GET_SYNC_STARTED] = state => Object.assign({}, state, {
  getSyncIsPending: true
});

reducers$3[GET_SYNC_COMPLETED] = (state, action) => Object.assign({}, state, {
  syncHash: action.data.syncHash,
  syncData: action.data.syncData,
  hasSyncedWallet: action.data.hasSyncedWallet,
  getSyncIsPending: false,
  hashChanged: action.data.hashChanged
});

reducers$3[SET_SYNC_STARTED] = state => Object.assign({}, state, {
  setSyncIsPending: true,
  setSyncErrorMessage: null
});

reducers$3[SET_SYNC_FAILED] = (state, action) => Object.assign({}, state, {
  setSyncIsPending: false,
  setSyncErrorMessage: action.data.error
});

reducers$3[SET_SYNC_COMPLETED] = (state, action) => Object.assign({}, state, {
  setSyncIsPending: false,
  setSyncErrorMessage: null,
  hasSyncedWallet: true,
  // sync was successful, so the user has a synced wallet at this point
  syncHash: action.data.syncHash
});

reducers$3[SYNC_APPLY_STARTED] = state => Object.assign({}, state, {
  syncApplyIsPending: true,
  syncApplyErrorMessage: ''
});

reducers$3[SYNC_APPLY_COMPLETED] = state => Object.assign({}, state, {
  syncApplyIsPending: false,
  syncApplyErrorMessage: ''
});

reducers$3[SYNC_APPLY_FAILED] = (state, action) => Object.assign({}, state, {
  syncApplyIsPending: false,
  syncApplyErrorMessage: action.data.error
});

function syncReducer(state = defaultState$9, action) {
  const handler = reducers$3[action.type];
  if (handler) return handler(state, action);
  return state;
}

const selectState$3 = state => state.auth || {};

const selectAuthToken = reselect.createSelector(selectState$3, state => state.authToken);
const selectIsAuthenticating = reselect.createSelector(selectState$3, state => state.authenticating);

const selectState$4 = state => state.costInfo || {};
const selectAllCostInfoByUri = reselect.createSelector(selectState$4, state => state.byUri || {});
const makeSelectCostInfoForUri = uri => reselect.createSelector(selectAllCostInfoByUri, costInfos => costInfos && costInfos[uri]);
const selectFetchingCostInfo = reselect.createSelector(selectState$4, state => state.fetching || {});
const makeSelectFetchingCostInfoForUri = uri => reselect.createSelector(selectFetchingCostInfo, fetchingByUri => fetchingByUri && fetchingByUri[uri]);

const selectState$5 = state => state.blacklist || {};
const selectBlackListedOutpoints = reselect.createSelector(selectState$5, state => state.blackListedOutpoints);

const selectState$6 = state => state.filtered || {};
const selectFilteredOutpoints = reselect.createSelector(selectState$6, state => state.filteredOutpoints);

const selectState$7 = state => state.homepage || {};

const selectFeaturedUris = reselect.createSelector(selectState$7, state => state.featuredUris);
const selectFetchingFeaturedUris = reselect.createSelector(selectState$7, state => state.fetchingFeaturedContent);
const selectTrendingUris = reselect.createSelector(selectState$7, state => state.trendingUris);
const selectFetchingTrendingUris = reselect.createSelector(selectState$7, state => state.fetchingTrendingContent);

const selectState$8 = state => state.stats || {};

const selectViewCount = reselect.createSelector(selectState$8, state => state.viewCountById);
const makeSelectViewCountForUri = uri => reselect.createSelector(lbryRedux.makeSelectClaimForUri(uri), selectViewCount, (claim, viewCountById) => viewCountById[claim.claim_id] || 0);

const selectState$9 = state => state.sync || {};

const selectHasSyncedWallet = reselect.createSelector(selectState$9, state => state.hasSyncedWallet);
const selectSyncHash = reselect.createSelector(selectState$9, state => state.syncHash);
const selectSyncData = reselect.createSelector(selectState$9, state => state.syncData);
const selectSetSyncErrorMessage = reselect.createSelector(selectState$9, state => state.setSyncErrorMessage);
const selectGetSyncIsPending = reselect.createSelector(selectState$9, state => state.getSyncIsPending);
const selectSetSyncIsPending = reselect.createSelector(selectState$9, state => state.setSyncIsPending);
const selectHashChanged = reselect.createSelector(selectState$9, state => state.hashChanged);
const selectSyncApplyIsPending = reselect.createSelector(selectState$9, state => state.syncApplyIsPending);
const selectSyncApplyErrorMessage = reselect.createSelector(selectState$9, state => state.syncApplyErrorMessage);

exports.LBRYINC_ACTIONS = action_types;
exports.Lbryio = Lbryio;
exports.authReducer = authReducer;
exports.blacklistReducer = blacklistReducer;
exports.costInfoReducer = costInfoReducer;
exports.doAuthenticate = doAuthenticate;
exports.doBlackListedOutpointsSubscribe = doBlackListedOutpointsSubscribe;
exports.doChannelSubscribe = doChannelSubscribe;
exports.doChannelSubscriptionDisableNotifications = doChannelSubscriptionDisableNotifications;
exports.doChannelSubscriptionEnableNotifications = doChannelSubscriptionEnableNotifications;
exports.doChannelUnsubscribe = doChannelUnsubscribe;
exports.doCheckSubscription = doCheckSubscription;
exports.doCheckSubscriptions = doCheckSubscriptions;
exports.doCheckSubscriptionsInit = doCheckSubscriptionsInit;
exports.doCheckSync = doCheckSync;
exports.doClaimEligiblePurchaseRewards = doClaimEligiblePurchaseRewards;
exports.doClaimRewardClearError = doClaimRewardClearError;
exports.doClaimRewardType = doClaimRewardType;
exports.doCompleteFirstRun = doCompleteFirstRun;
exports.doFetchAccessToken = doFetchAccessToken;
exports.doFetchCostInfoForUri = doFetchCostInfoForUri;
exports.doFetchFeaturedUris = doFetchFeaturedUris;
exports.doFetchInviteStatus = doFetchInviteStatus;
exports.doFetchMySubscriptions = doFetchMySubscriptions;
exports.doFetchRecommendedSubscriptions = doFetchRecommendedSubscriptions;
exports.doFetchRewardedContent = doFetchRewardedContent;
exports.doFetchTrendingUris = doFetchTrendingUris;
exports.doFetchViewCount = doFetchViewCount;
exports.doFilteredOutpointsSubscribe = doFilteredOutpointsSubscribe;
exports.doGenerateAuthToken = doGenerateAuthToken;
exports.doGetSync = doGetSync;
exports.doInstallNew = doInstallNew;
exports.doRemoveUnreadSubscription = doRemoveUnreadSubscription;
exports.doRemoveUnreadSubscriptions = doRemoveUnreadSubscriptions;
exports.doRewardList = doRewardList;
exports.doSetDefaultAccount = doSetDefaultAccount;
exports.doSetSync = doSetSync;
exports.doSetViewMode = doSetViewMode;
exports.doShowSuggestedSubs = doShowSuggestedSubs;
exports.doSyncApply = doSyncApply;
exports.doUpdateUnreadSubscriptions = doUpdateUnreadSubscriptions;
exports.doUserCheckEmailVerified = doUserCheckEmailVerified;
exports.doUserEmailNew = doUserEmailNew;
exports.doUserEmailToVerify = doUserEmailToVerify;
exports.doUserEmailVerify = doUserEmailVerify;
exports.doUserEmailVerifyFailure = doUserEmailVerifyFailure;
exports.doUserFetch = doUserFetch;
exports.doUserIdentityVerify = doUserIdentityVerify;
exports.doUserInviteNew = doUserInviteNew;
exports.doUserPhoneNew = doUserPhoneNew;
exports.doUserPhoneReset = doUserPhoneReset;
exports.doUserPhoneVerify = doUserPhoneVerify;
exports.doUserPhoneVerifyFailure = doUserPhoneVerifyFailure;
exports.doUserResendVerificationEmail = doUserResendVerificationEmail;
exports.filteredReducer = filteredReducer;
exports.homepageReducer = homepageReducer;
exports.makeSelectClaimRewardError = makeSelectClaimRewardError;
exports.makeSelectCostInfoForUri = makeSelectCostInfoForUri;
exports.makeSelectFetchingCostInfoForUri = makeSelectFetchingCostInfoForUri;
exports.makeSelectIsNew = makeSelectIsNew;
exports.makeSelectIsRewardClaimPending = makeSelectIsRewardClaimPending;
exports.makeSelectIsSubscribed = makeSelectIsSubscribed;
exports.makeSelectRewardAmountByType = makeSelectRewardAmountByType;
exports.makeSelectRewardByType = makeSelectRewardByType;
exports.makeSelectUnreadByChannel = makeSelectUnreadByChannel;
exports.makeSelectViewCountForUri = makeSelectViewCountForUri;
exports.rewards = rewards;
exports.rewardsReducer = rewardsReducer;
exports.selectAccessToken = selectAccessToken;
exports.selectAllCostInfoByUri = selectAllCostInfoByUri;
exports.selectAuthToken = selectAuthToken;
exports.selectAuthenticationIsPending = selectAuthenticationIsPending;
exports.selectBlackListedOutpoints = selectBlackListedOutpoints;
exports.selectClaimErrorsByType = selectClaimErrorsByType;
exports.selectClaimedRewards = selectClaimedRewards;
exports.selectClaimedRewardsById = selectClaimedRewardsById;
exports.selectClaimedRewardsByTransactionId = selectClaimedRewardsByTransactionId;
exports.selectClaimsPendingByType = selectClaimsPendingByType;
exports.selectEmailNewErrorMessage = selectEmailNewErrorMessage;
exports.selectEmailNewIsPending = selectEmailNewIsPending;
exports.selectEmailToVerify = selectEmailToVerify;
exports.selectEmailVerifyErrorMessage = selectEmailVerifyErrorMessage;
exports.selectEmailVerifyIsPending = selectEmailVerifyIsPending;
exports.selectEnabledChannelNotifications = selectEnabledChannelNotifications;
exports.selectFeaturedUris = selectFeaturedUris;
exports.selectFetchingCostInfo = selectFetchingCostInfo;
exports.selectFetchingFeaturedUris = selectFetchingFeaturedUris;
exports.selectFetchingRewards = selectFetchingRewards;
exports.selectFetchingTrendingUris = selectFetchingTrendingUris;
exports.selectFilteredOutpoints = selectFilteredOutpoints;
exports.selectFirstRunCompleted = selectFirstRunCompleted;
exports.selectGetSyncIsPending = selectGetSyncIsPending;
exports.selectHasSyncedWallet = selectHasSyncedWallet;
exports.selectHashChanged = selectHashChanged;
exports.selectIdentityVerifyErrorMessage = selectIdentityVerifyErrorMessage;
exports.selectIdentityVerifyIsPending = selectIdentityVerifyIsPending;
exports.selectIsAuthenticating = selectIsAuthenticating;
exports.selectIsFetchingSubscriptions = selectIsFetchingSubscriptions;
exports.selectIsFetchingSuggested = selectIsFetchingSuggested;
exports.selectPhoneNewErrorMessage = selectPhoneNewErrorMessage;
exports.selectPhoneNewIsPending = selectPhoneNewIsPending;
exports.selectPhoneToVerify = selectPhoneToVerify;
exports.selectPhoneVerifyErrorMessage = selectPhoneVerifyErrorMessage;
exports.selectPhoneVerifyIsPending = selectPhoneVerifyIsPending;
exports.selectReferralReward = selectReferralReward;
exports.selectRewardContentClaimIds = selectRewardContentClaimIds;
exports.selectSetSyncErrorMessage = selectSetSyncErrorMessage;
exports.selectSetSyncIsPending = selectSetSyncIsPending;
exports.selectShowSuggestedSubs = selectShowSuggestedSubs;
exports.selectSubscriptionClaims = selectSubscriptionClaims;
exports.selectSubscriptions = selectSubscriptions;
exports.selectSubscriptionsBeingFetched = selectSubscriptionsBeingFetched;
exports.selectSuggested = selectSuggested;
exports.selectSuggestedChannels = selectSuggestedChannels;
exports.selectSyncApplyErrorMessage = selectSyncApplyErrorMessage;
exports.selectSyncApplyIsPending = selectSyncApplyIsPending;
exports.selectSyncData = selectSyncData;
exports.selectSyncHash = selectSyncHash;
exports.selectTrendingUris = selectTrendingUris;
exports.selectUnclaimedRewardValue = selectUnclaimedRewardValue;
exports.selectUnclaimedRewards = selectUnclaimedRewards;
exports.selectUnclaimedRewardsByType = selectUnclaimedRewardsByType;
exports.selectUnreadAmount = selectUnreadAmount;
exports.selectUnreadByChannel = selectUnreadByChannel;
exports.selectUnreadSubscriptions = selectUnreadSubscriptions;
exports.selectUser = selectUser;
exports.selectUserCountryCode = selectUserCountryCode;
exports.selectUserEmail = selectUserEmail;
exports.selectUserInviteNewErrorMessage = selectUserInviteNewErrorMessage;
exports.selectUserInviteNewIsPending = selectUserInviteNewIsPending;
exports.selectUserInviteReferralLink = selectUserInviteReferralLink;
exports.selectUserInviteStatusFailed = selectUserInviteStatusFailed;
exports.selectUserInviteStatusIsPending = selectUserInviteStatusIsPending;
exports.selectUserInvitees = selectUserInvitees;
exports.selectUserInvitesRemaining = selectUserInvitesRemaining;
exports.selectUserIsPending = selectUserIsPending;
exports.selectUserIsRewardApproved = selectUserIsRewardApproved;
exports.selectUserIsVerificationCandidate = selectUserIsVerificationCandidate;
exports.selectUserPhone = selectUserPhone;
exports.selectViewMode = selectViewMode;
exports.setSubscriptionLatest = setSubscriptionLatest;
exports.statsReducer = statsReducer;
exports.subscriptionsReducer = subscriptions;
exports.syncReducer = syncReducer;
exports.userReducer = userReducer;
