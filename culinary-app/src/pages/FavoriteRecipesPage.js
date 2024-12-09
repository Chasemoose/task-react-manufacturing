import React from "react";
import { useSelector } from "react-redux";
import RecipeList from "../components/RecipeList";
import '../styles/FavoriteRecipesPage.css';

const FavoriteRecipesPage = () => {
  const favoriteRecipes = useSelector((state) => state.recipes.favorites);

  return (
    <div className="favorite-recipes-container">
      <h2 className="favorite-recipes-header">Ulubione Przepisy</h2>
      {favoriteRecipes.length > 0 ? (
        <RecipeList recipes={favoriteRecipes} />
      ) : (
        <p className="favorite-recipes-empty-message">Nie masz jeszcze ulubionych przepisów.</p>
      )}
    </div>
  );
};

export default FavoriteRecipesPage;
