import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./client/context/auth/AuthProvider";
import App from "./client/App";
import { ThemeProvider } from "@material-ui/core/styles";
import Cssbaseline from "@material-ui/core/CssBaseline";
import theme from "./client/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Cssbaseline />
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Note(Joel): Research service workers and PWA
