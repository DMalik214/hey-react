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
        <NavItem href="#features">Features</NavItem>
        <NavItem href="#digital">Digital</NavItem>
        <NavItem href="#business">Business</NavItem>
        <NavItem href="#personal">Personal</NavItem>
        <NavItem href="#testimonials">Testimonials</NavItem>
        <NavItem href="#faq">FAQ</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
