/* eslint-disable @next/next/no-img-element */
import React from "react";

const Amazon = () => {
  return (
    <div className="px-4 md:px-8 py-8 bgGray">
      <p className="text-900 font-bold text-5xl mb-3 text-center">
        Para compras desde el exterior de Argentina, <br /> dirigirse a la
        página oficial de Amazon:
      </p>
      <a
        href="https://www.amazon.com/-/es/Lucas-Sebasti%C3%A1n-Botta-Gaido-ebook/dp/B089P42ZYD#:~:text=%E2%80%9CHistoria%20al%20alcance%20de%20Todos,streaming%20como%20Spotify%20y%20YouTube"
        target="_blank"
        className="flex justify-content-center"
      >
        <img src="/amazon.webp" alt="amazon" className="col-2" />
      </a>
    </div>
  );
};

export default Amazon;
