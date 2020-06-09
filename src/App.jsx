import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Cssbaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Cssbaseline />
      <Navbar />
      <LandingPage />
    </ThemeProvider>
  );
};

export default App;
