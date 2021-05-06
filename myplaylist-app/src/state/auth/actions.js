import * as api from "api";
import { getAccessToken } from "./selectors";

export const LOGIN = "LOGIN";

const storeUser = (userData) => ({
  type: LOGIN,
  payload: userData,
});

export const login = ({ username, password }) => {
  return async (dispatch) => {
    const userData = await api.login(username, password);
    dispatch(storeUser(userData));
  };
};

export const requestWithToken = (fn, ...params) => {
  return async (dispatch, getState) => {
    const token = getAccessToken(getState());
    return fn(...params, token);
  };
};
