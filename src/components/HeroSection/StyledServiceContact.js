import styled from "styled-components";
import { ImPhone } from "@react-icons/all-files/im/ImPhone";

export const StyledPhoneIcon = styled(ImPhone)`
  width: 19px;
  height: 19px;
  transform: translate(-10px, 3px);

  @media (max-width: ${({ theme }) => theme.device.m}) {
    width: 36px;
    height: 36px;
  }
`;

export const StyledServiceContact = styled.div`
  width: 200px;
  height: 85px;
  background: ${({ swapColor, theme }) =>
    swapColor ? theme.colors.darkOrange : theme.colors.white};
  text-align: center;
  display: grid;
  grid-template-areas:
    "p1"
    "p2";
  align-items: center;
  > p {
    font-size: 18px;
    font-weight: bold;
    font-family: "MulishBold";
    &:first-child {
      color: ${({ swapColor, theme }) =>
        swapColor ? theme.colors.white : theme.colors.carrotOrange};
      padding-top: 12px;
      @media (max-width: ${({ theme }) => theme.device.s}) {
        grid-area: p2;
        padding-bottom: 16px;
      }
      @media (max-width: ${({ theme }) => theme.device.m}) {
        font-size: 34px;
        padding-top: 8px;
      }
    }
    &:last-child {
      color: ${({ swapColor, theme }) =>
        swapColor ? theme.colors.white : theme.colors.carrotOrange};
      font-size: 14px;
      text-align: center;
      padding-bottom: 12px;
      > span {
        margin-left: 5px;
      }
      @media (max-width: ${({ theme }) => theme.device.s}) {
        padding-top: 16px;
      }
      @media (max-width: ${({ theme }) => theme.device.m}) {
        font-size: 16px;
        padding-bottom: 8px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.device.m}) {
    width: 100%;
    height: 104px;
  }
`;
