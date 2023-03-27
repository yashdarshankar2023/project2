import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {/* <nav
        
        role="navigation"
        aria-label="main navigation"
      > */}
        {/* <div className="navbar-brand">
     

          <button
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={toggleNavbar}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div> */}

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
          <Link className="navbar-item" to="/" >
              Unstoppable Journey
            </Link>
            <Link className="navbar-item" to="/" style={{marginLeft:"40%"}}>
              Home
            </Link>
            <Link className="navbar-item" to="/services">
              Services
            </Link>
            <Link className="navbar-item" to="/store">
              HM-Store
            </Link>
            <Link className="navbar-item" to="/about">
              About-Us
            </Link>
          </div>

          {/* <div className="navbar-end">
            <a className="btn btn-primary" style={{width:"min-content"}}>
              Login/Sign Up
            </a>
          </div> */}
          <Link to="/" style={{marginLeft:"60%"}}><button className="btn btn-primary">Login / Sign Up</button></Link>
        </div>
      
    </>
  );
};

export default Navbar;