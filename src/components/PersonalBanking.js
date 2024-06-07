import React from 'react';
import styled from 'styled-components';

const PersonalSection = styled.section`
  background: #fff;
  color: #000;
  padding: 50px 20px;
  text-align: center;
`;

const PersonalTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const PersonalItems = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const PersonalItem = styled.div`
  font-size: 18px;
  max-width: 300px;
`;

const PersonalBanking = () => {
  return (
    <PersonalSection>
      <PersonalTitle>We Take Banking Personally</PersonalTitle>
      <PersonalItems>
        <PersonalItem>
          <h3>Save</h3>
          <p>We're using technology to solve that by automating saving.</p>
        </PersonalItem>
        <PersonalItem>
          <h3>Spend</h3>
          <p>We give you more than one way to pay easily.</p>
        </PersonalItem>
        <PersonalItem>
          <h3>Send</h3>
          <p>We've simplified sending money so you don't need to think too much about it.</p>
        </PersonalItem>
      </PersonalItems>
    </PersonalSection>
  );
};

export default PersonalBanking;
