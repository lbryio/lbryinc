import { createSelector } from 'reselect';
import { makeSelectClaimForUri } from 'lbry-redux';

const selectState = state => state.stats || {};
export const selectViewCount = createSelector(selectState, state => state.viewCountById);

export const makeSelectViewCountForUri = uri =>
  createSelector(
    makeSelectClaimForUri(uri),
    selectViewCount,
    (claim, viewCountById) => viewCountById[claim.claim_id] || 0
  );
