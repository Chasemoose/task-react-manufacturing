const initialState = {
	recipes: [],
	favorites: [],
	shoppingList: [],
	searchHistory: [],
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

        // Dla historii wyszukiwań
		case "ADD_SEARCH_HISTORY":
			return {
				...state,
				searchHistory: [...state.searchHistory, action.payload],
			};
		case "CLEAR_SEARCH_HISTORY":
			return {
				...state,
				searchHistory: [],
			};

		// Dla listy zakupów
		case "ADD_TO_SHOPPING_LIST":
    		if (action.payload.length === 0) {
        	return state; 
    		}
    		return {
        		...state,
        		shoppingList: [...state.shoppingList, ...action.payload],
    		};
		case "REMOVE_FROM_SHOPPING_LIST":
    		const updatedShoppingList = state.shoppingList.filter((_, index) => index !== action.payload);
    		if (updatedShoppingList.length === state.shoppingList.length) {
        	return state; 
    		}
    		return {
        		...state,
        		shoppingList: updatedShoppingList,
    		};
		case "CLEAR_SHOPPING_LIST":
    		if (state.shoppingList.length === 0) {
        	return state;
    		}
    		return {
        		...state,
        		shoppingList: [], 
    		};
		default:
			return state;
	}
};
