import * as ACTIONS from 'constants/action_types';
import Lbryio from 'lbryio';

export function doNewInstallation(installationId) {
  return dispatch => {
    dispatch({
      type: ACTIONS.GET_AUTH_TOKEN_STARTED,
    });

    Lbryio.call(
      'user',
      'new',
      {
        auth_token: '',
        language: 'en',
        app_id: installationId,
      },
      'post'
    )
      .then(response => {
        if (!response.auth_token) {
          dispatch({
            type: ACTIONS.GET_AUTH_TOKEN_COMPLETED,
            data: { authToken: null },
          });
        } else {
          dispatch({
            type: ACTIONS.GET_AUTH_TOKEN_COMPLETED,
            data: { authToken: response.auth_token },
          });
        }
      })
      .catch(() => {
        dispatch({
          type: ACTIONS.GET_AUTH_TOKEN_COMPLETED,
          data: { authToken: null },
        });
      });
  };
}
