import React from 'react';
import styled from 'styled-components';

const BusinessSection = styled.section`
  background: #000;
  color: #fff;
  padding: 50px 20px;
  text-align: center;
`;

const BusinessTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const BusinessTypes = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const BusinessType = styled.div`
  font-size: 18px;
  padding: 20px;
  border: 1px solid #fff;
  border-radius: 10px;
`;

const BusinessSizes = () => {
  return (
    <BusinessSection>
      <BusinessTitle>Designed for Businesses of All Sizes</BusinessTitle>
      <BusinessTypes>
        <BusinessType>For Small Businesses</BusinessType>
        <BusinessType>For Startups</BusinessType>
        <BusinessType>For Enterprises</BusinessType>
      </BusinessTypes>
    </BusinessSection>
  );
};

export default BusinessSizes;
