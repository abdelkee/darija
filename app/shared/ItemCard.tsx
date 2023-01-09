import Image from "next/image";
import ctl from "@netlify/classnames-template-literals";
import { ItemType } from "../../types";

interface Props {
  alimento: ItemType;
}

export default function ItemCard({ alimento }: Props) {
  // ---- STYLES
  const s = {
    wrapper: ctl(`
      flex 
      flex-col 
      items-center 
      p-4 
      space-y-4 
      text-indigo-600 
      border-2 
      border-indigo-100 
      rounded-md 
      shadow-md 
      shadow-indigo-50
    `),
    imageContainer: ctl(`
      grid 
      w-full 
      rounded 
      aspect-square 
      place-items-center
    `),
    infoContainer: ctl(`
      text-lg 
      font-semibold 
      tracking-wide
    `),
  };

  // ---- JSX
  return (
    <div className={s.wrapper}>
      <section title="IMAGE" className={s.imageContainer}>
        <Image
          alt={alimento.es_title}
          src={alimento.image_url}
          width={100}
          height={0}
        />
      </section>
      <section title="INFO" className={s.infoContainer}>
        <p>
          {alimento.ar_title} - {alimento.plural}
        </p>
      </section>
    </div>
  );
}
