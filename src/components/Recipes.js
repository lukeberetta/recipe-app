import React, { useEffect, useState } from "react";
import { RecipeCard } from "./RecipeCard";
import firebase from "../firebase";
import styled from "styled-components";

function useRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("recipes")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const newRecipes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecipes(newRecipes);
      });
    return () => unsubscribe();
  }, []);
  return recipes;
}

export function Recipes() {
  const recipes = useRecipes();

  return (
    <Container>
      {recipes.map((r) => {
        return (
          <RecipeCard
            id={r.id}
            key={r.id}
            title={r.title}
            ingredients={r.ingredients}
            instructions={r.instructions}
          ></RecipeCard>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  margin-top: -16px;
  padding-bottom: 8px;
`;
