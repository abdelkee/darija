import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CategoryType } from "../../types";

type Props = {
  category: CategoryType;
};

function Category({ category }: Props) {
  return (
    <Link
      href={category.path}
      className={`flex flex-col items-center space-y-2 ${
        category.title === "Pronombres" && "single"
      }`}
    >
      <div
        className="w-[96px] h-[96px] bg-transparent border-[6px] grid place-items-center relative rounded-full"
        style={{ borderColor: category.color }}
      >
        <div
          className="absolute inset-0 z-10 rounded-full opacity-40"
          style={{ backgroundColor: category.color }}
        />
        <Image
          alt={category.title}
          src={category.img}
          width={84}
          height={84}
          className="z-20 bg-transparent border-4 border-white rounded-full"
        />
      </div>
      <p className="font-semibold tracking-wider">{category.title}</p>
    </Link>
  );
}

export default Category;
