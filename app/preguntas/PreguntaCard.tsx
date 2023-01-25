"use client";

import { useState } from "react";
import {
  MdArrowUpward,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { DemoPregDataType } from "../../types";

type Props = {
  data: DemoPregDataType;
};
export default function PreguntaCard({ data }: Props) {
  // ---- HOOKS
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // ---- FUNCTIONS
  // ---- JSX
  return (
    <div className="w-full p-4 text-indigo-900 bg-white border border-l-4 border-indigo-100 rounded shadow-md border-l-indigo-500 shadow-indigo-100">
      {/* DEMO NAME */}
      <section className="relative space-y-4 font-medium tracking-wide">
        <p>{data.es_title}</p>
        <p>{data.ar_title}</p>
        <button
          className="absolute top-[50%] right-4 -translate-y-[50%] text-gray-400"
          onClick={() => setIsOpen((curr) => !curr)}
        >
          {isOpen ? (
            <MdKeyboardArrowUp size="24px" />
          ) : (
            <MdKeyboardArrowDown size="24px" />
          )}
        </button>
      </section>

      {/* MORE EXAMPLES */}
      {isOpen && (
        <section className="p-2 mt-8 space-y-4 text-sm text-gray-500 divide-y-2 rounded divide-gray-100/80">
          {data.examples.map((example) => (
            <div className="py-2 space-y-3">
              <p className="text-left">{example.es_example}</p>
              <p className="text-right">{example.ar_example}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
