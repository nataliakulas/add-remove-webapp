import styled from "styled-components";

import color from "../shared/colors";

const Button = styled.button`
  width: 100%;

  font-family: "Lato", sans-serif;
  color: ${({ outlined }) => (outlined ? color.blue : color.white)};
  font-weight: bold;

  border: 2px solid ${color.blue};
  background-color: ${({ outlined }) =>
    outlined ? "transparent" : color.blue};
  border-radius: 22px;

  margin: ${({ margin }) => margin || "20px auto"};
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    color: ${({ outlined }) => (outlined ? color.lapis : color.white)};
    border-color: ${color.lapis};
    background-color: ${({ outlined }) =>
      outlined ? "transparent" : color.lapis};
  }
`;

export default Button;

export const RoundButton = styled(Button)`
  width: 30px;
  height: 30px;
  padding: 0;
`;
