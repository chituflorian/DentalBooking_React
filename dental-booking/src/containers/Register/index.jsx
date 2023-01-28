import React from "react";
import SignupPage from "../../components/RegisterPage/SignupPage.tsx";
import { useAuthContext } from "../../context/AuthProvider";

export default function RegisterContainer() {
  const {
    providerMethod: { handleRegistration },
  } = useAuthContext();
  return <SignupPage handleSubmit={handleRegistration} />;
}
