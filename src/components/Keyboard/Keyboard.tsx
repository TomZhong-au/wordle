import styled from "styled-components";
import { useTextContext } from "../../context/useTextContext";
import { keyboardLayout } from "../../data/keyboardLayout";
import KeyCap from "../KeyCap/KeyCap";
import { KeyCapStatus } from "../../interface/components.interface";
const Keyboard = () => {
  const { handleKeyClick, status } = useTextContext();

  return (
    <Container>
      {keyboardLayout.map((row, index) => {
        return (
          <div key={index}>
            {row.map((letter) => (
              <KeyCap
                letter={letter}
                key={letter}
                handleKeyClick={handleKeyClick}
                status={
                  status.keyboardStatus.get(letter) || KeyCapStatus.default
                }
              />
            ))}
          </div>
        );
      })}
    </Container>
  );
};

export default Keyboard;

const Container = styled.div`
  margin-block: 1rem;
`;
