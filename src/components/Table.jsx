import React from "react";
import { Row, Col } from "react-grid-system";
import styled from "styled-components";

import color from "../shared/colors";
import { PanelMixin, BoldBlueMixin } from "../shared/mixins";

import Button, { RoundButton } from "./Button";
import { P } from "./Fonts";

const UserTable = ({ users, onRemove, onRemoveAll }) => (
  <Table>
    <Header>
      <Row>
        <Col xs={4}>
          <P>Nickname</P>
        </Col>
        <Col xs={3}>
          <P>E-mail</P>
        </Col>
        <Col xs={3}>
          <P>IP address</P>
        </Col>
        <Col xs={2}>
          {users.length > 0 && (
            <Button margin="0" type="button" onClick={onRemoveAll}>
              Remove All
            </Button>
          )}
        </Col>
      </Row>
    </Header>
    <Body>
      {users.map(({ timestamp, nickname, email, ip }) => (
        <Row key={timestamp}>
          <Col xs={4}>
            <P>{nickname}</P>
          </Col>
          <Col xs={3}>
            <P>{email}</P>
          </Col>
          <Col xs={3}>
            <P>{ip}</P>
          </Col>
          <Col xs={1} offset={{ xs: 1 }}>
            <RoundButton
              type="button"
              margin="10px auto"
              onClick={() => onRemove(timestamp)}
            >
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
  text-align: center;
  border-bottom: 1px solid ${color.blue};
  padding-bottom: 20px;

  ${P} {
    ${BoldBlueMixin};

    margin: 10px;
  }
`;

const Body = styled.div`
  padding-top: 20px;
`;
