import * as ACTIONS from 'constants/action_types';
import Lbryio from 'lbryio';
import { Lbry } from 'lbry-redux';

export function doSetSync(oldHash, newHash, data) {
  return dispatch => {
    dispatch({
      type: ACTIONS.SET_SYNC_STARTED,
    });

    console.log(`/sync/set with old_hash: ${oldHash}, new_hash: ${newHash}, data: ${data}`);
    Lbryio.call('sync', 'set', { old_hash: oldHash, new_hash: newHash, data }, 'post')
      .then(response => {
        console.log(response);
        if (!response.success) {
          return dispatch({
            type: ACTIONS.SET_SYNC_FAILED,
            data: { error: response.error },
          });
        }

        return dispatch({
          type: ACTIONS.SET_SYNC_COMPLETED,
          data: { syncHash: response.hash },
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: ACTIONS.SET_SYNC_FAILED,
          data: { error },
        });
      });
  };
}

export function doGetSync(password) {
  return dispatch => {
    dispatch({
      type: ACTIONS.GET_SYNC_STARTED,
    });

    Lbry.sync_hash().then(hash => {
      console.log(`/sync/get with hash: ${hash}, password: ${password}`);
      Lbryio.call('sync', 'get', { hash }, 'post')
        .then(response => {
          console.log(response);
          const data = { hasWallet: true };
          if (response.changed) {
            const syncHash = response.hash;
            data.syncHash = syncHash;
            Lbry.sync_apply({ password, data: response.data }).then(
              ({ hash: walletHash, data: walletData }) => {
                if (walletHash !== syncHash) {
                  // different local hash, need to synchronise
                  dispatch(doSetSync(syncHash, walletHash, walletData));
                }
              }
            );
          }

          dispatch({ type: ACTIONS.GET_SYNC_COMPLETED, data });
        })
        .catch(err => {
          console.log(err);
          // user doesn't have a synced wallet
          dispatch({
            type: ACTIONS.GET_SYNC_COMPLETED,
            data: { hasWallet: false, syncHash: null },
          });

          // call sync_apply to get data to sync
          // first time sync. use any string for old hash
          Lbry.sync_apply({ password }).then(({ hash: walletHash, data }) =>
            dispatch(doSetSync(null, walletHash, data))
          );
        });
    });
  };
}
