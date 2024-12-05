const initialState = {
    recipes: [],
    favorites: [],
}

export const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }
        case 'REMOVE_RECIPE':
            return {
                ...state,
                recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
            }
        case 'TOGGLE_FAVORITE':
                const updateRecipes = state.recipes.map(recipe => recipe.id === action.payload ? { ...recipe, isFavorite: !recipe.isFavorite} : recipe
                )
                return {
                    ...state, 
                    recipes: updateRecipes,
                    favorites: updateRecipes.filter(recipe => recipe.isFavorite),
                }           
            default: 
                return state        

    }
}