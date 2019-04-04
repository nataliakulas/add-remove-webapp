import React from "react";
import styled from "styled-components";

import color from "../shared/colors";

const InputWrapper = ({
  id,
  label,
  placeholder,
  type,
  value,
  onChange,
  onFocus,
  onBlur,
  error
}) => (
  <Wrapper>
    <Label>{id || label}</Label>
    <Input
      id={id}
      type={type || "text"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
    <Error>{error}</Error>
  </Wrapper>
);

export default InputWrapper;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  color: ${color.blue};
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;

  font-family: "Lato", sans-serif;
  color: ${color.black};

  background-color: ${color.white};
  border: 1px solid ${color.blue};
  border-radius: 4px;

  padding: 10px;

  &::placeholder {
    color: ${color.blue};
  }

  &:focus {
    border-color: ${color.lapis};
  }
`;

const Error = styled.p`
  position: absolute;
  bottom: -15px;
  right: 0;
  color: ${color.red};
  font-size: 12px;
  font-style: italic;
  margin: 0;
`;
