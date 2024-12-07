import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateRecipe } from "../redux/actions/recipeActions";

const EditRecipe = ({ recipe, onClose }) => {
  const [name, setName] = useState(recipe.name);
  const [ingredients, setIngredients] = useState(recipe.ingredients.join(", "));
  const [instructions, setInstructions] = useState(recipe.instructions);

  const dispatch = useDispatch();

  const handleSave = () => {
    const updatedRecipe = {
      ...recipe,
      name,
      ingredients: ingredients.split(",").map(ing => ing.trim()),
      instructions,
    };
    dispatch(updateRecipe(updatedRecipe));
    onClose();
  };

  return (
    <div>
      <h3>Edit Recipe</h3>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Ingredients (comma separated):
        <input
          type="text"
          value={ingredients}
          onChange={e => setIngredients(e.target.value)}
        />
      </label>
      <br />
      <label>
        Instructions:
        <textarea
          value={instructions}
          onChange={e => setInstructions(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditRecipe;
