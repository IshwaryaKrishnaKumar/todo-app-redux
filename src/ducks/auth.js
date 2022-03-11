

import { combineReducers } from "redux";
import { login as loginApi } from "../api";

const SET_TOKEN = "SET_TOKEN";
const CLEAR_TOKEN = "CLEAR_TOKEN";
const LOGIN_LOADING = "LOGIN_LOADING";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILED = "LOGIN_FAILED";


function token(state = null, action) {
  switch (action.type) {
    case SET_TOKEN:
      return action.token;
    case CLEAR_TOKEN:
      return null;
    default:
      return state;
  }
}

function errorMsg(state = null, action) {
  switch (action.type) {
    case LOGIN_FAILED:
      return action.message;
    case LOGIN_SUCCESS:
    case LOGIN_LOADING:
      return "";
    default:
      return state;
  }
}


export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export const clearToken = () => ({
  type: CLEAR_TOKEN,
});

export const loginFailed = (message) => ({
  type: LOGIN_FAILED,
  message,
});

export const authReducer = combineReducers({ token, errorMsg });


export const getToken = (state) => state.authReducer.token;


export function login(email, password) {
  return (dispatch) => {
    dispatch({ type: LOGIN_LOADING });
    loginApi(email, password)
      .then((resp) => {
        if (resp.status === 200) {
          console.log(resp.data);
          dispatch(setToken(resp.data.token));
          localStorage.setItem("token", resp.data.token);
        } else {
          dispatch(loginFailed("Unable to Login"));
        }
      })
      .catch((e) => {
        dispatch(loginFailed("Unable to Login"));
        console.log(e);
      });
  };
}