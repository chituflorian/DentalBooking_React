import React from "react";
import LoginPage from "../../components/LoginPage";
import { useAuthContext } from "../../context/AuthProvider";

function LoginPageContainer() {
  const {
    providerMethod: { proceedLogin },
    providerData: {
      state: { isLoggedIn, isLoading, error },
    },
  } = useAuthContext();
  return (
    <LoginPage
      isLoggedIn={isLoggedIn}
      isLoading={isLoading}
      proceedLogin={proceedLogin}
      errorMessage={error}
    />
  );
}

export default LoginPageContainer;
