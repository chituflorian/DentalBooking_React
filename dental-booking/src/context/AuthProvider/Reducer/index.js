import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SET_LOADER,
  UNSET_LOADER,
  LOGOUT,
} from "./actionTypes";

export const INITIAL_STATE = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: "",
};

const reducer = (state, action) => {
  const { type } = action || {};
  const { payload } = action;

  if (!type) throw new Error("Action type must be defined");

  switch (type) {
    case LOGIN_SUCCESS:
      return { ...state, error: "", user: payload, isLoggedIn: true };
    case LOGIN_FAILED:
      return { ...state, user: null, error: payload, isLoggedIn: false };
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, error: "" };
    case SET_LOADER:
      return { ...state, isLoading: true };
    case UNSET_LOADER:
      return { ...state, isLoading: false };
    case LOGOUT:
      return { ...state, user: null, isLoggedIn: false };
    default:
      throw new Error("Did you misspell an action type?");
  }
};

export default reducer;
