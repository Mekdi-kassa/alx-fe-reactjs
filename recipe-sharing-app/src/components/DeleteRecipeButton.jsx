// src/components/DeleteRecipeButton.jsx
import React from 'react';
import useRecipeStore from '../components/recipeStore';
import { useNavigate } from 'react-router-dom';


const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();


  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // Navigate back to the home page after deletion
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
