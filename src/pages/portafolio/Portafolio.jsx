// components/Portafolio.jsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import secciones from "./portafolio.json";
import "./portafolio.css";

const Portafolio = () => {
  const [activo, setActivo] = useState(null);

  return (
    <div className="bg-[var(--color-primario)] py-10">
      {/* Título general */}
      <div className="text-[var(--color-blanco)] text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold">Soluciones</h1>
        <h3 className="pt-4 text-base md:text-lg max-w-2xl mx-auto">
          Contamos con un grupo de profesionales multidisciplinar integrado por
          perfiles internacionales, con amplia experiencia en cada una de las
          siguientes áreas de actuación
        </h3>
      </div>

      {/* Sección de tarjetas */}
      <section className="portafolio__section flex flex-col md:flex-row gap-4 md:gap-0 w-screen transition-colors duration-700">
        {secciones.map((seccion, indice) => (
          <motion.div
            key={indice}
            onMouseEnter={() => setActivo(indice)}
            onMouseLeave={() => setActivo(null)}
            className="
              relative
              w-full md:w-1/3
              p-4
              overflow-hidden
              border border-transparent
              rounded-xl
              shadow-lg
              container
              portafolio__card
              transition-all duration-500
            "
            style={{
              backgroundColor: "rgba(255,255,255,0.8)", // bg-white/80
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px 0 rgba(80, 0, 200, 0.15)",
              borderColor: "var(--color-secundario)",
              backgroundColor: "var(--color-fondo-alt)",
            }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
          >
            {/* Fondo con blur (imagen de la sección) */}
            <div
              className="absolute inset-0 bg-cover bg-center portafolio__blur-bg opacity-80"
              style={{
                backgroundImage: `url(${seccion.imageUrl})`,
                zIndex: 0,
              }}
              aria-hidden="true"
            />

            {/* Contenido encima */}
            <div className="relative z-10 flex flex-col items-start">
              {/* Título de la tarjeta */}
              <motion.div
                className="
                  titulo
                  flex
                  items-center
                  justify-between
                  w-full
                  p-3
                  rounded-lg
                  bg-[rgba(255,255,255,0.7)]
                  font-bold
                  text-[var(--color-primario)]
                  shadow-md
                  transition-all duration-500
                "
                initial={false}
                animate={
                  activo === indice
                    ? {
                        backgroundColor: "var(--color-secundario)",
                        color: "var(--color-blanco)",
                        scale: 1.05,
                      }
                    : {
                        backgroundColor: "rgba(255,255,255,0.7)",
                        color: "var(--color-primario)",
                        scale: 1,
                      }
                }
                transition={{ duration: 0.4, type: "spring" }}
              >
                <span>{seccion.titulo}</span>
                {/* Ícono “+” (aparece al hacer hover en la tarjeta) */}
                <img
                  src="/assets/plus.png"
                  alt="icono plus"
                  className="ocultar w-5 h-5"
                />
              </motion.div>

              {/* Contenido expandible / subtítulo + lista */}
              <motion.div
                className={`
                  contenido
                  mt-4
                  w-full
                  p-4
                  rounded-lg
                  shadow-md
                  bg-[rgba(255,255,255,0.8)]
                  ${activo === indice ? "" : "hidden"}
                `}
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.95,
                }}
                animate={
                  activo === indice
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1.03,
                        backgroundColor: "var(--color-fondo-alt)",
                        boxShadow: "0 4px 24px 0 rgba(34,197,94,0.15)",
                      }
                    : {
                        opacity: 0,
                        y: 40,
                        scale: 0.95,
                        backgroundColor: "rgba(255,255,255,0.8)",
                        boxShadow: "none",
                      }
                }
                transition={{ duration: 0.5, type: "spring" }}
              >
                {/* Subtítulo */}
                <div className="font-semibold text-[var(--color-primario)]">
                  {seccion.subTitulo}
                </div>

                {/* Lista de contenido */}
                <ul className="mt-2 list-disc pl-6">
                  {seccion.contenido.split("\n").map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      animate={
                        activo === indice
                          ? {
                              x: 0,
                              opacity: 1,
                              color: "var(--color-active-text)",
                            }
                          : {
                              x: -20,
                              opacity: 0,
                              color: "var(--color-texto-secundario)",
                            }
                      }
                      transition={{
                        delay: 0.1 + idx * 0.07,
                        duration: 0.3,
                      }}
                      className="mb-1"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Botón WhatsApp */}
                <motion.a
                  href={seccion.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-4
                    inline-block
                    px-4 py-2
                    rounded-full
                    bg-gradient-to-r from-green-400 to-blue-500
                    text-[var(--color-blanco)]
                    font-bold
                    shadow-lg
                    hover:from-green-500 hover:to-blue-600
                    transition-all duration-300
                  "
                  whileHover={{
                    scale: 1.08,
                    backgroundColor: "#22d3ee",
                    color: "#fff",
                    boxShadow: "0 2px 16px 0 rgba(34,197,94,0.25)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Más información
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Portafolio;
