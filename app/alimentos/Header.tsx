"use client";

import { useEffect } from "react";
import ctl from "@netlify/classnames-template-literals";
import { useAppContext } from "../../context/ContextProvider";
import { alimentos_data } from "../../utils/alimentos_data";
import FoodCategory from "./FoodCategory";

function Header() {
  // ---- HOOKS
  const dispatch = useAppContext().dispatch;
  useEffect(() => {
    dispatch({ type: "setFoodData", payload: alimentos_data[0] });
  }, []);

  // STYLES
  const s = {
    header: ctl(`
      grid 
      p-8
      mt-12 
      overflow-x-scroll 
      place-items-center
    `),
    categoriesContainer: ctl(`
      flex 
      space-x-8
    `),
  };

  // ---- JSX
  return (
    <header className={s.header}>
      <div className={s.categoriesContainer}>
        {alimentos_data.map((alim) => (
          <FoodCategory key={alim.title} data={alim} />
        ))}
      </div>
    </header>
  );
}

export default Header;
