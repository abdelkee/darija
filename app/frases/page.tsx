import PhraseCategoriesList from "./PhraseCategoriesList";
import PhrasesList from "./PhrasesList";

function FrasesPage() {
  // ---- HOOKS
  return (
    <main
      className="py-24 sm:py-32 w-full h-full sm:flex"
      style={{ backgroundColor: "#7193C1" }}
    >
      <PhraseCategoriesList />
      <PhrasesList />
    </main>
  );
}

export default FrasesPage;
