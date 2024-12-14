import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeMyRecipe } from "../redux/actions/recipeActions";
import "../styles/MyRecipes.css"; 

const MyRecipes = () => {
  const recipes = useSelector((state) => state.recipes.recipes);
  const dispatch = useDispatch();

  const handleRemoveRecipe = (id) => {
    if (window.confirm("Czy na pewno chcesz usunąć ten przepis?")) {
      dispatch(removeMyRecipe(id)); 
    }
  };

  return (
    <div className="my-recipes-container">
      {recipes.length === 0 ? (
        <p>Nie masz jeszcze żadnych przepisów.</p>
      ) : (
        <ul className="recipe-list">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="recipe-item">
              <h3>{recipe.name}</h3>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <p>{recipe.instructions}</p>
              <button 
                className="remove-recipe-button" 
                onClick={() => handleRemoveRecipe(recipe.id)}
              >
                Usuń przepis
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyRecipes;
