'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var lbryRedux = require('lbry-redux');
var querystring = _interopDefault(require('querystring'));
var reselect = require('reselect');

// Claims
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
const FETCH_COST_INFO_COMPLETED = 'FETCH_COST_INFO_COMPLETED'; // Stats

const FETCH_VIEW_COUNT_STARTED = 'FETCH_VIEW_COUNT_STARTED';
const FETCH_VIEW_COUNT_FAILED = 'FETCH_VIEW_COUNT_FAILED';
const FETCH_VIEW_COUNT_COMPLETED = 'FETCH_VIEW_COUNT_COMPLETED';
const FETCH_SUB_COUNT_STARTED = 'FETCH_SUB_COUNT_STARTED';
const FETCH_SUB_COUNT_FAILED = 'FETCH_SUB_COUNT_FAILED';
const FETCH_SUB_COUNT_COMPLETED = 'FETCH_SUB_COUNT_COMPLETED'; // Cross-device Sync

const GET_SYNC_STARTED = 'GET_SYNC_STARTED';
const GET_SYNC_COMPLETED = 'GET_SYNC_COMPLETED';
const GET_SYNC_FAILED = 'GET_SYNC_FAILED';
const SET_SYNC_STARTED = 'SET_SYNC_STARTED';
const SET_SYNC_FAILED = 'SET_SYNC_FAILED';
const SET_SYNC_COMPLETED = 'SET_SYNC_COMPLETED';
const SET_DEFAULT_ACCOUNT = 'SET_DEFAULT_ACCOUNT';
const SYNC_APPLY_STARTED = 'SYNC_APPLY_STARTED';
const SYNC_APPLY_COMPLETED = 'SYNC_APPLY_COMPLETED';
const SYNC_APPLY_FAILED = 'SYNC_APPLY_FAILED';
const SYNC_APPLY_BAD_PASSWORD = 'SYNC_APPLY_BAD_PASSWORD';
const SYNC_RESET = 'SYNC_RESET'; // Lbry.tv

const UPDATE_UPLOAD_PROGRESS = 'UPDATE_UPLOAD_PROGRESS'; // User

const GENERATE_AUTH_TOKEN_FAILURE = 'GENERATE_AUTH_TOKEN_FAILURE';
const GENERATE_AUTH_TOKEN_STARTED = 'GENERATE_AUTH_TOKEN_STARTED';
const GENERATE_AUTH_TOKEN_SUCCESS = 'GENERATE_AUTH_TOKEN_SUCCESS';

var action_types = /*#__PURE__*/Object.freeze({
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
  FETCH_SUB_COUNT_STARTED: FETCH_SUB_COUNT_STARTED,
  FETCH_SUB_COUNT_FAILED: FETCH_SUB_COUNT_FAILED,
  FETCH_SUB_COUNT_COMPLETED: FETCH_SUB_COUNT_COMPLETED,
  GET_SYNC_STARTED: GET_SYNC_STARTED,
  GET_SYNC_COMPLETED: GET_SYNC_COMPLETED,
  GET_SYNC_FAILED: GET_SYNC_FAILED,
  SET_SYNC_STARTED: SET_SYNC_STARTED,
  SET_SYNC_FAILED: SET_SYNC_FAILED,
  SET_SYNC_COMPLETED: SET_SYNC_COMPLETED,
  SET_DEFAULT_ACCOUNT: SET_DEFAULT_ACCOUNT,
  SYNC_APPLY_STARTED: SYNC_APPLY_STARTED,
  SYNC_APPLY_COMPLETED: SYNC_APPLY_COMPLETED,
  SYNC_APPLY_FAILED: SYNC_APPLY_FAILED,
  SYNC_APPLY_BAD_PASSWORD: SYNC_APPLY_BAD_PASSWORD,
  SYNC_RESET: SYNC_RESET,
  UPDATE_UPLOAD_PROGRESS: UPDATE_UPLOAD_PROGRESS,
  GENERATE_AUTH_TOKEN_FAILURE: GENERATE_AUTH_TOKEN_FAILURE,
  GENERATE_AUTH_TOKEN_STARTED: GENERATE_AUTH_TOKEN_STARTED,
  GENERATE_AUTH_TOKEN_SUCCESS: GENERATE_AUTH_TOKEN_SUCCESS
});

