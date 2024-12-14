import React from "react";
import MyRecipes from "../components/MyRecipes";
import "../styles/MyRecipesPage.css";

const MyRecipesPage = () => {
	return (
		<div className="my-recipes-page-container">
			<div className="my-recipes-overlay"></div>
			<div className="my-recipes-content">
				<h2 className="my-recipes-header">Moje przepisy</h2>
				<MyRecipes />
			</div>
		</div>
	);
};

export default MyRecipesPage;
