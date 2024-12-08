import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const RecipeItemPage = () => {
  const { id } = useParams();
  const recipes = useSelector((state) => state.recipes.recipes);
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <p>Przepis nie został znaleziony.</p>;
  }

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>Składniki: {recipe.ingredients.join(", ")}</p>
      <p>Instrukcje: {recipe.instructions}</p>
    </div>
  );
};

export default RecipeItemPage;
