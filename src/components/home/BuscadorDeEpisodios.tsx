"use client";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { data } from "../../utils/episodiosBuscador";

interface Episode {
  title: string;
  id: number;
  link: string;
  palabrasClaves: string;
}

const BuscadorDeEpisodios = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Episode[]>([]);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const handleSearch = () => {
    setHasSearched(true);
    if (searchTerm.trim() === "") {
      setFilteredData([]);
      return;
    }

    const results = data.filter((item) => {
      const tituloCoincide = item.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const palabrasClavesCoinciden = item.palabrasClaves
        .toLowerCase()
        .split(", ")
        .some((palabraClave) =>
          palabraClave.includes(searchTerm.toLowerCase())
        );
      return tituloCoincide || palabrasClavesCoinciden;
    });

    setFilteredData(results);
  };

  return (
    <div className="my-8">
      <div className="surface-0 text-700 text-center">
        <div className="text-900 font-bold text-5xl mb-3">
          Buscador de episodios
        </div>
        <div className="text-700 text-2xl mb-5">
          Ahora podés buscar tus episodios muy fácilmente aquí:
        </div>
        <div>
          <InputText
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
            placeholder="Buscá por nombre o palabra clave"
            className="width-input"
          />
        </div>
        <Button label="Buscar" className="mt-3" onClick={handleSearch} />
      </div>
      <div className="flex flex-wrap justify-content-center mt-4 md:w-6 mx-auto">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 m-2 p-card shadow-3 no-underline text-sm"
            >
              <h3 className="p-text-lg p-text-bold">{item.title}</h3>
            </a>
          ))
        ) : hasSearched ? (
          <p className="p-text-md">No se encontraron resultados.</p>
        ) : null}
      </div>
    </div>
  );
};

export default BuscadorDeEpisodios;
