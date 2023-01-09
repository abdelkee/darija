"use client";

import Image from "next/image";
import ctl from "@netlify/classnames-template-literals";
import { useAppContext } from "../../context/ContextProvider";
import { CategoryType } from "../../types";

interface Props {
  data: CategoryType;
}

export default function CategoryCard({ data }: Props) {
  // ---- HOOKS
  const { state, dispatch } = useAppContext();

  // ---- FUNCTIONS
  const active = data.title === state.data?.title;
  const setData = () => {
    dispatch({ type: "setData", payload: data });
  };

  // ---- STYLES
  const s = {
    container: ctl(`
      flex 
      flex-col 
      items-center 
      space-y-1 
      border-b-4 
      pb-2 
      ${active ? "border-b-amber-400" : "border-b-transparent"}
    `),
    imageContainer: ctl(`
      w-20 
      h-20 
      overflow-hidden 
      border-4 
      rounded-full 
      bg-green-100/30 
      ${active ? "border-amber-400" : ""}
    `),
    title: ctl(`
      text-md 
    `),
  };

  // ---- JSX
  return (
    <button className={s.container} onClick={setData}>
      <div title="IMAGE CONTAINER" className={s.imageContainer}>
        <Image alt={data.title} src={data.image_url} width={80} height={80} />
      </div>
      <p className={s.title}>{data.title}</p>
    </button>
  );
}
