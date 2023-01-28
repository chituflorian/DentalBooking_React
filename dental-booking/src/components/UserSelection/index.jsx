import React from "react";
import Logo from "../Shared/Logo";
import "./UserSelection.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function UserSelection() {
  const navigate = useNavigate();

  return (
    <>
      <Logo />
      <div className="container">
        <Button
          onClick={() => {
            navigate("/login");
          }}
          type="primary"
          shape="round"
          className="button"
        >
          Exististing User
        </Button>
        <Button
          onClick={() => {
            navigate("/register");
          }}
          type="primary"
          shape="round"
          className="button"
        >
          New Users
        </Button>
      </div>
    </>
  );
}

export default UserSelection;
