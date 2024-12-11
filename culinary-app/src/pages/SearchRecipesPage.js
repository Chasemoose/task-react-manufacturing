import React from "react";
import SearchRecipes from "../components/SearchRecipes";
import '../styles/SearchRecipesPage.css';

const SearchRecipesPage = () => {
  return (
    <div className="search-recipes-page-container">
      <div className="search-recipes-page-overlay"></div>
      <div className="search-recipes-content">
      <h2 className="search-recipe-page-title">Wyszukaj przepis</h2>
        <SearchRecipes />
      </div>
    </div>
  );
};

export default SearchRecipesPage;
