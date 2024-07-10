import { createContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";
import { initGame } from "../constant";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(reducer, initGame);
  const providerState = {
    appState,
    dispatch
  };
  return (
    <AppContext.Provider value={providerState}>
      {children}
    </AppContext.Provider>
  );
};
