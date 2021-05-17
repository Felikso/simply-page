import React, { useState } from "react";

import {
  StyledAnswerParagraph,
  StyledAnswerTextWrapper,
  StyledAnswerWrapper,
  StyledChevronIcon,
  StyledQuestionParagraph,
  StyledQuestionTextWrapper,
} from "./StyledAnswer";

const Answer = ({ question, answer, hasMarginTop }) => {
  const [openAnswer, setOpenAnswer] = useState(false);

  return (
    <StyledAnswerWrapper
      onClick={() => setOpenAnswer(!openAnswer)}
      hasMarginTop={hasMarginTop}
      animate={openAnswer}
    >
      <StyledQuestionTextWrapper>
        <StyledQuestionParagraph>{question}</StyledQuestionParagraph>
        <StyledChevronIcon animate={openAnswer} />
      </StyledQuestionTextWrapper>

      <StyledAnswerTextWrapper animate={openAnswer}>
        <StyledAnswerParagraph>{answer}</StyledAnswerParagraph>
      </StyledAnswerTextWrapper>
    </StyledAnswerWrapper>
  );
};

export default Answer;
