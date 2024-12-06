import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../redux/actions/recipeActions";

const AddRecipe = () => {
    const [title, setTitle] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')	
	const dispatch = useDispatch();

	const handleAdd = () => {

        if (title.trim() === '' || ingredients.trim() === '' || instructions.trim() === '') {
            alert('Wszystkie pola muszą być wypełnione!')
            return
        }

		const newRecipe = {
            id: Date.now(), 
            name: title, 
            ingredients: ingredients.split(',').map(item => item.trim()),
            isFavorite: false
        };

		dispatch(addRecipe(newRecipe));
        setTitle('')
        setIngredients('')
		setInstructions('');
	};

	return (
		<div>
      <h3>Dodaj nowy przepis</h3>
      <div>
        <label>
          Nazwa przepisu:
          <input
            type="text"
            placeholder="Np. Zupa pomidorowa"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Składniki: (przedzielone przecinkiem):
          <input
            type="text"
            placeholder="Np. pomidory, ziemniaki, makaron"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Opis przygotowania:
          <textarea
            placeholder="Opisz proces przygotowania posiłku"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleAdd}>Add Recipe</button>
    </div>
	);
};

export default AddRecipe
