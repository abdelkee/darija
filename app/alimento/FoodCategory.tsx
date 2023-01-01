"use client";

import Image from "next/image";
import { useAppContext } from "../../context/ContextProvider";
import { FoodDataType, FoodType } from "../../types";

interface Props {
  data: FoodType;
}

function FoodCategory({ data }: Props) {
  const { state, dispatch } = useAppContext();
  const active = data.title === state.foodData?.title;
  return (
    <button
      className={`flex flex-col items-center space-y-1 border-b-4 pb-2 ${
        active ? "border-b-amber-400" : "border-b-transparent"
      }`}
      onClick={() => dispatch({ type: "setFoodData", payload: data })}
    >
      <div
        className={`w-20 h-20 overflow-hidden border-4 rounded-full bg-green-100/30 ${
          active ? "border-amber-400" : ""
        }`}
      >
        <Image alt={data.title} src={data.image_url} width={80} height={80} />
      </div>
      <p className={`text-lg font-semibold tracking-wider`}>{data.title}</p>
    </button>
  );
}

export default FoodCategory;
