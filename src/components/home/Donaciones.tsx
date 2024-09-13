/* eslint-disable @next/next/no-img-element */
import React from "react";

const Donaciones = () => {
  return (
    <div className="px-4 md:px-8 py-8 flex flex-column align-items-center">
      <h3 className="text-900 font-bold text-3xl md:text-5xl mb-3 text-center">
        Podés ayudar a que el proyecto siga adelante
      </h3>
      <p className="col-12 md:col-10 xl:col-6 text-lg text-justify line-height-3 md:line-height-4">
        Historia en Podcast es un proyecto de divulgación histórica totalmente
        gratuito que podés disfrutar desde cualquier dispositivo, en cualquier
        momento y desde cualquier lugar del mundo. Asimismo nuestro canal está
        abierto a recibir colaboraciones económicas que nos permiten seguir
        creciendo y mejorando los medios con los cuales generamos nuestro
        contenido. Si deseás colaborar con el canal, podés hacerlo a través de
        cualquiera de las siguientes opciones: Cafecito.app (solo desde
        Argentina) o Paypal (desde cualquier parte del mundo)
      </p>

      <div className="flex flex-row align-items-center">
        <a href="https://cafecito.app/historiaenpodcast">
          <img
            src="/cafecito.webp"
            alt="cafecito app"
            className="imageDonation border-round-xl"
          />
        </a>
        <a href="https://www.paypal.com/donate/?hosted_button_id=EW3GC3E2WJRB6">
          <img
            src="/paypal.webp"
            alt="paypal"
            className="imageDonationPaypal border-round-xl"
          />
        </a>
      </div>
    </div>
  );
};

export default Donaciones;
