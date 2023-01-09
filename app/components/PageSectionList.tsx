import { data } from "../../utils/sections";
import { PageSectionType } from "../../types";
import PageSection from "./PageSection";

export default function PageSectionList() {
  return (
    <>
      <section className="grid grid-cols-2 gap-16">
        {data.map((categ: PageSectionType) => (
          <PageSection key={categ.title} category={categ} />
        ))}
      </section>
    </>
  );
}
