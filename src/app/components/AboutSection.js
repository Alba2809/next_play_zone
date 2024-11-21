import SectionContainer from "./SectionContainer"
import TitleSection from "./TitleSection"

function AboutSection() {
  return (
    <SectionContainer id="about" style="mb-10">
      <TitleSection title="Acerca de..." style="text-3xl font-semibold mb-14" />
      <h2 className="text-2xl font-bold text-center">Muy pronto!</h2>
    </SectionContainer>
  )
}

export default AboutSection