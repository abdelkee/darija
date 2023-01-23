"use client";

import { useState } from "react";
import {
  MdArrowUpward,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { DemoDataType } from "../../types";

type Props = {
  data: DemoDataType;
};
export default function DemoCard({ data }: Props) {
  // ---- HOOKS
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // ---- FUNCTIONS
  // ---- JSX
  return (
    <div className="w-full p-4 bg-white border-l-4 rounded shadow-md odd:border-l-sky-600 even:border-l-pink-600">
      {/* DEMO NAME */}
      <section className="relative flex items-center justify-between font-medium tracking-wide">
        <p>{data.es_title}</p>
        <p>{data.ar_title}</p>
        <button
          className="absolute -bottom-4 left-[50%] -translate-x-[50%] text-gray-400"
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
        <section className="p-2 mt-8 space-y-4 text-sm text-gray-400 divide-y-2 rounded divide-gray-100/80">
          {data.examples.map((example) => (
            <div className="flex items-center justify-between pt-2">
              <p>{example.es_example}</p>
              <p>{example.ar_example}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
