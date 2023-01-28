import React from "react";
import { Button } from "antd";
import "./DentalServices.css";

function SelectAppointment(props) {
  return (
    <div className="container">
      <h2 className="header">
        What type of appointment would you like to schedule?
      </h2>
      <div className="buttons-container">
        <Button type="primary" shape="round" className="service-type-button">
          Exam and Cleaning
        </Button>
        <Button type="primary" shape="round" className="service-type-button">
          Cosmetic Consultation
        </Button>
        <Button type="primary" shape="round" className="service-type-button">
          Orthodontic Consultation
        </Button>
      </div>
    </div>
  );
}

export default SelectAppointment;
