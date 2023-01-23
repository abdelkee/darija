import PreguntaCard from "./PreguntaCard";
import preguntasData from "../../utils/preguntas_data.json";
import { DemoPregDataType } from "../../types";

type Props = {};
export default function PreguntasList({}: Props) {
  // ---- HOOKS
  // ---- FUNCTIONS
  // ---- JSX
  return (
    <div className="grid gap-8 grid-col-1">
      {preguntasData.data?.map((pregunta: DemoPregDataType) => (
        <PreguntaCard data={pregunta} />
      ))}
    </div>
  );
}
