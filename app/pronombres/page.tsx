import ctl from "@netlify/classnames-template-literals";
import data from "../../utils/pronombres/pronombres_data";
import PronombreCard from "./PronombreCard";
import TestQuiz from "./TestQuiz";

const cardsData = [
  {
    title: { es: "Yo", ar: "Ana" },
    data: data.yo,
  },
  {
    title: { es: "Tu", ar: "Nta / Nti" },
    data: data.tu,
  },
  {
    title: { es: "El", ar: "Huua" },
    data: data.el,
  },
  {
    title: { es: "Ella", ar: "Hiyya" },
    data: data.ella,
  },
  {
    title: { es: "Nosotros/as", ar: "7na" },
    data: data.nosotros,
  },
  {
    title: { es: "Ustedes", ar: "Ntuuma" },
    data: data.ustedes,
  },
  {
    title: { es: "Ellos/as", ar: "Huuma" },
    data: data.ellos,
  },
];

export default function PronombresPage() {
  // ---- STYLES
  const s = {
    container: ctl(`
      flex 
      flex-col 
      items-center 
      w-full 
      p-4 
      space-y-4 
    `),
    title: ctl(`
      text-xl 
      font-semibold 
      tracking-wider
    `),
    cardsContainer: ctl(`
      grid 
      w-full 
      grid-cols-1 
      gap-y-4
    `),
    testContainer: ctl(`
      w-full 
    `),
  };

  // ---- JSX
  return (
    <>
      <main className="py-24 space-y-8">
        <div className={s.container}>
          <section title="RULES" className={s.cardsContainer}>
            {cardsData.map((each, index) => (
              <PronombreCard
                key={each.title.es}
                pronombre={each.title}
                data={each.data}
                testIndex={index}
              />
            ))}
          </section>
          <section title="TEST" className={s.testContainer}></section>
        </div>
      </main>
    </>
  );
}
