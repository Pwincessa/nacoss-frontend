import React from "react";
import Header from "../../components/Header/Header";
import cycle from "../../assets/images/cycle.svg";
import "./Home.css";
import { cardDetails } from "./data";
import Button from "../../components/Button/Button";
import girl1 from "../../assets/images/joyandjokercsc.jpg";
import man2 from "../../assets/images/dumebi.jpg";
import man3 from "../../assets/images/ekenecsc.jpg";
import man2 from "../../assets/images/zaviano.jpg";
import long_img from "../../assets/images/dfavours.jpg";
import quoteImg from "../../assets/images/quoteimg.png";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header text={"Welcome to NACOSS UNIBEN. We believe in building a digital future"} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h2 className="mission-statement ">
              Mission and Vision of <br /> NACOSS UNIBEN
            </h2>
            <hr className="bottom-line" />
            <p className="statement">
              NACOSS organizes capacity building exercises to enlighten the youths, the young people of
              Nigeria on how to become entrepreneurs using acquired IT skills and also to create platforms to
              exhibit their products, services and software to businesses, industry and the public.
            </p>

            <button type="button" class="btn btn-primary btn-lg btn-color">
              Learn More <i class="fa fa-long-arrow-right arrow-right" aria-hidden="true"></i>
            </button>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <img alt="cycle" class="img-fluid" src={cycle} />
          </div>
        </div>
      </div>
      {/* Event-section */}
      <div className="container mt-5">
        <h2 className="d-flex justify-content-center" id="event-header-text">
          EVENTS
        </h2>
        <hr className="short-bottom-line d-flex justify-content-center" />
        <div className="row">
          {cardDetails.map((data, index) => {
            return (
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4 " key={index}>
                <div className="card">
                  <img src={data.photo} class="card-img" alt="images" />
                  <div class="card-img-overlay">
                    <h6 class="card-text move text-white">{data.date}</h6>
                  </div>
                  <div class="card-body">
                    <p class="card-text">{data.programDetails}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center">
          <Button text="See More" />
        </div>
      </div>

      {/* Gallery Session */}
      <div className="container mt-5">
        <h2 className="d-flex justify-content-center" id="event-header-text">
          GALLERY
        </h2>
        <hr className="short-bottom-line d-flex justify-content-center" />
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="box">
                  <img src={girl1} alt="nacoss students" class="img-ht img-fluid " />
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12 mt-2">
                <div className="box">
                  <img src={man3} alt="nacoss students" class="img-ht img-fluid " />
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12 mt-2">
                <div className="box">
                  <img src={girl1} alt="nacoss students" class="img-ht img-fluid " />
                </div>
              </div>
            </div>
          </div>
          <div class="w-100"></div>
          <div className="col-lg-12 col-md-12 col-sm-12 mt-3 d-none d-sm-block">
            <div className="row">
              <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                <div className="box">
                  <img src={long_img} alt="nacoss students" class="img-ht img-fluid " />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-2 d-none d-sm-block">
                <div className="box">
                  <img src={man2} alt="nacoss students" class="img-ht img-fluid " />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Button text="See More" />
        </div>
      </div>

      {/* Quote Section */}
      <div className="container-fluid mt-5 d-none d-sm-block">
        <div className="row">
          <div className="col-lg-12 col-md-12 " id="banner">
            <div id="content">
              <div className="d-flex justify-content-center" id="img-postion">
                <img src={quoteImg} alt="quote_img akin osayande" className="img-fluid" />
              </div>
              <div className="d-flex justify-content-center">
                <p class="hero-text text-wrap text-center text-position " id="text-position-1">
                  {" "}
                  “...The best time to code is now. computer science is the future...”
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <p class="hero-text text-wrap text-center text-position " id="text-position-2">
                  {" "}
                  Akin Osayande
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
