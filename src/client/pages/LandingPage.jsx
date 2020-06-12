import React from "react";
import { Box } from "./client/components/node_modules/@material-ui/core";
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
