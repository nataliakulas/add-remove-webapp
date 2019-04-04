import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";

import color from "./shared/colors";

import GlobalStyle from "./components/Global";
import Input from "./components/Input";
import Button from "./components/Button";

class App extends Component {
  state = {
    timestamp: "",
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
      users: [
        ...prevState.users,
        { timestamp: new Date().getUTCMilliseconds(), nickname, email, ip }
      ]
    }));
  };

  handleRemove = timestamp =>
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.timestamp !== timestamp)
    }));

  render() {
    const { nickname, email, ip, users } = this.state;
    console.log(this.state.users);
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
          <Table>
            <Header>
              <Row>
                <Col xs={4}>Nickname</Col>
                <Col xs={4}>E-mail</Col>
                <Col xs={3}>IP address</Col>
              </Row>
            </Header>
            <Body>
              {users.map(({ timestamp, nickname, email, ip }) => (
                <Row key={timestamp}>
                  <Col xs={4}>
                    <P>{nickname}</P>
                  </Col>
                  <Col xs={4}>
                    <P>{email}</P>
                  </Col>
                  <Col xs={3}>
                    <P>{ip}</P>
                  </Col>
                  <Col xs={1}>
                    <RoundButton
                      type="button"
                      onClick={() => this.handleRemove(timestamp)}
                    >
                      &#10060;
                    </RoundButton>
                  </Col>
                </Row>
              ))}
              {users.length === 0 && <Placeholder>Add some users!</Placeholder>}
            </Body>
          </Table>
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

const P = styled.p`
  text-align: center;
`;

const Placeholder = styled(P)`
  margin: 100px auto;
`;

const PanelMixin = `
  background-color: ${color.white};
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);
`;

const Form = styled.form`
  ${PanelMixin};
`;

const Table = styled.div`
  ${PanelMixin};
  margin-top: 50px;
`;

const Header = styled.div`
  color: ${color.blue};
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  border-bottom: 1px solid ${color.blue};
  padding-bottom: 20px;
`;

const Body = styled.div`
  padding-top: 20px;
`;

const RoundButton = styled(Button)`
  width: 30px;
  height: 30px;
  margin: 10px auto;
  padding: 0;
`;
