import React, { createContext, useContext, useMemo, useReducer } from "react";
import {
  getCurrentUser,
  getValidatedUser,
  postCurrentUser,
} from "../../api/authentification";
import persistence from "../../persistance";
import reducer, { INITIAL_STATE } from "./Reducer";
import { useNavigate } from "react-router-dom";
import {
  loginFailed,
  loginRequest,
  loginSuccess,
  logoutRequest,
  setLoader,
  unsetLoader,
} from "./Reducer/actions";
// tine datele providerului
const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const navigate = useNavigate();

  /**
   * se creeaza interactiunea cu api-ul,
   * se valideaza userul si se creeaza logarea
   * userul primeste permisiuni
   */
  //   function proceedLogin() {
  //     console.log("is logged");
  //   }

  const proceedLogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const rememberMe = data.get("remember") === "remember";
    if (rememberMe) {
    }

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(loginRequest());
    getValidatedUser(userData)
      .then((user) => {
        dispatch(loginSuccess(user));
        console.log(user);
        if (rememberMe) {
          persistence().setItem("currentUsername", user.username);
        }
      })
      .catch((error) => dispatch(loginFailed(error.message)))
      .finally(dispatch(unsetLoader()));
  };

  const fetchCurrentUser = (username) => {
    dispatch(setLoader());
    getCurrentUser(username)
      .then((user) => {
        dispatch(loginSuccess(user));
      })
      .finally(() => dispatch(unsetLoader()));
  };

  const handleLogout = () => {
    persistence().clear();
    dispatch(logoutRequest());
    navigate("/login");
  };

  const handleRegistration = ({ name, email, password }) => {
    const userData = {
      username: name,
      email: email,
      password: password,
    };

    getValidatedUser(userData)
      .then(() => alert("A user with this username or email already exists"))
      .catch(() => {
        postCurrentUser(userData);
        navigate("/login");
      });

    console.log({
      username: name,
      email: email,
      password: password,
    });
  };

  const providerData = useMemo(() => ({ state, dispatch }), [state]);
  const providerMethod = useMemo(
    () => ({
      proceedLogin,
      fetchCurrentUser,
      handleLogout,
      handleRegistration,
    }),
    [state]
  );

  return (
    <>
      <AuthContext.Provider value={{ providerData, providerMethod }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
