import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { recipesReducer } from './reducers/recipesReducer';


const rootReducer = combineReducers({
  recipes: recipesReducer,
});


export const store = createStore(rootReducer, applyMiddleware(thunk));
