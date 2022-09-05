import React from "react";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    const configuration = {
      method: "post",
      url: "https://bill-split-server.herokuapp.com/register",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });

    // prevent the form from refreshing the whole page
    e.preventDefault();
    // make a popup alert showing the "submitted" text
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Email address</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button
          onClick={(e) => handleSubmit(e)}
          variant="primary"
          type="submit"
        >
          Submit
        </button>
        {register ? (
          <p>You Are Registered Successfully</p>
        ) : (
          <p>You Are Not Registered</p>
        )}
      </form>
    </>
  );
};

export default Register;
