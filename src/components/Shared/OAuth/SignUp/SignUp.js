import React from "react";
import LoginWithMedia from "../Login/LoginWithMedia";
import "../OAuth.css";

const SignUp = ({ handleFormInput, handleSignUp, handleNewUser, userInfo }) => {
  const { error, matchPassword } = userInfo;

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="signup-container brand-auth d-flex justify-content-center">
          <div>
            <h6 className="pt-4">
              <strong>Create An Account</strong>
            </h6>
            <form>
              <div className="form-group  form-group-signup mt-4">
                <input
                  type="text"
                  className="input__oauth"
                  placeholder="First Name"
                  name="fname"
                  onBlur={handleFormInput}
                  required
                />
              </div>
              <div className="form-group  form-group-signup mt-4">
                <input
                  type="text"
                  className="input__oauth"
                  placeholder="Last Name"
                  name="lname"
                  onBlur={handleFormInput}
                />
              </div>
              <div className="form-group  form-group-signup mt-4">
                <input
                  type="email"
                  className="input__oauth"
                  placeholder="Email"
                  name="email"
                  onBlur={handleFormInput}
                  required
                />
              </div>
              <div className="form-group  form-group-signup mt-4">
                <input
                  type="password"
                  className="input__oauth"
                  placeholder="Password"
                  name="password"
                  onBlur={handleFormInput}
                  required
                />
              </div>
              <div className="form-group  form-group-signup mt-4">
                <input
                  type="password"
                  className="input__oauth"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  onBlur={handleFormInput}
                  required
                />
                {!matchPassword && (
                  <small className="form-text text-danger">
                    Password Not Matched
                  </small>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-warning form-control mt-4"
                onClick={handleSignUp}
              >
                Create an account
              </button>
              <div className="text-center">
                <small>
                  Already have an account?
                  <span
                    className="text-warning auth-toggle"
                    onClick={() => handleNewUser()}
                  >
                    Login
                  </span>
                </small>
              </div>
              <div>
                {error && (
                  <small id="" className="form-text text-danger text-center">
                    {error}
                  </small>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <LoginWithMedia />
    </>
  );
};

export default SignUp;
