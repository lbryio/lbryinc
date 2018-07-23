import { createSelector } from 'reselect';

const selectState = state => state.authToken || {};

export const selectAuthToken = createSelector(selectState, state => state.authToken);
