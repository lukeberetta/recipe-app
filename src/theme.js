import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#35bea1",
      contrastText: "white",
    },
    background: {
      // paper: "#f6f5fb",
      default: "#f6f5fb",
    },
  },
  typography: {
    fontFamily: [
      "DM Sans",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    allVariants: {
      letterSpacing: "-0.5px",
    },
  },
  shadows: ["none"],
});

export const darktheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
