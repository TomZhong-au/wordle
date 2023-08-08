import "./App.css";
import styled from "styled-components";
import { keyboardLayout } from "./data/keyboard";
import KeyCap from "./components/KeyCap/KeyCap";
import { useTextContext } from "./context/useTextContext";
import React from "react";

function App() {
  const {
    input: { word },
  } = useTextContext();
  return (
    <ContentWrapper>
      this is the main content.
      <AnswerSection>answer: {word}</AnswerSection>
      <KeyboardSection>
        {keyboardLayout.map((row, index) => {
          return (
            <div key={index}>
              {row.map((letter) => (
                <KeyCap letter={letter} key={letter} />
              ))}
            </div>
          );
        })}
      </KeyboardSection>
    </ContentWrapper>
  );
}

const MemoApp = React.memo(App);
export default MemoApp;

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
