import React, { useRef, useEffect } from "react";

import { StyledAboutUsSection, StyledArticleAboutus, StyledH3 } from "./StyledAbout";

import { animationOpacity } from "../../style/Animations";

const About = React.forwardRef((props, ref) => {
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const text = textRef.current;

    animationOpacity(title, 2);
    animationOpacity(text, 2);
  }, []);

  return (
    <StyledAboutUsSection ref={ref}>
      <StyledH3 ref={titleRef}>O nas</StyledH3>
      <StyledArticleAboutus ref={textRef}>
        O piecach wiemy wszystko - od kotłów, poprzez paliwo, po instalacje hydrauliczne i grzewcze.
        Jesteśmy pierwszą pomocą w przypadku awarii. Pomagamy dobrać idealny sprzęt.
      </StyledArticleAboutus>
    </StyledAboutUsSection>
  );
});

export default About;
