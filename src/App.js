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

const valueById = (name, value) => () => ({
  [name]: { value }
});

const errorById = (name, error) => () => ({
  [name]: { error }
});

class App extends Component {
  state = {
    timestamp: "",
    nickname: { value: "", error: "" },
    email: { value: "", error: "" },
    ip: { value: "", error: "" },
    users: [],
    modal: "",
    user: {}
  };

  handleChange = e => {
    const { id, value } = e.target;

    this.setState(valueById(id, value));
  };

  handleFocus = e => {
    const { id } = e.target;

    this.setState(errorById(id, ""));
  };

  handleBlur = e => {
    const { id, value } = e.target;

    if (value.length === 0) {
      this.setState(errorById(id, "Field cannot be empty"));
    }
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
    const disabled = !nickname.value || !email.value || !ip.value;

    console.log(nickname, email, ip);
    return (
      <Background>
        <GlobalStyle />
        <Modal open={modal} title="Title" onClose={() => this.handleClose()}>
          {modal === "all" &&
            "Are you sure, that you want to remove all users?"}
          {modal === "user" &&
            `Are you sure, that you want to remove user ${
              user.nickname.value
            }?`}
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
            onFocus={e => this.handleFocus(e)}
            onBlur={e => this.handleBlur(e)}
            disabled={disabled}
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
