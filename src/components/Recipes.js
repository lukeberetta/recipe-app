import React, { useState } from "react";
import { RecipeCard } from "./RecipeCard";

export function Recipes() {
  const [recipes] = useState([1, 2, 3, 4, 5, 6, 7]);

  return (
    <div>
      {recipes.map((r) => {
        return <RecipeCard number={r} description={r}></RecipeCard>;
      })}
    </div>
  );
}
