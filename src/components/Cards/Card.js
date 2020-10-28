import React from "react";
import cardimg1 from "../../assets/images/cardimg1.png";
import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="container">
        <div class="card ">
          <img src={cardimg1} class="card-img" alt="" />
          <div class="card-img-overlay">
            <h6 class="card-text move text-white">Last updated 3 mins ago</h6>
          </div>
          <div class="card-body">
            <p class="card-text">.NET CONF coming up in July, dates to be released</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
