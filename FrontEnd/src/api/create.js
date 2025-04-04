
import axios from 'axios';
export const createCar = async (formData,url) => {
  try {
    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },

    });
    return response.data; // This will be the response from your API
  } catch (error) {
    console.error('Error creating car:', error.response.data.error);
    throw error; // Throw the error so it can be handled in the component
  }
};
