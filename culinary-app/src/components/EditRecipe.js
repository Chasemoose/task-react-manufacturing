import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateRecipe } from "../redux/actions/recipeActions";

const EditRecipe = ({ recipe, onClose }) => {
	const [name, setName] = useState(recipe.name);
	const [ingredients, setIngredients] = useState(recipe.ingredients.join(","));
	const [instructions, setInstructions] = useState(recipe.instructions);

	const dispatch = useDispatch();

	const handle = () => {
		const updatedRecipe = {
			...recipe,
			name,
			ingredients: ingredients.split(",").map(ing => ing.trim()),
			instructions,
		};
		dispatch(updateRecipe(updatedRecipe));
		onClose();
	};

	<li>
		<h3>{recipe.name}</h3>
		<p>
			<strong>Ingredients:</strong>
		</p>
		<ul>
			{recipe.ingredients.map((ingredient, index) => (
				<li key={index}>{ingredient}</li>
			))}
		</ul>
		<p>
			<strong>Instructions:</strong> {recipe.instructions}
		</p>
		<button onClick={() => dispatch(toggleFavorite(recipe.id))}>
			{recipe.isFavorite ? "Unfavorite" : "Favorite"}
		</button>
		<button onClick={() => dispatch(removeRecipe(recipe.id))}>Delete</button>
	</li>;
};
