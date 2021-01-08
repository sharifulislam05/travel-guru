import React, { useContext } from "react";
import gLogo from "../../../../Assets/images/Icon/Group 573.png";
import fLogo from "../../../../Assets/images/Icon/Group 2.png";
import hrImg from "../../../../Assets/images/Icon/Group 13.png";
import {
  facebookSignIn,
  firebaseConfigInitialize,
  googleSignIn,
} from "../AuthManager/AuthManager";
import { UserContext } from "../../../../App";
import { useHistory, useLocation } from "react-router-dom";

firebaseConfigInitialize();

const LoginWithMedia = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const googleLogin = () => {
    googleSignIn().then((res) => {
      setLoggedInUser(res);
      history.replace(from);
    });
  };
  const fbLogin = () => {
    facebookSignIn().then((res) => {
      setLoggedInUser(res);
      history.replace(from);
    });
  };
  return (
    <>
      <div className="text-center my-3 media__header">
        <img src={hrImg} alt="" />
      </div>
      <div className="d-flex justify-content-center text-center mb-2">
        <div>
          <button
            className="social-auth__btn d-flex align-items-center"
            onClick={fbLogin}
          >
            <img src={fLogo} alt="" />
            <p className="m-auto">Continue with Google</p>
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-center text-center">
        <div>
          <button
            className="social-auth__btn d-flex align-items-center"
            onClick={googleLogin}
          >
            <img src={gLogo} alt="" />
            <p className="m-auto">Continue with Google</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginWithMedia;
