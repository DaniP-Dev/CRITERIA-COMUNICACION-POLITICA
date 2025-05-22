import React from "react";
import LibroImagenes from "./LibroImagenes";

const SectionPDF = () => {
  return (
    <main className="flex flex-col items-center justify-start bg-gray-50 pt-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Mi Libro PDF
      </h1>
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl">
        <LibroImagenes />
      </div>
      <button className="mt-4 mb-0">Descargar</button>
    </main>
  );
};

export default SectionPDF;
