import React from 'react';
import styled from 'styled-components';
import starImage from './Star.png'; 

const FooterContainer = styled.footer`
  background: #000;
  color: #fff;
  padding: 50px 20px;
  text-align: center;
`;

const SubscribeSection = styled.div`
  background: #fff;
  color: #000;
  padding: 30px;
  border-radius: 15px;
  margin: 0 auto;
  max-width: 600px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  text-align: left;
`;

const SubscribeText = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StarImage = styled.img`
  width: 40px;
  height: 40px;
`;

const SubscribeForm = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SubscribeInput = styled.input`
  padding: 10px 15px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 25px;
  outline: none;
  font-size: 16px;
  color: #666;
`;

const SubscribeButton = styled.button`
  background: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;

  &:hover {
    background: #333;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SubscribeSection>
        <SubscribeText>
          SUBSCRIBE TO OUR NEWSLETTER FOR A 10% BONUS ON TRANSACTIONS
          <StarImage src={starImage} alt="Star" />
        </SubscribeText>
        <SubscribeForm>
          <SubscribeInput type="email" placeholder="Your email address" />
          <SubscribeButton>Subscribe</SubscribeButton>
        </SubscribeForm>
      </SubscribeSection>
    </FooterContainer>
  );
};

export default Footer;
