import React from "react";
import Footer from "./Footer";
import "../styles/SignUp.css";

const Form = () => {
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
      <button type="button" className="Button">Submit</button>
    </div>
  );
};

function SignUp() {
  return (
    <div>
      <Form />
      <Footer />
    </div>
  );
}

export default SignUp;
