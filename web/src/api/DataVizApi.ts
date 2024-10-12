import { axiosDataViz, getConfig } from './utils';

export const getExecOutput = async (code: string): Promise<any> => {
  try {
    const response = await axiosDataViz.post('/execute', { script: code }, getConfig());
    console.log("Exec fetched from API:", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching exec output:", error);
    return [];
  }
};
