import { createSelector } from 'reselect';

const selectState = state => state.sync || {};

export const selectHasSyncedWallet = createSelector(selectState, state => state.hasSyncedWallet);

export const selectSyncHash = createSelector(selectState, state => state.syncHash);

export const selectSetSyncErrorMessage = createSelector(
  selectState,
  state => state.setSyncErrorMessage
);

export const selectIsRetrievingSync = createSelector(selectState, state => state.retrievingSync);

export const selectIsSettingSync = createSelector(selectState, state => state.settingSync);
