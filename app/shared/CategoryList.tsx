"use client";

import { useEffect } from "react";
import ctl from "@netlify/classnames-template-literals";
import { useAppContext } from "../../context/ContextProvider";
import CategoryCard from "./CategoryCard";
import { CategoryType } from "../../types";

type Props = {
  sectionData: CategoryType[];
};

export default function CategoryList({ sectionData }: Props) {
  // ---- HOOKS
  const dispatch = useAppContext().dispatch;
  useEffect(() => {
    dispatch({ type: "setData", payload: sectionData[0] });
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
        {sectionData?.map((each) => (
          <CategoryCard key={each.title} data={each} />
        ))}
      </div>
    </header>
  );
}
