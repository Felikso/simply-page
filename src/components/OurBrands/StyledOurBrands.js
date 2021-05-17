import styled from "styled-components";

export const StyledSectionOurBrands = styled.section`
  max-width: 1200px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;
  padding: 64px 33px 0 33px;
`;

export const StyledOurBrandsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 61px;

  > div {
    display: flex;
    justify-content: space-around;
    &:first-child {
      width: 40%;
      @media (max-width: ${({ theme }) => theme.device.l}) {
        width: 100%;
      }
    }
    &:nth-child(2) {
      width: 60%;
      @media (max-width: ${({ theme }) => theme.device.l}) {
        margin-top: 24px;
        width: 100%;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.device.l}) {
    flex-direction: column;
    padding-top: 34px;
  }
  @media (max-width: ${({ theme }) => theme.device.s}) {
    display: none;
  }
`;

export const StyledBrandsImage = styled.img`
  display: none;
  margin: 0 auto;
  padding-bottom: 61px;
  @media (max-width: ${({ theme }) => theme.device.s}) {
    display: block;
    width: 100%;
  }
`;
