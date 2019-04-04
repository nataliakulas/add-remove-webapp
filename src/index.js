import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

export const rootElement = document.getElementById("root");

const render = Component => {
  return ReactDOM.render(<Component />, rootElement);
};

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(NextApp);
  });
}
