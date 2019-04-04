import React from "react";
import { Row, Col } from "react-grid-system";
import styled from "styled-components";

import color from "../shared/colors";
import { PanelMixin, BoldBlueMixin } from "../shared/mixins";

import Button from "./Button";
import { P } from "./Fonts";

const UserTable = ({ users, onRemove }) => (
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
            <RoundButton type="button" onClick={() => onRemove(timestamp)}>
              &#10060;
            </RoundButton>
          </Col>
        </Row>
      ))}
      {users.length === 0 && <Placeholder>Add some users!</Placeholder>}
    </Body>
  </Table>
);

export default UserTable;

const Placeholder = styled(P)`
  margin: 100px auto;
`;

const Table = styled.div`
  ${PanelMixin};
  margin-top: 50px;
`;

const Header = styled.div`
  ${BoldBlueMixin};

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
