import React, { useEffect, useState } from "react";
import "../styles/Form.css";

const fetchData = async (id, password) => {
  const url = "https://infinite-sands-83108.herokuapp.com/login";
  console.log("token", process.env.REACT_APP_HEROKU_TOKEN);
  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: process.env.REACT_APP_HEROKU_TOKEN,
    },
    body: JSON.stringify({
      id: id,
      password: password,
    }),
  };

  try {
    const response = await fetch(url, settings);
    const result = await response.json();
    console.log("result", result);
  } catch (e) {
    console.log(e);
  }
};

const Form = ({ setScreen }) => {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="Form">
      <p className="Label">ID</p>
      <input
        className="InputField"
        onChange={(value) => setID(value)}
      />
      {/*  <p className="Label">User Type</p>
      <select className="InputField">
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select> */}
      <p className="Label">Password</p>
      <input
        className="InputField"
        onChange={(value) => setPassword(value)}
      />
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

function SignUp(props) {
  return (
    <div>
      <Form {...props} />
    </div>
  );
}

export default SignUp;
