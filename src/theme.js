import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0D3D36",
      contrastText: "#FFDCE0",
    },
    secondary: {
      main: "#FFDCE0",
      contrastText: "#0D3D36",
    },
    background: {
      default: "#F3F5F5",
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
    MuiDialog: {
      paper: {
        margin: 16,
        maxWidth: "none",
      },
      paperFullWidth: {
        width: "100%",
        height: "100%",
      },
      paperScrollPaper: {
        maxHeight: "calc(100% - 88px)",
        marginTop: "72px",
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
