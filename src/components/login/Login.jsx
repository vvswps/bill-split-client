import axios from "axios";
import React from "react";
import { useState } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "https://bill-split-server.herokuapp.com/login",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        window.location.href = "/home";
        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };
  return (
    <>
      <h2>Login</h2>
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
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
        {login ? (
          <p>You Are Logged in Successfully</p>
        ) : (
          <p>You Are Not Logged in</p>
        )}
      </form>
    </>
  );
};

export default Login;
