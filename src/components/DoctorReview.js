import React from "react";

const Form = ({ setScreen }) => {
  return (
    <div className={"Form DoctorForm DoctorReview"}>
      <p className="FormTitle">Review Details</p>
      <p className="Label">Patient Name</p>
      <input className="InputField" />
      <p className="Label">Diagnosis Note</p>
      <input className="InputField" />
      <p className="Label">Procedure Note</p>
      <input className="InputField" />
      <p className="Label TextArea">General Notes</p>
      <textarea className="GeneralNotes" />
      <button
        onClick={() => setScreen("doctorReview")}
        type="button"
        className="Button"
      >
        Confirm
      </button>
    </div>
  );
};

function DoctorReview(props) {
  return (
    <div>
      <Form {...props} />
    </div>
  );
}

export default DoctorReview;
