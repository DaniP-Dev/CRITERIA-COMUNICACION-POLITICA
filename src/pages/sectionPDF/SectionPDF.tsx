// components/SectionPDF.jsx
import React from "react";
import LibroImagenes from "./LibroImagenes";
import "./sectionpdf.css"; // Opcional: solo si necesitas reglas extra

const SectionPDF = () => {
  return (
    <main className="flex flex-col items-center justify-start bg-[var(--color-fondo-alt)] min-h-screen py-16">
      {/* Título principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-primario)] mb-8">
        Boletín Digital
      </h1>
      <h3 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-primario)]">
        Descarga nuestro informe basado en inteligencia artificial que analiza
        la conversación digital alrededor de la consulta popular. Conoce las
        tendencias clave, hashtags más usados y análisis de sentimiento en redes
        sociales.
      </h3>

      {/* Contenedor del libro/visor y botón */}
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl bg-[var(--color-primario)] rounded-xl shadow-lg px-6 py-8 border-4 border-[var(--color-fondo-alt)] text-center">
        {/* Aquí, LibroImagenes puede ser un componente que renderice tu PDF (p.ej. una preview) */}
        <LibroImagenes />

        {/* Botón de descarga */}
        <a
          className="mt-8 inline-block px-6 py-3 bg-[var(--color-secundario)] text-[var(--color-blanco)] rounded-lg font-bold shadow-md hover:bg-opacity-90 transition border-2 border-[var(--color-fondo-alt)] text-lg tracking-wide"
          href="/boletin.pdf"
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
