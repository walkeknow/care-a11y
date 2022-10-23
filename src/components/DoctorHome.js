import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Form = ({ setAppointment, setScreen }) => {
  const authContext = useContext(AuthContext);
  const [appt, setAppt] = useState({
    doctor_id: authContext.user.id,
    doctor_name: authContext.user.name,
  });

  const addAppointment = async () => {
    const url = "https://infinite-sands-83108.herokuapp.com/add-appointment";
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: process.env.REACT_APP_HEROKU_TOKEN,
      },
      body: JSON.stringify(appt),
    };

    try {
      const response = await fetch(url, settings);
      const result = await response.json();
      if (result.status) {
        console.log(result.data);
        setAppointment(result.data);
      }
      setScreen("doctorReview");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={"Form DoctorForm"}>
      <p className='FormTitle'>Appointment Details</p>
      <div className='Row'>
        <div className='InputCol'>
          <p className='Label'>Patient ID</p>
          <input
            placeholder='#'
            className='InputField'
            onChange={(e) => setAppt({ ...appt, patient_id: e.target.value })}
          />
        </div>
        <div className='InputCol'>
          <p className='Label'>Diagnosis ICD</p>
          <input
            placeholder='#'
            className='InputField'
            onChange={(e) =>
              setAppt({ ...appt, diagnosis_icd_code: e.target.value })
            }
          />
        </div>
        <div className='InputCol'>
          <p className='Label'>Procedure ICD</p>
          <input
            placeholder='#'
            className='InputField'
            onChange={(e) =>
              setAppt({ ...appt, procedure_icd_code: e.target.value })
            }
          />
        </div>
      </div>
      <p className='Label TextArea'>General Notes</p>
      <textarea
        className='GeneralNotes'
        onChange={(e) => setAppt({ ...appt, general_notes: e.target.value })}
      />
      <button onClick={addAppointment} type='button' className='Button'>
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
