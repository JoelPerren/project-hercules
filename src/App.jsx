import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Cssbaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import Navbar from "./components/Navbar";
import LandingPage from "./LandingPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Cssbaseline />
      <Navbar />
      <LandingPage />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
