import { Paper } from "@material-ui/core";
import React from "react";

export function RecipeCard(props) {
  return (
    <Paper elevation={1} className="recipe-card">
      <h4>Recipe {props.number}</h4>
    </Paper>
  );
}
