import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App = () => {
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
};

export default App;
