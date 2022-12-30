import Category from "./Category";
import { data } from "../../utils/sections";
import { CategoryType } from "../../types";

function CategoryList() {
  return (
    <>
      <section className="grid grid-cols-2 gap-16">
        {data.map((categ: CategoryType) => (
          <Category key={categ.title} category={categ} />
        ))}
      </section>
    </>
  );
}

export default CategoryList;
