// components/HeroSection.jsx
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import "./hero.css";

const HeroSection = () => {
  const t = useTranslations("HeroSection");
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
            <img src="/" alt="img" />
            {t("title")}
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
          {t("aboutTitle")}
        </motion.h1>
        <motion.p style={{ y: parallaxY }}>
          {t("aboutText")}
        </motion.p>
      </section>
    </>
  );
};

export default HeroSection;
