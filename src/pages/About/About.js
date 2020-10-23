import React from "react";
import { ColoredButton } from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import { ImgHeader } from "@/components/Header/Header";
import dartboard from "@/assets/images/dartboard.svg"
import "./About.css";

const About = () => {
  return (
    <>
      <ImgHeader />
      <div className="container mt-5">
        <h2 className="d-flex justify-content-center" id="about-header-text">
          ABOUT US
        </h2>
        <hr className="short-bottom-line d-flex justify-content-center" />

        <p className="d-flex justify-content-center" id="about-text">
          We are student professionals in the Universty of Benin, Nigeria.
        </p>

        {/* Section-2 */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h3 className="text-general-style">Where did we start?..</h3>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p className="about-section-text">
                NACOSS was founded by groups of students in July 1993 with the backing of Nigerian Computer
                Society (NCS) as its parent body. It provides avenues for students (in any IT related field)
                to highlight and champion issues of interest in a coordinated and organized manner.
                <br />
                NACOSS members (NACOSSites) are students studying in tertiary institutions in computer related
                disciplines including: Computer Science, Computer Engineering, Information Technology, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section-3 */}
      <div className="container-fluid mt-5 bg-color">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
              <p className="about-section-text about-text-color">
                Through consistent and professional exposure, NACOSS provides an excellent foundation for
                Computer Scientists, Engineers and any IT related disciplines in Nigeria. Over the years,
                NACOSS has given to the economy and society the finest professionals in Information and
                Communications Technology ICT and is dedicated to doing even more in future.
                <br />
                opportunities for them to explore and fulfill their potentials and become more competitive in
                the IT environment locally and globally. ents in Nigeria through IT.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h3 className="text-general-style about-text-color" id="mission-section-statement">
                Our Mission and Vision
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* section-4 */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
            {" "}
            <img alt="dart" class="img-fluid" id="img-space" src={dartboard} />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
            <h3 className="text-general-style mt-5">Our Aims and Objectives...</h3>

            <p className="about-section-text pt-2">
              NACOSS aims to re–orient the Nigerian youth and project the IT profession through Seminars,
              Lectures, Symposia, Workshops and other related activities. The intention appears to be the
              active and purposeful promotion of the study of IT and other positive forms of IT knowledge
              acquisition.
            </p>
          </div>
        </div>
      </div>
      {/* Final Section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h3 className="d-flex justify-content-center text-wrap text-center mt-5 text-general-style">
              Want to join the movement? <br />
              Sign up today and become a member!
            </h3>
            <div className="d-flex justify-content-center mt-4 mb-5">
              <ColoredButton text="Register Now" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
