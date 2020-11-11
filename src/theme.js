import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#35bea1",
      contrastText: "white",
    },
    background: {
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
    MuiPaper: {
      root: {
        boxShadow: "",
        "&:hover": {
          boxShadow: "0 6px 10px rgba(0, 0, 0, 0.03)",
        },
      },
    },
  },
});
