import CategoryList from "../shared/CategoryList";
import { animales_data } from "../../utils/animales_data";
import ItemsList from "../shared/ItemsList";

export default function AnimalesPage() {
  return (
    <>
      <CategoryList sectionData={animales_data} />
      <ItemsList />
    </>
  );
}
