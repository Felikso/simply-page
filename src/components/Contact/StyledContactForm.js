import styled from "styled-components";
import iconCheck from "../../assets/images/iconcheck11.png";

export const StyledForm = styled.form`
  width: 436px;
  overflow: hidden;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.device.m}) {
    margin: 0 auto;
  }
  @media (max-width: ${({ theme }) => theme.device.l}) {
    width: 353px;
  }
`;

export const StyledLabel = styled.label`
  font-family: "MulishSemiBold";
  font-size: 16px;
  color: ${({ theme }) => theme.colors.midBlack};
  padding-bottom: 17px;
  display: block;
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeight.m};
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 54px;
  border-radius: 10px;
  border: solid 3px ${({ theme }) => theme.colors.gray};
  margin-bottom: 17px;
  font-size: 15px;
  padding: 20px;
  font-family: "Mulish";
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const StyledTextAreaDiv = styled.div`
  position: realtive;
  width: 100%;
`;

export const StyledTextArea = styled.textarea`
  border: solid 3px ${({ theme }) => theme.colors.gray};
  display: block;
  border-radius: 10px;
  padding-bottom: 17px;
  resize: none;
  height: 150px;
  width: 100%;
  padding: 20px;
  font-size: 15px;
  font-family: "Mulish";
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
  &:focus {
    outline: none;
  }
`;

export const StyledTextAreaSpan = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray};
  position: absolute;
  transform: translate(170px, -30px);
  z-index: 22;
  font-family: "Mulish";
  @media (max-width: ${({ theme }) => theme.device.l}) {
    transform: translate(130px, -30px);
  }
`;

export const StyledCheckboxWrapper = styled.div`
  margin: 20px 0;
  > label {
    margin-left: 7px;
    position: relative;
    font-size: 9px;
    color: ${({ theme }) => theme.colors.gray};
    font-family: "Mulish";
    > span {
      color: ${({ theme }) => theme.colors.midBlack};
    }
    &::before {
      content: "";
      width: 10px;
      height: 10px;
      background-color: ${({ theme }) => theme.colors.gray};
      border: none;
      position: absolute;
      left: -17px;
      top: 0;
    }
  }
  > input {
    display: none;
  }
  > input:checked + label::before {
    background-image: url(${iconCheck});
    background-size: 100%;
  }
`;
