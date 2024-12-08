import React, { useState } from "react";
import { useSelector } from "react-redux";

const SearchRecipes = () => {
  const [titleSearch, setTitleSearch] = useState("");
  const [ingredientsSearch, setIngredientsSearch] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);


  const recipes = useSelector((state) => state.recipes.recipes); 
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

    setTitleSearch("");
    setIngredientsSearch("");
  };
    
  
  return (
    <div>
      <h2>Wyszukaj przepisy</h2>
      <div>
        <label>
          Wyszukaj po tytule:
          <input
            type="text"
            value={titleSearch}
            onChange={(e) => setTitleSearch(e.target.value)}
            placeholder="Wpisz tytuł przepisu"
          />
        </label>
      </div>
      <div>
        <label>
          Wyszukaj po składnikach (przecinki):
          <input
            type="text"
            value={ingredientsSearch}
            onChange={(e) => setIngredientsSearch(e.target.value)}
            placeholder="Np. pomidory, cebula"
          />
        </label>
      </div>
      <button onClick={handleSearch}>Wyszukaj</button>
      <div>
        <h3>Wyniki wyszukiwania:</h3>
        <ul>
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <li key={recipe.id}>
                <h4>{recipe.name}</h4>
                <p>Składniki: {recipe.ingredients.join(", ")}</p>
              </li>
            ))
          ) : (
            <p>Brak wyników.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchRecipes;
