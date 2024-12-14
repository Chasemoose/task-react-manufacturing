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
    // Wywołanie wyszukiwania, gdy podano tytuł lub składniki
    if (!titleSearch.trim() && !ingredientsSearch.trim()) {
      alert("Proszę podać tytuł przepisu lub składniki.");
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
        console.error("Błąd podczas wyszukiwania przepisów:", error);
      });
  };

  return (
    <div className="search-recipes-container">
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
          Wyszukaj po składnikach (oddzielone przecinkiem):
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

      {loading && <p>Ładowanie przepisów...</p>}
      {error && <p className="error-message">Błąd: {error}</p>}

      <div className="search-recipes-results">
        <h3 className="search-recipes-results-header">Wyniki wyszukiwania:</h3>
        <ul className="search-recipes-results-list">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <li key={recipe.id} className="search-recipes-results-item">
                <Link to={`/recipe/${recipe.id}`} className="search-recipes-results-link">
                  <h4 className="search-recipes-results-title">{recipe.title || "Brak tytułu"}</h4>
                </Link>
                <p className="search-recipes-results-ingredients">
                  Składniki: {recipe.ingredients?.join(", ") || "Nieznane"}
                </p>
              </li>
            ))
          ) : (
            !loading && <p className="search-recipes-no-results">Brak wyników.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchRecipes;
