import React from "react";
import clock from "../img/clock.svg";
import diaghragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { About, Description, Image, Hide } from "../styles";
import styled from "styled-components";

const ServicesSection = () => {
  return (
    <Services>
      <div className="description">
        <h2>
          High <span>Quality</span>Services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img alt="clock" src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>lorem ipsum dolor sit amet asel</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="teamwork" src={teamwork} />
              <h3>Team work</h3>
            </div>
            <p>lorem ipsum dolor sit amet asel</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="diaghragm" src={diaghragm} />
              <h3>Diagrahame</h3>
            </div>
            <p>lorem ipsum dolor sit amet asel</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="money" src={money} />
              <h3>Affordable</h3>
            </div>
            <p>lorem ipsum dolor sit amet asel</p>
          </Card>
        </Cards>
      </div>
      <div className="image">
        <img src={home2} />
      </div>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
