import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addSearchHistory } from "../redux/actions/recipeActions"; // Import akcji
import '../styles/SearchRecipes.css';

const SearchRecipes = () => {
  const [titleSearch, setTitleSearch] = useState("");
  const [ingredientsSearch, setIngredientsSearch] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const recipes = useSelector((state) => state.recipes.recipes);
  const dispatch = useDispatch(); 

  console.log("Wszystkie przepisy z Redux:", recipes);

  const handleSearch = () => {
    const filtered = Array.isArray(recipes)
      ? recipes.filter((recipe) => {
          const titleMatches = titleSearch
            ? recipe.name.toLowerCase().includes(titleSearch.toLowerCase())
            : true;

          const searchIngredients = ingredientsSearch
            .split(",")
            .map((ing) => ing.trim().toLowerCase());

          const ingredientsMatches = searchIngredients.every((searchIng) =>
            recipe.ingredients.some((ingredient) =>
              ingredient.toLowerCase().includes(searchIng)
            )
          );

          if (ingredientsSearch && titleSearch) {
            return titleMatches && ingredientsMatches;
          } else if (ingredientsSearch) {
            return ingredientsMatches;
          } else if (titleSearch) {
            return titleMatches;
          } else {
            return true;
          }
        })
      : [];

    console.log("Przepisy po filtrowaniu:", filtered);
    setFilteredRecipes(filtered);

    
    if (titleSearch || ingredientsSearch) {
      dispatch(addSearchHistory({ titleSearch, ingredientsSearch }));
    }

    
    setTitleSearch("");
    setIngredientsSearch("");
  };

  return (
    <div className="search-recipes-container">
      <h2 className="search-recipes-header">Wyszukaj przepisy</h2>
      <div className="search-recipes-inputs">
        <label className="search-recipes-label">
          Wyszukaj po tytule:
          <input
            type="text"
            value={titleSearch}
            onChange={(e) => setTitleSearch(e.target.value)}
            placeholder="Wpisz tytuł przepisu"
            className="search-recipes-input"
          />
        </label>
        <label className="search-recipes-label">
          Wyszukaj po składnikach (przecinki):
          <input
            type="text"
            value={ingredientsSearch}
            onChange={(e) => setIngredientsSearch(e.target.value)}
            placeholder="Np. pomidory, cebula"
            className="search-recipes-input"
          />
        </label>
      </div>
      <button onClick={handleSearch} className="search-recipes-button">Wyszukaj</button>
      <div className="search-recipes-results">
        <h3 className="search-recipes-results-header">Wyniki wyszukiwania:</h3>
        <ul className="search-recipes-results-list">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <li key={recipe.id} className="search-recipes-results-item">
                <Link to={`/recipe/${recipe.id}`} className="search-recipes-results-link">
                  <h4 className="search-recipes-results-title">{recipe.name}</h4>
                </Link>
                <p className="search-recipes-results-ingredients">
                  Składniki: {recipe.ingredients.join(", ")}
                </p>
              </li>
            ))
          ) : (
            <p className="search-recipes-no-results">Brak wyników.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchRecipes;
