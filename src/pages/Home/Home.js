import React from "react";
import Header from "@/components/Header/Header";
import cycle from "@/assets/images/cycle.svg";
import "./Home.css";
import { cardDetails } from "./data";
import Button from "@/components/Button/Button";

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
    </>
  );
};

export default Home;
