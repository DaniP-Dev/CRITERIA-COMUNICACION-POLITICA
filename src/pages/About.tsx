// components/QuienesSomos.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[var(--color-fondo-alt)] min-h-screen p-6">
      {/* Botón Volver al inicio */}
      <a
        href="/"
        className="fixed top-6 left-6 z-50 px-4 py-2 bg-[var(--color-secundario)] text-[var(--color-blanco)] rounded-full font-semibold shadow-lg hover:bg-[var(--color-primario)] transition-colors duration-300 text-sm"
      >
        ← 
      </a>

      {/* Sección Quiénes Somos */}
      <motion.section
        className="w-full max-w-3xl bg-[var(--color-blanco)] rounded-lg shadow-lg p-8 mb-12 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-[var(--color-primario)] mb-4">
          Quiénes Somos
        </h1>
        <p className="text-[var(--color-texto-secundario)] text-lg leading-relaxed">
          En{" "}
          <span className="font-semibold">Criteria Comunicación Política</span>
          creemos en la importancia de entender la conversación digital
          alrededor de los procesos políticos. Nuestro equipo multidisciplinar
          combina experiencia en investigación, análisis de datos y tecnología
          de inteligencia artificial para ofrecer asesoría estratégica a
          campañas, organizaciones y entidades interesadas en optimizar su
          presencia y mensaje en redes sociales y medios digitales.
        </p>
        <p className="text-[var(--color-texto-secundario)] text-lg leading-relaxed mt-4">
          Desde nuestro lanzamiento, nos hemos enfocado en monitorizar
          tendencias, hashtags y opiniones clave que marcan el pulso de la
          opinión pública. Con un enfoque ético y riguroso, creamos informes
          periódicos que ayudan a nuestros clientes a tomar decisiones
          informadas y oportunas.
        </p>
      </motion.section>

      {/* Botón WhatsApp */}
      <a
        href="https://wa.me/3016328564?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Criteria%20Comunicaci%C3%B3n%20Pol%C3%ADtica"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-[var(--color-primario)] text-[var(--color-blanco)] rounded-full font-bold shadow-md hover:bg-[var(--color-secundario)] transition-colors duration-300 text-lg mx-auto block"
      >
        Saber más
      </a>
    </div>
  );
};

export default About;
