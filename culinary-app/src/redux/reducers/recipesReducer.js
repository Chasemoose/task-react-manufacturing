const initialState = {
	recipes: [],
	favorites: [],
  };
  
  export const recipesReducer = (state = initialState, action) => {
	switch (action.type) {
	  case "SET_RECIPES":
		return {
		  ...state,
		  recipes: action.payload,
		};
	  case "ADD_RECIPE":
		return {
		  ...state,
		  recipes: [...state.recipes, action.payload],
		};
	  case "REMOVE_RECIPE":
		return {
		  ...state,
		  recipes: state.recipes.filter(recipe => recipe.id !== action.payload),
		};
	  case "TOGGLE_FAVORITE":
		const updatedRecipes = state.recipes.map(recipe =>
		  recipe.id === action.payload
			? { ...recipe, isFavorite: !recipe.isFavorite }
			: recipe
		);
		return {
		  ...state,
		  recipes: updatedRecipes,
		  favorites: updatedRecipes.filter(recipe => recipe.isFavorite),
		};
	  case "UPDATE_RECIPE":
		return {
		  ...state,
		  recipes: state.recipes.map(recipe =>
			recipe.id === action.payload.id ? action.payload : recipe
		  ),
		};
	  default:
		return state;
	}
  };
  