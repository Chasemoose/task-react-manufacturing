import React from "react";
import { useDispatch } from "react-redux";
import { toggleFavorite, removeRecipe } from "../redux/actions/recipeActions";

const RecipeItem = ({ recipe }) => {
	const dispatch = useDispatch();

	return (
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
		</li>
	);
};

export default RecipeItem;
