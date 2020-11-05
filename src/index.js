import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-ui/core";
import { darktheme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darktheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
