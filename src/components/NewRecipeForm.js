import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";

import firebase from "../firebase";

export const NewRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    firebase
      .firestore()
      .collection("recipes")
      .add({
        title,
        ingredients,
        instructions,
      })
      .then(() => {
        setTitle("");
        setInstructions("");
        setIngredients("");
      });
  }

  return (
    <form onSubmit={onSubmit}>
      <InnerDrawer>
        <Typography variant="h5">Add new recipe</Typography>
        <Spacer />
        <Typography>What's it called?</Typography>
        <TextField
          required
          variant="outlined"
          value={title}
          label="Title"
          onChange={(e) => setTitle(e.currentTarget.value)}
        ></TextField>
        <Spacer />
        <Typography>What's inside?</Typography>
        <TextField
          variant="outlined"
          label="Ingredients"
          multiline
          rows={4}
          onChange={(e) => setIngredients(e.currentTarget.value)}
        ></TextField>
        <Spacer />
        <Typography>How make??</Typography>
        <TextField
          variant="outlined"
          label="Instructions"
          multiline
          rows={8}
          onChange={(e) => setInstructions(e.currentTarget.value)}
        ></TextField>
        <Spacer />
        <Button fullWidth type="submit" variant="contained" size="large">
          Add it to the book! 🍆
        </Button>
      </InnerDrawer>
    </form>
  );
};

const InnerDrawer = styled.div`
  padding: 16px;
  width: 500px;
  max-width: 85vw;
`;

const Spacer = styled.div`
  height: 16px;
`;
