import BuscadorDeEpisodios from "@/components/home/BuscadorDeEpisodios";
import PresentacionSection from "@/components/home/PresentacionSection";
import VisorDeEpisodios from "@/components/home/VisorDeEpisodios";
import Hero from "../components/home/Hero";
import Donaciones from "../components/home/Donaciones";
import ContactForm from "../components/home/ContactForm";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <PresentacionSection />
      <BuscadorDeEpisodios />
      <VisorDeEpisodios />
      <Donaciones />
      <div className="bgGray py-8 px-2 md:px-8 flex flex-row justify-content-center">
        <ContactForm />
      </div>
    </main>
  );
}
