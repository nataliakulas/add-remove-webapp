import React, { useState } from "react";
import styled from "styled-components";

import color from "../shared/colors";
import { BoldBlueMixin } from "../shared/mixins";

export const useInput = () => {
  const [inputValue, setValue] = useState("");
  const [inputError, setError] = useState("");

  function handleChange(e) {
    setValue(e.target.value.trim());
  }

  function handleFocus() {
    setError("");
  }

  function handleBlur(e) {
    const { id, value } = e.target;

    if (inputValue.length === 0) {
      setError("Field cannot be empty");
    } else {
      if (id === "email") {
        const re = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

        if (!re.test(value))
          return setError("Please enter valid e-mail address");
      } else if (id === "ip") {
        const re = /^(([1-9]?\d|1\d\d|2[0-5][0-5]|2[0-4]\d)\.){3}([1-9]?\d|1\d\d|2[0-5][0-5]|2[0-4]\d)$/;

        if (!re.test(value)) return setError("Please enter valid IP number");
      } else {
        console.log("nickname field");
      }
    }
  }

  function handleError(error) {
    setError(error);
  }

  function handleReset() {
    setValue("");
    setError("");
  }

  return {
    value: inputValue,
    error: inputError,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onError: handleError,
    onReset: handleReset
  };
};

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
  ${BoldBlueMixin};

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
  bottom: -20px;
  right: 0;
  color: ${color.red};
  font-size: 12px;
  font-style: italic;
  margin: 0;
`;
