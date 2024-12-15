// src/components/Search.js
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState(''); // state to hold the username
    const [userData, setUserData] = useState(null); // state to hold user data
    const [loading, setLoading] = useState(false); // state to handle loading
    const [error, setError] = useState(null); // state to handle error

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null); // Reset error state on new search
        try {
            const data = await fetchUserData(username);
            setUserData(data); // Set the fetched data into the state
        } catch (err) {
            setError('Looks like we cant find the user'); // Handle error if user is not found
        }
        setLoading(false);
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Update the username state as user types
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            {userData && !loading && !error && (
                <div>
                    <img src={userData.avatar_url} alt={userData.login} width="100" />
                    <h3>{userData.name}</h3>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        Visit Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default Search;
