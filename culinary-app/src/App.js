import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';
import './App.css';

function App() {
  return (
    <div>
      <h1>Recipe Manager</h1>
      <AddRecipe />
      <RecipeList />
    </div>
  );
}

export default App;
