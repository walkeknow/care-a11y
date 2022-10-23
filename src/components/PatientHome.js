import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/PatientHome.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AppList = [
  {
    date: "Oct 23, 2022",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
  },
  {
    date: "Sep 20, 2022",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
  },
  {
    date: "July 22, 2022",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
  },
  {
    date: "June 15, 2022",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
  },
];

const PatientForm = () => {
  return (
    <div className='PatientForm'>
      <p className='Label'>Diagnosis Note</p>
      <textarea readOnly='readOnly' className='GeneralNotes' />
      <p className='Label '>Procedure Note</p>
      <textarea readOnly='readOnly' className='GeneralNotes' />
      <p className='Label '>General Note</p>
      <textarea readOnly='readOnly' className='GeneralNotes' />
    </div>
  );
};

const Item = ({ obj, setShow }) => {
  return (
    <div onClick={() => setShow(true)} className='ItemContainer'>
      <p className='CardTitle'>{obj.date}</p>
      <p className='CardTitle Purple'>Overview:</p>
      <p className='CardDesc'>{obj.overview}</p>
    </div>
  );
};

function PatientHome() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const authContext = useContext(AuthContext);
  console.log(authContext.user);
  return (
    <div className='PatientHome'>
      <p className='Title'>Appointments</p>
      <div className='List'>
        {authContext.user.appointments.map((obj) => (
          <Item handleShow={handleShow} obj={obj}></Item>
        ))}
      </div>
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PatientForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button className='ThemeButton' onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PatientHome;
