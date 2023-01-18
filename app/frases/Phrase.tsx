import { FrasesDataType } from "../../types";

type Props = {
  phrase: FrasesDataType["frases"][0];
};
export default function Phrase({ phrase }: Props) {
  // ---- HOOKS
  // ---- FUNCTIONS
  // ---- JSX
  return (
    <div className="w-full space-y-4 font-semibold tracking-wide text-slate-900">
      <div className="grid place-items-start">
        <p className="bg-white p-3 max-w-max rounded-3xl w-11/12">
          {phrase.es_frase}
        </p>
      </div>
      <div className="grid place-items-end">
        <p
          className="p-3 rounded-3xl max-w-max w-11/12"
          style={{ backgroundColor: "#66D62F" }}
        >
          {phrase.ar_frase}
        </p>
      </div>
    </div>
  );
}
