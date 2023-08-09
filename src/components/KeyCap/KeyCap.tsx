import React from "react";
import { KeyCapProps } from "../../interface/components.interface";
import styled from "styled-components";

// memo is really working here, it prevents all the keys from re-rendering
const KeyCap = React.memo(({ letter, handleKeyClick }: KeyCapProps) => {
  return (
    <StyledButton onClick={() => handleKeyClick(letter)}>{letter}</StyledButton>
  );
});

export default KeyCap;

const StyledButton = styled.button`
  margin: 0.25rem;
  display: inline-block;
  line-height: 1.5;
  min-width: 3.4em;
  height: 3em;

  &:focus {
    outline: 4px auto green;
  }
`;
