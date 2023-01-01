import { alimentos_data } from "../../utils/alimentos_data";
import FoodCategory from "./FoodCategory";
import FoodDataList from "./FoodDataList";
import Header from "./Header";

function AlimentoPage() {
  return (
    <>
      <Header />
      <FoodDataList />
    </>
  );
}

export default AlimentoPage;
