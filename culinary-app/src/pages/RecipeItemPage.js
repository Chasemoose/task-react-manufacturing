// import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import '../styles/RecipeItemPage.css'

// const RecipeItemPage = () => {
//   const { id } = useParams();
//   const recipes = useSelector((state) => state.recipes.recipes);
//   const recipe = recipes.find((r) => r.id === parseInt(id));

//   if (!recipe) {
//     return <p className="recipe-item-page-not-found">Przepis nie został znaleziony.</p>;
//   }

//   return (
//     <div className="recipe-item-page-container">
//       <h2 className="recipe-item-page-title">{recipe.name}</h2>
//       <p className="recipe-item-page-ingredients">
//         <strong>Składniki:</strong> {recipe.ingredients.join(", ")}
//       </p>
//       <p className="recipe-item-page-instructions">
//         <strong>Instrukcje:</strong> {recipe.instructions}
//       </p>
//     </div>
//   );
// };

// export default RecipeItemPage;


import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toggleFavorite } from "../redux/actions/recipeActions"; // Importuj akcję
import '../styles/RecipeItemPage.css';

const RecipeItemPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch(); // Użyj dispatch do wywołania akcji
  const recipes = useSelector((state) => state.recipes.recipes);
  const recipe = recipes.find((r) => r.id === parseInt(id));

  const isFavorite = useSelector((state) =>
    state.recipes.favorites.some((fav) => fav.id === recipe?.id)
  );

  const handleToggleFavorite = () => {
    if (recipe) {
      dispatch(toggleFavorite(recipe.id)); // Wywołaj akcję toggleFavorite
    }
  };

  if (!recipe) {
    return <p className="recipe-item-page-not-found">Przepis nie został znaleziony.</p>;
  }

  return (
    <div className="recipe-item-page-container">
      <h2 className="recipe-item-page-title">{recipe.name}</h2>
      <p className="recipe-item-page-ingredients">
        <strong>Składniki:</strong> {recipe.ingredients.join(", ")}
      </p>
      <p className="recipe-item-page-instructions">
        <strong>Instrukcje:</strong> {recipe.instructions}
      </p>

      <button
        className={`recipe-item-page-favorite-button ${
          isFavorite ? "remove" : "add"
        }`}
        onClick={handleToggleFavorite}
      >
        {isFavorite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
      </button>
    </div>
  );
};

export default RecipeItemPage;
