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
        <div className="hero-content">
          <motion.h1 style={{ y: parallaxY }}>
            Criteria Comunicación Política
          </motion.h1>
        </div>
      </section>

      {/* Segundo bloque con clip-path */}
      <section className="fondo-pico">
        {/* Ejemplo de divider/ línea decorativa */}
        <div className="divider"></div>

        <motion.h1 style={{ y: parallaxY }}>
          Sobre Criteria Comunicación Política Group
        </motion.h1>
        <motion.p style={{ y: parallaxY }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia eum
          labore corporis necessitatibus, facere ad eveniet officia beatae
          debitis, ducimus quam molestiae sit perspiciatis adipisci laboriosam
          et porro a quidem?
        </motion.p>
      </section>
    </>
  );
};

export default HeroSection;
