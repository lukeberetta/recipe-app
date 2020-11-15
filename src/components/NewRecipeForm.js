import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import firebase from "../firebase";
import Spacer from "./Spacer";

export const NewRecipeForm = (props) => {
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
        timestamp: +new Date(),
      })
      .then(() => {
        setTitle("");
        setInstructions("");
        setIngredients("");
      });

    props.handleDrawer();
    props.handleToast();
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <InnerDrawer>
          <Typography variant="h6">New recipe</Typography>
          <Spacer />
          <Typography>What's it called?</Typography>
          <TextField
            required
            variant="outlined"
            value={title}
            label="Title"
            placeholder="Include an emoji 😍"
            onChange={(e) => setTitle(e.currentTarget.value)}
          ></TextField>
          <Spacer />
          <Typography>What's inside?</Typography>
          <TextField
            value={ingredients}
            required
            placeholder="Seperate with a comma..."
            variant="outlined"
            label="Ingredients"
            multiline
            rows={4}
            onChange={(e) => setIngredients(e.currentTarget.value)}
          ></TextField>
          <Spacer />
          <Typography>How make??</Typography>
          <TextField
            value={instructions}
            variant="outlined"
            label="Instructions"
            placeholder="Be descriptive..."
            multiline
            rows={8}
            onChange={(e) => setInstructions(e.currentTarget.value)}
          ></TextField>
          <Spacer />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            done
          </Button>
        </InnerDrawer>
      </form>
    </>
  );
};

const InnerDrawer = styled.div`
  padding: 16px;
  width: 500px;
  max-width: 88vw;
`;
