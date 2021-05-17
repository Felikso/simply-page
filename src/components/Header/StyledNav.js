import styled from "styled-components";

export const StyledNavWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  max-width: 1200px;
  margin: 0 auto;
  opacity: 0;
`;

export const StyledNav = styled.nav`
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-areas: " . . . link1 link2 link3 . . . . link4 link5";
  align-items: center;
  transition: opacity 250ms, transform 250ms;

  @media (max-width: ${({ theme }) => theme.device.m}) {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    transform: ${({ openMenu }) => (openMenu ? "translateY(100px)" : "translateY(-100px)")};
    opacity: ${({ openMenu }) => (openMenu ? "100%" : "0")};
    pointer-events: ${({ openMenu }) => (openMenu ? "auto" : "none")};
    background-color: ${({ theme }) => theme.colors.white};
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.device.l}) {
    grid-template-areas: " . link1 link2 link3 . . link4 link5";
  }
`;

export const StyledLogoWrapper = styled.div`
  width: ${({ hasDeclardeWith }) => (hasDeclardeWith ? `${hasDeclardeWith}px` : "auto")};
  height: 38px;
  margin-top: 10px;
  > h1 {
    text-indent: -9999em;
  }
  @media (max-width: ${({ theme }) => theme.device.m}) {
    margin: 0 33px;
  }
`;

export const StyledButton = styled.button`
  width: ${({ hasDeclardeWith }) => (hasDeclardeWith ? `${hasDeclardeWith}px` : "auto")};
  margin-right: ${({ hasMarginRight }) => (hasMarginRight ? `${hasMarginRight}` : null)};
  display: block;
  height: 38px;
  color: ${({ theme }) => theme.colors.midBlack};
  font-size: 14px;
  line-height: 2.6em;
  font-family: "Mulish";
  font-weight: ${({ theme }) => theme.fontWeight.m};
  border: none;
  background-color: transparent;
  cursor: pointer;

  transition: background-color 250ms ease-in-out;

  &:focus {
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.device.m}) {
    margin: 14px 0;
    padding: 0 33px;
    width: 100%;
    &:hover {
      background-color: ${({ theme }) => theme.colors.lightCreamy};
    }
  }

  &:nth-child(1) {
    grid-area: link1;
    color: ${({ theme }) => theme.colors.darkOrange};

    @media (max-width: ${({ theme }) => theme.device.m}) {
      color: ${({ theme }) => theme.colors.midBlack};
      margin: 0;
      grid-area: unset;
    }
  }

  &:nth-child(2) {
    grid-area: link2;
    @media (max-width: ${({ theme }) => theme.device.m}) {
      grid-area: unset;
    }
  }

  &:nth-child(3) {
    grid-area: link3;
    @media (max-width: ${({ theme }) => theme.device.m}) {
      grid-area: unset;
    }
  }

  &:nth-child(4) {
    grid-area: link4;
    justify-self: end;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkOrange};
    @media (max-width: ${({ theme }) => theme.device.m}) {
      grid-area: unset;
      width: 100%;
      background-color: transparent;
      color: ${({ theme }) => theme.colors.midBlack};

      &:hover {
        background-color: ${({ theme }) => theme.colors.lightCreamy};
      }
    }
  }

  &:nth-child(5) {
    grid-area: link5;
    justify-self: end;
    background-color: ${({ theme }) => theme.colors.darkOrange};
    color: ${({ theme }) => theme.colors.white};
    @media (max-width: ${({ theme }) => theme.device.m}) {
      grid-area: unset;
      width: 100%;
      background-color: transparent;
      color: ${({ theme }) => theme.colors.midBlack};
      margin-bottom: 0;
      &:hover {
        background-color: ${({ theme }) => theme.colors.lightCreamy};
      }
    }
  }
`;
