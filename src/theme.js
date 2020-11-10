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
  overrides: {
    MuiTextField: {
      root: {
        width: "100%",
        margin: "8px 0",
      },
    },
  },
});

export const darktheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
