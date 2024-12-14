const initialState = {
	recipes: [],
	favorites: [],
	shoppingList: [],
	searchHistory: [],
	loading: false,
	error: null,
}

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
				shoppingList: {
					...state.shoppingList,
					items: action.payload,
				},
			}
		case "REMOVE_RECIPE":
			return {
				...state,
				recipes: action.payload,
			}
		case "CLEAR_SHOPPING_LIST":
			return {
				...state,
				shoppingList: {
					...state.shoppingList,
					items: action.payload,
				},
			}

		default:
			return state
	}
}
