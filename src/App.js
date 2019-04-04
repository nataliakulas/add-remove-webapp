import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";

import color from "./shared/colors";

import GlobalStyle from "./components/Global";
import { H1 } from "./components/Fonts";

import AddForm from "./components/Form";
import UserTable from "./components/Table";
import Modal from "./components/Modal";
import Button from "./components/Button";

class App extends Component {
  state = {
    timestamp: "",
    nickname: "",
    email: "",
    ip: "",
    users: [],
    modal: "",
    user: {}
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

  handleConfirm = (type, user) => {
    switch (type) {
      case "all":
        return this.setState({ modal: type });
      case "user":
        return this.setState({ modal: type, user });
      default:
        return;
    }
  };

  handleRemove = (type, timestamp) => {
    switch (type) {
      case "all":
        return this.setState({ users: [], modal: "" });
      case "user":
        return this.setState(prevState => ({
          users: prevState.users.filter(user => user.timestamp !== timestamp),
          modal: "",
          user: {}
        }));
      default:
        return null;
    }
  };

  handleClose = () => this.setState({ modal: "", user: {} });

  render() {
    const { nickname, email, ip, users, modal, user } = this.state;

    return (
      <Background>
        <GlobalStyle />
        <Modal open={modal} title="Title" onClose={() => this.handleClose()}>
          {modal === "all" &&
            "Are you sure, that you want to remove all users?"}
          {modal === "user" &&
            `Are you sure, that you want to remove user ${user.nickname}?`}
          <Row>
            <Col xs={4} offset={{ xs: 1 }}>
              <Button
                type="button"
                onClick={() => this.handleRemove(modal, user.timestamp)}
              >
                Yes
              </Button>
            </Col>
            <Col xs={4} offset={{ xs: 2 }}>
              <Button outlined type="button" onClick={() => this.handleClose()}>
                No
              </Button>
            </Col>
          </Row>
        </Modal>
        <Container>
          <H1>Crypto Users</H1>
          <AddForm
            nickname={nickname}
            email={email}
            ip={ip}
            onSubmit={e => this.handleSubmit(e)}
            onChange={e => this.handleChange(e)}
          />
          <UserTable
            users={users}
            onRemove={user => this.handleConfirm("user", user)}
            onRemoveAll={() => this.handleConfirm("all")}
          />
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