const YOUTUBE_SYNC_NOT_TRANSFERRED = 'not_transferred';
const YOUTUBE_SYNC_PENDING_TRANSFER = 'pending_transfer';
const YOUTUBE_SYNC_COMPLETED_TRANSFER = 'completed_transfer';
const YOUTUBE_SYNC_QUEUED = 'queued';
const YOUTUBE_SYNC_SYNCING = 'syncing';
const YOUTUBE_SYNC_SYNCED = 'synced';
const YOUTUBE_SYNC_FAILED = 'failed';
const YOUTUBE_SYNC_PENDINGUPGRADE = 'pendingupgrade';
const YOUTUBE_SYNC_ABANDONDED = 'abandoned';

var youtube = /*#__PURE__*/Object.freeze({
  YOUTUBE_SYNC_NOT_TRANSFERRED: YOUTUBE_SYNC_NOT_TRANSFERRED,
  YOUTUBE_SYNC_PENDING_TRANSFER: YOUTUBE_SYNC_PENDING_TRANSFER,
  YOUTUBE_SYNC_COMPLETED_TRANSFER: YOUTUBE_SYNC_COMPLETED_TRANSFER,
  YOUTUBE_SYNC_QUEUED: YOUTUBE_SYNC_QUEUED,
  YOUTUBE_SYNC_SYNCING: YOUTUBE_SYNC_SYNCING,
  YOUTUBE_SYNC_SYNCED: YOUTUBE_SYNC_SYNCED,
  YOUTUBE_SYNC_FAILED: YOUTUBE_SYNC_FAILED,
  YOUTUBE_SYNC_PENDINGUPGRADE: YOUTUBE_SYNC_PENDINGUPGRADE,
  YOUTUBE_SYNC_ABANDONDED: YOUTUBE_SYNC_ABANDONDED
});

const ALREADY_CLAIMED = 'once the invite reward has been claimed the referrer cannot be changed';
const REFERRER_NOT_FOUND = 'A lbry.tv account could not be found for the referrer you provided.';

var errors = /*#__PURE__*/Object.freeze({
  ALREADY_CLAIMED: ALREADY_CLAIMED,
  REFERRER_NOT_FOUND: REFERRER_NOT_FOUND
});

const Lbryio = {
  enabled: true,
  authenticationPromise: null,
  exchangePromise: null,
  exchangeLastFetched: null,
  CONNECTION_STRING: 'https://api.lbry.com/'
};
const EXCHANGE_RATE_TIMEOUT = 20 * 60 * 1000;
const INTERNAL_APIS_DOWN = 'internal_apis_down'; // We can't use env's because they aren't passed into node_modules

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

    if (response.status === 500) {
      return Promise.reject(INTERNAL_APIS_DOWN);
    }

    if (response) return response.json().then(json => {
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
    Object.keys(fullParams).forEach(key => {
      const value = fullParams[key];

      if (typeof value === 'object') {
        fullParams[key] = JSON.stringify(value);
      }
    });
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
  } else if (typeof window !== 'undefined') {
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
  } else {
    resolve(null);
  }
});

Lbryio.getCurrentUser = () => Lbryio.call('user', 'me');

