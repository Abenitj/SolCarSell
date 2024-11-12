
import axios from 'axios';

export const Update = async (url,carData) => {
  try {
    // Sending the request as JSON
    const response = await axios.put(url, carData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;

  } catch (error) {
    // Handle error response
    if (error.response) {
      console.error("Error response:", error.response.data);
      return error.response.data;
    } else if (error.request) {
      console.error("Error request:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    return null;
  }
};
