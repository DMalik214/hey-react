import React from 'react';
import styled from 'styled-components';

const TestimonialsSection = styled.section`
  background: #000;
  color: #fff;
  padding: 50px 20px;
  text-align: center;
`;

const Testimonial = styled.div`
  margin: 20px;
  background: #fff;
  color: #000;
  padding: 20px;
  border-radius: 10px;
`;

const TestimonialText = styled.p`
  font-size: 18px;
`;

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <h2>Trusted by People All Over the World</h2>
      <Testimonial>
        <TestimonialText>Super User-Friendly</TestimonialText>
        <p>The UI is so intuitive that anyone can use it.</p>
      </Testimonial>
      <Testimonial>
        <TestimonialText>Saved Hours Every Week!</TestimonialText>
        <p>I have been saved so much time on tax calculations.</p>
      </Testimonial>
    </TestimonialsSection>
  );
};

export default Testimonials;
