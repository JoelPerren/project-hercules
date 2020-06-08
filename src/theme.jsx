import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
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
    htmlFontSize: 16, //default
  },
});

export default theme;
