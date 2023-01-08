"use client";

import Image from "next/image";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ctl from "@netlify/classnames-template-literals";
import { PronombreType } from "../../types";
import Pronombre from "./Pronombre";

type Props = {
  pronombre: {
    es: string;
    ar: string;
  };
  data: PronombreType[];
};

export default function PronombreCard({ pronombre, data }: Props) {
  // ---- HOOKS
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // ---- STYLES
  const s = {
    faceSection: ctl(`
      relative 
      flex 
      items-center 
      justify-between 
      px-4 
      py-3 
      overflow-hidden 
      rounded-lg 
      shadow 
      bg-gradient-to-r 
      from-green-700 
      to-green-400
    `),
    image: ctl(`
      absolute 
      z-10 
      -translate-y-1/2 
      opacity-20 
      grayscale 
      top-1/2 
      left-1/2
    `),
    infoContainer: ctl(`
      z-20 
      flex 
      items-center 
      space-x-4
    `),
    esTitle: ctl(`
      text-lg 
      font-semibold 
      text-green-200
    `),
    arTitle: ctl(`
      font-semibold 
      tracking-wider 
      text-gray-200
    `),
    toggleButton: ctl(`
      z-20 
      p-1 
      text-green-50
    `),
    moreSection: ctl(`
      grid 
      grid-cols-1 
      px-4 
      py-6 
      mt-1 
      border 
      border-green-200 
      rounded-sm 
      bg-green-50 
      gap-y-4
    `),
  };

  // ---- JSX
  return (
    <>
      <section title="FACE SECTION" className={s.faceSection}>
        <Image
          alt="bg"
          src={"/img/bg-morocco-flag.png"}
          width={170}
          height={0}
          className={s.image}
        />
        <div className={s.infoContainer}>
          <p className={s.esTitle}>{pronombre.es} :</p>
          <p className={s.arTitle}>{pronombre.ar}</p>
        </div>
        <button
          title="TOGGLE BUTTON"
          onClick={() => setIsOpen(!isOpen)}
          className={s.toggleButton}
        >
          {isOpen ? (
            <MdKeyboardArrowUp size="24px" />
          ) : (
            <MdKeyboardArrowDown size="24px" />
          )}
        </button>
      </section>

      {isOpen && (
        <section title="MORE SECTION" className={s.moreSection}>
          {data?.map((tipo) => (
            <Pronombre
              key={tipo.es_title + tipo.ar_title + Math.random().toString()}
              tipo={tipo}
            />
          ))}
        </section>
      )}
    </>
  );
}
