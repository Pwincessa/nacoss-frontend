import React from "react";
import "./Footer.css";
import logo from ".../../assets/icons/footerlogo.svg";
function Footer() {
  return (
    <>
      <section class="index-link">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="link-area">
                <div className="pt-5 pb-4">
                  {" "}
                  <img src={logo} alt="nacoss logo" />{" "}
                  <h2 id="text">
                   <span> NACOSS <br />UNIBEN</span>
                  </h2>
                </div>

                <p id="naccoss_sub-text">
                  National Association of Computer Science Students. University of Benin Chapter.
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="link-area pt-5">
                <h4 className="pb-4">Quick Links</h4>
                <ul>
                  <li>
                    <a href="#"> About</a>
                  </li>
                  <li>
                    <a href="#"> Executive members</a>
                  </li>
                  <li>
                    <a href="#"> Innovation/research</a>
                  </li>
                  <li>
                    <a href="#"> Events</a>
                  </li>
                  <li className="contact-text">
                    <a href="#"> Registration</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="link-area pt-5 ">
                <h4 className="pb-4">Contact Us</h4>
                <p className="contact-text">(+234) 567 890 2357</p>
                <p className="contact-text">Info@NACOSSUNIBEN.com</p>
                <p className="contact-text">University of Benin, Computer Science PMB. 3067. Edo State.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="index-social">
        <div class="container">
          <div class="row index-social-link text-center d-flex justify-content-center">
            <p class="copy-c ">copyright UNIBEN NACOSS</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
