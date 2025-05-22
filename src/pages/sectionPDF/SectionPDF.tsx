import React from "react";
import LibroImagenes from "./LibroImagenes";

const SectionPDF = () => {
  return (
    <main className="flex flex-col items-center justify-start bg-gray-50 pt-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Boletín de Comunicación Digital en Colombia
      </h1>
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl">
        <LibroImagenes />
      </div>
      <a
        className="mt-4 mb-0 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        href="https://drive.google.com/uc?export=download&id=12ZaFzBxoGZj7oR-ndNT6lSo5UtG3Rb8L"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        Descargar
      </a>
    </main>
  );
};

export default SectionPDF;
