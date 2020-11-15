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
import { Close, Delete, Edit } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { EditRecipeForm } from "./EditRecipeForm";
import Spacer from "./Spacer";

export function RecipeCard(props) {
  const [openCard, setOpenCard] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);

  const toggleOpen = (func, bool) => {
    return () => func(bool);
  };

  const createChecklist = (string) => {
    const arr = string.split(", ");
    return (
      <FormGroup>
        {arr.map((item) => {
          return (
            <FormControlLabel
              style={{ textTransform: "capitalize" }}
              control={<Checkbox color="primary" />}
              label={item}
            />
          );
        })}
      </FormGroup>
    );
  };

  return (
    <>
      <Card onClick={toggleOpen(setOpenCard, true)}>
        <Body>{props.title}</Body>
      </Card>

      <Dialog
        open={openCard}
        fullWidth
        onBackdropClick={toggleOpen(setOpenCard, false)}
      >
        <DialogTitle>{props.title}</DialogTitle>
        <CloseButton
          aria-label="close"
          onClick={toggleOpen(setOpenCard, false)}
        >
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
          <RecipeButton
            startIcon={<Delete />}
            variant="outlined"
            color="primary"
            onClick={() => props.deleteRecipe(props.id)}
            id={"delete"}
          >
            Delete
          </RecipeButton>
          <RecipeButton
            startIcon={<Edit />}
            variant="outlined"
            color="primary"
            onClick={toggleOpen(setOpenEditForm, true)}
          >
            Edit
          </RecipeButton>
        </DialogContent>
      </Dialog>

      <EditRecipeForm
        open={openEditForm}
        fullWidth
        close={toggleOpen(setOpenEditForm, false)}
        {...props}
      />
    </>
  );
}

const Card = styled(Paper)`
  padding: 24px;
  margin: 16px;
  display: flex;
  align-items: center;
  height: 90px;
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

const RecipeButton = styled(Button)`
  margin: 8px 8px 8px 0;
`;
