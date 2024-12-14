// Typy akcji
export const FETCH_RECIPES_REQUEST = "FETCH_RECIPES_REQUEST";
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const FETCH_RECIPES_FAILURE = "FETCH_RECIPES_FAILURE";
export const ADD_TO_SHOPPING_LIST = "ADD_TO_SHOPPING_LIST";
export const REMOVE_FROM_SHOPPING_LIST = "REMOVE_FROM_SHOPPING_LIST";
export const CLEAR_SHOPPING_LIST = "CLEAR_SHOPPING_LIST";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";

// Akcje związane z pobieraniem przepisów
const fetchRecipesRequest = () => ({
  type: FETCH_RECIPES_REQUEST,
});

const fetchRecipesSuccess = (recipes) => ({
  type: FETCH_RECIPES_SUCCESS,
  payload: recipes,
});

const fetchRecipesFailure = (error) => ({
  type: FETCH_RECIPES_FAILURE,
  payload: error,
});

// Funkcja pobierająca przepisy
// Funkcja pobierająca przepisy
export const fetchRecipes = (query) => {
  return async (dispatch) => {
    dispatch(fetchRecipesRequest());

    try {
      // Sprawdzanie, czy podano tytuł lub składniki
      if ((!query || (!query.title && !query.ingredients)) || 
          (query.title.trim() === "" && query.ingredients.trim() === "")) {
        throw new Error("Proszę podać tytuł przepisu lub składniki.");
      }

      const encodedTitle = encodeURIComponent(query.title || "");
      const encodedIngredients = encodeURIComponent(query.ingredients || "");

      const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

      if (!apiKey) {
        throw new Error("Brak klucza API. Upewnij się, że jest ustawiony w pliku .env.");
      }

      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${encodedTitle}&includeIngredients=${encodedIngredients}&number=10&addRecipeInformation=true&apiKey=${apiKey}`
      );

      if (!response.ok) {
        throw new Error(`Błąd API: ${response.statusText}`);
      }

      const data = await response.json();
      if (data.results.length === 0) {
        throw new Error("Brak wyników dla podanych kryteriów.");
      }

      dispatch(fetchRecipesSuccess(data.results));
    } catch (error) {
      console.error("Błąd podczas pobierania przepisów:", error);
      dispatch(fetchRecipesFailure(error.message));
    }
  };
};
;


// Dodawanie nowego przepisu
export const addRecipe = (newRecipe) => (dispatch, getState) => {
  const state = getState();
  const updatedRecipes = [...state.recipes.recipes, newRecipe];
  dispatch({
    type: FETCH_RECIPES_SUCCESS,
    payload: updatedRecipes,
  });
};

// Aktualizacja istniejącego przepisu
export const updateRecipe = (updatedRecipe) => (dispatch, getState) => {
  const state = getState();
  const updatedRecipes = state.recipes.recipes.map((recipe) =>
    recipe.id === updatedRecipe.id ? updatedRecipe : recipe
  );

  dispatch({
    type: FETCH_RECIPES_SUCCESS,
    payload: updatedRecipes,
  });
};

// Dodawanie składników do listy zakupów
export const addToShoppingList = (ingredients) => (dispatch, getState) => {
  const state = getState();
  const updatedList = [...state.recipes.shoppingList, ...ingredients];

  dispatch({
    type: ADD_TO_SHOPPING_LIST,
    payload: updatedList,
  });
};

// Usuwanie składnika z listy zakupów
export const removeItemFromShoppingList = (index) => (dispatch, getState) => {
  const state = getState();
  const updatedList = state.recipes.shoppingList.filter((_, i) => i !== index);

  dispatch({
    type: REMOVE_FROM_SHOPPING_LIST,
    payload: updatedList,
  });
};

// Czyszczenie listy zakupów
export const clearShoppingList = () => (dispatch) => {
  dispatch({
    type: CLEAR_SHOPPING_LIST,
    payload: [],
  });
};

// Zarządzanie ulubionymi przepisami
export const toggleFavorite = (id) => (dispatch, getState) => {
  const state = getState();
  const updatedFavorites = state.recipes.favorites.includes(id)
    ? state.recipes.favorites.filter((favoriteId) => favoriteId !== id)
    : [...state.recipes.favorites, id];

  dispatch({
    type: TOGGLE_FAVORITE,
    payload: updatedFavorites,
  });
};

// Usuwanie przepisu
export const removeRecipe = (id) => (dispatch, getState) => {
  const state = getState();
  const updatedRecipes = state.recipes.recipes.filter((recipe) => recipe.id !== id);

  dispatch({
    type: REMOVE_RECIPE,
    payload: updatedRecipes,
  });
};
