import React, { Component } from "react";
import { Container } from "react-grid-system";
import styled from "styled-components";

import color from "./shared/colors";

import GlobalStyle from "./components/Global";
import { H1 } from "./components/Fonts";

import AddForm from "./components/Form";
import UserTable from "./components/Table";

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

    return (
      <Background>
        <GlobalStyle />
        <Container>
          <H1>Crypto Users</H1>
          <AddForm
            nickname={nickname}
            email={email}
            ip={ip}
            onSubmit={e => this.handleSubmit(e)}
            onChange={e => this.handleChange(e)}
          />
          <UserTable users={users} onRemove={user => this.handleRemove(user)} />
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
