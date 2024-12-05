import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addRecipe, removeRecipe, toggleFavorite } from './redux/actions/recipeActions'
import './App.css';

function App() {
  const recipes = useSelector(state => state.recipes.recipes)
  const dispatch = useDispatch()

const handleAddRecipe = () => {
  const newRecipe = {id: Date.now(), name: 'Nowy przepis', isFavorite: false }
  dispatch(addRecipe(newRecipe))
}




  return (
    <div>
    <h1>Recipe Manager</h1>
    <button onClick={handleAddRecipe}>Add Recipe</button>
    <ul>
      {recipes.map(recipe => (
        <li key={recipe.id}>
          {recipe.name}{' '}
          <button onClick={() => dispatch(toggleFavorite(recipe.id))}>
            {recipe.isFavorite ? 'Unfavorite' : 'Favorite'}
          </button>
          <button onClick={() => dispatch(removeRecipe(recipe.id))}>Delete</button>
        </li>
      ))}
    </ul>
  </div>

  );
}

export default App;
