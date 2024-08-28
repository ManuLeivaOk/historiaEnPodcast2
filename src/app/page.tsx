import BuscadorDeEpisodios from "@/components/home/BuscadorDeEpisodios";
import PresentacionSection from "@/components/home/PresentacionSection";
import VisorDeEpisodios from "@/components/home/VisorDeEpisodios";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <PresentacionSection />
      <BuscadorDeEpisodios />
      <VisorDeEpisodios />
    </main>
  );
}
