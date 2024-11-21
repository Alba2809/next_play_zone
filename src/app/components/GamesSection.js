import GamesItem from "./GamesItem";
import SectionContainer from "./SectionContainer";
import TitleSection from "./TitleSection";

function GamesSection() {
  return (
    <SectionContainer id="games" style="mb-10 overflow-x-hidden">
      <TitleSection
        title="¡Explora y Desafía tu Habilidad en estos Juegos!"
        style="text-3xl font-semibold mb-14"
      />
      <ul className="flex flex-row gap-10 items-center justify-start">
        <GamesItem />
        <GamesItem />
      </ul>
    </SectionContainer>
  );
}

export default GamesSection;
