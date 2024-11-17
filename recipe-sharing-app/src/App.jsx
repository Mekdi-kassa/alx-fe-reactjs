import React from 'react';
import RecipeList from './Components/RecipesList';
import AddRecipeForm from './Components/AddRecipeForm';

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
