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
  const parallaxOpacity = useTransform(parallaxY, [0, 100], [1, 0.5]);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

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
        <div className="hero-content flex justify-center items-center">
          <motion.h1 style={{ y: parallaxY }} className="drop-shadow-2xl flex flex-col items-center">
            <img
              src="/imgs/banner.png"
              alt="img"
              className="w-[50vw] h-auto inline-block align-middle mx-auto"
            />
            {t("title")}
          </motion.h1>
        </div>
      </section>

      {/* Segundo bloque con clip-path */}
      {mounted && (
        <section className="fondo-pico text-center py-12 flex flex-col items-center gap-6">
          {/* Divider animado infinitamente */}
          <motion.div
            className="divider mb-4"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
          />

          <motion.img
            src="/imgs/logo.png"
            alt="Logo Criteria"
            className="w-24 md:w-32 h-auto mx-auto mb-4"
            style={{ y: parallaxY, opacity: parallaxOpacity }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />

          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl"
            style={{ y: parallaxY, opacity: parallaxOpacity }}
          >
            {t("aboutText")}
          </motion.p>
        </section>
      )}
    </>
  );
};

export default HeroSection;
