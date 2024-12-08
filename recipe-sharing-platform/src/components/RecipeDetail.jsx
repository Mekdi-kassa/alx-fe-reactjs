import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'; // Import the mock data

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  // Find the recipe by ID when the component mounts
  useEffect(() => {
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10">Recipe not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          {/* Ingredients Section */}
          <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
          <ul className="list-disc list-inside mb-6">
            {recipe.ingredients ? recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            )) : <p>No ingredients provided.</p>}
          </ul>

          {/* Cooking Instructions Section */}
          <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
          <ol className="list-decimal list-inside">
            {recipe.instructions ? recipe.instructions.map((step, index) => (
              <li key={index} className="mb-2">{step}</li>
            )) : <p>No instructions provided.</p>}
          </ol>
        </div>
      </div>
    </div>
  );
}