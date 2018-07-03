import * as ACTIONS from 'constants/action_types';

const reducers = {};
const defaultState = {
  authenticating: false,
};

reducers[ACTIONS.GET_AUTH_TOKEN_STARTED] = state =>
  Object.assign({}, state, {
    authenticating: true,
  });

reducers[ACTIONS.GET_AUTH_TOKEN_COMPLETED] = (state, action) =>
  Object.assign({}, state, {
    authToken: action.authToken,
    authenticating: false,
  });

export function authReducer(state = defaultState, action) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}
