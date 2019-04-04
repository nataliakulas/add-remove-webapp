import React from "react";
import { Container } from "react-grid-system";
import styled from "styled-components";

import color from "./shared/colors";

import GlobalStyle from "./components/Global";

const App = () => (
  <Background>
    <GlobalStyle />
    <Container>Crypto Users</Container>
  </Background>
);

export default App;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 20px;
  background-color: ${color.white};
`;
