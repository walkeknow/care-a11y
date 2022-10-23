import React from "react";

const Form = ({ setScreen }) => {
  return (
    <div className={"Form DoctorForm"}>
     <div className="Row">
          <div className="InputCol">
              <p className="Label">Patient ID</p>
              <input placeholder="#"  className="InputField" />
          </div>
          <div className="InputCol">
              <p className="Label">Diagnosis ID</p>
              <input placeholder="#" className="InputField" />
          </div>
          <div className="InputCol">
              <p className="Label">Procedure ID</p>
              <input placeholder="#"  className="InputField" />
          </div>
     </div>
      <p className="Label">General Notes</p>
      <textarea className="GeneralNotes" />
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
