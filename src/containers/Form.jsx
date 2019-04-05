import React from "react";
import { Row, Col } from "react-grid-system";

import { PanelMixin } from "../shared/mixins";
import { field_type } from "../shared/types";

import Input, { useInput } from "../components/Input";
import Button from "../components/Button";
import styled from "styled-components";

const AddForm = ({ users, onSubmit }) => {
  const nicknameInput = useInput(users);
  const emailInput = useInput(users);
  const ipInput = useInput();

  const handleSubmit = e => {
    e.preventDefault();

    if (!disabled) {
      onSubmit({
        timestamp: new Date().getUTCMilliseconds(),
        nickname: nicknameInput.value,
        email: emailInput.value,
        ip: ipInput.value
      });

      nicknameInput.onReset();
      emailInput.onReset();
      ipInput.onReset();
    }
  };

  const disabled =
    !nicknameInput.value ||
    !emailInput.value ||
    !ipInput.value ||
    nicknameInput.error ||
    emailInput.error ||
    ipInput.error;

  return (
    <Row>
      <Col sm={6} md={5}>
        <Form onSubmit={e => handleSubmit(e)}>
          <Input
            id={field_type.NICKNAME}
            placeholder="Enter nickname"
            {...nicknameInput}
          />
          <Input
            id={field_type.EMAIL}
            label="E-mail"
            placeholder="Enter e-mail"
            {...emailInput}
          />
          <Input
            id={field_type.IP}
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
