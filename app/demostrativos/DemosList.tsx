import DemoCard from "./DemoCard";
import demoData from "../../utils/demostrativos_data.json";
import { DemoPregDataType } from "../../types";

type Props = {};
export default function DemosList({}: Props) {
  // ---- HOOKS
  // ---- FUNCTIONS
  // ---- JSX
  return (
    <div className="grid gap-8 grid-col-1">
      {demoData.data?.map((demo: DemoPregDataType) => (
        <DemoCard data={demo} />
      ))}
    </div>
  );
}
