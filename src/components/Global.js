import { setConfiguration } from "react-grid-system";
import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

import color from "../shared/colors";

setConfiguration({
  breakpoints: [768, 992, 1200, 1540],
  containerWidths: [750, 960, 1140, 1140]
});

const GlobalStyle = createGlobalStyle`
  ${styledNormalize};
  
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline-color: ${color.lapis};
  }
  
  body {
    font-family: "Lato", sans-serif;
    color: ${color.black};
  }
  
  ::selection {
    color: ${color.snow};
    background-color: ${color.lapis};
  }
`;

export default GlobalStyle;
