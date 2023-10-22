import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAmin } from "../animation";
import Wave from "./Wave";
// note about the framer motion if we add a parent variant we can starger all the  childrens

import { About, Hide, Image, Description } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2 variants={titleAnim}>
              your <span> dreams</span> come true
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>True</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or ideas that you have
        </motion.p>
        <motion.button variants={fade}>ContactUs</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAmin} src={home1} alt="" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
