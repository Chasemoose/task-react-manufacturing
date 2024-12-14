export const FETCH_RECIPES_REQUEST = "FETCH_RECIPES_REQUEST"
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS"
export const FETCH_RECIPES_FAILURE = "FETCH_RECIPES_FAILURE"
export const REMOVE_FROM_SHOPPING_LIST = "REMOVE_FROM_SHOPPING_LIST";
export const CLEAR_SHOPPING_LIST = "CLEAR_SHOPPING_LIST";

const fetchRecipesRequest = () => ({
	type: FETCH_RECIPES_REQUEST,
})

const fetchRecipesSuccess = recipes => ({
	type: FETCH_RECIPES_SUCCESS,
	payload: recipes,
})

const fetchRecipesFailure = error => ({
	type: FETCH_RECIPES_FAILURE,
	payload: error,
})

export const fetchRecipes = query => {
	return async dispatch => {
		dispatch(fetchRecipesRequest())
		try {
			const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY
			const response = await fetch(
				`https://api.spoonacular.com/recipes/complexSearch?query=${query.title}&includeIngredients=${query.ingredients}&apiKey=${apiKey}`
			)

			if (!response.ok) {
				throw new Error("Błąd podczas pobierania przepisów.")
			}

			const data = await response.json()
			dispatch(fetchRecipesSuccess(data.results))
		} catch (error) {
			dispatch(fetchRecipesFailure(error.message))
		}
	}
}

export const addRecipe = newRecipe => (dispatch, getState) => {
	const state = getState()
	const updatedRecipes = [...state.recipes.recipes, newRecipe]
	dispatch({
		type: FETCH_RECIPES_SUCCESS,
		payload: updatedRecipes,
	})
}



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


export const addToShoppingList = (ingredients) => (dispatch, getState) => {
    const state = getState();
    const currentList = state.shoppingList.items || [];
  
    const updatedList = [...currentList, ...ingredients];
  
    dispatch({
      type: "ADD_TO_SHOPPING_LIST",
      payload: updatedList, 
    });
  };
  
  export const toggleFavorite = (id) => (dispatch, getState) => {
    const state = getState();
    const updatedFavorites = state.recipes.favorites.includes(id)
      ? state.recipes.favorites.filter((favoriteId) => favoriteId !== id)
      : [...state.recipes.favorites, id];
  
    dispatch({
      type: "TOGGLE_FAVORITE",
      payload: updatedFavorites,
    });
  };

  export const removeRecipe = (id) => (dispatch, getState) => {
    const state = getState();
    const updatedRecipes = state.recipes.recipes.filter((recipe) => recipe.id !== id);
  
    dispatch({
      type: "REMOVE_RECIPE",
      payload: updatedRecipes,
    });
  };

  export const removeItemFromShoppingList = (index) => (dispatch, getState) => {
    const state = getState();
    const currentList = state.shoppingList.items || [];
  
    const updatedList = currentList.filter((_, i) => i !== index);
  
    dispatch({
      type: REMOVE_FROM_SHOPPING_LIST,
      payload: updatedList, 
    });
};

export const clearShoppingList = () => (dispatch) => {
    dispatch({
      type: CLEAR_SHOPPING_LIST,
      payload: [],  
    });
};
