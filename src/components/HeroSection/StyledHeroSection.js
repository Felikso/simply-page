import styled from "styled-components";
import Img from "gatsby-image";

export const StyledHeroSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  z-index: 1;
  opacity: 0;
  overflow: hidden;
  @media (min-width: ${({ theme }) => theme.device.m}) {
    justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.device.m}) {
    flex-direction: column;
  }
`;

export const StyledHeroImg = styled.div`
  width: 40%;
  height: 100%;
  position: relative;

  @media (max-width: ${({ theme }) => theme.device.m}) {
    display: none;
  }
`;

export const StyledDivServiceContact = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;

  > div {
    &:last-child {
      @media (max-width: ${({ theme }) => theme.device.m}) {
        margin-top: 20px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.device.l}) {
    flex-direction: column;
  }
  @media (max-width: ${({ theme }) => theme.device.m}) {
    position: relative;
    width: 100%;
  }
`;

export const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
`;
