import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #000;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Banquee. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
