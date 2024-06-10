import React from 'react';
import styled from 'styled-components';
import logo from './Logo.png';
import star from './Star 2.png';
import heroImage from './Hero Image.png';
import footerImage from './image 2.png';
import hamburgermenu from './Cheeseburger.png';

const PageWrapper = styled.div`
  background: #000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

const BannerWrapper = styled.div`
  background: #5300eb;
  color: #fff;
  text-align: center;
  padding: 20px;
  position: relative;
  width: 80%;
  margin: 20px 0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  position: absolute;
  width: 369px;
  height: 80px;
  top: 20px;
  left: calc(50% - 184.5px);
`;

const MenuIcon = styled.img`
  position: absolute;
  width: 60px;
  height: 38px;
  top: 30px;
  right: 20px;
`;

const Star = styled.img`
  position: absolute;
  width: 186px;
  height: 186px;
  top: 50px;
  left: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 20px 0;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 30px;
  max-width: 749px;
`;

const Button = styled.button`
  background: #ff9100;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 1.25rem;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 61.5px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 55px;

  &::after {
    content: '>>';
    display: inline-block;
    margin-left: 10px;
    font-size: 1.5rem;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  width: 756px;
  height: 946px;
  top: 150px;
  left: calc(50% + 84px);
  z-index: 1;
`;

const FooterImage = styled.img`
  position: absolute;
  width: 1293px;
  height: 93px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid;
  border-image-source: linear-gradient(0deg, #000000, #000000),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
`;

const MainBanner = () => {
  return (
    <PageWrapper>
      <BannerWrapper>
        <Logo src={logo} alt="logo" />
        <MenuIcon src={hamburgermenu} alt="menu icon" />
        <Star src={star} alt="star" />
        <Title>Easy Way to Banking</Title>
        <Description>
          We give you both the foundation and flexibility to build and grow digital capabilities and deliver customer experiences.
        </Description>
        <Button>Get Started</Button>
        <HeroImage src={heroImage} alt="hero image" />
      </BannerWrapper>
      <FooterImage src={footerImage} alt="footer section" />
    </PageWrapper>
  );
};

export default MainBanner;
