import React from 'react';
import styled from 'styled-components';
import bankImg from './bankImg.png';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
  padding: 20px;
`;

const Box = styled.div`
  background-color: #f9f9f9;
  border-radius: 15px;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const DigitalSection = styled.section`
  background: transparent;
  color: #000;
  text-align: left;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const DigitalTitle = styled.h1`
  font-weight: 900;
  font-family: 'GT American Trial';
  font-size: 30px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const DigitalDescription = styled.p`
  font-size: 20px;
  font-family: 'GT American Trial';
  font-weight: 500;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const FeatureImage = styled.img`
  height: 90%;
  width: auto;
  margin-right: 20px;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  background: #ff9100;
  color: #fff;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  margin-top: 30px;
  border-radius: 61.5px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;

  &::after {
    content: '>>';
    display: inline-block;
    margin-left: 10px;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 15px 30px;
    font-size: 1rem;
  }
`;

const DigitalBanking = () => {
  return (
    <Background>
      <Box>
        <DigitalSection>
          <FeatureImage src={bankImg} alt="Digital Banking" />
          <div>
            <DigitalTitle>Go Digital Now!</DigitalTitle>
            <DigitalDescription>
              Our digital platform allows you to access your money from anywhere, anytime. With our innovative security features and first-class service, we combine the best of traditional banking with modern convenience.
            </DigitalDescription>
            <Button>Get Started</Button>
          </div>
        </DigitalSection>
      </Box>
    </Background>
  );
};

export default DigitalBanking;
