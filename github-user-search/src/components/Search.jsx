import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== '') {
      onSearch(username); // Trigger the search
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update state with input value
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;