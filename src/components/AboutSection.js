import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span>come
            </h2>
          </div>
          <div className="hide">
            <h2>True</h2>
          </div>
        </div>
        <p>Contact us for any photography or ideas that you have</p>
        <button>ContactUs</button>
      </div>
      <div className="image">
        <img src={home1} alt="" />
      </div>
    </div>
  );
};

export default AboutSection;