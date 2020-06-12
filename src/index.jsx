import React from "react";
import ReactDOM from "react-dom";
import { GlobalProvider } from "./client/data/GlobalProvider";
import App from "./client/App";
import { ThemeProvider } from "@material-ui/core/styles";
import Cssbaseline from "@material-ui/core/CssBaseline";
import theme from "./client/theme";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <Cssbaseline />
        <App />
      </ThemeProvider>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Note(Joel): Research service workers and PWA
