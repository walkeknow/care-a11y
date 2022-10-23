import React from "react";

const Form = ({ setScreen }) => {
  return (
    <div className="Form">
      <p className="Label">Patient ID</p>
      <input className="InputField" />
      <p className="Label">Diagnosis ID</p>
      <input className="InputField" />
      <p className="Label">Procedure ID</p>
      <input className="InputField" />
      <p className="Label">General Notes</p>
      <textarea className="InputField" />
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

function DoctorHome(props) {
  return (
    <div>
      <Form {...props} />
    </div>
  );
}

export default DoctorHome;
