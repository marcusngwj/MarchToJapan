export interface ContextProps {
  state: {
    day: string;
    time: string;
    navigationIndex: number;
  };
  action: {
    setDay: (value: string) => void;
    setTime: (value: string) => void;
    setNavigationIndex: (value: number) => void;
  };
}

export interface AppState {
  day: string;
  time: string;
  navigationIndex: number;
}
