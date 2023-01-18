"use client";

import { useEffect } from "react";
import { useAppContext } from "../../context/ContextProvider";
import { FrasesDataType } from "../../types";

type Props = {
  category: FrasesDataType["category"];
};
export default function PhraseCategory({ category }: Props) {
  // ---- HOOKS
  const { selectedFrasesCategory } = useAppContext().state;
  const dispatch = useAppContext().dispatch;
  // ---- FUNCTIONS
  const setFraseCategory = () => {
    dispatch({ type: "set_selected_frases_category", payload: category });
  };
  const isCategoryActive = selectedFrasesCategory === category;
  const activeStyle = isCategoryActive
    ? "bg-yellow-300 shadow-none"
    : "bg-blue-50 shadow";

  // ---- JSX
  return (
    <button
      className={`rounded-sm p-4 w-[140px] font-bold tracking-wide text-lg text-center sm:w-full ${activeStyle}`}
      onClick={setFraseCategory}
    >
      <h2>{category}</h2>
    </button>
  );
}
