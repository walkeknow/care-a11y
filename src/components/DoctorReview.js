import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Form = ({ appointment, setScreen }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setScreen("doctor");
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
      />
      <p className='Label'>Procedure Note</p>
      <input
        className='InputField'
        value={appointment.transformed_procedure_notes}
      />
      <p className='Label TextArea'>General Notes</p>
      <textarea
        className='GeneralNotes'
        value={appointment.transformed_general_notes}
      />
      <button onClick={() => handleShow()} type='button' className='Button'>
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
