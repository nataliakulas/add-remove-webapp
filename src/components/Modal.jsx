import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import color from "../shared/colors";

import { RoundButton } from "./Button";
import { H2 } from "./Fonts";

import { rootElement } from "../index";

const Modal = ({ open, title, onClose, children }) => {
  return (
    open &&
    createPortal(
      <Wrapper>
        <Content>
          <Header>
            <H2>{title}</H2>
            <RoundButton type="button" margin="0" onClick={onClose}>
              &#10060;
            </RoundButton>
          </Header>
          <Body>{children}</Body>
        </Content>
      </Wrapper>,
      rootElement
    )
  );
};

export default Modal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
`;

const Content = styled.div`
  width: 290px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  background-color: ${color.snow};
  padding: 20px 30px;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const Header = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 20px 0;

  > div {
    width: 100%;
  }
`;
