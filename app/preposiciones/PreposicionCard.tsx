"use client";

import { DemoPregDataType } from "../../types";
import { useState } from "react";

type Props = {
  data: DemoPregDataType;
};
export default function PrepsicionCard({ data }: Props) {
  // ---- HOOKS
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // ---- FUNCTIONS
  const isActive = isOpen ? "bg-sky-700 text-white" : "bg-white text-sky-900";
  // ---- JSX
  return (
    <div>
      <button
        className={`${isActive} flex font-medium tracking-wide items-center justify-between w-full px-8 py-6 border rounded border-slate-400 shadow`}
        onClick={() => setIsOpen((curr) => !curr)}
      >
        <span>{data.es_title}</span>
        <span>{data.ar_title}</span>
      </button>
      {isOpen && (
        <div className="p-4 mt-2 text-sm border rounded border-slate-300 bg-slate-100 text-slate-600">
          {data?.examples.map((example) => (
            <>
              <p>{example.es_example}</p>
              <p className="w-full text-right">{example.ar_example}</p>
            </>
          ))}
        </div>
      )}
    </div>
  );
}
