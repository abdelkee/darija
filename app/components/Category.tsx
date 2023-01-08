import Image from "next/image";
import Link from "next/link";
import ctl from "@netlify/classnames-template-literals";
import { CategoryType } from "../../types";

type Props = {
  category: CategoryType;
};

function Category({ category }: Props) {
  // ---- STYLES
  const s = {
    container: ctl(`
      flex 
      flex-col 
      items-center 
      space-y-2 
      ${category.title === "Pronombres" && "single"}
    `),
    imageContainer: ctl(`
      w-[96px] 
      h-[96px] 
      bg-transparent 
      border-[6px] 
      grid 
      place-items-center 
      relative 
      rounded-full
    `),
    imageBg: ctl(`
      absolute 
      inset-0 
      z-10 
      rounded-full 
      opacity-40
    `),
    image: ctl(`
      z-20 
      bg-transparent 
      border-4 
      border-white 
      rounded-full
    `),
    title: ctl(`
      font-semibold 
      tracking-wider
    `),
  };

  // ---- JSX
  return (
    <Link href={category.path} className={s.container}>
      <div className={s.imageContainer} style={{ borderColor: category.color }}>
        <div
          className={s.imageBg}
          style={{ backgroundColor: category.color }}
        />
        <Image
          alt={category.title}
          src={category.img}
          width={84}
          height={84}
          className={s.image}
        />
      </div>
      <p className={s.title}>{category.title}</p>
    </Link>
  );
}

export default Category;
