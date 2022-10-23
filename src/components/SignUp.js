import React from "react";
import Footer from "./Footer";

const Form = () => {
    return (
        <div>
            <p>ID</p>
            <input />
            <p>User Type</p>
            <input />
            <p>Password</p>
            <input />
            <button>Submit</button>
        </div>
    )
}

function SignUp() {
  return (
    <div>
      <Form />
      <Footer />
    </div>
  );
}

export default SignUp;
