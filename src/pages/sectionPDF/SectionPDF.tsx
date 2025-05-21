import React from "react";
import LibroImagenes from "./LibroImagenes";

const SectionPDF = () => {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gray-50 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Mi Libro PDF
      </h1>
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl">
        <LibroImagenes />
      </div>
      <button>Descargar</button>
    </main>
  );
};

export default SectionPDF;
