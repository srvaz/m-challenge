import { SCHEDULE_TYPES, SchedulingState } from './types';

import { Reducer } from '@reduxjs/toolkit';

const INITIAL_STATE: SchedulingState = {
  // posts: [{
  //   id: 1,
  //   media: 'penis',
  //   publicationDate: '2017-01-01',
  //   status: 1,
  //   socialNetwork: {
  //     id: 1,
  //     icon: 'instagram',
  //     name: 'Instagram',
  //     status: SOCIAL_NETWORK_STATUS.ENABLED,
  //   },
  //   text: 'PENIS',
  // }],
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<SchedulingState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SCHEDULE_TYPES.LOAD_REQUEST:
      return { ...state, loading: true };
    case SCHEDULE_TYPES.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case SCHEDULE_TYPES.LOAD_FAILURE:
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