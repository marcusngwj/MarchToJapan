export interface ContextProps {
  state: {
    day: string;
    time: string;
  };
  action: {
    setDay: (value: string) => void;
    setTime: (value: string) => void;
  };
}

export interface AppState {
  day: string;
  time: string;
}