import React from "react";
import LoginWithMedia from "./LoginWithMedia";
import "../OAuth.css";

const Login = ({handleFormInput, handleNewUser, handleLogin, handleResetPassword}) => {
  
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="login-container brand-auth d-flex justify-content-center">
          <div>
            <h4 className="py-4">
              <strong>Login</strong>
            </h4>
            <form onSubmit={handleLogin}>
              <div className="form-group form-group-signup mt-4">
                <input
                  type="email"
                  className="input__oauth"
                  placeholder="Email"
                  name="email"
                  onBlur={handleFormInput}
                  required
                />
              </div>
              <div className="form-group form-group-signup mt-4">
                <input
                  type="password"
                  className="input__oauth"
                  placeholder="Password"
                  name="password"
                  onBlur={handleFormInput}
                  required
                />
              </div>
              <div className="form-group form-check d-flex justify-content-between">
                <input
                  type="checkbox"
                  className="form-check-input mr-auto"
                  id="remember"
                />
                <label className="form-check-label " htmlFor="remember">
                  Remember me
                </label>
                <span
                  className="text-warning auth-toggle"
                  onClick={handleResetPassword}
                >
                  Forget Password
                </span>
              </div>
              <button type="submit" className="btn btn-warning form-control">
                Login
              </button>
              <div className="text-center">
                <small>
                  Don't have an account?
                  <span
                    className="text-warning auth-toggle"
                    onClick={() => handleNewUser()}
                  >
                    Create a new account
                  </span>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
      <LoginWithMedia />
    </>
  );
};

export default Login;
