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

// Function to delete a car
export const deleteCar = async (carId) => {
  try {
    const response = await axiosInstance.delete(`/api/cars/${carId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting car:', error);
    throw error.response?.data || error;
  }
};

// Function to delete a user account
export const deleteUserAccount = async () => {
  try {
    const response = await axiosInstance.delete('/api/users/delete-account');
    return response.data;
  } catch (error) {
    console.error('Error deleting user account:', error);
    throw error.response?.data || error;
  }
};

// Function to delete a car image
export const deleteCarImage = async (carId, imageId) => {
  try {
    const response = await axiosInstance.delete(`/api/cars/${carId}/images/${imageId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting car image:', error);
    throw error.response?.data || error;
  }
};
