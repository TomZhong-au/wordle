import KeyCap from "../KeyCap/KeyCap";

const Answer = ({ answer }: { answer: string }) => {
  const completeAnswer = answer.padEnd(5, "");

  return (
    <>
      {completeAnswer.split("").map((letter) => (
        <KeyCap
          letter={letter}
          handleKeyClick={() => {}} // does not need any click feature on the answer area
          key={letter}
        />
      ))}
    </>
  );
};

export default Answer;
