import React, { useRef, useEffect } from "react";

import {
  StyledSectionOurBrands,
  StyledOurBrandsWrapper,
  StyledBrandsImage,
} from "./StyledOurBrands";

import beretta from "../../assets/images/brand/markaberetta.png";
import brotje from "../../assets/images/brand/markabrotje.png";
import buderus from "../../assets/images/brand/markabuderus.png";
import dietrich from "../../assets/images/brand/markadietrich.png";
import herman from "../../assets/images/brand/markaherman.png";
import immergas from "../../assets/images/brand/markaimmergas.png";
import junkers from "../../assets/images/brand/markajunkers.png";
import termet from "../../assets/images/brand/markatermet.png";
import vaillant from "../../assets/images/brand/markavaillant.png";
import viesman from "../../assets/images/brand/markaviesman.png";
import brands from "../../assets/images/brand/marki.png";

import { animationScrollBottom } from "../../style/Animations";

const OurBrands = () => {
  const brandsRefTop = useRef(null);
  const brandsRefBottom = useRef(null);
  const brandsRefImage = useRef(null);
  useEffect(() => {
    const brandsTop = brandsRefTop.current;
    const brandsBottom = brandsRefBottom.current;
    const brandsImage = brandsRefImage.current;

    animationScrollBottom(brandsTop);
    animationScrollBottom(brandsBottom);
    animationScrollBottom(brandsImage);
  }, []);

  return (
    <StyledSectionOurBrands>
      <StyledOurBrandsWrapper ref={brandsRefTop}>
        <div>
          <img src={buderus} alt="buderus" />
          <img src={dietrich} alt="dietrich" />
        </div>
        <div>
          <img src={herman} alt="herman" />
          <img src={immergas} alt="immergas" />
          <img src={beretta} alt="beretta" />
        </div>
      </StyledOurBrandsWrapper>
      <StyledOurBrandsWrapper ref={brandsRefBottom}>
        <div>
          <img src={junkers} alt="junkers" />
          <img src={brotje} alt="brotje" />
        </div>
        <div>
          <img src={termet} alt="termet" />
          <img src={vaillant} alt="vaillant" />
          <img src={viesman} alt="viesman" />
        </div>
      </StyledOurBrandsWrapper>
      <StyledBrandsImage src={brands} alt="brands" ref={brandsRefImage} />
    </StyledSectionOurBrands>
  );
};

export default OurBrands;
