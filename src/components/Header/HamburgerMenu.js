import React, { useEffect, useRef } from "react";

import { StyledHamburger, StyledHamburgerBox } from "./StyledHamburgerMenu";
import { animationMoveY } from "../../style/Animations";

const HamburgerMenu = ({ openMenu, setOpenMenu }) => {
  const hamburgerRef = useRef(null);
  useEffect(() => {
    const hamburger = hamburgerRef.current;

    animationMoveY(hamburger);
  }, []);
  return (
    <StyledHamburger onClick={setOpenMenu} ref={hamburgerRef}>
      <StyledHamburgerBox openMenu={openMenu}>
        <span></span>
      </StyledHamburgerBox>
    </StyledHamburger>
  );
};

export default HamburgerMenu;
