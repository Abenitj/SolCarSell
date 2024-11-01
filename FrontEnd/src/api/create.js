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

// Function to create a new car listing
export const createCar = async (carData) => {
  try {
    const response = await axiosInstance.post('/api/cars', carData);
    return response.data;
  } catch (error) {
    console.error('Error creating car:', error);
    throw error.response?.data || error;
  }
};

// Function to create a new user
export const createUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/api/users/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error.response?.data || error;
  }
};

// Function to upload images
export const uploadImages = async (formData) => {
  try {
    const response = await axiosInstance.post('/api/cars/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading images:', error);
    throw error.response?.data || error;
  }
};
