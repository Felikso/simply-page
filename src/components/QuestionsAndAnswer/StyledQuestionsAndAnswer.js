import styled from "styled-components";

export const StyledQuestionsSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  overflow: hidden;
`;

export const StyledQuestionImgBox = styled.div`
  width: 405px;
  height: 485px;
  position: absolute;
  right: -100px;
  top: 50%;
  transform: translateY(-50%);

  > div {
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: ${({ theme }) => theme.device.l}) {
    display: none;
  }
`;

export const StyledQuestionsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 33px 0 33px;
  display: flex;
  @media (max-width: ${({ theme }) => theme.device.l}) {
    width: 354px;
    padding: 56px 0;
  }
  > div {
    @media (max-width: ${({ theme }) => theme.device.l}) {
      width: 354px;
    }
  }
`;

export const StyledQuestionsH2 = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.fullBlack};
  position: relative;
  margin-bottom: 44px;
  font-family: "MulishExtraBold";
  font-weight: 800;
  &::after {
    content: "";
    width: 27px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.darkOrange};
    position: absolute;
    left: 0;
    bottom: -21px;
  }
`;

export const StyledRightBoxImg = styled.img`
  width: 100%;
  height: 100%;
`;
