import React from "react";
import { Row, Col } from "react-grid-system";

import { PanelMixin } from "../shared/mixins";

import Input from "./Input";
import Button from "./Button";
import styled from "styled-components";

const AddForm = ({
  nickname,
  email,
  ip,
  onChange,
  onSubmit,
  onFocus,
  onBlur,
  disabled
}) => (
  <Row>
    <Col xs={5}>
      <Form onSubmit={onSubmit}>
        <Input
          id="nickname"
          placeholder="Enter nickname"
          value={nickname.value}
          error={nickname.error}
          onChange={e => onChange(e)}
          onFocus={e => onFocus(e)}
          onBlur={e => onBlur(e)}
        />
        <Input
          id="email"
          label="E-mail"
          placeholder="Enter e-mail"
          value={email.value}
          error={email.error}
          onChange={e => onChange(e)}
          onFocus={e => onFocus(e)}
          onBlur={e => onBlur(e)}
        />
        <Input
          id="ip"
          label="IP address"
          placeholder="Enter IP address"
          value={ip.value}
          error={ip.error}
          onChange={e => onChange(e)}
          onFocus={e => onFocus(e)}
          onBlur={e => onBlur(e)}
        />
        <Button
          type="submit"
          disabled={disabled}
        >
          Add user
        </Button>
      </Form>
    </Col>
  </Row>
);

export default AddForm;

const Form = styled.form`
  ${PanelMixin};
`;
