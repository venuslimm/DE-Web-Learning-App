import { axiosChatbot, getConfig } from './utils';
import { ChatbotConvo } from '@/types';

export const getChatbotResponse = async (convo: ChatbotConvo): Promise<string> => {
  try {
    convo = convo.filter(message => message.isStatusUp !== false);
    convo = convo.map((msg) => {
      const { isStatusUp, ...rest } = msg;
      return rest;
    });

    console.log("Chatbot request sent to API:", convo);
    const response = await axiosChatbot.post('/chatbot', { convo }, getConfig());
    console.log("Chatbot response fetched from API:", response);
    return response.data.response;
  } catch (error) {
    console.error("Chatbot response error fetched:", error);
    return "";
  }
};
