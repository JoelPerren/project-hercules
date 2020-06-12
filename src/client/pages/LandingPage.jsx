import React from "react";
import { Box } from "@material-ui/core";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";

function LandingPage() {
  return (
    <Box component="main">
      <HeroSection />
      <FeaturesSection />
    </Box>
  );
}

export default LandingPage;
