import BuscadorDeEpisodios from "@/components/home/BuscadorDeEpisodios";
import PresentacionSection from "@/components/home/PresentacionSection";
import VisorDeEpisodios from "@/components/home/VisorDeEpisodios";

export default function Home() {
  return (
    <main className="">
      <PresentacionSection />
      <BuscadorDeEpisodios />
      <VisorDeEpisodios />
    </main>
  );
}
