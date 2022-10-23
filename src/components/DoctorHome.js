import React from "react";

const Form = ({ setScreen }) => {
  return (
    <div className={"Form DoctorForm"}>
      <p className="FormTitle">Appointment Details</p>
      <div className="Row">
        <div className="InputCol">
          <p className="Label">Patient ID</p>
          <input placeholder="#" className="InputField" />
        </div>
        <div className="InputCol">
          <p className="Label">Diagnosis ICD</p>
          <input placeholder="#" className="InputField" />
        </div>
        <div className="InputCol">
          <p className="Label">Procedure ID</p>
          <input placeholder="#" className="InputField" />
        </div>
      </div>
      <p className="Label TextArea">General Notes</p>
      <textarea className="GeneralNotes" />
      <button
        onClick={() => setScreen("doctorReview")}
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
