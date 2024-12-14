import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../redux/actions/recipeActions";
import "../styles/AddRecipe.css";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();

    if (title.trim() === '' || ingredients.trim() === '' || instructions.trim() === '') {
      alert('Wszystkie pola muszą być wypełnione!');
      return;
    }

    const newRecipe = {
      id: Date.now(),
      name: title,
      ingredients: ingredients.split(",").map((ing) => ing.trim()),
      instructions,
    };

    dispatch(addRecipe(newRecipe));

    setTitle("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div className="add-recipe-container">
      <div className="add-recipe-form">
        <label className="add-recipe-label">
          Nazwa przepisu:
          <input
            type="text"
            placeholder="Np. Zupa pomidorowa"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="add-recipe-input"
            required
          />
        </label>
        <label className="add-recipe-label">
          Składniki (oddzielone przecinkiem):
          <input
            type="text"
            placeholder="Np. pomidory, ziemniaki, makaron"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="add-recipe-input"
            required
          />
        </label>
        <label className="add-recipe-label">
          Opis przygotowania:
          <textarea
            placeholder="Opisz proces przygotowania posiłku"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="add-recipe-textarea"
            required
          />
        </label>
        <button className="add-recipe-button" onClick={handleAdd}>
          Dodaj przepis
        </button>
      </div>
    </div>
  );
};

export default AddRecipe;
