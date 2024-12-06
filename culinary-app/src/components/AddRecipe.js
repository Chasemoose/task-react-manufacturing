import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../redux/actions/recipeActions";

const AddRecipe = () => {
	const [recipeName, setRecipeName] = useState("");
	const dispatch = useDispatch();

	const handleAdd = () => {
		if (recipeName.trim() === "") return;
		const newRecipe = { id: Date.now(), name: recipeName, isFavorite: false };
		dispatch(addRecipe(newRecipe));
		setRecipeName("");
	};

	return (
		<div>
			<h3>Dodaj nowy przepis</h3>
			<input
				type='text'
				placeholder='Wpisz nowy przepis'
				value={recipeName}
				onChange={e => setRecipeName(e.target.value)}
			/>
			<button onClick={handleAdd}>Dodaj przepis</button>
		</div>
	);
};

export default AddRecipe
