
import React from 'react';
import styled from 'styled-components';

const Banner = styled.section`
  background: #5300eb;
  color: #fff;
  text-align: center;
  padding: 50px 20px;
`;

const Button = styled.button`
  background: #ff9100;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
`;

const MainBanner = () => {
  return (
    <Banner>
      <h1>Easy Way to Banking</h1>
      <p>We give you both the foundation and flexibility to build and deliver customer experiences.</p>
      <Button>Get Started</Button>
    </Banner>
  );
};

export default MainBanner;
