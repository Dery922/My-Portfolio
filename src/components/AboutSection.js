import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";

import { About, Hide, Image, Description } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide className="hide">
            <h2>
              your <span> dreams</span> come true
            </h2>
          </Hide>
          <Hide>
            <h2>True</h2>
          </Hide>
        </div>
        <p>Contact us for any photography or ideas that you have</p>
        <button>ContactUs</button>
      </Description>
      <Image>
        <img src={home1} alt="" />
      </Image>
    </About>
  );
};

export default AboutSection;
