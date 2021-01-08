import React, { useContext } from "react";
import logo from "../../../Assets/images/Frame.png";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";
import { Link } from "react-router-dom";

const NavBar = () => {
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
          <li className="mr-5 search-bar">
            <input
              className="form-control mt-1 mr-5 search__input text-muted"
              type="text"
              placeholder="Search"
            />
            <Link to="/" className="search__icon">
              <FontAwesomeIcon icon={faSearch} />
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              News <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Destination
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Contact
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

export default NavBar;
