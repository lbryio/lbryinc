import { createSelector } from 'reselect';

export const selectState = state => state.blacklist || {};

export const selectBlackListedOutpoints = createSelector(
  selectState,
  state => state.blackListedOutpoints
);

export const selectBlacklistedOutpointMap = createSelector(selectBlackListedOutpoints, outpoints =>
  outpoints.reduce((acc, val) => {
    const outpoint = `${val.txid}:${val.nout}`;
    return {
      ...acc,
      [outpoint]: 1,
    };
  }, {})
);
