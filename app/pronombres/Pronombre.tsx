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
    <div className="relative flex flex-col items-center px-4 py-6 bg-white border border-gray-300 rounded">
      {/* <p
        className={`absolute tracking-wider -top-5 left-1/2 border ${
          tipo.gender === "M"
            ? "bg-blue-200 border-blue-400"
            : "bg-pink-200 border-pink-400"
        } -translate-x-1/2 text-lg font-semibold bg-white shadow rounded py-1 px-2`}
      >
        {tipo.es_title} - {tipo.ar_title}
      </p> */}
      <div
        title="Examples section"
        className="flex items-center justify-between w-full "
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
              className="absolute grid w-6 h-6 text-white -translate-x-1/2 bg-gray-500 rounded-full bottom-2 left-1/2 rounde-full place-items-center"
              onClick={() => setIsTooltipShow(true)}
            >
              ?
            </button>
          ) : (
            <div
              title="tooltip body"
              className="absolute z-30 w-3/4 p-6 text-white bg-gray-500 border-gray-200 rounded shadow-xl "
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
