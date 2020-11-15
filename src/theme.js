import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0D3D36",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
      contrastText: "#0E0E34",
    },
    background: {
      default: "#fff",
      paper: "#F3F5F5",
    },
  },
  shape: {
    borderRadius: 16,
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
    MuiToolbar: {
      regular: {
        height: 80,
      },
    },
    MuiTextField: {
      root: {
        width: "100%",
        margin: "8px 0",
      },
    },
    MuiPaper: {
      root: {
        borderRadius: "40px",
        boxShadow: "",
      },
    },
    MuiDrawer: {
      paper: {
        borderRadius: "16px 0 0 16px",
      },
    },
    MuiSnackbar: {
      root: {
        left: 16,
        right: 16,
      },
      anchorOriginBottomLeft: {
        bottom: 16,
      },
    },
    MuiSnackbarContent: {
      root: {
        justifyContent: "center",
      },
    },
  },
});
