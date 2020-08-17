import { createSelector } from 'reselect';

export const selectState = state => state.filtered || {};

export const selectFilteredOutpoints = createSelector(
  selectState,
  state => state.filteredOutpoints
);

export const selectFilteredOutpointMap = createSelector(
  selectFilteredOutpoints,
  outpoints =>
    outpoints
      ? outpoints.reduce((acc, val) => {
          const outpoint = `${val.txid}:${val.nout}`;
          return {
            ...acc,
            [outpoint]: 1,
          };
        }, {})
      : {}
);
