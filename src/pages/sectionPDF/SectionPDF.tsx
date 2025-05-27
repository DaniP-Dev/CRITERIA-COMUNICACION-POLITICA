import React from "react";
import LibroImagenes from "./LibroImagenes";

const SectionPDF = () => {
  return (
    <main className="flex flex-col items-center justify-start bg-[#EDE6DC] min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
        Boletín de Comunicación Digital en Colombia
      </h1>
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl bg-[#040723] rounded-xl shadow-lg px-6 border-4 text-center">
        <LibroImagenes />
        <a
          className="mt-6 mb-0 inline-block px-6 py-3 bg-[#D63122] text-white rounded-lg font-bold shadow-md hover:bg-[#b91c1c] transition border-2 border-[#EDE6DC] text-lg tracking-wide"
          href="https://drive.google.com/uc?export=download&id=12ZaFzBxoGZj7oR-ndNT6lSo5UtG3Rb8L"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Descargar
        </a>
      </div>
    </main>
  );
};

export default SectionPDF;
