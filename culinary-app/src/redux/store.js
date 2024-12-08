import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { recipesReducer } from './reducers/recipesReducer';

const persistedFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

const initialState = {
    recipes: {
        recipes: [],
        favorites: persistedFavorites,  
    },
};

const rootReducer = combineReducers({
  recipes: recipesReducer,
});

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);

export default store;
