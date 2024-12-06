import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleFavorite, removeRecipe } from '../redux/actions/recipeActions'

const RecipeItem = ({ recipe }) => {
    const dispatch = useDispatch()

    return (
        <li>
            <span>{recipe.name}</span>
            <button onClick={() => dispatch(toggleFavorite(recipe.id))}>
                {recipe.isFavorite ? 'Nieulubiony' : 'Ulubiony'}
            </button>

            <button onClick={() => dispatch(removeRecipe(recipe.id))}>Usuń</button>
        </li>
    )
}

export default RecipeItem