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
      {/* `$count`, transient props in styled component, this props does not pass to DOM and will not cause error in console */}
      <AnswerSection>
        answer area
        <div>
          {words.map((word, index) => (
            <Answer answer={word} key={index} inProgress={index === attempt} />
          ))}
        </div>
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

const KeyboardSection = styled.div``;

const AnswerSection = styled.div`
  outline: 1px yellow solid;
`;
