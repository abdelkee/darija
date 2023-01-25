import PrepsicionCard from "./PreposicionCard";
import preposicionesData from "../../utils/preposiciones_data.json";
import { DemoPregDataType } from "../../types";

type Props = {};
export default function PreposicionesList({}: Props) {
  // ---- HOOKS
  // ---- FUNCTIONS
  // ---- JSX
  return (
    <div className="grid gap-8 grid-col-1">
      {preposicionesData.data?.map((preposicion: DemoPregDataType) => (
        <PrepsicionCard data={preposicion} />
      ))}
    </div>
  );
}
