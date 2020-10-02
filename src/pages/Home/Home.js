import React from "react";
import Header from "@/components/Header/Header";
import cycle from "../../assets/images/cycle.svg";
import "./Home.css";

const Home = () => {
  return (
    <>
    {/* currently not responsive */}
      <Header text={"Welcome to NACOSS UNIBEN. We believe in building a digital future"} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h2 className="mission-statement bottom-line">
              Mission and Vision of <br /> NACOSS UNIBEN
            </h2>
            <p className="statement">
              NACOSS organizes capacity building exercises to enlighten the youths, the young people of
              Nigeria on how to become entrepreneurs using acquired IT skills and also to create platforms to
              exhibit their products, services and software to businesses, industry and the public.
            </p>
            <button className="mission-learn-btn">Learn more</button>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <img alt="cycle" src={cycle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
