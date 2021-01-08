import React, { useContext, useState } from "react";
import Login from "./Login/Login";
import { useHistory, useLocation } from "react-router-dom";
import SearchNav from "../SearchNav/SearchNav";
import SignUp from "./SignUp/SignUp";
import { UserContext } from "../../../App";
import "./OAuth.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  firebaseConfigInitialize,
  signInWithEmail,
  signUpWithEmail,
  resetPassword,
} from "./AuthManager/AuthManager";

firebaseConfigInitialize();

const OAuth = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [newUser, setNewUser] = useState(true);
  let history = useHistory();
  let location = useLocation();
  const [user, setUser] = useState({
    isSigned: false,
    name: "",
    email: "",
    password: "",
    error: "",
    matchPassword: "true",
  });
  let { from } = location.state || { from: { pathname: "/" } };
  //signup form input validation
  const handleFormInput = (e) => {
    let validFormInput = true;
    if (e.target.name === "email") {
      validFormInput = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const pass = e.target.value;
      const validPassLength = pass.length > 5;
      const checkNumber = /\d/.test(`${pass}`);
      validFormInput = validPassLength && checkNumber;
    }
    if (validFormInput) {
      const name = e.target.name;
      const value = e.target.value;
      setUser({ ...user, [name]: value });
    }
  };
  //match password and confirmPassword
  const checkPasswordMatch = () => {
    const fName = user.fname;
    const lName = user.lname;
    setUser({ ...user, name: fName + " " + lName });
    if (user.password !== user.confirmPassword) {
      setUser({ ...user, matchPassword: false });
      return false;
    }
    return true;
  };
  //signup form submit
  const handleSignUp = (event) => {
    event.preventDefault();
    const matchPassword = checkPasswordMatch();
    if (user.name && user.email && matchPassword) {
      signUpWithEmail(user.name, user.email, user.password).then((res) => {
        setUser(res);
        if (res.isSigned === true) {
          history.push("/emailVerify");
        }
      });
    }
  };
  //signIn form handle
  const handleLogin = (event) => {
    event.preventDefault();
    if (user.email && user.password) {
      signInWithEmail(user.email, user.password).then((res) => {
        if (res.emailVerify) {
          setLoggedInUser(res);
          history.replace(from);
        } else if (!res.emailVerify && !res.error) {
          toast.warning("please verify your email");
        } else if (res.error) {
          toast.error(res.error);
        }
      });
    }
  };
  //reset password
  const handleResetPassword = () => {
    resetPassword(user.email);
  };
  //toggle signIn and signup for new user
  const handleNewUser = () => {
    setNewUser(!newUser);
  };

  return (
    <section className="container">
      <div className="mb-5">
        <SearchNav />
      </div>
      {!newUser ? (
        <SignUp
          handleFormInput={handleFormInput}
          handleSignUp={handleSignUp}
          handleNewUser={handleNewUser}
          userInfo={user}
        />
      ) : (
        <Login
          handleFormInput={handleFormInput}
          handleNewUser={handleNewUser}
          handleLogin={handleLogin}
          handleResetPassword={handleResetPassword}
        />
      )}
      <ToastContainer />
    </section>
  );
};

export default OAuth;
