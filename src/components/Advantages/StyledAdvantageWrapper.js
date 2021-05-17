import styled from "styled-components";

const StyledAdvantageWrapper = styled.div`
  width: 305px;
  height: 289px;
  box-shadow: 0 15px 40px 0 #f7ecea;
  background-color: ${({ swapColor, theme }) =>
    swapColor ? theme.colors.darkOrange : theme.colors.white};
  border-radius: 5px;

  padding: 25px;
  margin-bottom: 55px;
  > div {
    width: 67px;
    height: 69px;
    background-color: ${({ swapColor, theme }) =>
      swapColor ? theme.colors.white : theme.colors.lightCreamy};
    transform: translateY(10px);
    margin-bottom: 33px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  > h3 {
    font-size: 19px;
    font-weight: bold;
    font-family: "MulishBold";
    color: ${({ swapColor, theme }) => (swapColor ? theme.colors.white : theme.colors.midBlack)};
    margin-bottom: 12px;
  }

  > h4 {
    font-size: 16px;
    font-family: "Mulish";
    font-weight: normal;
    color: ${({ swapColor, theme }) => (swapColor ? theme.colors.white : theme.colors.gray)};
  }

  @media (max-width: ${({ theme }) => theme.device.m}) {
    display: ${({ displayOnSmallScrean }) => (displayOnSmallScrean ? "block" : "none")};
    width: 354px;
  }
`;

export default StyledAdvantageWrapper;
