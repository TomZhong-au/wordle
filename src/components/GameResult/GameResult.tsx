import styled from "styled-components";
import { useTextContext } from "../../context/useTextContext";

const GameStatus = () => {
  const { gameStatus: status } = useTextContext();
  let content = "";
  if (status === "win") content = "Excellent! 🏆 You win. ";
  if (status === "lose") content = "You lose. 😥 Try again.";
  return <Container>{content}</Container>;
};

export default GameStatus;

const Container = styled.div`
  min-height: 1.5em;
`;
