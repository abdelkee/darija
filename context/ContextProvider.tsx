"use client";

import { createContext, useContext, useReducer } from "react";
import { CategoryType } from "../types";

type StateType = {
  data: CategoryType | null;
  selectedFrasesCategory: string;
};

type ActionType =
  | { type: "setData"; payload: StateType["data"] }
  | {
      type: "set_selected_frases_category";
      payload: StateType["selectedFrasesCategory"];
    };

const initialState: StateType = {
  data: null,
  selectedFrasesCategory: "",
};

type ContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

const AppContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => {},
});

const appReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "setData":
      return {
        ...state,
        data: action.payload,
      };
    case "set_selected_frases_category":
      return {
        ...state,
        selectedFrasesCategory: action.payload,
      };
    default:
      return state;
  }
};

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};

export default ContextProvider;
