import React from "react";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";

import color from "./shared/colors";

import GlobalStyle from "./components/Global";
import Input from "./components/Input";

const App = () => (
  <Background>
    <GlobalStyle />
    <Container>
      <H1>Crypto Users</H1>
      <Row>
        <Col xs={5}>
          <Form>
            <Input
              label="Nickname"
              placeholder="Enter nickname"
              error="Error"
            />
          </Form>
        </Col>
      </Row>
    </Container>
  </Background>
);

export default App;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 20px;
  background-color: ${color.snow};
`;

const H1 = styled.h1`
  color: ${color.blue};
`;

const Form = styled.form`
  background-color: ${color.white};
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);
`;
