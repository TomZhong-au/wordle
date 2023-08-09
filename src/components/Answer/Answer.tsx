import { styled } from "styled-components";
import KeyCap from "../KeyCap/KeyCap";
import { useCallback } from "react";

const Answer = ({ answer }: { answer: string }) => {
  const completeAnswer = answer.padEnd(5, " ");
  const emptyFn = useCallback(() => {}, []);

  return (
    <AnswerWrapper>
      {completeAnswer.split("").map((letter, index) => (
        <KeyCap letter={letter} handleKeyClick={emptyFn} key={index} />
      ))}
    </AnswerWrapper>
  );
};

export default Answer;

const AnswerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
