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
    modalOpen: false
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

  handleRemoveAll = () => this.setState({ users: [] });

  handleConfirm = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const { nickname, email, ip, users, modalOpen } = this.state;

    return (
      <Background>
        <GlobalStyle />
        <Modal
          open={modalOpen}
          title="Title"
          onClose={() => this.handleClose()}
        >
          Are you sure, that you want to remove all users?
          <Row>
            <Col xs={4} offset={{ xs: 1 }}>
              <Button type="button" onClick={() => this.handleRemoveAll()}>
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
            onRemove={user => this.handleRemove(user)}
            onRemoveAll={() => this.handleConfirm()}
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
