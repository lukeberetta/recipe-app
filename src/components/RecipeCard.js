import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { Close, Delete } from "@material-ui/icons";
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

  const createChecklist = (string) => {
    const arr = string.split(", ");

    return (
      <FormGroup>
        {arr.map((item) => {
          return (
            <FormControlLabel
              style={{ textTransform: "capitalize" }}
              control={
                <Checkbox
                // checked={gilad}
                // onChange={handleChange}
                // name="gilad"
                />
              }
              label={item}
            />
          );
        })}
      </FormGroup>
    );
  };

  return (
    <>
      <Card onClick={toggleOpen(true)}>
        <Left>
          <Body>{props.title}</Body>
        </Left>
        <Right></Right>
      </Card>

      <Dialog
        style={{ marginTop: 16 }}
        open={open}
        fullWidth
        onBackdropClick={toggleOpen(false)}
      >
        <DialogTitle>{props.title}</DialogTitle>
        <CloseButton aria-label="close" onClick={toggleOpen(false)}>
          <Close />
        </CloseButton>
        <DialogContent dividers>
          <Typography variant="caption">Ingredients:</Typography>
          <Typography>{createChecklist(props.ingredients)}</Typography>
          <Spacer />
          <Typography variant="caption">Instructions:</Typography>
          <Typography>{props.instructions}</Typography>
          <Spacer />
          <Spacer />
          <DeleteRecipe
            startIcon={<Delete />}
            variant="outlined"
            color="primary"
            onClick={() => deleteRecipe(props.id)}
          >
            Remove Recipe
          </DeleteRecipe>
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
  height: 96px;
`;

const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Right = styled.div`
  width: 30px;
`;

const Body = styled(Typography)`
  font-size: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-transform: capitalize;
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 8px;
  right: 8px;
`;
const DeleteRecipe = styled(Button)`
  margin-bottom: 8px;
`;
