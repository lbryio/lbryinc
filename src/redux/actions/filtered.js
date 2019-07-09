import Lbryio from 'lbryio';
import * as ACTIONS from 'constants/action_types';

const CHECK_FILTERED_CONTENT_INTERVAL = 60 * 60 * 1000;

export function doFetchFilteredOutpoints() {
  return dispatch => {
    dispatch({
      type: ACTIONS.FETCH_FILTERED_CONTENT_STARTED,
    });

    const success = ({ outpoints }) => {
      const splitedOutpoints = [];

      outpoints.forEach((outpoint, index) => {
        const [txid, nout] = outpoint.split(':');

        splitedOutpoints[index] = { txid, nout: Number.parseInt(nout, 10) };
      });
      dispatch({
        type: ACTIONS.FETCH_FILTERED_CONTENT_COMPLETED,
        data: {
          outpoints: splitedOutpoints,
          success: true,
        },
      });
    };

    const failure = ({ error }) => {
      dispatch({
        type: ACTIONS.FETCH_FILTERED_CONTENT_FAILED,
        data: {
          error,
          success: false,
        },
      });
    };

    Lbryio.call('file', 'list_filtered').then(success, failure);
  };
}

export function doFilteredOutpointsSubscribe() {
  return dispatch => {
    dispatch(doFetchFilteredOutpoints());
    setInterval(() => dispatch(doFetchFilteredOutpoints()), CHECK_FILTERED_CONTENT_INTERVAL);
  };
}
