import React from 'react';
import styled from 'styled-components';
import personalbankingimage from './personalbankingimage.png';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
  padding: 20px;
`;

const Box = styled.div`
  background-color: #111;
  border-radius: 15px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
  }
`;

const PersonalSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const PersonalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50%;
  font-family: 'GT American Trial', sans-serif;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const PersonalTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 20px;
  font-weight: 900;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 10px;
  }
`;

const PersonalItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PersonalItem = styled.div`
  font-size: 17px;
  color: #fff;
  max-width: 1000px;
  margin-left: 80px;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: left;
    padding: 0 10px;
  }
`;

const PersonalHeading = styled.h3`
  align-self: ${(props) => (props.alternate ? 'flex-end' : 'flex-start')};
  font-size: 25px;

  @media (max-width: 768px) {
    align-self: center;
  }
`;

const PersonalBankingImage = styled.img`
  height: 80%;
  width: auto;
  margin-left: 20px;
  align-self: center;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
  }
`;

const PersonalBanking = () => {
  return (
    <Background>
      <Box>
        <PersonalSection>
          <PersonalContent>
            <PersonalTitle>We Take Banking Personally</PersonalTitle>
            <PersonalItems>
              <PersonalItem>
                <PersonalHeading alternate={false}>Save</PersonalHeading>
                <p>We're using technology to solve that by automating saving. You set an amount to save and we take care of the rest, prompt interest payout included.</p>
              </PersonalItem>
              <PersonalItem>
                <PersonalHeading alternate={true}>Spend</PersonalHeading>
                <p>We give you more than one way to pay easily, including a widely accepted debit card issued in partnership with Visa, quick web payment direct from your account.</p>
              </PersonalItem>
              <PersonalItem>
                <PersonalHeading alternate={false}>Send</PersonalHeading>
                <p>From international transfers to on-the-spot payments at market stalls, we've simplified sending money so you don't need to think too much about it.</p>
              </PersonalItem>
            </PersonalItems>
          </PersonalContent>
          <PersonalBankingImage src={personalbankingimage} alt="Personal Banking" />
        </PersonalSection>
      </Box>
    </Background>
  );
};

export default PersonalBanking;
