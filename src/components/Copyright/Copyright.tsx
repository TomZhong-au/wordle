import styled from "styled-components";

const Copyright = () => {
  return (
    <Wrapper>
      <div>© Copyright Rensi (Tom) Zhong</div>
      <a href="https://www.freepik.com/free-vector/geometric-shape-lines-background_25694301.htm#query=pattern%20business&position=48&from_view=keyword&track=ais">
        Image by vector_corp
      </a>{" "}
      on Freepik
    </Wrapper>
  );
};

export default Copyright;

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  color: #b5b5b5;
`;
