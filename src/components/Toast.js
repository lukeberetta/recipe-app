import { Snackbar } from "@material-ui/core";
import React from "react";

export function Toast(props) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={props.open}
      onClose={props.close}
      autoHideDuration={3000}
      message={props.message}
    />
  );
}
