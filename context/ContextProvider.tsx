"use client";

import { createContext, useContext, useReducer } from "react";
import { FoodType } from "../types";

type StateType = {
  foodData: FoodType | null;
};

type ActionType = { type: "setFoodData"; payload: FoodType };

const initialState: StateType = {
  foodData: null,
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
    case "setFoodData":
      return {
        ...state,
        foodData: action.payload,
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
