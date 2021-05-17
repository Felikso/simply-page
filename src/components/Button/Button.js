import styled from "styled-components";

const Button = styled.button`
  font-family: "MulishSemiBold";
  font-weight: ${({ theme }) => theme.fontWeight.m};
  background-color: ${({ theme }) => theme.colors.carrotOrange};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  font-size: 14px;
  width: 115px;
  height: 38px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export default Button;
