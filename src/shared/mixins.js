import color from "./colors";

const PanelMixin = `
  background-color: ${color.white};
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);
`;

const BoldBlueMixin = `
  color: ${color.blue};
  font-weight: bold;
  text-transform: uppercase;
`;

export { PanelMixin, BoldBlueMixin };
