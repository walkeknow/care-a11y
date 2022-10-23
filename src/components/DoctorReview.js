import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Form = ({ appointment, setAppointment, setScreen }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setScreen("doctor");
  };

  const submitApptDetails = async () => {
    const url = "https://infinite-sands-83108.herokuapp.com/edit-text";
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: process.env.REACT_APP_HEROKU_TOKEN,
      },
      body: JSON.stringify(appointment),
    };

    try {
      const response = await fetch(url, settings);
      const result = await response.json();
      if (result.status) {
        console.log("updated: ", result.data);
        handleShow();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleShow = () => setShow(true);
  return (
    <div className={"Form DoctorForm DoctorReview"}>
      <p className='FormTitle'>Review Details</p>
      <p className='Label'>Patient Name</p>
      <input className='InputField' value={appointment.patient_name} />
      <p className='Label'>Diagnosis Note</p>
      <input
        className='InputField'
        value={appointment.transformed_diagnosis_notes}
        onChange={(e) =>
          setAppointment({
            ...appointment,
            transformed_diagnosis_notes: e.target.value,
          })
        }
      />
      <p className='Label'>Procedure Note</p>
      <input
        className='InputField'
        value={appointment.transformed_procedure_notes}
        onChange={(e) =>
          setAppointment({
            ...appointment,
            transformed_procedure_notes: e.target.value,
          })
        }
      />
      <p className='Label TextArea'>General Notes</p>
      <textarea
        className='GeneralNotes'
        value={appointment.transformed_general_notes}
        onChange={(e) =>
          setAppointment({
            ...appointment,
            transformed_general_notes: e.target.value,
          })
        }
      />
      <button onClick={submitApptDetails} type='button' className='Button'>
        Confirm
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Appointment Added!</Modal.Body>
        <Modal.Footer>
          <Button className='ThemeButton' onClick={handleClose}>
            Go Back to Homepage
          </Button>
        </Modal.Footer>
      </Modal>
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
