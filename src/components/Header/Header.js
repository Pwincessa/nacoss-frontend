import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = ({ text }) => {
  return (
    <>
      <div className="container-fluid">
        <NavBar />
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 header-banner">
            <div className="content">
              <div className="d-flex justify-content-center">
                <h2 class="hero-text text-wrap text-center">{text}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
