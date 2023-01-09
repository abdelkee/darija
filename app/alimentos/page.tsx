import { alimentos_data } from "../../utils/alimentos_data";
import CategoryList from "../shared/CategoryList";
import ItemsList from "../shared/ItemsList";

export default function AlimentosPage() {
  return (
    <>
      <CategoryList sectionData={alimentos_data} />
      <ItemsList />
    </>
  );
}
