import React, { useState } from "react";
import Images from "../assets/images";
import "../styles/Header.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const RightBarDoctor = ({ setScreen, setOpen }) => {
  return (
    <div className="NavRow">
      <p className={"name"}>Welcome, Brian Renner</p>
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

const DictionaryForm = () => {
  return (
    <div className="dictionaryForm">
      <div className="Row DictionaryRow">
        <div className="InputCol">
          <p className="Label">Abbreviation</p>
          <input className="InputField" />
        </div>
        <div className="InputCol">
          <p className="Label ">Meaning</p>
          <input className="InputField" />
        </div>
      </div>
    </div>
  );
};

function Header({ screen, setScreen }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="header-background">
        <img src={Images.appLogo} className="logo" alt="CareA11y Logo" />
        {screen === "doctor" && (
          <RightBarDoctor setOpen={handleShow} setScreen={setScreen} />
        )}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Medical Term to Dictionary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DictionaryForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="ThemeButton" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;
