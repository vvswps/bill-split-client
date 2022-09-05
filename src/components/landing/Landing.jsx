import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <>
      <div className="container">
        <div className="get-started">
          <h1>Get Started</h1>
          <p>Start Spliting your bills</p>
          <p>No More Fights over who pays who</p>
          <div className="buttons">
            <div className="login">
              <Link to="/login">Login</Link>
            </div>
            <div className="register">
              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
