import React from 'react';
import styled from 'styled-components';
import bankImg from '.\bankImg.png';

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

const FeatureImage = styled.img`
  max-height: 80px;
  margin-bottom: ${(props) => (props.sideways ? '0' : '20px')};
  margin-right: ${(props) => (props.sideways ? '20px' : '0')};
`;


const DigitalBanking = () => {
  return (
    <DigitalSection>
      <FeatureImage src={bankImg} alt="Digital Banking" sideways />
      <DigitalTitle>Go Digital Now!</DigitalTitle>
      <DigitalDescription>Our digital platform allows you to access your money from anywhere, anytime. With our innovative security features and first-class service, we combine the best of traditional banking with modern convenience.</DigitalDescription>
      <button>Get Started</button>
    </DigitalSection>
  );
};

export default DigitalBanking;
