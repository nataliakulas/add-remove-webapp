import styled from "styled-components";

import color from "../shared/colors";

const Button = styled.button`
  width: 100%;

  font-family: "Lato", sans-serif;
  color: ${color.white};
  font-weight: bold;

  border: 1px solid ${color.blue};
  background-color: ${color.blue};
  border-radius: 22px;

  margin: ${({ margin }) => margin || "20px auto"};
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    border-color: ${color.lapis};
    background-color: ${color.lapis};
  }
`;

export default Button;
