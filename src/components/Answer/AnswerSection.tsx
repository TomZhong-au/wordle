import styled from "styled-components";
import { useTextContext } from "../../context/useTextContext";
import Answer from "./Answer";

const AnswerSection = () => {
  const { attempt, words, status } = useTextContext();

  return (
    <Container>
      {words.map((word, index) => (
        <Answer
          answer={word}
          inProgress={index === attempt}
          statusArray={status.answerStatus[index]}
          key={index}
        />
      ))}
    </Container>
  );
};

export default AnswerSection;

const Container = styled.div`
  margin-block: 1rem;
`;
