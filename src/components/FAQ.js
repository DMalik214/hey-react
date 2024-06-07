import React from 'react';
import styled from 'styled-components';

const FAQSection = styled.section`
  background: #000;
  color: #fff;
  padding: 50px 20px;
  text-align: center;
`;

const FAQTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Questions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Question = styled.div`
  margin: 20px;
  background: #5300eb;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  text-align: left;
`;

const FAQ = () => {
  return (
    <FAQSection>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      <Questions>
        <Question>How much would it require to open an account?</Question>
        <Question>Is there a minimum operational cost?</Question>
        <Question>Where can I use my debit cards?</Question>
        <Question>How much do I get as interest on savings?</Question>
      </Questions>
    </FAQSection>
  );
};

export default FAQ;
