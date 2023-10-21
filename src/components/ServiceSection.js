import React from "react";
import clock from "../img/clock.svg";
import diaghragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>Quality</span>Services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img alt="clock" src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>lorem ipsum dolor sit amet asel</p>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="teamwork" src={teamwork} />
              <h3>Team work</h3>
            </div>
            <p>lorem ipsum dolor sit amet asel</p>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="diaghragm" src={diaghragm} />
              <h3>Diagrahame</h3>
            </div>
            <p>lorem ipsum dolor sit amet asel</p>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="money" src={money} />
              <h3>Affordable</h3>
            </div>
            <p>lorem ipsum dolor sit amet asel</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} />
      </div>
    </div>
  );
};

export default ServicesSection;
