import {GET_INTEREST, INTEREST_ERROR} from '../types';
import {instance} from '../authToken';
import axios from 'axios';

export const interest = () => {
  return dispatch => {
    try {
      instance.get('/v1/interests').then(response => {
        dispatch({
          type: GET_INTEREST,
          payload: response.data,
        });
      });
    } catch (error) {
      dispatch({
        type: INTEREST_ERROR,
        payload: error,
      });
    }
  };
};
