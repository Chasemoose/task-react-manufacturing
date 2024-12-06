import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRecipes } from "./redux/actions/recipeActions";
import RecipeList from "./components/RecipeList";
import AddRecipe from "./components/AddRecipe";
import "./App.css";
import data from "./data/recipes.json";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setRecipes(data));
	}, [dispatch]);

	return (
		<div>
			<h1>Przepisbook</h1>
			<AddRecipe />
			<RecipeList />
		</div>
	);
}

export default App;
