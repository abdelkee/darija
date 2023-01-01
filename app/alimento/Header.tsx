"use client";

import { useEffect } from "react";
import { useAppContext } from "../../context/ContextProvider";
import { alimentos_data } from "../../utils/alimentos_data";
import FoodCategory from "./FoodCategory";

function Header() {
  const dispatch = useAppContext().dispatch;

  useEffect(() => {
    dispatch({ type: "setFoodData", payload: alimentos_data[0] });
  }, []);
  return (
    <header className="grid p-8 overflow-x-scroll place-items-center">
      <div className="flex space-x-8">
        {alimentos_data.map((alim) => (
          <FoodCategory key={alim.title} data={alim} />
        ))}
      </div>
    </header>
  );
}

export default Header;
