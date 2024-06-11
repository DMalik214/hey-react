import React from 'react';
import styled from 'styled-components';
import smallbusiness from './smallbusiness.png';
import startup from './startup.png';
import enterprise from './enterprise.png';

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
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const BusinessImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
`;

const BusinessSizes = () => {
  return (
    <BusinessSection>
      <BusinessTitle>Designed for Businesses of All Sizes</BusinessTitle>
      <BusinessTypes>
        <BusinessType>
          <BusinessImage src={smallbusiness} alt="small business" />
          For Small Businesses
        </BusinessType>
        <BusinessType>
          <BusinessImage src={startup} alt="startup" />
          For Startups
        </BusinessType>
        <BusinessType>
          <BusinessImage src={enterprise} alt="enterprise" />
          For Enterprises
        </BusinessType>
      </BusinessTypes>
    </BusinessSection>
  );
};

export default BusinessSizes;
