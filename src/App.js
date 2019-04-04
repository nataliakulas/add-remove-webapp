import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";

import color from "./shared/colors";

import GlobalStyle from "./components/Global";
import Input from "./components/Input";
import Button from "./components/Button";

class App extends Component {
  state = {
    nickname: "",
    email: "",
    ip: "",
    users: []
  };

  handleChange = e => {
    const { id, value } = e.target;

    const propById = (propertyName, value) => () => ({
      [propertyName]: value
    });

    this.setState(propById(id, value));
  };

  handleSubmit = e => {
    const { nickname, email, ip } = this.state;

    e.preventDefault();
    this.setState(prevState => ({
      users: [...prevState.users, { nickname, email, ip }]
    }));
  };

  render() {
    const { nickname, email, ip } = this.state;

    return (
      <Background>
        <GlobalStyle />
        <Container>
          <H1>Crypto Users</H1>
          <Row>
            <Col xs={5}>
              <Form onSubmit={this.handleSubmit}>
                <Input
                  id="nickname"
                  placeholder="Enter nickname"
                  value={nickname}
                  onChange={e => this.handleChange(e)}
                />
                <Input
                  id="email"
                  label="E-mail"
                  placeholder="Enter e-mail"
                  value={email}
                  onChange={e => this.handleChange(e)}
                />
                <Input
                  id="ip"
                  label="IP address"
                  placeholder="Enter IP address"
                  value={ip}
                  onChange={e => this.handleChange(e)}
                />
                <Button type="submit">Add user</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Background>
    );
  }
}

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
