import { IconButton, Paper, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

export function RecipeCard(props) {
  return (
    <Card elevation={1}>
      <Left>
        <Title variant="p">Recipe {props.number}</Title>
        <Typography variant="p">Description {props.description}</Typography>
      </Left>
      <Right>
        <IconButton>
          <Delete />
        </IconButton>
      </Right>
    </Card>
  );
}

const Card = styled(Paper)`
  padding: 24px;
  margin: 8px;
  display: flex;
  align-items: center;
  height: 80px;

  &:hover {
    opacity: 0.8;
  }
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
  font-weight: bold;
  margin-bottom: 8px;
`;

const Description = styled(Typography)``;
