import React, { useState } from "react";
import SignUp from "./SignUp";
import "../styles/Body.css";
import DoctorHome from "./DoctorHome";
import PatientHome from "./PatientHome";
import DoctorReview from "./DoctorReview";

const BodyScreen = ({ screen, setScreen }) => {
  switch (screen) {
    case "auth":
      return <SignUp {...{ setScreen }} />;
    case "doctor":
      return <DoctorHome {...{ setScreen }} />;
    case "doctorReview":
      return <DoctorReview {...{ setScreen }} />;
    case "patient":
      return <PatientHome {...{ setScreen }} />;
    default:
      return <></>;
  }
};

function Body({ screen, setScreen }) {
  return (
    <div className="Body">
      <BodyScreen {...{ screen, setScreen }} />
    </div>
  );
}

export default Body;
