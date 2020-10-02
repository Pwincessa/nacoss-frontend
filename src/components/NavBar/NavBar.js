import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="top-navigation navbar navbar-expand-lg navbar-light ">
        <Link class="navbar-brand" to="#" id="logo-text">
          <h2 id="naccoss_text">
            NACOSS <br /> <span style={{ color: "#ac0d7f" }}>UNIBEN</span>
          </h2>
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
              <NavLink className="nav-link  nav-link-text" activeClassName="current" to="/">
                HOME
              </NavLink>
            </li>
            <li class="nav-item spacing">
              <NavLink className="nav-link nav-link-text" activeClassName="current" to="/about">
                ABOUT
              </NavLink>
            </li>
            <li class="nav-item spacing">
              <NavLink className="nav-link nav-link-text" activeClassName="current" to="/event">
                EVENT
              </NavLink>
            </li>
            <li class="nav-item spacing">
              <NavLink className="nav-link nav-link-text" activeClassName="current" to="/register">
                REGISTRATION
              </NavLink>
            </li>
            <li class="nav-item spacing">
              <NavLink className="nav-link nav-link-text" activeClassName="current" to="/payment">
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
