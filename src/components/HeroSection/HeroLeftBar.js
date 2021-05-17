import React from "react";
import HerroAppleImage from "../../assets/images/svg/1.svg";

import {
  StyledHeroLeftBar,
  StyledHeroLeftBarText,
  StyledImg,
  StyledHeroParagraph,
  StyledHeroParagraphBox,
  StyledHeroH2,
} from "./StyledHeroLeftBar";

import Button from "../Button/Button";

const HeroLeftBar = ({ contactRef }) => {
  return (
    <StyledHeroLeftBar>
      <div>
        <StyledHeroParagraphBox>
          <StyledHeroH2>
            Podtrzymujemy <span>domowe ognisko</span>
          </StyledHeroH2>
          <StyledHeroParagraph>
            Prowadzimy kompleksowy serwis oraz wymianę pieców gazowych. Jesteśmy autoryzowanymi
            przedstawicielami marek dostaraczającyh ciepło.
          </StyledHeroParagraph>
          <Button onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}>
            Kontakt
          </Button>
        </StyledHeroParagraphBox>
      </div>
      <div>
        <StyledImg src={HerroAppleImage} />
      </div>
      <div>
        <StyledHeroLeftBarText>Nasze marki</StyledHeroLeftBarText>
      </div>
    </StyledHeroLeftBar>
  );
};

export default HeroLeftBar;
