import styled from "styled-components";

export const SyledHeader = styled.header`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.device.m}) {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledNavAndMenuWrapper = styled.div`
  padding: 0 33px;
  position: relative;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.device.m}) {
    padding: 0;
  }
`;
