"use client";

import PhraseCategory from "./PhraseCategory";
import frasesData from "../../utils/frases_data.json";
import { useEffect } from "react";
import { useAppContext } from "../../context/ContextProvider";

type Props = {};
export default function PhraseCategoriesList({}: Props) {
  // ---- HOOKS
  const dispatch = useAppContext().dispatch;
  useEffect(() => {
    dispatch({
      type: "set_selected_frases_category",
      payload: frasesData.data[0].category,
    });
  }, []);
  // ---- FUNCTIONS
  // ---- JSX
  return (
    <div className="w-full overflow-x-scroll sticky top-16 ">
      <section className="mb-8 min-w-max px-4 flex items-center space-x-4 sm:flex-1 sm:space-y-8 sm:block sm:space-x-0 sm:fixed sm:w-1/2">
        {frasesData?.data.map(({ category }) => (
          <PhraseCategory key={category} category={category} />
        ))}
      </section>
    </div>
  );
}
