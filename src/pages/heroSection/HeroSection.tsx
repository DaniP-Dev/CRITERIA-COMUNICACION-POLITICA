// components/HeroSection.jsx
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./hero.css";

const HeroSection = () => {
  // Parallax solo para los textos de este archivo
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <>
      {/* Hero con video de fondo */}
      <section className="hero-section">
        <video
          className="hero-bg-video"
          src="/video/video-hero-fondo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Contenido centrado sobre el video */}
        <div className="hero-content ">
          <motion.h1 style={{ y: parallaxY }} className="drop-shadow-2xl">
            Criteria Comunicación Política
          </motion.h1>
        </div>
      </section>

      {/* Segundo bloque con clip-path */}
      <section className="fondo-pico text-center">
        {/* Divider animado infinitamente */}
        <motion.div
          className="divider"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />

        <motion.h1 style={{ y: parallaxY }}>
          Sobre Criteria Comunicación Política Group
        </motion.h1>
        <motion.p style={{ y: parallaxY }}>
          Criteria Comunicación Política nació con la misión de brindar análisis
          profundo de la conversación política en plataformas digitales. Nuestro
          equipo combina experiencia en investigación, tecnología e inteligencia
          de datos para ofrecer recomendaciones estratégicas a campañas y
          organizaciones interesadas en entender la opinión pública.
        </motion.p>
      </section>
    </>
  );
};

export default HeroSection;
