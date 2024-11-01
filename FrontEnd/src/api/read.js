import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to get all cars
export const getAllCars = async () => {
  try {
    const response = await axiosInstance.get('/api/cars');
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error.response?.data || error;
  }
};

// Function to get a single car by ID
export const getCarById = async (carId) => {
  try {
    const response = await axiosInstance.get(`/api/cars/${carId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching car:', error);
    throw error.response?.data || error;
  }
};

// Function to get user profile
export const getUserProfile = async () => {
  try {
    const response = await axiosInstance.get('/api/users/profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error.response?.data || error;
  }
};

// Function to search cars with filters
export const searchCars = async (filters) => {
  try {
    const response = await axiosInstance.get('/api/cars/search', {
      params: filters,
    });
    return response.data;
  } catch (error) {
    console.error('Error searching cars:', error);
    throw error.response?.data || error;
  }
};