Lbryio.authenticate = (domain, language) => {
  if (!Lbryio.enabled) {
    const params = {
      id: 1,
      primary_email: 'disabled@lbry.io',
      has_verified_email: true,
      is_identity_verified: true,
      is_reward_approved: false,
      language: language || 'en'
    };
    return new Promise(resolve => {
      resolve(params);
    });
  }

  if (Lbryio.authenticationPromise === null) {
    Lbryio.authenticationPromise = new Promise((resolve, reject) => {
      Lbryio.getAuthToken().then(token => {
        if (!token || token.length > 60) {
          return false;
        } // check that token works


        return Lbryio.getCurrentUser().then(user => user).catch(error => {
          if (error === INTERNAL_APIS_DOWN) {
            throw new Error('Internal APIS down');
          }

          return false;
        });
      }).then(user => {
        if (user) {
          return user;
        }

        return lbryRedux.Lbry.status().then(status => new Promise((res, rej) => {
          const appId = domain && domain !== 'lbry.tv' ? (domain.replace(/[.]/gi, '') + status.installation_id).slice(0, 66) : status.installation_id;
          Lbryio.call('user', 'new', {
            auth_token: '',
            language: language || 'en',
            app_id: appId
          }, 'post').then(response => {
            if (!response.auth_token) {
              throw new Error('auth_token was not set in the response');
            }

            const {
              store
            } = window;

            if (Lbryio.overrides.setAuthToken) {
              Lbryio.overrides.setAuthToken(response.auth_token);
            }

            if (store) {
              store.dispatch({
                type: GENERATE_AUTH_TOKEN_SUCCESS,
                data: {
                  authToken: response.auth_token
                }
              });
            }

            Lbryio.authToken = response.auth_token;
            return res(response);
          }).catch(error => rej(error));
        })).then(newUser => {
          if (!newUser) {
            return Lbryio.getCurrentUser();
          }

          return newUser;
        });
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

const apiBaseUrl = 'https://www.transifex.com/api/2/project';
const resource = 'app-strings';
function doTransifexUpload(contents, project, token, success, fail) {
  const url = `${apiBaseUrl}/${project}/resources/`;
  const updateUrl = `${apiBaseUrl}/${project}/resource/${resource}/content/`;
  const headers = {
    Authorization: `Basic ${Buffer.from(`api:${token}`).toString('base64')}`,
    'Content-Type': 'application/json'
  };
  const req = {
    accept_translations: true,
    i18n_type: 'KEYVALUEJSON',
    name: resource,
    slug: resource,
    content: contents
  };

  function handleResponse(text) {
    let json;

    try {
      // transifex api returns Python dicts for some reason.
      // Any way to get the api to return valid JSON?
      json = JSON.parse(text);
    } catch (e) {// ignore
    }

    if (success) {
      success(json || text);
    }
  }

  function handleError(err) {
    if (fail) {
      fail(err.message ? err.message : 'Could not upload strings resource to Transifex');
    }
  } // check if the resource exists


  fetch(updateUrl, {
    headers
  }).then(response => response.json()).then(() => {
    // perform an update
    fetch(updateUrl, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        content: contents
      })
    }).then(response => {
      if (response.status !== 200 && response.status !== 201) {
        throw new Error('failed to update transifex');
      }

      return response.text();
    }).then(handleResponse).catch(handleError);
  }).catch(() => {
    // resource doesn't exist, create a fresh resource
    fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(req)
    }).then(response => {
      if (response.status !== 200 && response.status !== 201) {
        throw new Error('failed to upload to transifex');
      }

      return response.text();
    }).then(handleResponse).catch(handleError);
  });
}

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
      const splitOutpoints = [];

      if (outpoints) {
        outpoints.forEach((outpoint, index) => {
          const [txid, nout] = outpoint.split(':');
          splitOutpoints[index] = {
            txid,
            nout: Number.parseInt(nout, 10)
          };
        });
      }

      dispatch({
        type: FETCH_BLACK_LISTED_CONTENT_COMPLETED,
        data: {
          outpoints: splitOutpoints,
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

    Lbryio.call('file', 'list_blocked', {
      auth_token: ''
    }).then(success, failure);
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
      let formattedOutpoints = [];

      if (outpoints) {
        formattedOutpoints = outpoints.map(outpoint => {
          const [txid, nout] = outpoint.split(':');
          return {
            txid,
            nout: Number.parseInt(nout, 10)
          };
        });
      }

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

    Lbryio.call('file', 'list_filtered', {
      auth_token: ''
    }).then(success, failure);
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
const doFetchSubCount = claimId => dispatch => {
  dispatch({
    type: FETCH_SUB_COUNT_STARTED
  });
  return Lbryio.call('subscription', 'sub_count', {
    claim_id: claimId
  }).then(result => {
    const subCount = result[0];
    dispatch({
      type: FETCH_SUB_COUNT_COMPLETED,
      data: {
        claimId,
        subCount
      }
    });
  }).catch(error => {
    dispatch({
      type: FETCH_SUB_COUNT_FAILED,
      data: error
    });
  });
};

const NO_WALLET_ERROR = 'no wallet found for this user';
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
      } else if (failure) {
        // no default account to set
        failure('Could not set a default account'); // fail
      }
    }).catch(err => {
      if (failure) {
        failure(err);
      }
    });
  };
}
function doSetSync(oldHash, newHash, data) {
  return dispatch => {
    dispatch({
      type: SET_SYNC_STARTED
    });
    return Lbryio.call('sync', 'set', {
      old_hash: oldHash,
      new_hash: newHash,
      data
    }, 'post').then(response => {
      if (!response.hash) {
        throw Error('No hash returned for sync/set.');
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
function doGetSync(passedPassword, callback) {
  const password = passedPassword === null || passedPassword === undefined ? '' : passedPassword;

  function handleCallback(error, hasNewData) {
    if (callback) {
      if (typeof callback !== 'function') {
        throw new Error('Second argument passed to "doGetSync" must be a function');
      }

      callback(error, hasNewData);
    }
  }

  return dispatch => {
    dispatch({
      type: GET_SYNC_STARTED
    });
    const data = {};
    lbryRedux.Lbry.wallet_status().then(status => {
      if (status.is_locked) {
        return lbryRedux.Lbry.wallet_unlock({
          password
        });
      } // Wallet is already unlocked


      return true;
    }).then(isUnlocked => {
      if (isUnlocked) {
        return lbryRedux.Lbry.sync_hash();
      }

      data.unlockFailed = true;
      throw new Error();
    }).then(hash => Lbryio.call('sync', 'get', {
      hash
    }, 'post')).then(response => {
      const syncHash = response.hash;
      data.syncHash = syncHash;
      data.syncData = response.data;
      data.changed = response.changed;
      data.hasSyncedWallet = true;

      if (response.changed) {
        return lbryRedux.Lbry.sync_apply({
          password,
          data: response.data,
          blocking: true
        });
      }
    }).then(response => {
      if (!response) {
        dispatch({
          type: GET_SYNC_COMPLETED,
          data
        });
        handleCallback(null, data.changed);
        return;
      }

      const {
        hash: walletHash,
        data: walletData
      } = response;

      if (walletHash !== data.syncHash) {
        // different local hash, need to synchronise
        dispatch(doSetSync(data.syncHash, walletHash, walletData));
      }

      dispatch({
        type: GET_SYNC_COMPLETED,
        data
      });
      handleCallback(null, data.changed);
    }).catch(syncAttemptError => {
      if (data.unlockFailed) {
        dispatch({
          type: GET_SYNC_FAILED,
          data: {
            error: syncAttemptError
          }
        });

        if (password !== '') {
          dispatch({
            type: SYNC_APPLY_BAD_PASSWORD
          });
        }

        handleCallback(syncAttemptError);
      } else if (data.hasSyncedWallet) {
        const error = syncAttemptError && syncAttemptError.message || 'Error getting synced wallet';
        dispatch({
          type: GET_SYNC_FAILED,
          data: {
            error
          }
        }); // Temp solution until we have a bad password error code
        // Don't fail on blank passwords so we don't show a "password error" message
        // before users have ever entered a password

        if (password !== '') {
          dispatch({
            type: SYNC_APPLY_BAD_PASSWORD
          });
        }

        handleCallback(error);
      } else {
        // user doesn't have a synced wallet
        dispatch({
          type: GET_SYNC_COMPLETED,
          data: {
            hasSyncedWallet: false,
            syncHash: null
          }
        }); // call sync_apply to get data to sync
        // first time sync. use any string for old hash

        if (syncAttemptError.message === NO_WALLET_ERROR) {
          lbryRedux.Lbry.sync_apply({
            password
          }).then(({
            hash: walletHash,
            data: syncApplyData
          }) => {
            dispatch(doSetSync('', walletHash, syncApplyData, password));
            handleCallback();
          }).catch(syncApplyError => {
            handleCallback(syncApplyError);
          });
        }
      }
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
function doResetSync() {
  return dispatch => new Promise(resolve => {
    dispatch({
      type: SYNC_RESET
    });
    resolve();
  });
}
function doSyncEncryptAndDecrypt(oldPassword, newPassword, encrypt) {
  return dispatch => {
    const data = {};
    return lbryRedux.Lbry.sync_hash().then(hash => Lbryio.call('sync', 'get', {
      hash
    }, 'post')).then(syncGetResponse => {
      data.oldHash = syncGetResponse.hash;
      return lbryRedux.Lbry.sync_apply({
        password: oldPassword,
        data: syncGetResponse.data
      });
    }).then(() => {
      if (encrypt) {
        dispatch(lbryRedux.doWalletEncrypt(newPassword));
      } else {
        dispatch(lbryRedux.doWalletDecrypt());
      }
    }).then(() => lbryRedux.Lbry.sync_apply({
      password: newPassword
    })).then(syncApplyResponse => {
      if (syncApplyResponse.hash !== data.oldHash) {
        return dispatch(doSetSync(data.oldHash, syncApplyResponse.hash, syncApplyResponse.data));
      }
    }).catch(console.error);
  };
}

//      
const doUpdateUploadProgress = (progress, params, xhr) => dispatch => dispatch({
  type: UPDATE_UPLOAD_PROGRESS,
  data: {
    progress,
    params,
    xhr
  }
});

const reducers = {};
const defaultState = {
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

function authReducer(state = defaultState, action) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

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

const defaultState$1 = {
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
}, defaultState$1);

const defaultState$2 = {
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
}, defaultState$2);

const defaultState$3 = {
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
}, defaultState$3);

const defaultState$4 = {
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
}, defaultState$4);

const defaultState$5 = {
  fetchingViewCount: false,
  viewCountError: undefined,
  viewCountById: {},
  fetchingSubCount: false,
  subCountError: undefined,
  subCountById: {}
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
  },
  [FETCH_SUB_COUNT_STARTED]: state => ({ ...state,
    fetchingSubCount: true
  }),
  [FETCH_SUB_COUNT_FAILED]: (state, action) => ({ ...state,
    subCountError: action.data
  }),
  [FETCH_SUB_COUNT_COMPLETED]: (state, action) => {
    const {
      claimId,
      subCount
    } = action.data;
    const subCountById = { ...state.subCountById,
      [claimId]: subCount
    };
    return { ...state,
      fetchingSubCount: false,
      subCountById
    };
  }
}, defaultState$5);

const reducers$1 = {};
const defaultState$6 = {
  hasSyncedWallet: false,
  syncHash: null,
  syncData: null,
  setSyncErrorMessage: null,
  getSyncErrorMessage: null,
  syncApplyErrorMessage: '',
  syncApplyIsPending: false,
  syncApplyPasswordError: false,
  getSyncIsPending: false,
  setSyncIsPending: false,
  hashChanged: false
};

reducers$1[GET_SYNC_STARTED] = state => Object.assign({}, state, {
  getSyncIsPending: true,
  getSyncErrorMessage: null
});

reducers$1[GET_SYNC_COMPLETED] = (state, action) => Object.assign({}, state, {
  syncHash: action.data.syncHash,
  syncData: action.data.syncData,
  hasSyncedWallet: action.data.hasSyncedWallet,
  getSyncIsPending: false,
  hashChanged: action.data.hashChanged
});

reducers$1[GET_SYNC_FAILED] = (state, action) => Object.assign({}, state, {
  getSyncIsPending: false,
  getSyncErrorMessage: action.data.error
});

reducers$1[SET_SYNC_STARTED] = state => Object.assign({}, state, {
  setSyncIsPending: true,
  setSyncErrorMessage: null
});

reducers$1[SET_SYNC_FAILED] = (state, action) => Object.assign({}, state, {
  setSyncIsPending: false,
  setSyncErrorMessage: action.data.error
});

reducers$1[SET_SYNC_COMPLETED] = (state, action) => Object.assign({}, state, {
  setSyncIsPending: false,
  setSyncErrorMessage: null,
  hasSyncedWallet: true,
  // sync was successful, so the user has a synced wallet at this point
  syncHash: action.data.syncHash
});

reducers$1[SYNC_APPLY_STARTED] = state => Object.assign({}, state, {
  syncApplyPasswordError: false,
  syncApplyIsPending: true,
  syncApplyErrorMessage: ''
});

reducers$1[SYNC_APPLY_COMPLETED] = state => Object.assign({}, state, {
  syncApplyIsPending: false,
  syncApplyErrorMessage: ''
});

reducers$1[SYNC_APPLY_FAILED] = (state, action) => Object.assign({}, state, {
  syncApplyIsPending: false,
  syncApplyErrorMessage: action.data.error
});

reducers$1[SYNC_APPLY_BAD_PASSWORD] = state => Object.assign({}, state, {
  syncApplyPasswordError: true
});

reducers$1[SYNC_RESET] = () => defaultState$6;

function syncReducer(state = defaultState$6, action) {
  const handler = reducers$1[action.type];
  if (handler) return handler(state, action);
  return state;
}

//      
/*
test mock:
  currentUploads: {
    'test#upload': {
      progress: 50,
      params: {
        name: 'steve',
        thumbnail_url: 'https://dev2.spee.ch/4/KMNtoSZ009fawGz59VG8PrID.jpeg',
      },
    },
  },
 */

const reducers$2 = {};
const defaultState$7 = {
  currentUploads: {}
};

reducers$2[UPDATE_UPLOAD_PROGRESS] = (state, action) => {
  const {
    progress,
    params,
    xhr
  } = action.data;
  const key = params.channel ? `${params.name}#${params.channel}` : `${params.name}#anonymous`;
  let currentUploads;

  if (!progress) {
    currentUploads = Object.assign({}, state.currentUploads);
    Object.keys(currentUploads).forEach(k => {
      if (k === key) {
        delete currentUploads[key];
      }
    });
  } else {
    currentUploads = Object.assign({}, state.currentUploads);
    currentUploads[key] = {
      progress,
      params,
      xhr
    };
  }

  return { ...state,
    currentUploads
  };
};

function webReducer(state = defaultState$7, action) {
  const handler = reducers$2[action.type];
  if (handler) return handler(state, action);
  return state;
}

const selectState = state => state.auth || {};

const selectAuthToken = reselect.createSelector(selectState, state => state.authToken);
const selectIsAuthenticating = reselect.createSelector(selectState, state => state.authenticating);

const selectState$1 = state => state.costInfo || {};
const selectAllCostInfoByUri = reselect.createSelector(selectState$1, state => state.byUri || {});
const makeSelectCostInfoForUri = uri => reselect.createSelector(selectAllCostInfoByUri, costInfos => costInfos && costInfos[uri]);
const selectFetchingCostInfo = reselect.createSelector(selectState$1, state => state.fetching || {});
const makeSelectFetchingCostInfoForUri = uri => reselect.createSelector(selectFetchingCostInfo, fetchingByUri => fetchingByUri && fetchingByUri[uri]);

const selectState$2 = state => state.blacklist || {};
const selectBlackListedOutpoints = reselect.createSelector(selectState$2, state => state.blackListedOutpoints);
const selectBlacklistedOutpointMap = reselect.createSelector(selectBlackListedOutpoints, outpoints => outpoints ? outpoints.reduce((acc, val) => {
  const outpoint = `${val.txid}:${val.nout}`;
  return { ...acc,
    [outpoint]: 1
  };
}, {}) : {});

const selectState$3 = state => state.filtered || {};
const selectFilteredOutpoints = reselect.createSelector(selectState$3, state => state.filteredOutpoints);
const selectFilteredOutpointMap = reselect.createSelector(selectFilteredOutpoints, outpoints => outpoints ? outpoints.reduce((acc, val) => {
  const outpoint = `${val.txid}:${val.nout}`;
  return { ...acc,
    [outpoint]: 1
  };
}, {}) : {});

const selectState$4 = state => state.homepage || {};

const selectFeaturedUris = reselect.createSelector(selectState$4, state => state.featuredUris);
const selectFetchingFeaturedUris = reselect.createSelector(selectState$4, state => state.fetchingFeaturedContent);
const selectTrendingUris = reselect.createSelector(selectState$4, state => state.trendingUris);
const selectFetchingTrendingUris = reselect.createSelector(selectState$4, state => state.fetchingTrendingContent);

const selectState$5 = state => state.stats || {};

const selectViewCount = reselect.createSelector(selectState$5, state => state.viewCountById);
const selectSubCount = reselect.createSelector(selectState$5, state => state.subCountById);
const makeSelectViewCountForUri = uri => reselect.createSelector(lbryRedux.makeSelectClaimForUri(uri), selectViewCount, (claim, viewCountById) => claim ? viewCountById[claim.claim_id] || 0 : 0);
const makeSelectSubCountForUri = uri => reselect.createSelector(lbryRedux.makeSelectClaimForUri(uri), selectSubCount, (claim, subCountById) => claim ? subCountById[claim.claim_id] || 0 : 0);

const selectState$6 = state => state.sync || {};

const selectHasSyncedWallet = reselect.createSelector(selectState$6, state => state.hasSyncedWallet);
const selectSyncHash = reselect.createSelector(selectState$6, state => state.syncHash);
const selectSyncData = reselect.createSelector(selectState$6, state => state.syncData);
const selectSetSyncErrorMessage = reselect.createSelector(selectState$6, state => state.setSyncErrorMessage);
const selectGetSyncErrorMessage = reselect.createSelector(selectState$6, state => state.getSyncErrorMessage);
const selectGetSyncIsPending = reselect.createSelector(selectState$6, state => state.getSyncIsPending);
const selectSetSyncIsPending = reselect.createSelector(selectState$6, state => state.setSyncIsPending);
const selectHashChanged = reselect.createSelector(selectState$6, state => state.hashChanged);
const selectSyncApplyIsPending = reselect.createSelector(selectState$6, state => state.syncApplyIsPending);
const selectSyncApplyErrorMessage = reselect.createSelector(selectState$6, state => state.syncApplyErrorMessage);
const selectSyncApplyPasswordError = reselect.createSelector(selectState$6, state => state.syncApplyPasswordError);

const selectState$7 = state => state.web || {};

const selectCurrentUploads = reselect.createSelector(selectState$7, state => state.currentUploads);
const selectUploadCount = reselect.createSelector(selectCurrentUploads, currentUploads => currentUploads && Object.keys(currentUploads).length);

exports.ERRORS = errors;
exports.LBRYINC_ACTIONS = action_types;
exports.Lbryio = Lbryio;
exports.YOUTUBE_STATUSES = youtube;
exports.authReducer = authReducer;
exports.blacklistReducer = blacklistReducer;
exports.costInfoReducer = costInfoReducer;
exports.doBlackListedOutpointsSubscribe = doBlackListedOutpointsSubscribe;
exports.doCheckSync = doCheckSync;
exports.doFetchCostInfoForUri = doFetchCostInfoForUri;
exports.doFetchFeaturedUris = doFetchFeaturedUris;
exports.doFetchSubCount = doFetchSubCount;
exports.doFetchTrendingUris = doFetchTrendingUris;
exports.doFetchViewCount = doFetchViewCount;
exports.doFilteredOutpointsSubscribe = doFilteredOutpointsSubscribe;
exports.doGenerateAuthToken = doGenerateAuthToken;
exports.doGetSync = doGetSync;
exports.doResetSync = doResetSync;
exports.doSetDefaultAccount = doSetDefaultAccount;
exports.doSetSync = doSetSync;
exports.doSyncApply = doSyncApply;
exports.doSyncEncryptAndDecrypt = doSyncEncryptAndDecrypt;
exports.doTransifexUpload = doTransifexUpload;
exports.doUpdateUploadProgress = doUpdateUploadProgress;
exports.filteredReducer = filteredReducer;
exports.homepageReducer = homepageReducer;
exports.makeSelectCostInfoForUri = makeSelectCostInfoForUri;
exports.makeSelectFetchingCostInfoForUri = makeSelectFetchingCostInfoForUri;
exports.makeSelectSubCountForUri = makeSelectSubCountForUri;
exports.makeSelectViewCountForUri = makeSelectViewCountForUri;
exports.selectAllCostInfoByUri = selectAllCostInfoByUri;
exports.selectAuthToken = selectAuthToken;
exports.selectBlackListedOutpoints = selectBlackListedOutpoints;
exports.selectBlacklistedOutpointMap = selectBlacklistedOutpointMap;
exports.selectCurrentUploads = selectCurrentUploads;
exports.selectFeaturedUris = selectFeaturedUris;
exports.selectFetchingCostInfo = selectFetchingCostInfo;
exports.selectFetchingFeaturedUris = selectFetchingFeaturedUris;
exports.selectFetchingTrendingUris = selectFetchingTrendingUris;
exports.selectFilteredOutpointMap = selectFilteredOutpointMap;
exports.selectFilteredOutpoints = selectFilteredOutpoints;
exports.selectGetSyncErrorMessage = selectGetSyncErrorMessage;
exports.selectGetSyncIsPending = selectGetSyncIsPending;
exports.selectHasSyncedWallet = selectHasSyncedWallet;
exports.selectHashChanged = selectHashChanged;
exports.selectIsAuthenticating = selectIsAuthenticating;
exports.selectSetSyncErrorMessage = selectSetSyncErrorMessage;
exports.selectSetSyncIsPending = selectSetSyncIsPending;
exports.selectSyncApplyErrorMessage = selectSyncApplyErrorMessage;
exports.selectSyncApplyIsPending = selectSyncApplyIsPending;
exports.selectSyncApplyPasswordError = selectSyncApplyPasswordError;
exports.selectSyncData = selectSyncData;
exports.selectSyncHash = selectSyncHash;
exports.selectTrendingUris = selectTrendingUris;
exports.selectUploadCount = selectUploadCount;
exports.statsReducer = statsReducer;
exports.syncReducer = syncReducer;
exports.webReducer = webReducer;
