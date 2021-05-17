import React, { useRef, useEffect } from "react";

import Answer from "./Answer";

import blob from "../../assets/images/svg/blob.svg";
import iconquestion from "../../assets/images/svg/iconquestion.svg";

import {
  StyledQuestionsSection,
  StyledQuestionsWrapper,
  StyledQuestionsH2,
  StyledRightBoxImg,
  StyledQuestionImgBox,
} from "./StyledQuestionsAndAnswer";

import { animationMoveXScroll } from "../../style/Animations";

const QuestionsAndAnswer = React.forwardRef((props, ref) => {
  const answerRef = useRef(null);
  const questionMarkRef = useRef(null);
  useEffect(() => {
    const answer = answerRef.current;
    const questionMark = questionMarkRef.current;
    animationMoveXScroll(answer, "-=10");
    animationMoveXScroll(questionMark, "+=10");
  }, []);

  return (
    <StyledQuestionsSection ref={ref}>
      <StyledQuestionsWrapper>
        <div ref={answerRef}>
          <StyledQuestionsH2>Najczęściej zadawane pytania</StyledQuestionsH2>

          <Answer
            answer="Tak! Przyjedziemy, doradzimy, przygotujemy ofertę 
          na sprzęt i wykonanie w której będą 2-3 urządzenia do wyboru. 
          W razie potrzeby polecimy też fachowego kierownika budowy lub 
          kominiarza."
            question="Jak najwygodniej mogę się z Wami skontaktować?"
            hasMarginTop={true}
          />
          <Answer
            answer="Tak! Przyjedziemy, doradzimy, przygotujemy ofertę 
          na sprzęt i wykonanie w której będą 2-3 urządzenia do wyboru. 
          W razie potrzeby polecimy też fachowego kierownika budowy lub 
          kominiarza."
            question="Czy mogę liczyć na rzetelną podpowiedź w wyborze kotła?"
          />
          <Answer
            answer="Tak! Przyjedziemy, doradzimy, przygotujemy ofertę 
          na sprzęt i wykonanie w której będą 2-3 urządzenia do wyboru. 
          W razie potrzeby polecimy też fachowego kierownika budowy lub 
          kominiarza."
            question="Czy mogę liczyć na rzetelną podpowiedź w wyborze kotła?"
          />
          <Answer
            answer="Tak! Przyjedziemy, doradzimy, przygotujemy ofertę 
          na sprzęt i wykonanie w której będą 2-3 urządzenia do wyboru. 
          W razie potrzeby polecimy też fachowego kierownika budowy lub 
          kominiarza."
            question="Czy pracujecie wg jakiegoś konkretnego schematu?"
          />
          <Answer
            answer="Tak! Przyjedziemy, doradzimy, przygotujemy ofertę 
          na sprzęt i wykonanie w której będą 2-3 urządzenia do wyboru. 
          W razie potrzeby polecimy też fachowego kierownika budowy lub 
          kominiarza."
            question="Czy macie działalność stacjonarną czy dojeżdżacie do klienta?"
          />
        </div>
      </StyledQuestionsWrapper>
      <StyledQuestionImgBox ref={questionMarkRef}>
        <StyledRightBoxImg src={blob} />
        <div>
          <img src={iconquestion} alt="question mark" />
        </div>
      </StyledQuestionImgBox>
    </StyledQuestionsSection>
  );
});

export default QuestionsAndAnswer;
