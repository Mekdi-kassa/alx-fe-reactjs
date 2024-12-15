// src/components/Search.js
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState(0);  // Minimum repositories
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const data = await fetchUserData(username, location, minRepos);
            setUserData(data);
        } catch (err) {
            setError('Looks like we cant find the user');
        }
        setLoading(false);
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h2 className="text-xl font-bold mb-4">GitHub User Search</h2>
            <form onSubmit={handleSearch} className="space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="Enter GitHub username"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Location (optional)"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Minimum Repositories"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                    />
                </div>
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            {userData.length > 0 && !loading && !error && (
                <div>
                    <h3 className="mt-4">Results:</h3>
                    <ul>
                        {userData.map((user) => (
                            <li key={user.id} className="border-b border-gray-300 p-4">
                                <img src={user.avatar_url} alt={user.login} width="50" className="inline-block mr-4" />
                                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                                    {user.login}
                                </a>
                                <p className="text-sm text-gray-600">Location: {user.location || 'Not provided'}</p>
                                <p className="text-sm text-gray-600">Public Repos: {user.public_repos}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Search;
