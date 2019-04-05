import React, { useReducer } from "react";
import { Row, Col } from "react-grid-system";
import styled from "styled-components";

import color from "../shared/colors";
import { PanelMixin, BoldBlueMixin } from "../shared/mixins";
import { sort_type, field_type } from "../shared/types";

import Button, { RoundButton } from "../components/Button";
import { P } from "../components/Fonts";

const UserTable = ({ users, onRemove, onRemoveAll }) => {
  const initialState = { field: "", sort: "" };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case sort_type.ASC:
        return {
          field: action.payload,
          sort: action.type
        };
      case sort_type.DESC:
        return {
          field: action.payload,
          sort: action.type
        };
      default:
        return state;
    }
  }, initialState);

  const handleSort = (field, sort) => dispatch({ type: sort, payload: field });

  const disabled = users.length < 2;

  const sorted_users = users.sort((prev, next, ...user) => {
    if (state.sort === sort_type.ASC) {
      return prev[state.field].localeCompare(next[state.field]);
    } else if (state.sort === sort_type.DESC) {
      return next[state.field].localeCompare(prev[state.field]);
    }
    return user;
  });

  return (
    <Table>
      <Header>
        <Row>
          <Col sm={3} lg={4}>
            <Wrapper>
              <P>Nickname</P>
              <SortButtons
                field={field_type.NICKNAME}
                disabled={disabled}
                onSort={handleSort}
              />
            </Wrapper>
          </Col>
          <Col sm={3}>
            <Wrapper>
              <P>E-mail</P>
              <SortButtons
                field={field_type.EMAIL}
                disabled={disabled}
                onSort={handleSort}
              />
            </Wrapper>
          </Col>
          <Col sm={3}>
            <Wrapper>
              <P>IP address</P>
              <SortButtons
                field={field_type.IP}
                disabled={disabled}
                onSort={handleSort}
              />
            </Wrapper>
          </Col>
          <Col sm={3} lg={2}>
            {users.length > 0 && (
              <Button margin="0" type="button" onClick={onRemoveAll}>
                Remove All
              </Button>
            )}
          </Col>
        </Row>
      </Header>
      <Body>
        {sorted_users.map(({ timestamp, nickname, email, ip }) => (
          <Row key={timestamp}>
            <Col sm={3} lg={4}>
              <P>{nickname}</P>
            </Col>
            <Col sm={3}>
              <P>{email}</P>
            </Col>
            <Col sm={3}>
              <P>{ip}</P>
            </Col>
            <Col sm={1} offset={{ sm: 1 }}>
              <RoundButton
                outlined
                type="button"
                margin="10px auto"
                onClick={() => onRemove({ nickname, timestamp })}
              >
                <span role="img" aria-label="remove">
                  &#10060;
                </span>
              </RoundButton>
            </Col>
          </Row>
        ))}
        {users.length === 0 && <Placeholder>Add some users!</Placeholder>}
      </Body>
    </Table>
  );
};

const SortButtons = ({ field, disabled, onSort }) => (
  <div>
    <RoundButton
      type="button"
      margin="0 5px"
      disabled={disabled}
      onClick={() => onSort(field, sort_type.ASC)}
    >
      &#x25B2;
    </RoundButton>
    <RoundButton
      type="button"
      margin="0 5px"
      disabled={disabled}
      onClick={() => onSort(field, sort_type.DESC)}
    >
      &#x25BC;
    </RoundButton>
  </div>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: center;
  }
`;
