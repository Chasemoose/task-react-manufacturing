import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRecipes } from "../redux/actions/recipeActions";
import '../styles/SearchRecipes.css';

const SearchRecipes = () => {
  const [titleSearch, setTitleSearch] = useState("");
  const [ingredientsSearch, setIngredientsSearch] = useState("");

  const recipes = useSelector((state) => state.recipes.recipes || []);
  const loading = useSelector((state) => state.recipes.loading);
  const error = useSelector((state) => state.recipes.error);

  const dispatch = useDispatch();

  const handleSearch = () => {
    
    if (!titleSearch.trim() && !ingredientsSearch.trim()) {
      alert("Please provide the recipe title or ingredients.");
      return;
    }

    const query = {
      title: titleSearch.trim(),
      ingredients: ingredientsSearch.split(",").map((ing) => ing.trim()).join(","),
    };

    dispatch(fetchRecipes(query))
      .then(() => {
        setTitleSearch("");
        setIngredientsSearch("");
      })
      .catch((error) => {
        console.error("Error while searching for recipes:", error);
      });
  };

  return (
    <div className="search-recipes-container">
      <div className="search-recipes-inputs">
        <label className="search-recipes-label">
        Search by title:
          <input
            type="text"
            value={titleSearch}
            onChange={(e) => setTitleSearch(e.target.value)}
            placeholder="Enter the title of the recipe"
            className="search-recipes-input"
          />
        </label>
        <label className="search-recipes-label">
        Search by ingredients (comma separated):
          <input
            type="text"
            value={ingredientsSearch}
            onChange={(e) => setIngredientsSearch(e.target.value)}
            placeholder="E.g. tomatoes, onions"
            className="search-recipes-input"
          />
        </label>
      </div>
      <button onClick={handleSearch} className="search-recipes-button">Search</button>

      {loading && <p>Ładowanie przepisów...</p>}
      {error && <p className="error-message">Error: {error}</p>}

      <div className="search-recipes-results">
        <h3 className="search-recipes-results-header">Search results:</h3>
        <ul className="search-recipes-results-list">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <li key={recipe.id} className="search-recipes-results-item">
                <Link to={`/recipe/${recipe.id}`} className="search-recipes-results-link">
                  <h4 className="search-recipes-results-title">{recipe.title || "No title"}</h4>
                </Link>
                <p className="search-recipes-results-ingredients">
                Ingredients: {recipe.ingredients?.join(", ") || "Unknown"}
                </p>
              </li>
            ))
          ) : (
            !loading && <p className="search-recipes-no-results">No results.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchRecipes;
