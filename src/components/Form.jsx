import React from "react";
import { Row, Col } from "react-grid-system";

import { PanelMixin } from "../shared/mixins";

import Input, { useInput } from "./Input";
import Button from "./Button";
import styled from "styled-components";

const AddForm = ({ onSubmit }) => {
  const nicknameInput = useInput("");
  const emailInput = useInput("");
  const ipInput = useInput("");

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      timestamp: new Date().getUTCMilliseconds(),
      nickname: nicknameInput.value,
      email: emailInput.value,
      ip: ipInput.value
    });
  };

  const disabled = !nicknameInput.value || !emailInput.value || !ipInput.value;

  return (
    <Row>
      <Col xs={5}>
        <Form onSubmit={e => handleSubmit(e)}>
          <Input
            id="nickname"
            placeholder="Enter nickname"
            {...nicknameInput}
          />
          <Input
            id="email"
            label="E-mail"
            placeholder="Enter e-mail"
            {...emailInput}
          />
          <Input
            id="ip"
            label="IP address"
            placeholder="Enter IP address"
            {...ipInput}
          />
          <Button type="submit" disabled={disabled}>
            Add user
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default AddForm;

const Form = styled.form`
  ${PanelMixin};
`;
