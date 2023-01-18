import PhraseCategoriesList from "./PhraseCategoriesList";
import PhrasesList from "./PhrasesList";

function FrasesPage() {
  // ---- HOOKS
  return (
    <main
      className="py-24 sm:py-32 w-full h-screen sm:flex"
      style={{ backgroundColor: "#5479AA" }}
    >
      <PhraseCategoriesList />
      <PhrasesList />
    </main>
  );
}

export default FrasesPage;
