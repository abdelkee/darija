import { PronombreDataObjType } from "../../types";
import data from "../../utils/pronombres_data";
import PronombreCard from "./PronombreCard";

function PronombresPage() {
  return (
    <main className="py-24 space-y-8">
      <section
        title="singular"
        className="flex flex-col items-center w-full p-4 space-y-4 bg-white shadow-md"
      >
        <p className="text-2xl font-semibold tracking-wider">Singular</p>
        <div className="grid w-full grid-cols-1 gap-y-4">
          <PronombreCard pronombre={{ es: "Yo", ar: "Ana" }} data={data.yo} />
          <PronombreCard
            pronombre={{ es: "Tu", ar: "Nta / Nti" }}
            data={data.tu}
          />
          <PronombreCard pronombre={{ es: "El", ar: "Huua" }} data={data.el} />
          <PronombreCard
            pronombre={{ es: "Ella", ar: "Hiyya" }}
            data={data.ella}
          />
        </div>
      </section>
      <section
        title="plural"
        className="flex flex-col items-center w-full p-4 space-y-4 bg-white shadow-md"
      >
        <p className="text-2xl font-semibold tracking-wider">Plural</p>
        <div className="grid w-full grid-cols-1 gap-y-4">
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
        </div>
      </section>
    </main>
  );
}

export default PronombresPage;
