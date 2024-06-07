import React from 'react';
import styled from 'styled-components';

const FeaturesSection = styled.section`
  background: #000;
  color: #fff;
  padding: 50px 20px;
  text-align: center;
`;

const Feature = styled.div`
  margin: 20px;
  font-size: 18px;
`;

const Features = () => {
  return (
    <FeaturesSection>
      <h2>All Features You Need in One Place</h2>
      <Feature>Secure Online Banking</Feature>
      <Feature>Automatic Bill Payment</Feature>
      <Feature>No Hidden Fees</Feature>
      <Feature>Card Payments Anytime</Feature>
    </FeaturesSection>
  );
};

export default Features;
