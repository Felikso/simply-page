import React, { useRef, useEffect } from "react";

import Button from "../Button/Button";
import StyledAdvantageWrapper from "./StyledAdvantageWrapper";
import {
  StyledAdvantagesSection,
  StyledAdvantagesWrapper,
  StyledAdvantagesDivContent,
} from "./StyledAdvantages";

import fire from "../../assets/images/iconfire.png";
import coins from "../../assets/images/iconcoins.png";
import leaf from "../../assets/images/iconleaf.png";
import home from "../../assets/images/iconhome.png";

import { animationMoveXScroll } from "../../style/Animations";

const Advantages = ({ contactRef }) => {
  const advantageWrapper1 = useRef(null);

  useEffect(() => {
    const advantageDiv = advantageWrapper1.current.children[0];
    const advantageDiv1 = advantageWrapper1.current.children[1];
    const advantageDiv2 = advantageWrapper1.current.children[2];

    animationMoveXScroll(advantageDiv, "-=100");
    animationMoveXScroll(advantageDiv1, "+=100");
    animationMoveXScroll(advantageDiv2, "-=100");
  }, []);

  return (
    <StyledAdvantagesSection>
      <StyledAdvantagesWrapper ref={advantageWrapper1}>
        <StyledAdvantagesDivContent>
          <h2>Zalety regularnych przeglądów i konserwacji kotła</h2>
          <h3>
            Przeglądów dokonujemy u klientów przynajmniej raz w roku. Ściśle trzymamy się wytycznych
            producenta urządzenia oraz przepisów prawa budowlanego. Regularność i terminowość
            naprawdę się opłaca.
          </h3>
          <Button onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}>
            Kontakt
          </Button>
        </StyledAdvantagesDivContent>
        <StyledAdvantagesDivContent>
          <StyledAdvantageWrapper displayOnSmallScrean={true}>
            <div>
              <img src={coins} alt="coins" />
            </div>
            <h3>Oszczędności</h3>
            <h4>
              Paliwo gazowe to lwia część budżetów domowych. Inwestycje w sprzęt szybko się
              zwracają.
            </h4>
          </StyledAdvantageWrapper>
          <StyledAdvantageWrapper displayOnSmallScrean={false}>
            <div>
              <img src={home} alt="home" />
            </div>
            <h3>Przyjazny dom</h3>
            <h4>
              Ogrzewanie to fundament domowej atmosfery. Aby tak było, ciepło musi być właściwie
              rozprowadzone.
            </h4>
          </StyledAdvantageWrapper>
        </StyledAdvantagesDivContent>
        <StyledAdvantagesDivContent>
          <StyledAdvantageWrapper>
            <div>
              <img src={leaf} alt="leaf" />
            </div>
            <h3>Ekologia</h3>
            <h4>
              Idealnie dobrany piec pozwala optymalnie wykorzystać energię, bez strat dla klimatu.
            </h4>
          </StyledAdvantageWrapper>
          <StyledAdvantageWrapper swapColor={true}>
            <div>
              <img src={fire} alt="fire" />
            </div>
            <h3>Bezpieczeństwo</h3>
            <h4>
              Sprawny piec w domu to nie tylko ciepło. To obowiązek, dla bezpieczeństwa domowników.
            </h4>
          </StyledAdvantageWrapper>
        </StyledAdvantagesDivContent>
      </StyledAdvantagesWrapper>
    </StyledAdvantagesSection>
  );
};

export default Advantages;
