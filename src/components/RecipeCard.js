import {
  Dialog,
  DialogContent,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import firebase from "../firebase";
import Spacer from "./Spacer";

export function RecipeCard(props) {
  const [open, setOpen] = useState(false);

  function deleteRecipe(id) {
    firebase.firestore().collection("recipes").doc(id).delete();
  }

  function toggleOpen(bool) {
    return () => setOpen(bool);
  }

  return (
    <>
      <Card onClick={toggleOpen(true)}>
        <Left>
          <Title variant="h6">{props.title}</Title>
          <Typography>{props.ingredients}</Typography>
        </Left>
        <Right>
          <IconButton onClick={() => deleteRecipe(props.id)}>
            <Delete />
          </IconButton>
        </Right>
      </Card>
      <Dialog open={open} fullWidth onBackdropClick={toggleOpen(false)}>
        <DialogContent>
          <Title variant="h6">{props.title}</Title>
          <Typography variant="caption">Ingredients:</Typography>
          <Typography>{props.ingredients}</Typography>
          <Spacer />
          <Typography variant="caption">Instructions:</Typography>
          <Typography>{props.instructions}</Typography>
          <Spacer />
        </DialogContent>
      </Dialog>
    </>
  );
}

const Card = styled(Paper)`
  padding: 24px;
  margin: 16px;
  display: flex;
  align-items: center;
  height: 120px;
`;

const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Right = styled.div`
  width: 30px;
`;

const Title = styled(Typography)`
  margin-bottom: 8px;
`;
