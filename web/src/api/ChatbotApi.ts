import axios from "axios";

// TODO: env file
const axiosChatbot = axios.create({
  baseURL: 'http://localhost:7000',
});

// TODO: move to utils file
const getConfig = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

export const getChatbotResponse = async (prompt: string): Promise<string> => {
  try {
    const response = await axiosChatbot.post('/chatbot', { prompt }, getConfig());
    console.log("Chatbot response fetched from API:", response);
    return response.data.response;
  } catch (error) {
    console.error("Chatbot response error fetched:", error);
    return "";
  }
};
