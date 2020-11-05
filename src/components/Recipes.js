import React from "react";
import { RecipeCard } from "./RecipeCard";

export function Recipes() {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7].map((r) => {
        console.log(r);
        return <RecipeCard number={r}></RecipeCard>;
      })}
    </div>
  );
}
