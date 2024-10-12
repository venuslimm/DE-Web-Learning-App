interface ChatbotMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
  name?: string;
}
export type ChatbotConvo = ChatbotMessage[];
