import { styled } from "styled-components";
import KeyCap from "../KeyCap/KeyCap";
import { useCallback } from "react";
import React from "react";
import {
  AnswerProps,
  AnswerWrapperProps,
} from "../../interface/components.interface";

const Answer = React.memo(
  ({ answer, inProgress, statusArray }: AnswerProps) => {
    const completeAnswer = answer.padEnd(5, " ");
    const emptyFn = useCallback(() => {}, []);

    return (
      <AnswerWrapper $isSelected={inProgress}>
        {/* `$isSelected`, transient props in styled component, this props does not pass to DOM and will not cause error in console */}

        {completeAnswer.split("").map((letter, index) => (
          <KeyCap
            letter={letter}
            handleKeyClick={emptyFn}
            key={index}
            status={statusArray[index]}
          />
        ))}
      </AnswerWrapper>
    );
  }
);

export default Answer;

const AnswerWrapper = styled.div<AnswerWrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-inline: 1em;
  margin-block: 3px;
  outline: ${(props) => (props.$isSelected ? "2px auto #93b5d3" : "")};
`;
