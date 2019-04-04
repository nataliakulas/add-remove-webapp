import styled from "styled-components";
import color from "../shared/colors";

const H1 = styled.h1`
  color: ${color.blue};
`;

const H2 = styled.h2`
  color: ${color.blue};
  font-size: 18px;
  text-transform: uppercase;
  margin: 0;
`;

const P = styled.p`
  text-align: center;
`;

export { H1, H2, P };
