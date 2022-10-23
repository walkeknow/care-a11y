import React, { useState } from "react";
import SignUp from "./SignUp";
import "../styles/Body.css";
import DoctorHome from "./DoctorHome";

const BodyScreen = ({ screen, setScreen }) => {
  switch (screen) {
    case "auth":
      return <SignUp {...{ setScreen }} />;
    case "doctor":
      return <DoctorHome />;
    default:
      return <></>;
  }
};

function Body({screen, setScreen}) {
  return (
    <div className="Body">
      <BodyScreen {...{ screen, setScreen }} />
    </div>
  );
}

export default Body;
