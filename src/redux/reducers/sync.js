import * as ACTIONS from 'constants/action_types';

const reducers = {};
const defaultState = {
  hasSyncedWallet: false,
  syncHash: null,
  setSyncErrorMessage: null,
  retrievingSync: false,
  settingSync: false,
};

reducers[ACTIONS.GET_SYNC_STARTED] = state =>
  Object.assign({}, state, {
    retrievingSync: true,
  });

reducers[ACTIONS.GET_SYNC_COMPLETED] = (state, action) =>
  Object.assign({}, state, {
    syncHash: action.data.syncHash,
    hasSyncedWallet: action.data.hasSyncedWallet,
    retrievingSync: false,
  });

reducers[ACTIONS.SET_SYNC_STARTED] = state =>
  Object.assign({}, state, {
    settingSync: true,
    setSyncErrorMessage: null,
  });

reducers[ACTIONS.SET_SYNC_FAILED] = (state, action) =>
  Object.assign({}, state, {
    settingSync: true,
    setSyncErrorMessage: action.data.error,
  });

reducers[ACTIONS.SET_SYNC_COMPLETED] = (state, action) =>
  Object.assign({}, state, {
    settingSync: false,
    setSyncErrorMessage: null,
    hasSyncedWallet: true, // sync was successful, so the user has a synced wallet at this point
    syncHash: action.data.syncHash,
  });

export function syncReducer(state = defaultState, action) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}
