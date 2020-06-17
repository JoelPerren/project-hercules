import React from "react";
import { Box } from "@material-ui/core";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
