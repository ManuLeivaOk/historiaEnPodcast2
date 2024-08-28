import React from "react";
import Libros from "../../components/tienda/Libros";
import Step from "../../components/tienda/Steps";

const Page = () => {
  return (
    <div>
      <h2 className="text-900 font-bold text-5xl mb-3 text-center">
        ¡Bienvenidos a nuestra tienda!
      </h2>
      <p className="text-900 text-xl mb-3 text-center">
        Comprá en tres simples pasos
      </p>
      <Step />
      <Libros />
    </div>
  );
};

export default Page;
