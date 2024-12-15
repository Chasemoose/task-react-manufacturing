import React from "react";
import RecipeItem from "./RecipeItem";
import '../styles/RecipeList.css';

const RecipeList = ({ recipes }) => {  
  if (recipes.length === 0) {
    return <p className="recipe-list-empty-message">No recipes available. Add some!</p>;
  }

  return (
    <div className="recipe-list-container">
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
