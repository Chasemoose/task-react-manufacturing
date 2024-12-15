import React from "react";
import { useSelector } from "react-redux";
import RecipeList from "../components/RecipeList";
import '../styles/FavoriteRecipesPage.css';

const FavoriteRecipesPage = () => {
  const favoriteRecipes = useSelector((state) =>
    state.recipes.recipes.filter(recipe => recipe.isFavorite)
  );

  return (
    <div className="favorite-recipes-container">
      <div className="favorite-recipes-overlay"></div>
      <h2 className="favorite-recipe-page-title">Favorite recipes</h2>
      <div className="favorite-recipes-content">
        <h2 className="favorite-recipes-header">List of favorite recipes</h2>
        {favoriteRecipes.length > 0 ? (
          <RecipeList recipes={favoriteRecipes} />
        ) : (
          <p className="favorite-recipes-empty-message">You don't have any favorite recipes yet.</p>
        )}
      </div>
    </div>
  );
};

export default FavoriteRecipesPage;
