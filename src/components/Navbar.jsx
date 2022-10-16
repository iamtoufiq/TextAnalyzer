import React from "react";
import SwitchBtn from "./SwitchBtn";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          props.modess ? "light" : "dark"
        } bg-${props.modess ? "light" : "dark"}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.ourTitle}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  {props.aboutOurApp}
                </Link>
              </li>
            </ul>
            <SwitchBtn modeBoolean={props.modeBoolean} modess={props.modess} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
Navbar.propTypes = {
  ourTitle: PropTypes.string.isRequired,
  aboutOurApp: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  ourTitle: "Text_Analyzer",
  aboutOurApp: "About_App",
};
