import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #000;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Banquee</Logo>
      <Nav>
        <NavItem href="Features.js">Features</NavItem>
        <NavItem href="DigitalBanking.js">Digital</NavItem>
        <NavItem href="Business.js">Business</NavItem>
        <NavItem href="PersonalBanking.js">Personal</NavItem>
        <NavItem href="Testimonials.js">Testimonials</NavItem>
        <NavItem href="FAQ.js">FAQ</NavItem>
        <NavItem href="Footer.js">Footer</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
