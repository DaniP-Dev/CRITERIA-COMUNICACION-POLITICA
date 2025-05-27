"use client";
import "./portafolio.css";
import { useState } from "react";
import secciones from "./portafolio.json";

const Portafolio = () => {
  const [activo, setActivo] = useState(null);

  return (
    <section className="flex flex-col md:flex-row gap-0 md:h-[50vh] bg-[#040723]">
      {secciones.map((seccion, indice) => (
        <div
          key={indice}
          onMouseEnter={() => setActivo(indice)}
          onMouseLeave={() => setActivo(null)}
          className={`bg-[#040723] text-white p-4 rounded shadow w-full md:w-1/3 container card transition-all duration-200 ease-in-out ${
            activo === indice ? "hovered" : ""
          }`}
          style={{ transitionProperty: "background, box-shadow, width" }}
        >
          <div className="font-bold text-center flex flex-col items-center md:flex-col ">
            <h4 className="ocultar">{seccion.titulo}</h4>
            <img src="/assets/plus.png" alt="icono plus" className="ocultar" />
          </div>
          <div
            className={`contenido  px-2 py-4 rounded-lg transition-all duration-150 ease-in-out ${
              activo === indice
                ? "activo bg-[#b12128] h-full text-center text-[#040723]"
                : "bg-[#040723] text-white"
            }`}
            style={{
              transitionProperty: "background, color, max-height, opacity",
            }}
          >
            <h3>{seccion.titulo}</h3>
            <h4 className="mt-2 text-lg font-semibold">{seccion.subTitulo}</h4>
            <h5 className="mt-2 text-base">{seccion.contenido}</h5>
            <a
              href={seccion.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-2"
            >
              Mas informacion
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portafolio;
