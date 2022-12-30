"use client";

import { PronombreType } from "../../types";
import { useState } from "react";
import { MdClose } from "react-icons/md";

type Props = {
  tipo: PronombreType;
};

function Pronombre({ tipo }: Props) {
  const [isTooltipShow, setIsTooltipShow] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-center border border-gray-300 rounded px-4 py-6 relative bg-white">
      <p
        className={`absolute tracking-wider -top-5 left-1/2 border ${
          tipo.gender === "M"
            ? "bg-blue-200 border-blue-400"
            : "bg-pink-200 border-pink-400"
        } -translate-x-1/2 text-lg font-semibold bg-white shadow rounded py-1 px-2`}
      >
        {tipo.es_title} - {tipo.ar_title}
      </p>
      <div
        title="Examples section"
        className="flex w-full items-center justify-between "
      >
        <div className="flex items-center space-x-0.5">
          {tipo.es_example.split(" ").map((w) => (
            <p
              className={`${
                w.toLocaleLowerCase() === tipo.es_title.toLocaleLowerCase() &&
                "text-red-600"
              }`}
            >
              {w}
            </p>
          ))}
        </div>
        <div className="flex items-center space-x-0.5">
          {tipo.ar_example.split(" ").map((w) => (
            <p
              className={`${
                w.toLocaleLowerCase() === tipo.ar_title.toLocaleLowerCase() &&
                "text-red-600"
              }`}
            >
              {w}
            </p>
          ))}
        </div>
      </div>
      {tipo.tooltip && (
        <>
          {!isTooltipShow ? (
            <button
              className="absolute bottom-2 left-1/2 -translate-x-1/2 rounde-full w-6 h-6 grid place-items-center bg-gray-500 rounded-full text-white"
              onClick={() => setIsTooltipShow(true)}
            >
              ?
            </button>
          ) : (
            <div
              title="tooltip body"
              className=" w-3/4 shadow-xl p-6 rounded relative border-gray-200 bg-gray-500 text-white"
            >
              {tipo.tooltip}
              <button
                className="absolute top-1 right-1"
                onClick={() => setIsTooltipShow(false)}
              >
                <MdClose size={"24px"} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Pronombre;
