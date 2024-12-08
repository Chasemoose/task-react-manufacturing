import React from "react";
import { useSelector } from "react-redux";
import RecipeList from "../components/RecipeList";

const FavoriteRecipesPage = () => {
  const favoriteRecipes = useSelector((state) => state.recipes.favorites);

  return (
    <div>
      <h2>Ulubione Przepisy</h2>
      {favoriteRecipes.length > 0 ? (
        <RecipeList recipes={favoriteRecipes} />
      ) : (
        <p>Nie masz jeszcze ulubionych przepisów.</p>
      )}
    </div>
  );
};

export default FavoriteRecipesPage;
