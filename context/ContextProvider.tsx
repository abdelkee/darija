"use client";

import { createContext, useContext, useReducer } from "react";
import { CategoryType } from "../types";

type StateType = {
  data: CategoryType | null;
};

type ActionType = { type: "setData"; payload: CategoryType };

const initialState: StateType = {
  data: null,
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
