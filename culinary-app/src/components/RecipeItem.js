import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleFavorite, removeRecipe, addToShoppingList } from "../redux/actions/recipeActions"; 
import EditRecipe from "./EditRecipe";
import '../styles/RecipeItem.css'; 

const RecipeItem = ({ recipe }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();


  const handleAddToShoppingList = () => {
    dispatch(addToShoppingList(recipe.ingredients));
  };

  return (
    <li className="recipe-item-container">
      {isEditing ? (
        <EditRecipe recipe={recipe} onClose={() => setIsEditing(false)} />
      ) : (
        <>
          <h3 className="recipe-item-title">{recipe.name}</h3>
          <p className="recipe-item-ingredients-header">
            <strong>Składniki:</strong>
          </p>
          <ul className="recipe-item-ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="recipe-item-ingredient">{ingredient}</li>
            ))}
          </ul>
          <p className="recipe-item-instructions">
            <strong>Sposób przygotowania:</strong> {recipe.instructions}
          </p>
          <button
            className={`recipe-item-button ${recipe.isFavorite ? "remove" : "add"}`}
            onClick={() => dispatch(toggleFavorite(recipe.id))}
          >
            {recipe.isFavorite ? "Nieulubiony" : "Ulubiony"}
          </button>
          <button
            className="recipe-item-button edit"
            onClick={() => setIsEditing(true)}
          >
            Edytuj
          </button>
          <button
            className="recipe-item-button remove"
            onClick={() => dispatch(removeRecipe(recipe.id))}
          >
            Usuń
          </button>
          
          <button
            className="recipe-item-button add-to-shopping-list"
            onClick={handleAddToShoppingList}
          >
            Dodaj składniki do listy zakupów
          </button>
        </>
      )}
    </li>
  );
};

export default RecipeItem;
