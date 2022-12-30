import PronombreCard from "./PronombreCard";
import { tu_data, yo_data } from "../../utils/pronombres_tipos";

function PronombresPage() {
  return (
    <main className="py-24 space-y-8">
      <section
        title="singular"
        className="flex flex-col items-center w-full p-4 space-y-4 bg-white shadow-md"
      >
        <p className="text-2xl font-semibold tracking-wider">Singular</p>
        <div className="grid w-full grid-cols-1 gap-y-4">
          <PronombreCard
            pronombre={{ es: "Yo", ar: "Ana" }}
            tipos_data={yo_data}
          />
          <PronombreCard
            pronombre={{ es: "Tu", ar: "Nta / Nti" }}
            tipos_data={tu_data}
          />
          <PronombreCard
            pronombre={{ es: "El", ar: "Huua" }}
            tipos_data={yo_data}
          />
          <PronombreCard
            pronombre={{ es: "Ella", ar: "Hiyya" }}
            tipos_data={yo_data}
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
            tipos_data={yo_data}
          />
          <PronombreCard
            pronombre={{ es: "Ustedes", ar: "Ntuuma" }}
            tipos_data={yo_data}
          />
          <PronombreCard
            pronombre={{ es: "Ellos/as", ar: "Huuma" }}
            tipos_data={yo_data}
          />
        </div>
      </section>
    </main>
  );
}

export default PronombresPage;
