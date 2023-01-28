import React, { useEffect } from "react";
import "./DentalServices.css";
import SelectAppointment from "./SelectAppointment";
import Footer from "../Shared/Footer";
import Logo from "../Shared/Logo";
import LogoutButton from "../Shared/LogoutButton";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../context/AuthProvider";

function DentalServices() {
  const navigate = useNavigate();
  const {
    providerData: {
      state: { isLoggedIn },
    },
  } = useAuthContext();

  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate("/login");
    } else navigate("/dental-services");
  }, [isLoggedIn]);

  return (
    <>
      <Logo />
      <SelectAppointment />
      {/* <div style={{ background: "#478f53" }} className="banner"></div> */}
      <LogoutButton />
      <Footer />
    </>
  );
}

export default DentalServices;
