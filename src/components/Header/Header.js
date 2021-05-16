import React, { useState } from "react";
import { SyledHeader, StyledNavAndMenuWrapper } from "./StyledHeader";

import Nav from "./Nav";
import HamburgerMenu from "./HamburgerMenu";

const Header = React.forwardRef((props, ref) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <SyledHeader>
      <StyledNavAndMenuWrapper>
        <Nav openMenu={openMenu} ref={ref} />
        <HamburgerMenu setOpenMenu={() => setOpenMenu(!openMenu)} openMenu={openMenu} />
      </StyledNavAndMenuWrapper>
    </SyledHeader>
  );
});

export default Header;
