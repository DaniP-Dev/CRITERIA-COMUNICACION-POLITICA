"use client";
import "./portafolio.css";
import { useState } from "react";
import secciones from "./portafolio.json";
import { motion } from "framer-motion";

const Portafolio = () => {
  const [activo, setActivo] = useState(null);

  return (
    <>
      <div className="bg-[#040723] py-10 ">
        <div className="text-white text-center">
          <h1>Soluciones</h1>
          <h3 className="pb-5">
            Contamos con un grupo de profesionales multidisciplinar integrado
            por perfiles internacionales, con amplia experiencia en cada una de
            las siguientes áreas de actuación
          </h3>
        </div>
        <section className="flex flex-col md:flex-row gap-0 md:h-[50vh] w-screen from-green-100 via-blue-50 to-purple-100 transition-colors duration-700">
          {secciones.map((seccion, indice) => (
            <motion.div
              key={indice}
              onMouseEnter={() => setActivo(indice)}
              onMouseLeave={() => setActivo(null)}
              className="relative bg-white/80 text-black p-4 rounded-xl shadow-lg w-full md:w-1/3 container overflow-hidden border border-transparent hover:border-purple-400 transition-all duration-500"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px 0 rgba(80, 0, 200, 0.15)",
                borderColor: "#a78bfa",
                backgroundColor: "#f3e8ff",
              }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
            >
              {/* Fondo con blur */}
              <div
                className="absolute inset-0 bg-cover bg-center blur-sm opacity-80 transition-all duration-700"
                style={{
                  backgroundImage: `url(${seccion.imageUrl})`,
                  zIndex: 0,
                }}
                aria-hidden="true"
              />
              {/* Contenido encima */}
              <div className="relative z-10">
                <motion.div
                  className="font-bold flex-col text-left bg-white/70 rounded-lg titulo card shadow-md transition-all duration-500"
                  initial={false}
                  animate={
                    activo === indice
                      ? {
                          backgroundColor: "#a5b4fc",
                          color: "#fff",
                          scale: 1.05,
                        }
                      : {
                          backgroundColor: "#ffffffb3",
                          color: "#222",
                          scale: 1,
                        }
                  }
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  <div>{seccion.titulo}</div>
                  <img
                    src="/assets/plus.png"
                    alt="icono plus"
                    className="ocultar"
                  />
                </motion.div>
                <motion.div
                  className={`contenido flex-col text-center ${
                    activo === indice ? "activo" : ""
                  } rounded-lg shadow-md`}
                  initial={{
                    opacity: 0,
                    y: 40,
                    scale: 0.95,
                    backgroundColor: "#ffffffcc",
                  }}
                  animate={
                    activo === indice
                      ? {
                          opacity: 1,
                          y: 0,
                          scale: 1.03,
                          backgroundColor: "#f0fdf4",
                          boxShadow: "0 4px 24px 0 rgba(34,197,94,0.15)",
                        }
                      : {
                          opacity: 0,
                          y: 40,
                          scale: 0.95,
                          backgroundColor: "#ffffffcc",
                          boxShadow: "none",
                        }
                  }
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <div className="mt-2 font-semibold text-green-700 transition-colors duration-500">
                    {seccion.subTitulo}
                  </div>
                  <div className="mt-2">
                    <ul
                      style={{ listStyleType: "disc", fontSize: "1rem" }}
                      className="text-left pl-6 space-y-1 text-gray-700"
                    >
                      {seccion.contenido.split("\n").map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ x: -20, opacity: 0 }}
                          animate={
                            activo === indice
                              ? { x: 0, opacity: 1, color: "#4f46e5" }
                              : { x: -20, opacity: 0, color: "#64748b" }
                          }
                          transition={{
                            delay: 0.1 + idx * 0.07,
                            duration: 0.3,
                          }}
                          className="transition-colors duration-300"
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <motion.a
                    href={seccion.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp mt-4 inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300"
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
    </>
  );
};

export default Portafolio;
