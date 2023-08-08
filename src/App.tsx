import "./App.css";
import styled from "styled-components";
import { keyboardLayout } from "./data/keyboard";
import KeyCap from "./components/KeyCap/KeyCap";
import { useTextContext } from "./context/useTextContext";
import Answer from "./components/Answer/Answer";

function App() {
  const { handleKeyClick, attempt, words } = useTextContext();
  return (
    <ContentWrapper>
      this is the main content.
      <AnswerSection>
        answer area
        <Answer answer={words[0]} />
        <Answer answer={words[1]} />
        <Answer answer={words[2]} />
        <Answer answer={words[3]} />
        <Answer answer={words[4]} />
        <Answer answer={words[5]} />
      </AnswerSection>
      <KeyboardSection>
        {keyboardLayout.map((row, index) => {
          return (
            <div key={index}>
              {row.map((letter) => (
                <KeyCap
                  letter={letter}
                  key={letter}
                  handleKeyClick={handleKeyClick}
                />
              ))}
            </div>
          );
        })}
      </KeyboardSection>
    </ContentWrapper>
  );
}

export default App;

const ContentWrapper = styled.div`
  background-color: #a7e2a7;
  height: 80vh;
  min-height: 800px;
  width: 640px;
`;

const KeyboardSection = styled.div`
  outline: 1px blue solid;
`;

const AnswerSection = styled.div`
  outline: 1px yellow solid;
`;
