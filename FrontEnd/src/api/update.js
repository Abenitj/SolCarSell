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
// Function to update a car
export const updateCar = async (carId, carData) => {
  try {
    const response = await axiosInstance.put(`/api/cars/${carId}`, carData);
    return response.data;
  } catch (error) {
    console.error('Error updating car:', error);
    throw error.response?.data || error;
  }
};

// Function to update user profile  
export const updateUserProfile = async (userData) => {
  try {
    const response = await axiosInstance.put('/api/users/profile', userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error.response?.data || error;
  }
};

// Function to update car images
export const updateCarImages = async (carId, formData) => {
  try {
    const response = await axiosInstance.put(`/api/cars/${carId}/images`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating car images:', error);
    throw error.response?.data || error; 
  }
};
