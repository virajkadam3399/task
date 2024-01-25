import React, { useState } from "react";
import "./Header.css";
import "../../Responsive.css";
import logo_header from "../../imges/digi_logo_dark.png";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <div className={`container-header ${hamburger ? "active" : ""}`}>
      <div className="row">
        <div className="logo">
          <img src={logo_header} alt="img-header" />
          <div className="hamburger-icon" onClick={toggleHamburger}>
            <button aria-label="Toggle Menu">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
        <div className={`nav-items ${hamburger ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="login-btns">
          <button>Login</button>
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
