import axios from 'axios';
import React, { useEffect, useState } from 'react';

// Rename to follow the convention of custom hooks
export const getAll = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error); // Log or handle the error as needed
      console.error('Error fetching data:', error); // Optional logging
    } finally {
      setIsLoading(false);
    }
  };

  // Include url in the dependency array to refetch if it changes
  useEffect(() => {
    fetchData();
  }, [url]); // This ensures fetchData is called whenever url changes

  return { data, error, isLoading };
};
