"use client";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

const BuscadorDeEpisodios = () => {
  const [value, setValue] = useState("");
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
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Buscá por nombre o palabra clave"
            className="width-input"
          />
        </div>
        <Button label="Buscar" className="mt-3" />
      </div>
    </div>
  );
};

export default BuscadorDeEpisodios;
