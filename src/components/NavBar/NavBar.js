import React from "react";
import { Link, NavLink} from "react-router-dom";
import "./NavBar.css";
import logo from "../..//assets/icons/footerlogo.svg";

const NavBar = () => {
  return (
    <>
      <nav className="top-navigation navbar navbar-expand-lg navbar-light " >
        <img src={logo} alt="nacoss logo" />
        <Link class="navbar-brand" to="#" id="logo-text">
          <h4 id="naccoss_text">
           <span class="coloured-text">UNIBEN <br />NACOSS</span>
          </h4>
        </Link>
        

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav nav">
            <li class="nav-item active spacing">
              <NavLink exact className="nav-link  nav-link-text" activeClassName="current" to="/">
                HOME
              </NavLink>
            </li>
            <li class="nav-item spacing">
              <NavLink className="nav-link nav-link-text" activeClassName="current" to="/about">
                ABOUT
              </NavLink>
            </li>
            <li class="nav-item spacing">
              <Link className="nav-link nav-link-text " activeClassName="current" to={{ pathname:"https://www.coursera.org/programs/nacoss-training-nr1me" }}  target="_blank">
                COURSES
              </Link>
            </li>
            <li class="nav-item spacing">
              <NavLink className="nav-link nav-link-text disabled" activeClassName="current" to="/event">
                EVENT
              </NavLink>
            </li>
            <li class="nav-item spacing">
              <NavLink className="nav-link nav-link-text disabled" activeClassName="current" to="/payment">
                PAYMENT
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
