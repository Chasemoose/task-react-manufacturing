export const addRecipe = recipe => ({
    type: "ADD_RECIPE",
    payload: recipe,
});

export const removeRecipe = id => ({
    type: "REMOVE_RECIPE",
    payload: id,
});

export const toggleFavorite = id => ({
    type: "TOGGLE_FAVORITE",
    payload: id,
});

export const updateRecipe = recipe => ({
    type: "UPDATE_RECIPE",
    payload: recipe,
});

export const setRecipes = (recipes) => {
    console.log("Akcja setRecipes z danymi:", recipes);
    return {
        type: "SET_RECIPES",
        payload: recipes,
    };
};

// Dla shoppingList
export const ADD_TO_SHOPPING_LIST = "ADD_TO_SHOPPING_LIST";
export const REMOVE_FROM_SHOPPING_LIST = "REMOVE_FROM_SHOPPING_LIST";
export const CLEAR_SHOPPING_LIST = "CLEAR_SHOPPING_LIST";

export const addToShoppingList = (items) => ({
    type: ADD_TO_SHOPPING_LIST,
    payload: items,
});

export const removeItemFromShoppingList = (index) => ({
    type: REMOVE_FROM_SHOPPING_LIST,
    payload: index,
});

export const clearShoppingList = () => ({
    type: CLEAR_SHOPPING_LIST,
});
