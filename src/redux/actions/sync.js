import * as ACTIONS from 'constants/action_types';
import Lbryio from 'lbryio';
import { Lbry } from 'lbry-redux';

export function doSetSync(oldHash, newHash, data) {
  return dispatch => {
    dispatch({
      type: ACTIONS.SET_SYNC_STARTED,
    });

    Lbryio.call('sync', 'set', { old_hash: oldHash, new_hash: newHash, data }, 'post').then(
      response => {
        if (!response.success) {
          return dispatch({
            type: ACTIONS.SET_SYNC_FAILED,
            data: { error: response.error },
          });
        }

        const syncHash = response.data ? response.data.hash : newHash;
        return dispatch({
          type: ACTIONS.SET_SYNC_COMPLETED,
          data: { syncHash },
        });
      }
    );
  };
}

export function doGetSync(password) {
  return dispatch => {
    dispatch({
      type: ACTIONS.GET_SYNC_STARTED,
    });

    Lbry.sync_hash().then(hash => {
      Lbryio.call('sync', 'get', { hash }, 'post')
        .then(response => {
          if (!response.success) {
            // user doesn't have a synced wallet
            dispatch({
              type: ACTIONS.GET_SYNC_COMPLETED,
              data: { hasWallet: false, syncHash: null },
            });

            // call sync_apply to get data to sync (first time sync)
            Lbry.sync_apply({ password }).then(({ hash: walletHash, data }) =>
              dispatch(doSetSync('null', walletHash, data))
            );
            return;
          }

          const data = { hasWallet: true };
          if (response.changed) {
            const syncHash = response.data.hash;
            data.syncHash = syncHash;
            Lbry.sync_apply({ password, data: response.data.data }).then(
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
        .catch(() => {
          // user doesn't have a synced wallet
          dispatch({
            type: ACTIONS.GET_SYNC_COMPLETED,
            data: { hasWallet: false, syncHash: null },
          });

          // call sync_apply to get data to sync
          // first time sync. use any string for old hash
          Lbry.sync_apply({ password }).then(({ hash: walletHash, data }) =>
            dispatch(doSetSync('null', walletHash, data))
          );
        });
    });
  };
}
