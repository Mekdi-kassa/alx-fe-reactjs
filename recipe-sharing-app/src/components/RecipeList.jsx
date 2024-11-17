// src/components/RecipeList.jsx
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../components/recipeStore';

function RecipeList() {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const recipes = useRecipeStore((state) => state.recipes); // Fetch the original recipes for debugging

  useEffect(() => {
    // Trigger filtering when the component mounts or whenever recipes or searchTerm change
    
  }, [filterRecipes, recipes]);

  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes && filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;