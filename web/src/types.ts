export interface Course {
  id: number;
  name: string;
  description: string;
  learning_objective: string;
  prerequisite: string;
  conclusion: string;
}

export interface NavListType {
  [key: string]: string | number;
}

export interface ButtonComponentProps {
  onClickFn: () => void;
}

export interface UrlProps {
  url: string;
}

export interface IdProps {
  params: {
    id: string;
  };
}
