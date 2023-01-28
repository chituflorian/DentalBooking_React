import React, { useState } from "react";
import DentalServices from "../DentalServices";
import LoginPageMaterialUI from "./LoginMaterialUI";

function LoginPage({ isLoggedIn, proceedLogin, errorMessage, isLoading }) {
  return (
    <div className="login-page">
      {isLoggedIn ? (
        <>
          <DentalServices></DentalServices>
        </>
      ) : (
        <LoginPageMaterialUI
          handleSubmit={proceedLogin}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

export default LoginPage;
