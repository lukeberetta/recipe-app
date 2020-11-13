import React, { useEffect, useState } from "react";
import { RecipeCard } from "./RecipeCard";
import firebase from "../firebase";

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
    <div style={{ marginTop: -8 }}>
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
    </div>
  );
}
