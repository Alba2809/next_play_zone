import { roboto } from "../lib/fonts";
import { auth } from "@/auth";
import MainNav from "./components/MainNav";
import GamesSection from "./components/GamesSection";
import RankingSection from "./components/RankingSection";
import MainSection from "./components/MainSection";
import HowToPlaySection from "./components/HowToPlaySection";
import AboutSection from "./components/AboutSection";
import BackgroundLayout from "./components/BackgroundLayout";

export default async function Home() {
  const session = await auth();

  return (
    <BackgroundLayout>
      <div className={`h-screen py-12 px-16 ${roboto.className}`}>
        <MainNav />
        <MainSection />
        <GamesSection />
        <RankingSection />
        <HowToPlaySection />
        <AboutSection />
      </div>
    </BackgroundLayout>
  );
}
