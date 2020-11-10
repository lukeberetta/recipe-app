import React, { useEffect, useState } from "react";
import { RecipeCard } from "./RecipeCard";
import firebase from "../firebase";

function useRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("recipes")
      .onSnapshot((snapshot) => {
        const newRecipes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecipes(newRecipes);
      });
  }, []);
  return recipes;
}

export function Recipes() {
  const recipes = useRecipes();

  return (
    <div>
      {recipes.map((r) => {
        return (
          <RecipeCard
            key={r.id}
            title={r.title}
            description={r.ingredients}
          ></RecipeCard>
        );
      })}
    </div>
  );
}
