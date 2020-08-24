import React from 'react';
import { Box } from '@material-ui/core';
import HeroSection from '../components/landingpage/HeroSection';
import FeaturesSection from '../components/landingpage/FeaturesSection';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

function LandingPage() {
  return (
    <>
      <Navbar />
      <Box component="main">
        <HeroSection />
        <FeaturesSection />
      </Box>
      <Footer />
    </>
  );
}

export default LandingPage;
