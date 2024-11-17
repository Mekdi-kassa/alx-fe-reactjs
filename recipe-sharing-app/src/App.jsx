import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import EditRecipeForm from './components/EditRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home route showing SearchBar, RecipeList, FavoritesList, and RecommendationsList */}
        <Route
          path="/"
          element={
            <>
              <SearchBar />
              <RecipeList />
              <FavoritesList />
              <RecommendationsList />
            </>
          }
        />
        
        {/* Add Recipe Form Route */}
        <Route path="add" element={<AddRecipeForm />} />

        {/* Recipe Details Route */}
        <Route path="recipe/:recipeId" element={<RecipeDetails />} />

        {/* Edit Recipe Form Route */}
        <Route path="recipe/:recipeId/edit" element={<EditRecipeForm />} />

        {/* Delete Recipe Button Route */}
        <Route path="recipe/:recipeId/delete" element={<DeleteRecipeButton />} />
        
      </Routes>
    </Router>
  );
};

export default App;

