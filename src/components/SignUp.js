import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/Form.css";

const Form = ({ setScreen }) => {
  const authContext = useContext(AuthContext);
  const [signupInfo, setSignupInfo] = useState({});
  const signUp = async () => {
    const url = "https://infinite-sands-83108.herokuapp.com/login";
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: process.env.REACT_APP_HEROKU_TOKEN,
      },
      body: JSON.stringify(signupInfo),
    };

    try {
      const response = await fetch(url, settings);
      const result = await response.json();
      if (result.status) {
        console.log(result.data);
        authContext.updateUser(result.data);
      }
    } catch (e) {
      console.log(e);
    }

    /*  authContext.updateUser({
      name: "Jerry Driskill",
      role: "Doctor",
      appointments: {
        appointment_id: 123,
        subject_id: 10011,
        doctor_id: 10000,
        date: "10/20/2022",
        tranformed_general_notes: "sample notes",
        tranformed_diagnosis_notes: "sample notes",
        tranformed_procedure_notes: "sample notes",
        general_notes: "sample notes",
        diagnosis_notes: "sample notes",
        procedure_notes: "sample notes",
      },
    });
    console.log('mock: ', authContext.user);
    authContext.updateExpired(() => {
      setTimeout(() => {
        authContext.updateUser({});
      }, 10000);
    }); */
    setScreen("doctor");
  };

  return (
    <div className="Form">
      <p className="Label">ID</p>
      <input
        className="InputField"
        onChange={(e) => setSignupInfo({ ...signupInfo, id: e.target.value })}
      />
      <p className="Label">Password</p>
      <input
        className="InputField"
        type={"password"}
        onChange={(e) =>
          setSignupInfo({ ...signupInfo, password: e.target.value })
        }
      />
      <button onClick={signUp} type="button" className="Button">
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
