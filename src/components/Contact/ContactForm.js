import React, { useState, useRef, useEffect } from "react";

import {
  StyledForm,
  StyledCheckboxWrapper,
  StyledLabel,
  StyledInput,
  StyledTextAreaDiv,
  StyledTextAreaSpan,
  StyledTextArea,
} from "./StyledContactForm";

import Button from "../Button/Button";
import { animationMoveXScroll } from "../../style/Animations";

const ContactForm = () => {
  const [characters, setCharacters] = useState(0);
  const [maxCharacters, setMaxCharacters] = useState(500);
  const contactFormRef = useRef(null);

  useEffect(() => {
    const form = contactFormRef.current;

    animationMoveXScroll(form, "+=10");
  }, []);

  const changeCounter = (event) => {
    setCharacters(event.target.value.length);
    if (characters === maxCharacters) {
      event.target.style.borderColor = "red";
    }
  };

  return (
    <StyledForm ref={contactFormRef}>
      <div>
        <StyledLabel htmlFor="nameAndSurrname">Imię i Nazwisko</StyledLabel>
        <StyledInput
          id="nameAndSurrname"
          name="nameAndSurrname"
          type="text"
          placeholder="Jan Kowalski"
        />
      </div>
      <div>
        <StyledLabel htmlFor="email">Adres email</StyledLabel>
        <StyledInput id="email" name="email" type="email" placeholder="imię@email.com" />
      </div>
      <StyledTextAreaDiv>
        <StyledLabel htmlFor="message">Wiadomość</StyledLabel>
        <StyledTextArea
          id="message"
          name="message"
          type="text"
          placeholder="Dzień dorby, piszę do Was ponieważ"
          onChange={changeCounter}
          maxLength={maxCharacters}
        ></StyledTextArea>
        <StyledTextAreaSpan>
          {characters}/{maxCharacters}
        </StyledTextAreaSpan>
      </StyledTextAreaDiv>
      <StyledCheckboxWrapper>
        <input type="checkbox" id="privacyPolicy" name="privacyPolicy" />
        <label htmlFor="privacyPolicy">
          Przeczytałemi zgadzam się z <span>polityką prywatności</span>
        </label>
      </StyledCheckboxWrapper>
      <Button type="submit">Wyślij</Button>
    </StyledForm>
  );
};

export default ContactForm;
