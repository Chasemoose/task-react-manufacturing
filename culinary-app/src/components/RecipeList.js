import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFavorite, removeRecipe } from '../redux/actions/recipeActions'

const RecipeList = () => {
    const recipes = useSelector (state => state.recipes.recipes)
    const dispatch = useDispatch()

    if (recipes.length === 0) {
        return <p>Brak dostępnych przepisów. Dodaj jakieś!</p>
    }

    return (
        <div>
        <h2>Recipes</h2>
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id}>
              <span>{recipe.name}</span>
              <button onClick={() => dispatch(toggleFavorite(recipe.id))}>
                {recipe.isFavorite ? 'Unfavorite' : 'Favorite'}
              </button>
              <button onClick={() => dispatch(removeRecipe(recipe.id))}>Delete</button>
            </li>
          ))}
        </ul>
      </div> 
    )


}

export default RecipeList