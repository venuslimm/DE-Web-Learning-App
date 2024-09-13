
import axios from "axios";

// TODO: env file
const axiosDataViz = axios.create({
  baseURL: 'http://localhost:5000',
});

const getConfig = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

export const getExecOutput = async (code: string): Promise<any> => {
  try {
    const response = await axiosDataViz.post('/execute', { script: code } ,getConfig());
    console.log("Exec fetched from API:", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching exec output:", error);
    return [];
  }
};
