import React, { useRef, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

import HeroLeftBar from "./HeroLeftBar";
import ServiceContact from "./ServiceContact";

import { animationMoveX, animationMoveY, animationOpacity } from "../../style/Animations";

import {
  StyledHeroSection,
  StyledHeroImg,
  StyledImg,
  StyledDivServiceContact,
} from "./StyledHeroSection";

const HeroSection = React.forwardRef(({ contactRef }, ref) => {
  useEffect(() => {
    const heroSection = ref.current;
    const leftBar = ref.current.children[0];
    const service = ref.current.children[2];

    animationOpacity(heroSection, 0.5);
    animationMoveX(leftBar);
    animationMoveY(service, true);
  }, []);

  const data = useStaticQuery(graphql`
    query GetHeroImage {
      file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <StyledHeroSection ref={ref}>
      <HeroLeftBar contactRef={contactRef} />
      <StyledHeroImg>
        <StyledImg fluid={data.file.childImageSharp.fluid} />
      </StyledHeroImg>
      <StyledDivServiceContact>
        <ServiceContact furnace />
        <ServiceContact swapColor={true} />
      </StyledDivServiceContact>
    </StyledHeroSection>
  );
});

export default HeroSection;
