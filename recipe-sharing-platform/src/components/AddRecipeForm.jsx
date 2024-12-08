import { useState } from 'react';

export default function AddRecipeForm() {
  // State for form fields
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  // State for handling errors
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};

    // Check if the title is provided
    if (!title.trim()) {
      newErrors.title = 'Recipe title is required';
    }

    // Check if at least two ingredients are provided
    const ingredientList = ingredients.split('\n').filter((item) => item.trim() !== '');
    if (ingredientList.length < 2) {
      newErrors.ingredients = 'At least two ingredients are required';
    }

    // Check if the instructions are provided
    if (!instructions.trim()) {
      newErrors.instructions = 'Instructions are required';
    }

    // Return the new errors object
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Run the validation
    const newErrors = validate();

    // If no errors, process the form (e.g., submit data)
    if (Object.keys(newErrors).length === 0) {
      // Reset errors
      setErrors({});

      // Here we would normally submit the form data (e.g., to an API or global state)
      const newRecipe = {
        title,
        ingredients: ingredients.split('\n').filter((item) => item.trim() !== ''),  // Filter out empty lines
        instructions: instructions.split('\n').filter((item) => item.trim() !== ''),
      };

      console.log('New Recipe:', newRecipe);

      // Clear the form fields
      setTitle('');
      setIngredients('');
      setInstructions('');
    } else {
      // If errors, set the error state
      setErrors(newErrors);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

        {/* Recipe Title */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
              ${errors.title ? 'border-red-500' : ''}`}
            placeholder="Enter the recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
            Ingredients (separate by line)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
              ${errors.ingredients ? 'border-red-500' : ''}`}
            rows="5"
            placeholder="Enter ingredients, each on a new line"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Instructions */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructions">
            Instructions (separate by line)
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
              ${errors.instructions ? 'border-red-500' : ''}`}
            rows="5"
            placeholder="Enter preparation steps, each on a new line"
          />
          {errors.instructions && <p className="text-red-500 text-sm">{errors.instructions}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}