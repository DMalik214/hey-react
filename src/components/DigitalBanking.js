import React from 'react';
import styled from 'styled-components';

const DigitalSection = styled.section`
  background: #fff;
  color: #000;
  padding: 50px 20px;
  text-align: center;
`;

const DigitalTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const DigitalDescription = styled.p`
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
`;

const DigitalBanking = () => {
  return (
    <DigitalSection>
      <DigitalTitle>Go Digital Now!</DigitalTitle>
      <DigitalDescription>Our digital platform allows you to access your money from anywhere, anytime. With our innovative security features and first-class service, we combine the best of traditional banking with modern convenience.</DigitalDescription>
      <button>Get Started</button>
    </DigitalSection>
  );
};

export default DigitalBanking;
