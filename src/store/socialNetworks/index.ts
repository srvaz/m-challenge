import { SOCIAL_NETWORK_TYPES, SocialNetworkState } from './types';

import { Reducer } from '@reduxjs/toolkit';

const INITIAL_STATE: SocialNetworkState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<SocialNetworkState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SOCIAL_NETWORK_TYPES.LOAD_REQUEST:
      return { ...state, loading: true };
    case SOCIAL_NETWORK_TYPES.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case SOCIAL_NETWORK_TYPES.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
}

export default reducer;