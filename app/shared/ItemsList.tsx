"use client";

import { useAppContext } from "../../context/ContextProvider";
import { useState } from "react";
import ctl from "@netlify/classnames-template-literals";
import ItemCard from "./ItemCard";

export default function ItemsList() {
  // ---- HOOKS
  const { data } = useAppContext().state;
  const [val, setVal] = useState<string>("");

  // ---- FUNCTIONS
  const filteredData = data?.data.filter((f) => f.es_title.includes(val));

  // ---- STYLES
  const s = {
    searchInput: ctl(`
      w-full 
      p-3 
      mb-4 
      border 
      border-gray-200 
      rounded 
      focus:outline-none 
      focus:border-blue-300
    `),
    cardsContainer: ctl(`
      grid 
      grid-cols-2 
      gap-4
    `),
  };

  // ---- JSX
  return (
    <main className="p-4">
      <input
        type="search"
        placeholder="Buscar en español..."
        onChange={(e) => setVal(e.target.value)}
        className={s.searchInput}
      />
      <div className={s.cardsContainer}>
        {filteredData?.map((each) => (
          <ItemCard key={each.es_title} alimento={each} />
        ))}
      </div>
    </main>
  );
}
