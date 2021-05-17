import styled from "styled-components";
import Img from "gatsby-image";

export const StyledFooterButton = styled.button`
  margin-right: 44px;
  color: ${({ theme }) => theme.colors.brown};
  font-size: 16px;
  font-family: "MulishSemiBold";
  font-weight: 600;
  overflow: hidden;
  background-color: transparent;
  cursor: pointer;
  border: none;

  &:focus {
    outline: none;
  }
  &:first-child {
    @media (max-width: ${({ theme }) => theme.device.s}) {
      margin-top: 18px;
    }
  }
  @media (max-width: ${({ theme }) => theme.device.m}) {
    font-size: 18px;
    margin-right: 0;
    padding: 8px 0;
  }
`;

export const StyledFooterSection = styled.footer`
  width: 100%;
  padding: 36px 33px;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const StyledFooterWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px;
  > h5 {
    font-family: "MulishSemiBold";
    font-weight: 600;
    font-size: 12px;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.darkGray};
    @media (max-width: ${({ theme }) => theme.device.s}) {
      padding-top: 18px;
    }
    > br {
      display: none;
      @media (max-width: ${({ theme }) => theme.device.s}) {
        display: block;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.device.m}) {
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.device.s}) {
    padding: 0;
    margin: 0 auto;
    max-width: 353px;
    text-align: start;
  }
`;

export const StyledFooterImg = styled(Img)`
  margin: 0 auto;
`;
