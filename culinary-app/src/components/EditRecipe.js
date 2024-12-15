import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRecipe } from "../redux/actions/recipeActions"; 
import { useNavigate, useParams } from "react-router-dom";

const EditRecipe = () => {
  const { id } = useParams();
  const recipes = useSelector((state) => state.recipes.recipes);
  const recipeToEdit = recipes.find((recipe) => recipe.id === parseInt(id));
  const [recipeName, setRecipeName] = useState(recipeToEdit?.name || "");
  const [ingredients, setIngredients] = useState(
    recipeToEdit?.ingredients.join(", ") || ""
  );
  const [instructions, setInstructions] = useState(recipeToEdit?.instructions || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedRecipe = {
      ...recipeToEdit,
      name: recipeName,
      ingredients: ingredients.split(",").map((ing) => ing.trim()),
      instructions,
    };

    dispatch(updateRecipe(updatedRecipe));
    navigate("/");
  };

  if (!recipeToEdit) {
    return <p>Nie znaleziono przepisu do edycji.</p>;
  }

  return (
    <div>
      <h2>Edytuj przepis</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nazwa przepisu:
          <input
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            required
          />
        </label>
        <label>
          Składniki (oddzielone przecinkiem):
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </label>
        <label>
          Instrukcje:
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          />
        </label>
        <button type="submit">Zapisz zmiany</button>
      </form>
    </div>
  );
};

export default EditRecipe;
