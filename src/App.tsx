import "./App.css";
import styled from "styled-components";
import { keyboardLayout } from "./data/keyboard";
import KeyCap from "./components/KeyCap/KeyCap";
import { useTextContext } from "./context/useTextContext";
import Answer from "./components/Answer/Answer";
import { KeyCapStatus } from "./interface/components.interface";

function App() {
  const { handleKeyClick, attempt, words, status } = useTextContext();
  return (
    <BackgroundImg>
      <ContentWrapper>
        this is the main content.
        {/* `$count`, transient props in styled component, this props does not pass to DOM and will not cause error in console */}
        <AnswerSection>
          answer area
          <div>
            {words.map((word, index) => (
              <Answer
                answer={word}
                inProgress={index === attempt}
                statusArray={status.answerStatus[index]}
                key={index}
              />
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
                    status={
                      status.keyboardStatus.get(letter) || KeyCapStatus.default
                    }
                  />
                ))}
              </div>
            );
          })}
        </KeyboardSection>
        <CopyRight>
          <div>© Copyright Rensi (Tom) Zhong</div>
          <a href="https://www.freepik.com/free-vector/geometric-shape-lines-background_25694301.htm#query=pattern%20business&position=48&from_view=keyword&track=ais">
            Image by vector_corp
          </a>{" "}
          on Freepik
        </CopyRight>
      </ContentWrapper>
    </BackgroundImg>
  );
}

export default App;

const ContentWrapper = styled.div`
  height: 90vh;
  min-height: 800px;
  width: 640px;
  margin: auto;
  padding-top: 3rem;
  backdrop-filter: blur(3px);
  color: white;
`;

const KeyboardSection = styled.div``;

const AnswerSection = styled.div`
  margin-block: 3rem;
`;

const imageUrl =
  // "https://img.freepik.com/free-vector/realistic-hexagonal-background_79603-1646.jpg?w=1380&t=st=1691584948~exp=1691585548~hmac=cb64efa56eb70d501d5903f7ea018cf3451a04d54fe0cec8f4f6fd29bce781c0";
  "https://img.freepik.com/free-photo/abstract-blue-painting_53876-88652.jpg?w=1380&t=st=1691584639~exp=1691585239~hmac=d9cc59597ac7c36ac8efd7a00799aabccdf6ba1891b10070d6e1a08372169ede";
// "https://img.freepik.com/free-photo/dark-blue-gradient-mat-background_114579-5086.jpg?w=1380&t=st=1691584473~exp=1691585073~hmac=48b21685038bef1bd9276272e0e724bd91b7b7bb176c597fca2f03cfb3312a76";
// "https://img.freepik.com/premium-photo/soft-sky-with-cloud-background-pastel-color-abstract-gradation-color-pastel_6529-315.jpg?w=1380";
// "https://img.freepik.com/free-vector/winter-blue-pink-gradient-background-vector_53876-117276.jpg?w=1380&t=st=1691584331~exp=1691584931~hmac=c33cc0bcf42f7ba852c8ed6d835aea286d689d441b863096fd8029d5aa2b442f";
const BackgroundImg = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${imageUrl});
  background-repeat: repeat;
  background-size: cover;
  position: relative;
`;

const CopyRight = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  color: #b5b5b5;
`;
