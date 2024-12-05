import { createSlice } from '@reduxjs/toolkit';

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
  },
  reducers: {
    addRecipe(state, action) {
      state.recipes.push(action.payload);
    },
  },
});

export const { addRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;