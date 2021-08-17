import * as types from '../actions/Types';
import {Strings} from '../utils/Strings';

const initialState = {
  response: null,
  error: null,

};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS:

      if (action.statusCode) {
        if (action.statusCode === 200) {
          return {
            ...state,  response: action.response, error: null
          };
        } else if (action.statusCode === 400) {
          return {
            ...state,   response: null, error: Strings.ERROR_400
          };
        }else if (action.statusCode === 401) {
          return {
            ...state,   response: null, error: Strings.ERROR_401
          };
        } else if (action.statusCode === 429) {
          return {
            ...state,   response: null, error: Strings.ERROR_429
          };
        }else {
          return {...state,  response: null, error: Strings.ERROR};
        }
      }else{
        return {...state,   response: null, error: Strings.ERROR};

      }


    case types.FAILURE:
      return {...state,  error: action.error};
    default:
      return state;
  }
};

export default HomeReducer;
