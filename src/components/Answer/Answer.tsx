import { styled } from "styled-components";
import KeyCap from "../KeyCap/KeyCap";
import { useCallback } from "react";
import React from "react";
import {
  AnswerProps,
  AnswerWrapperProps,
} from "../../interface/components.interface";

const Answer = React.memo(({ answer, inProgress }: AnswerProps) => {
  const completeAnswer = answer.padEnd(5, " ");
  const emptyFn = useCallback(() => {}, []);

  return (
    <AnswerWrapper $isSelected={inProgress}>
      {completeAnswer.split("").map((letter, index) => (
        <KeyCap letter={letter} handleKeyClick={emptyFn} key={index} />
      ))}
    </AnswerWrapper>
  );
});

export default Answer;

const AnswerWrapper = styled.div<AnswerWrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-inline: 1em;
  outline: ${(props) => (props.$isSelected ? "3px auto #93b5d3" : "")};
`;
