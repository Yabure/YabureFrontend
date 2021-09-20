import {GET_INTEREST, INTEREST_ERROR} from '../types';

const initialState = {
  profile: [],
  loading: true,
  error: null,
  msg: null,
};

export function interest(state = initialState, action) {
  switch (action.type) {
    case GET_INTEREST:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case INTEREST_ERROR:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}
