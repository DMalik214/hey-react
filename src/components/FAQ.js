import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

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
  background: #5300eb;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const QuestionText = styled.span`
  flex-grow: 1;
  text-align: left;
`;

const PlusIcon = styled(FaPlus)`
  margin-left: 10px;
`;


const FAQ = () => {
  return (
    <FAQSection>
      <FAQTitle>Frequently Asked Question</FAQTitle>
      <Questions>
        <Question>
          <QuestionText>How much would it require to open an account?</QuestionText>
          <PlusIcon />
        </Question>
        <Question>
          <QuestionText>Is there a minimum operational cost?</QuestionText>
          <PlusIcon />
        </Question>
        <Question>
          <QuestionText>Where can I use my debit cards?</QuestionText>
          <PlusIcon />
        </Question>
        <Question>
          <QuestionText>How much do I get as interest on savings?</QuestionText>
          <PlusIcon />
        </Question>
      </Questions>
      
    </FAQSection>
  );
};

export default FAQ;
