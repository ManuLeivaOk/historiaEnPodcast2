import React from "react";
import { FaSpotify } from "react-icons/fa";

const DondeEncontrarnos = () => {
  return (
    <div className="text-center p-6">
      <h3 className="text-3xl mb-6">¿Dónde podés encontrarnos?</h3>
      <div className="flex justify-content-center gap-6">
        <a
          href="https://instagram.com/tuemprendimiento"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-400 transition"
        >
          <i className="pi pi-instagram text-4xl"></i>
        </a>
        <a
          href="https://linkedin.com/in/tuemprendimiento"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-500 transition"
        >
          <i className="pi pi-linkedin text-4xl"></i>
        </a>
        <a
          href="https://spotify.com/tuemprendimiento"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-400 transition"
        >
          <FaSpotify className="text-4xl" />
        </a>
        <a
          href="https://youtube.com/tuemprendimiento"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-500 transition"
        >
          <i className="pi pi-youtube text-4xl"></i>
        </a>
      </div>
    </div>
  );
};

export default DondeEncontrarnos;
