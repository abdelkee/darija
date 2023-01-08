import ctl from "@netlify/classnames-template-literals";
import data from "../../utils/pronombres/pronombres_data";
import PronombreCard from "./PronombreCard";
import TestQuiz from "./TestQuiz";

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
            <PronombreCard pronombre={{ es: "Yo", ar: "Ana" }} data={data.yo} />
            <PronombreCard
              pronombre={{ es: "Tu", ar: "Nta / Nti" }}
              data={data.tu}
            />
            <PronombreCard
              pronombre={{ es: "El", ar: "Huua" }}
              data={data.el}
            />
            <PronombreCard
              pronombre={{ es: "Ella", ar: "Hiyya" }}
              data={data.ella}
            />
            <PronombreCard
              pronombre={{ es: "Nosotros/as", ar: "7na" }}
              data={data.nosotros}
            />
            <PronombreCard
              pronombre={{ es: "Ustedes", ar: "Ntuuma" }}
              data={data.ustedes}
            />
            <PronombreCard
              pronombre={{ es: "Ellos/as", ar: "Huuma" }}
              data={data.ellos}
            />
          </section>
          <section title="TEST" className={s.testContainer}>
            <TestQuiz />
          </section>
        </div>
      </main>
    </>
  );
}
