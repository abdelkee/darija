"use client";

import Image from "next/image";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { PronombreType } from "../../types";
import Pronombre from "./Pronombre";

type Props = {
  pronombre: {
    es: string;
    ar: string;
  };
  tipos_data: PronombreType[];
};

function PronombreCard({ pronombre, tipos_data }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <section
        className={`relative flex items-center justify-between px-4 py-3 overflow-hidden rounded-lg shadow bg-gradient-to-r from-green-700 to-green-400`}
      >
        <Image
          alt="bg"
          src={"/img/bg-morocco-flag.png"}
          width={170}
          height={0}
          className="absolute z-10 -translate-y-1/2 opacity-20 grayscale top-1/2 left-1/2"
        />
        <div className="z-20 flex items-center space-x-4">
          <p className="text-lg font-semibold text-green-200">
            {pronombre.es} :
          </p>
          <p className="font-semibold tracking-wider text-gray-200">
            {pronombre.ar}
          </p>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-20 p-1 text-green-50"
        >
          {isOpen ? (
            <MdKeyboardArrowUp size="24px" />
          ) : (
            <MdKeyboardArrowDown size="24px" />
          )}
        </button>
      </section>

      {/* ------- //* MORE SECTION ----------- */}
      {isOpen && (
        <section className="grid grid-cols-1 px-4 py-6 mt-1 border border-green-200 rounded-sm bg-green-50 gap-y-8">
          {tipos_data.map((tipo) => (
            <Pronombre key={tipo.es_title + tipo.ar_title} tipo={tipo} />
          ))}
        </section>
      )}
    </div>
  );
}

export default PronombreCard;
