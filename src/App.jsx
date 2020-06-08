import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Cssbaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Cssbaseline />
    </ThemeProvider>
  );
};

export default App;
