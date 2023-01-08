"use client";

import { useState } from "react";
import {
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import ctl from "@netlify/classnames-template-literals";
import { PronombreType } from "../../../types";

type Props = {
  tipo: PronombreType;
};

export default function Pronombre({ tipo }: Props) {
  // ---- HOOKS
  const [isTooltipShow, setIsTooltipShow] = useState<boolean>(false);
  const [isMoreExamplesOpen, setIsMoreExamplesOpen] = useState<boolean>(false);

  // ---- STYLES
  const s = {
    wrapper: ctl(`
      relative 
      flex 
      flex-col 
      items-center 
      px-4 
      py-6 
      bg-white 
      border 
      border-gray-300 
      rounded
    `),
    ruleSection: ctl(`
      flex 
      items-center 
      justify-between 
      w-full 
    `),
    infoContainer: ctl(`
      flex 
      items-center 
      space-x-0.5
    `),
    tooltipButton: ctl(`
      absolute 
      left-0 
      grid 
      w-4 
      h-4 
      text-xs 
      text-white 
      -translate-x-1/2 
      rounded-full 
      -top-1 
      bg-gray-500/70 
      rounde-full 
      place-items-center

    `),
    tooltipContainer: ctl(`
      absolute 
      z-30 
      w-3/4 
      p-6 
      text-white 
      bg-gray-500 
      border-gray-200 
      rounded 
      shadow-xl 
    `),
    closeTooltipBtn: ctl(`
      absolute 
      top-1 
      right-1
    `),
    showExamplesBtn: ctl(`
      absolute 
      top-0 
      text-green-300 
      -translate-x-1/2 
      left-1/2 
    `),
    examplesContainer: ctl(`
      flex 
      flex-col 
      pt-6 
      space-y-2
    `),
    exampleCard: ctl(`
      p-2 
      text-sm 
      text-gray-500 
      border 
      border-gray-200 
      rounded
    `),
  };

  // ---- JSX
  return (
    <div className={s.wrapper}>
      <section title="RULE SECTION" className={s.ruleSection}>
        <div className={s.infoContainer}>
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
        <div className={s.infoContainer}>
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
      </section>

      {/* //* ---- TOOLTIP TOGGLE ---- */}
      {tipo.tooltip && (
        <>
          {!isTooltipShow ? (
            <button
              title="TOOLTIP BUTTON"
              className={s.tooltipButton}
              onClick={() => setIsTooltipShow(true)}
            >
              ?
            </button>
          ) : (
            <div title="TOOLTIP BODY" className={s.tooltipContainer}>
              {tipo.tooltip}
              <button
                className={s.closeTooltipBtn}
                onClick={() => setIsTooltipShow(false)}
              >
                <MdClose size={"24px"} />
              </button>
            </div>
          )}
        </>
      )}

      <section title="EXAMPLES SECTION" className="relative w-full">
        <button
          title="SHOW EXAMPLES BTN"
          className={s.showExamplesBtn}
          onClick={() => setIsMoreExamplesOpen((curr) => !curr)}
        >
          {isMoreExamplesOpen ? (
            <MdKeyboardArrowUp size={"20px"} />
          ) : (
            <MdKeyboardArrowDown size={"20px"} />
          )}
        </button>

        {isMoreExamplesOpen && (
          <div title="MORE EXAMPLES BODY" className={s.examplesContainer}>
            {tipo.examples.map((example) => (
              <div className={s.exampleCard}>
                <p className="text-left">{example.es}</p>
                <p className="text-right">{example.ar}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
