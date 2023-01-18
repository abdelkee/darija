"use client";

import Phrase from "./Phrase";
import frasesData from "../../utils/frases_data.json";
import { useAppContext } from "../../context/ContextProvider";

type Props = {};
export default function PhrasesList({}: Props) {
  // ---- HOOKS
  const { selectedFrasesCategory } = useAppContext().state;
  // ---- FUNCTIONS
  const selectedFrases = frasesData.data.filter(
    (frases) => frases.category === selectedFrasesCategory
  )[0]?.frases;
  // ---- JSX
  return (
    <section className="space-y-4 w-full px-6 sm:max-w-sm">
      {selectedFrases?.map((frase) => (
        <Phrase key={frase.id} phrase={frase} />
      ))}
    </section>
  );
}
