import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Formulario from "./components/Formulario/Formulario";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<Formulario />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </Container>
  );
};

export default App;
