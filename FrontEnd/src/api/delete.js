import axios from "axios";

export const Delete = async (url, id) => {
  console.log(url + id)
  try {
    const response = await axios.delete(`${url}/${id}`);
    return response?.data?.data;
  } catch (error) {
    throw error.response?.data?.error;
  }
}