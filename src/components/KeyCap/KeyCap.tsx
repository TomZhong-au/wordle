import React from "react";
import {
  KeyCapButtonProps,
  KeyCapProps,
  KeyCapStatus,
} from "../../interface/components.interface";
import styled from "styled-components";

// memo is really working here, it prevents all the keys from re-rendering
const KeyCap = React.memo(({ letter, handleKeyClick }: KeyCapProps) => {
  return (
    <StyledButton
      onClick={() => handleKeyClick(letter)}
      $status={KeyCapStatus.perfect}
    >
      {letter}
    </StyledButton>
  );
});

export default KeyCap;

const StyledButton = styled.button<KeyCapButtonProps>`
  margin: 0.25rem;
  display: inline-block;
  line-height: 1.5;
  min-width: 3.4em;
  height: 3em;
  background-color: ${(props) => keyStyles[props.$status].bg};
  color: ${(props) => keyStyles[props.$status].color};
  &:focus {
    outline: 4px auto green;
  }
`;

const keyStyles = {
  default: { bg: "#f9f9f9", color: "black" },
  wrong: { bg: "gray", color: "#414141" },
  correct: { bg: "orange", color: "#f9f9f9" },
  perfect: { bg: "green", color: "white" },
};
