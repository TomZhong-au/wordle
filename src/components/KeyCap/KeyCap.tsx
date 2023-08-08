import { useTextContext } from "../../context/useTextContext";
import { KeyCapProps } from "../../interface/components.interface";
import styled from "styled-components";

const KeyCap = ({ letter }: KeyCapProps) => {
  const { handleKeyClick } = useTextContext();
  return (
    <StyledButton onClick={() => handleKeyClick(letter)}>{letter}</StyledButton>
  );
};

export default KeyCap;

const StyledButton = styled.button`
  margin: 0.25rem;
`;
