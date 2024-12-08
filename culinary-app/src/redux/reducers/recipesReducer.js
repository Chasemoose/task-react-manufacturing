const initialState = {
	recipes: [], 
	favorites: JSON.parse(localStorage.getItem('favoriteRecipes')) || [], 
};

export const recipesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_RECIPE":
			return {
				...state,
				recipes: [...state.recipes, action.payload],
			};
		case "REMOVE_RECIPE":
			const updatedRecipesAfterRemoval = state.recipes.filter(recipe => recipe.id !== action.payload);
			const updatedFavoritesAfterRemoval = state.favorites.filter(recipe => recipe.id !== action.payload);
			localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavoritesAfterRemoval));
			return {
				...state,
				recipes: updatedRecipesAfterRemoval,
				favorites: updatedFavoritesAfterRemoval,
			};
		case "TOGGLE_FAVORITE":
			const updatedRecipes = state.recipes.map(recipe =>
				recipe.id === action.payload
					? { ...recipe, isFavorite: !recipe.isFavorite }
					: recipe
			);

			
			const updatedFavorites = updatedRecipes.filter(recipe => recipe.isFavorite);
			
			localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));

			return {
				...state,
				recipes: updatedRecipes,
				favorites: updatedFavorites,
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
