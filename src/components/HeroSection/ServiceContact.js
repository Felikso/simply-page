import React from "react";

import { StyledPhoneIcon, StyledServiceContact } from "./StyledServiceContact";

const ServiceContact = ({ swapColor, furnace }) => {
  return (
    <StyledServiceContact swapColor={swapColor}>
      <p>
        <StyledPhoneIcon />
        <span>509 411 729</span>
      </p>
      <p>{furnace ? "Problem z piecem?" : "Serwis"}</p>
    </StyledServiceContact>
  );
};

export default ServiceContact;
