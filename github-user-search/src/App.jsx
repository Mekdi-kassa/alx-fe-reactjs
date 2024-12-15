// src/App.jsx
import  { useState } from 'react';
import SearchBar from './components/SearchBar';
import { fetchUserData } from './services/githubService';

const App = () => {
  const [userData, setUserData] = useState(null); // State to hold user data
  const [loading, setLoading] = useState(false);  // State to manage loading
  const [error, setError] = useState(null);       // State to manage error messages

  const handleSearch = async (username) => {
    setLoading(true); // Start loading
    setError(null);   // Reset error
    setUserData(null); // Clear previous user data

    try {
      const data = await fetchUserData(username); // Fetch user data
      setUserData(data); // Set the user data
    } catch (err) {
      setError('Looks like we can’t find the user'); // Handle error
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="App">
      <header>
        <h1>GitHub User Search Application</h1>
      </header>
      <main>
        {/* Pass the handleSearch function to the SearchBar component */}
        <SearchBar onSearch={handleSearch} />

        {/* Conditional rendering for loading state */}
        {loading && <p>Loading...</p>}

        {/* Display error message if an error occurred */}
        {error && <p>{error}</p>}

        {/* Display user data when successfully fetched */}
        {userData && (
          <div>
            <img src={userData.avatar_url} alt={userData.login} width="100" />
            <h2>{userData.name || userData.login}</h2>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;