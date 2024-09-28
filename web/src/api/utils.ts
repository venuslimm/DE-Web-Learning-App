import axios from "axios";

const getAxiosInstance = (port: any) => {
  return axios.create({
    baseURL: `http://localhost:${port}`,
  });
};

const EXECUTION_PORT = process.env.EXECUTION_PORT || 5000;
export const axiosDataViz = getAxiosInstance(EXECUTION_PORT);

const DB_PORT = process.env.DB_PORT || 4000;
export const axiosCourse = getAxiosInstance(DB_PORT);

const LLM_PORT = process.env.LLM_PORT || 7000;
export const axiosChatbot = getAxiosInstance(LLM_PORT);

export const getConfig = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
