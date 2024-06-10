import React from 'react';
import styled from 'styled-components';
import SecureBankingImg from './4 1.png';
import BillPaymentImg from './4 2.png';
import NoHiddenFeesImg from './4 2 (2).png';
import CardPaymentsImg from './4 1 (1).png';

const FeaturesSection = styled.section`
  background: #000;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

const Container = styled.div`
  width: 85%;
  background: #000;
  color: #fff;
  box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 10px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-family: 'GT America Trial', sans-serif;
  font-size: 50px;
  font-weight: 900;
  line-height: 62.9px;
  text-align: left;
  color: #fff;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

const FeatureBox = styled.div`
  flex: ${(props) => (props.wide ? '2 1 calc(50% - 10px)' : '1 1 calc(25% - 10px)')};
  padding: 20px;
  display: flex;
  flex-direction: ${(props) => (props.sideways ? 'row' : 'column')};
  align-items: center;
  text-align: center;
  height: 200px;
  box-sizing: border-box;
  border-radius: 15px;
  ${(props) => (props.dashed ? 'border: 10px dashed #4C27AE;' : 'background: #ED7E02;')}
`;

const FeatureImage = styled.img`
  max-height: 80px;
  margin-bottom: ${(props) => (props.sideways ? '0' : '20px')};
  margin-right: ${(props) => (props.sideways ? '20px' : '0')};
`;

const FeatureText = styled.p`
  margin-top: ${(props) => (props.sideways ? '0' : '10px')};
  font-size: 18px;
`;

const Features = () => {
  return (
    <FeaturesSection>
      <Container>
        <Title>ALL FEATURES YOU NEED IN ONE PLACE</Title>
        <FeaturesContainer>
          <FeatureBox wide dashed sideways>
            <FeatureImage src={SecureBankingImg} alt="Secure Online Banking" sideways />
            <FeatureText sideways>Secure Online Banking</FeatureText>
          </FeatureBox>
          <FeatureBox>
            <FeatureImage src={BillPaymentImg} alt="Automatic Bill Payment" />
            <FeatureText>Automatic Bill Payment</FeatureText>
          </FeatureBox>
          <FeatureBox>
            <FeatureImage src={NoHiddenFeesImg} alt="No Hidden Fees" />
            <FeatureText>No Hidden Fees</FeatureText>
          </FeatureBox>
          <FeatureBox wide dashed sideways>
            <FeatureImage src={CardPaymentsImg} alt="Card Payments Anytime" sideways />
            <FeatureText sideways>Card Payments Anytime</FeatureText>
          </FeatureBox>
        </FeaturesContainer>
      </Container>
    </FeaturesSection>
  );
};

export default Features;
