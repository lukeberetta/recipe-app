import { IconButton, Paper, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

export function RecipeCard(props) {
  const removeCard = (text) => {
    console.log(text);
  };

  return (
    <Card>
      <Left>
        <Title variant="h6">{props.title}</Title>
        <Typography>{props.description}</Typography>
      </Left>
      <Right>
        <IconButton onClick={() => removeCard(props.number)}>
          <Delete />
        </IconButton>
      </Right>
    </Card>
  );
}

const Card = styled(Paper)`
  padding: 24px;
  margin: 16px;
  display: flex;
  align-items: center;
  height: 120px;

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
