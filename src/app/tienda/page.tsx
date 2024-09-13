/* eslint-disable @next/next/no-img-element */
import React from "react";
import Libros from "../../components/tienda/Libros";
import Step from "../../components/tienda/Steps";
import Amazon from "../../components/tienda/Amazon";
import Donaciones from "../../components/home/Donaciones";

const Page = () => {
  return (
    <div>
      <h2 className="text-900 font-bold text-5xl mb-3 text-center">
        ¡Bienvenidos a nuestra tienda!
      </h2>
      <p className="text-900 text-xl mb-3 text-center font-bold">
        Comprá en tres simples pasos
      </p>
      <Step />
      <Libros />
      <Amazon />
      <Donaciones />
    </div>
  );
};

export default Page;
