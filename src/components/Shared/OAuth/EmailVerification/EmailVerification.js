import React from "react";
import { Link } from "react-router-dom";
import "../OAuth.css";

const EmailVerification = () => {
  return (
    <div className="email-verification d-flex justify-content-center align-items-center">
      <div className="text-center p-2 border">
        <h1>Thanks for signing up</h1>
        <h4>please verify your email address to get access to booking hotel</h4>
        <Link to="/login">
          <button className="btn btn-warning ">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default EmailVerification;
