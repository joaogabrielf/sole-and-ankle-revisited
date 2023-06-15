/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label='Menu'>
        <Filler />
        <CloseButton onClick={onDismiss}>
          <Icon id='close' />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <Footer>
          <TextFooter href='/terms'>Terms and Conditions</TextFooter>
          <TextFooter href='/privacy'>Privacy Policy</TextFooter>
          <TextFooter href='/contact'>Contact Us</TextFooter>
        </Footer>
      </Content>
    </Overlay>
  );
};

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
  color: ${(p) => p.theme.COLORS.gray[900]};
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsla(220 5% 40% / 0.8);

  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;

  background-color: ${(p) => p.theme.COLORS.white};
  height: 100%;
  width: 300px;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Footer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 9px;
`;

const NavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: ${(p) => p.theme.COLORS.gray[900]};
  font-weight: ${(p) => p.theme.WEIGHTS.medium};
  font-size: ${18 / 16}rem;

  &:first-of-type {
    color: ${(p) => p.theme.COLORS.secondary};
  }
`;

const TextFooter = styled.a`
  text-decoration: none;
  color: ${(p) => p.theme.COLORS.gray[700]};
  font-size: ${14 / 16}rem;
`;

const Filler = styled.div`
  flex: 1;
`;

export default MobileMenu;
