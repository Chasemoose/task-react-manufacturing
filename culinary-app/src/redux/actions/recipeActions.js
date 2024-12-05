export const addRecipe = recipe => ({
    type: 'ADD_RECIPE',
    payload: recipe,
  });
  
  export const removeRecipe = id => ({
    type: 'REMOVE_RECIPE',
    payload: id,
  });
  
  export const toggleFavorite = id => ({
    type: 'TOGGLE_FAVORITE',
    payload: id,
  });
  