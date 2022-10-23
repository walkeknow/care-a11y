import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Images from "../assets/images";
import "../styles/Header.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const RightBarDoctor = ({ setScreen, setOpen }) => {
  const authContext = useContext(AuthContext);
  return (
    <div className='NavRow'>
      <p className={"name"}>Welcome, {authContext.user.name}</p>
      <div className={"NavRow pill"}>
        <p onClick={() => setOpen()} className={"pillText link"}>
          Add to Dictionary
        </p>
        <p onClick={() => setScreen("auth")} className={"pillText link"}>
          Logout
        </p>
      </div>
    </div>
  );
};

const RightBarPatient = ({ setScreen, setOpen }) => {
  const authContext = useContext(AuthContext);
  return (
    <div className='NavRow'>
      <p className={"name"}>Welcome, {authContext.user.name}</p>
      <div className={"NavRow pill"}>
        <p onClick={() => setScreen("auth")} className={"pillText link"}>
          Logout
        </p>
      </div>
    </div>
  );
};

const DictionaryForm = () => {
  const [term, setTerm] = useState({});
  return (
    <div className='dictionaryForm'>
      <div className='Row DictionaryRow'>
        <div className='InputCol'>
          <p className='Label'>Abbreviation</p>
          <input
            className='InputField'
            onChange={(e) => setTerm({ ...term, key: e.target.value })}
          />
        </div>
        <div className='InputCol'>
          <p className='Label '>Meaning</p>
          <input
            className='InputField'
            onChange={(e) => setTerm({ ...term, value: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

const HeaderRight = ({ screen, handleShow, setScreen }) => {
  if (screen === "doctor") {
    return <RightBarDoctor setOpen={handleShow} setScreen={setScreen} />;
  } else if (screen === "patient") {
    return <RightBarPatient setScreen={setScreen} />;
  } else {
    return <></>;
  }
};

function Header({ screen, setScreen }) {
  const authContext = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='header-background'>
        <img src={Images.appLogo} className='logo' alt='CareA11y Logo' />
        <HeaderRight {...{ screen, handleShow, setScreen }} />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Medical Term to Dictionary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DictionaryForm />
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
    </>
  );
}

export default Header;
