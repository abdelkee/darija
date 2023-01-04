"use client";

import { useAppContext } from "../../context/ContextProvider";
import FoodCard from "./FoodCard";
import { useState } from "react";

function FoodDataList() {
  const { foodData } = useAppContext().state;
  const [val, setVal] = useState<string>("");

  const filteredData = foodData?.data.filter((f) => f.es_title.includes(val));
  return (
    <main className="p-4">
      <input
        type="search"
        placeholder="Buscar en español..."
        onChange={(e) => setVal(e.target.value)}
        className="w-full p-3 mb-4 border border-gray-200 rounded focus:outline-none focus:border-blue-300"
      />
      <div className="grid grid-cols-2 gap-4">
        {filteredData?.map((each) => (
          <FoodCard key={each.es_title} alimento={each} />
        ))}
      </div>
    </main>
  );
}

export default FoodDataList;
