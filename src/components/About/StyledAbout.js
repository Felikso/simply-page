import styled from "styled-components";

export const StyledAboutUsSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 88px auto 0px auto;
  padding: 0 33px;

  @media (max-width: ${({ theme }) => theme.device.m}) {
    margin-top: 24px;
  }
`;

export const StyledArticleAboutus = styled.article`
  font-family: "MulishSemiBold";
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeight.m};
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.fullBlack};
  margin: 58px 0;

  @media (max-width: ${({ theme }) => theme.device.l}) {
    font-size: 24px;
  }
  @media (max-width: ${({ theme }) => theme.device.m}) {
    padding: 0 12px;
  }
`;

export const StyledH3 = styled.h3`
  font-family: "MulishSemiBold";
  font-weight: ${({ theme }) => theme.fontWeight.m};
  display: inline-block;
  color: ${({ theme }) => theme.colors.fullBlack};
  font-size: 14px;
  text-transform: uppercase;
  position: relative;
  transform: translateX(38px);
  &::before {
    content: "";
    width: 27px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.darkOrange};
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-36px, -50%);
  }
`;
