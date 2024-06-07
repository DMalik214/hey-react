import React from 'react';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import Features from './components/Features';
import DigitalBanking from './components/DigitalBanking';
import BusinessSizes from './components/BusinessSizes';
import PersonalBanking from './components/PersonalBanking';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainBanner />
      <Features />
      <DigitalBanking />
      <BusinessSizes />
      <PersonalBanking />
      <Testimonials />
      <FAQ />
      <Footer />
    </AppContainer>
  );
}

export default App;
