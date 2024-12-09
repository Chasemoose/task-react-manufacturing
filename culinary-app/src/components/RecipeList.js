import React from "react";
import { useSelector } from "react-redux";
import RecipeItem from "./RecipeItem";
import '../styles/RecipeList.css';

const RecipeList = () => {
  const recipes = useSelector((state) => state.recipes.recipes);

  if (recipes.length === 0) {
    return <p className="recipe-list-empty-message">Brak dostępnych przepisów. Dodaj jakiś!</p>;
  }

  return (
    <div className="recipe-list-container">
      <h2 className="recipe-list-header">Przepisy</h2>
      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="recipe-list-item">
            <RecipeItem recipe={recipe} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
