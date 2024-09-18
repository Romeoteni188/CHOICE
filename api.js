// api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000'; // La URL de tu backend

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
