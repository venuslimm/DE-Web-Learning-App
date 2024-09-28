import { axiosChatbot, getConfig } from './utils';

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
