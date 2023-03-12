import { createContext } from "react";
import { ContextProps, AppState } from "@/common/types/appContext";
import { route } from "@/common/constants/route"

const sessionStorageKey = "appState";

export default createContext<ContextProps>({
  state: {
    day: "0",
    time: "-",
    navigationIndex: route.home.index,
  },
  action: {
    setDay: () => {},
    setTime: () => {},
    setNavigationIndex: () => {}
  },
});

export const loadState = (): AppState | undefined => {
  try {
    const serializedState = sessionStorage.getItem(sessionStorageKey);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: AppState): void => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem(sessionStorageKey, serializedState);
  } catch (err) {
    // Ignore write errors
  }
};
