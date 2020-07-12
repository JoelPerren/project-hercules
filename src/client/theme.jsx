import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { main: "#8A85FF" },
    secondary: { main: "#414267" },
    text: {
      primary: "#E6E4E7",
      secondary: "#9EA0AC",
    },
    background: {
      default: "#1C2025",
      paper: "#282C34",
    },
  },
  typography: {
    h1: {
      fontFamily: "'Roboto Condensed', sans-serif",
      fontWeight: 700,
      fontSize: "1.5rem",
      letterSpacing: "0.005em",
    },
    h2: {
      fontFamily: "'Roboto Condensed', sans-serif",
      fontWeight: 700,
      lineHeight: 1.1,
    },
    h3: {
      fontFamily: "'Roboto Condensed', sans-serif",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "'Roboto Condensed', sans-serif",
      fontWeight: 700,
    },
  },
});

theme.overrides = {
  MuiListItem: {
    root: {
      "&$selected": {
        backgroundColor: theme.palette.secondary.main,
      },
    },
  },
};
theme = responsiveFontSizes(theme);

export default theme;
