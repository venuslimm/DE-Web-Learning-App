export interface Course {
  id: number;
  name: string;
  description: string;
  learning_objective: string;
  prerequisite: string;
  conclusion: string;
};

export interface NavListType {
  [key: string]: string | number;
};

export interface ChatbotMessage {
  role: 'user' | 'assistant';
  content: string;
  isStatusUp?: boolean;
}
export type ChatbotConvo = ChatbotMessage[];

export interface ButtonComponentProps {
  onClickFn: () => void;
};

export interface UrlProps {
  url: string;
};

export interface IdProps {
  params: {
    id: string;
  };
};

export type StringStringMap = {
  [key: string]: string;
};
