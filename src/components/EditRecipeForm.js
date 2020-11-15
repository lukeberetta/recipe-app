import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import firebase from "../firebase";
import Spacer from "./Spacer";

export const EditRecipeForm = (props) => {
  const [title, setTitle] = useState(props.title || "");
  const [ingredients, setIngredients] = useState(props.ingredients || "");
  const [instructions, setInstructions] = useState(props.instructions || "");

  function onSubmit(e) {
    e.preventDefault();
    firebase.firestore().collection("recipes").doc(props.id).update({
      title,
      ingredients,
      instructions,
      timestamp: props.timestamp,
    });
  }

  return (
    <Dialog open={props.open} onBackdropClick={props.close} fullWidth>
      <DialogTitle>Edit recipe</DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContent dividers>
          <TextField
            required
            variant="outlined"
            value={title}
            label="Title"
            placeholder="Include an emoji 😍"
            onChange={(e) => setTitle(e.currentTarget.value)}
          ></TextField>
          <Spacer />
          <TextField
            value={ingredients}
            required
            placeholder="Seperate with a comma..."
            variant="outlined"
            label="Ingredients"
            multiline
            onChange={(e) => setIngredients(e.currentTarget.value)}
          ></TextField>
          <Spacer />
          <TextField
            value={instructions}
            variant="outlined"
            label="Instructions"
            placeholder="Be descriptive..."
            multiline
            onChange={(e) => setInstructions(e.currentTarget.value)}
          ></TextField>
          <Spacer />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            onClick={props.close}
          >
            Done
          </Button>
        </DialogContent>
      </form>
    </Dialog>
  );
};
