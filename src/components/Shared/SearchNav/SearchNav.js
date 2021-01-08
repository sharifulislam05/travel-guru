import React, { useContext } from "react";
import logo from "../../../Assets/images/logo.png";
import { UserContext } from "../../../App";
import { Link } from "react-router-dom";

const SearchNav = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="" className="pt-1" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto mt-3">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              <span className="text-dark">News</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <span className="text-dark">Destination</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <span className="text-dark">Blog</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <span className="text-dark">Contact</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              {loggedInUser.email && (
                <h5 className="text-warning">{loggedInUser.name}</h5>
              )}
            </Link>
          </li>

          <li className="nav-item">
            {loggedInUser.email ? (
              <button
                className="btn btn-danger mt-1 ml-0 ml-md-3"
                onClick={() => setLoggedInUser({})}
              >
                logout
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-warning mt-1 ml-0 ml-md-3">
                  Login
                </button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SearchNav;
