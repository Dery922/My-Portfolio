import React, { useState } from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { LayoutGroup } from "framer-motion";

import { fade } from "../animation";
import { useInView } from "react-intersection-observer";
import { useAnimation, useScroll } from "framer-motion";

export default function FaqSection() {
  const [faqtoggle, setFaqtoggle] = useState(false);
  // const controls = useAnimation();
  // const [element, view] = useInView({ threshold: 0.5 });

  // useEffect(() => {
  //   if (view) {
  //     controls.start("show");
  //   } else {
  //     controls.start("hidden");
  //   }
  // });
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <LayoutGroup>
        <Toggle title="How do i start">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
              <p>
                {" "}
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                dolor sit amet
              </p>
            </div>
          </div>
        </Toggle>
      </LayoutGroup>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
