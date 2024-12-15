// src/services/githubService.js
import axios from 'axios';

// Fetch user data based on advanced search criteria
export const fetchUserData = async (username, location, minRepos) => {
  try {
    let query = username ? `q=${username}` : 'q=*'; // Default to wildcard if no username is provided

    // Add location filter if provided
    if (location) {
      query += `+location:${location}`;
    }

    // Add minimum repository filter if provided
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    // Construct the complete GitHub API search query
    const response = await axios.get(`https://api.github.com/search/users?q${query}`);
    return response.data.items;  // Return the list of user results
  } catch (error) {
    console.error("Error fetching data from GitHub API:", error);
    throw error;  // Propagate the error for handling in the component
  }
};
