import React from "react";
import "./VehicleAnimation.css";

export const VehicleAnimation = () => {
  return (
    <>
      <div className="hero">
        <div className="highway"></div>
        <div className="city"></div>

        <div className="car">
          <img src={require("../images/car.png")} alt="" />
        </div>
        <div className="wheel">
          <img
            src={require("../images/wheel.png")}
            className="back-wheel"
            alt=""
          />
          <img
            src={require("../images/wheel.png")}
            className="front-wheel"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
