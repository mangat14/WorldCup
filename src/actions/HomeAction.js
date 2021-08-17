import {
  BASE_URL,
} from '../constants/index';

import * as type from '../actions/Types';

export const getLoginData = (type,email,ps) => {
  return function (dispatch) {
    fetch(BASE_URL + 'login', {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        "type": type,
        "email": email,
        "ps":ps
      })
    })
      .then((response) => {
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]);

      })
      .then(([statusCode,data])=> {
        dispatch(getLoginDataSuccess(statusCode,data));
      })
      .catch((error) => {
        dispatch(getLoginDataFail(error));
      }).done();
  };
};
export const getLoginDataSuccess = (statusCode,responseData) => {

  return {
    type: type.SUCCESS,
    response: responseData,
    statusCode:statusCode

  };
};
export const getLoginDataFail = (error) => {
  return {
    type: type.FAILURE,
    error: error.message,
  };
};
