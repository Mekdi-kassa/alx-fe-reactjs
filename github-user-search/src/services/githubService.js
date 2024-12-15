// src/services/githubService.js
import axios from 'axios';

export const fetchUserData = async (username, location, minRepos) => {
    let query = `q=${username}`;

    if (location) {
        query += `+location:${location}`;
    }

    if (minRepos) {
        query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(`https://api.github.com/search/users?${query}`);
    return response.data.items;  // Return the list of user results
};
