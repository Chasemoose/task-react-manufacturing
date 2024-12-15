const initialState = {
	recipes: [],
	favorites: [],
	shoppingList: [],
	searchHistory: [],
	loading: false,
	error: null,
  };
  
  export const recipesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_RECIPES":
			return { ...state, recipes: action.payload }

		case "FETCH_RECIPES_REQUEST":
			return { ...state, loading: true, error: null }

		case "FETCH_RECIPES_SUCCESS":
			return { ...state, recipes: action.payload, loading: false }

		case "FETCH_RECIPES_FAILURE":
			return { ...state, error: action.payload, loading: false }

		case "ADD_TO_SHOPPING_LIST":
			return {
				...state,
				shoppingList: [...state.shoppingList, ...action.payload],
			}

		case "REMOVE_RECIPE":
			return {
				...state,
				recipes: state.recipes.filter(recipe => recipe.id !== action.payload),
			}

		case "CLEAR_SHOPPING_LIST":
			return {
				...state,
				shoppingList: [],
			}

		case "ADD_TO_FAVORITES":
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			}

		case "REMOVE_FROM_FAVORITES":
			return {
				...state,
				favorites: state.favorites.filter(
					recipe => recipe.id !== action.payload
				),
			}

		case "TOGGLE_FAVORITE":
			// Zmiana stanu ulubionych przepisów
			return {
				...state,
				favorites: action.payload, // zaktualizowana lista ulubionych
				recipes: state.recipes.map(recipe =>
					recipe.id === action.payload.id
						? { ...recipe, isFavorite: !recipe.isFavorite }
						: recipe
				), // zaktualizowany stan isFavorite
			}

		case "UPDATE_RECIPE":
			return {
				...state,
				recipes: state.recipes.map(recipe =>
					recipe.id === action.payload.id
						? { ...recipe, ...action.payload }
						: recipe
				),
			}

		case "REMOVE_FROM_SHOPPING_LIST":
			return {
				...state,
				shoppingList: action.payload,
			}

		default:
			return state
	}
  };
  