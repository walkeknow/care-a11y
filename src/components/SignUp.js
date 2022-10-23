import React from "react";
import Footer from "./Footer";
import "../styles/SignUp.css";

const Form = ({ setScreen }) => {
    

  return (
    <div className="Form">
      <p className="Label">ID</p>
      <input className="InputField" />
      <p className="Label">User Type</p>
      <select className="InputField">
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select>
      <p className="Label">Password</p>
      <input className="InputField" />
      <button
        onClick={() => setScreen("doctor")}
        type="button"
        className="Button"
      >
        Submit
      </button>
    </div>
  );
};

function SignUp(props) {
  return (
    <div>
      <Form {...props} />
    </div>
  );
}

export default SignUp;
