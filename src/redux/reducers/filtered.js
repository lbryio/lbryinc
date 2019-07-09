import * as ACTIONS from 'constants/action_types';
import { handleActions } from 'util/redux-utils';

const defaultState = {
  fetchingFilteredOutpoints: false,
  fetchingFilteredOutpointsSucceed: undefined,
  filteredOutpoints: undefined,
};

export const filteredReducer = handleActions(
  {
    [ACTIONS.FETCH_FILTERED_CONTENT_STARTED]: state => ({
      ...state,
      fetchingFilteredOutpoints: true,
    }),
    [ACTIONS.FETCH_FILTERED_CONTENT_COMPLETED]: (state, action) => {
      const { outpoints, success } = action.data;
      return {
        ...state,
        fetchingFilteredOutpoints: false,
        fetchingFilteredOutpointsSucceed: success,
        filteredOutpoints: outpoints,
      };
    },
    [ACTIONS.FETCH_FILTERED_CONTENT_FAILED]: (state, action) => {
      const { error, success } = action.data;

      return {
        ...state,
        fetchingFilteredOutpoints: false,
        fetchingFilteredOutpointsSucceed: success,
        fetchingFilteredOutpointsError: error,
      };
    },
  },
  defaultState
);
