import React from 'react';
import styled, { keyframes } from 'styled-components';
import man from './man.png';
import woman from './woman.png';

const TestimonialsSection = styled.section`
  background: #000;
  color: #fff;
  padding: 50px 20px;
  text-align: center;
`;

const Container = styled.div`
  background: #f7931e;
  color: #000;
  padding: 30px 20px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const TestimonialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const hoverAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Testimonial = styled.div`
  background: #fff;
  color: #000;
  padding: 30px 20px;
  border-radius: 20px;
  max-width: 450px;
  text-align: left;
  position: relative;
  margin: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  &:hover {
    animation: ${hoverAnimation} 1s infinite;
  }
`;

const TestimonialText = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TestimonialDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const UserTitle = styled.div`
  font-size: 14px;
  color: #666;
`;

const ArrowButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ArrowButton = styled.button`
  background: #000;
  color: #fff;
  border: none;
  padding: 10px;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 18px;
  width: 40px;
  height: 40px;

  &:hover {
    background: #333;
  }
`;

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <Container>
        <Title>Trusted by People All Over the World</Title>
        <TestimonialContainer>
          <Testimonial>
            <TestimonialText>Super User-Friendly</TestimonialText>
            <TestimonialDescription>
              The UI is so intuitive that anyone can use it, without any knowledge on the system & I love the financial reports. The tool automatically organizes all data and gives us clarity on spend.
            </TestimonialDescription>
            <UserDetails>
              <UserImage src={man} alt="William Tromp" />
              <UserInfo>
                <UserName>WILLIAM TROMP</UserName>
                <UserTitle>CTO - Gislason and Sons</UserTitle>
              </UserInfo>
            </UserDetails>
          </Testimonial>
          <Testimonial>
            <TestimonialText>Saved Hours Every Week!</TestimonialText>
            <TestimonialDescription>
              I have been saved so much time on tax calculations. And it gives me reliable projections. I love the financial reports. The tool automatically organizes all data and gives us clarity on spend.
            </TestimonialDescription>
            <UserDetails>
              <UserImage src={woman} alt="Rebecca Emard" />
              <UserInfo>
                <UserName>REBECCA EMARD</UserName>
                <UserTitle>Founder - Conn Inc</UserTitle>
              </UserInfo>
            </UserDetails>
          </Testimonial>
        </TestimonialContainer>
        <ArrowButtons>
          <ArrowButton>←</ArrowButton>
          <ArrowButton>→</ArrowButton>
        </ArrowButtons>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
