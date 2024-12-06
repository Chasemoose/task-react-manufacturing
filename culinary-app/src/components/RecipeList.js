import React from "react";
import { useSelector } from "react-redux";
import RecipeItem from "./RecipeItem";

const RecipeList = () => {
	const recipes = useSelector(state => state.recipes.recipes);

	if (recipes.length === 0) {
		return <p>Brak dostępnych przepisów. Dodaj jakiś!</p>;
	}

	return (
		<div>
			<h2>Przepisy</h2>
			<ul>
				{recipes.map(recipe => (
					<RecipeItem key={recipe.id} recipe={recipe} />
				))}
			</ul>
		</div>
	);
};

export default RecipeList;
