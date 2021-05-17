import styled from "styled-components";

export const StyledHamburger = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  z-index: 999;
  height: 16px;
  position: absolute;
  right: 33px;
  top: 40px;
  display: none;
  opacity: 0;
  @media (max-width: ${({ theme }) => theme.device.m}) {
    display: block;
  }
`;

export const StyledHamburgerBox = styled.span`
  width: 27px;
  height: 100%;
  position: relative;
  display: inline-block;
  > span {
    width: 19px;
    height: 2px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    border-radius: 10px;
    background-color: ${({ openMenu, theme }) => (openMenu ? "transparent" : theme.colors.black)};
    &::after {
      content: "";
      width: 27px;
      height: 2px;
      position: absolute;
      right: 0;
      background-color: ${({ theme }) => theme.colors.black};
      top: 7px;
      border-radius: 10px;
      transform: ${({ openMenu }) => (openMenu ? "translateY(-7px) rotate(45deg)" : null)};
      transition: transform 250ms;
    }
    &::before {
      content: "";
      width: 27px;
      height: 2px;
      position: absolute;
      right: 0;
      background-color: ${({ theme }) => theme.colors.black};
      top: -7px;
      border-radius: 10px;
      transform: ${({ openMenu }) => (openMenu ? "translateY(7px) rotate(-45deg)" : null)};
      transition: transform 250ms;
    }
  }
`;
