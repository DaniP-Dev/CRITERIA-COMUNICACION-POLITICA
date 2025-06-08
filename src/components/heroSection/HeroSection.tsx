import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import "./hero.css";

const HeroSection = () => {
  const t = useTranslations("HeroSection");

  // Animación para el bloque superior (video)
  const refVideo = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYVideo } = useScroll({
    target: refVideo,
    offset: ["start start", "end start"],
  });
  const opacityVideo = useTransform(scrollYVideo, [0, 0.5], [1, 0]);
  const yVideo = useTransform(scrollYVideo, [0, 0.5], [0, 100]);

  // Animación para el bloque inferior (hero-img-bg)
  const refImg = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYImg } = useScroll({
    target: refImg,
    offset: ["start start", "end start"],
  });
  const opacityImg = useTransform(scrollYImg, [0, 0.5], [1, 0]);
  const yImg = useTransform(scrollYImg, [0, 0.5], [0, 100]);

  return (
    <section>
      {/* Hero superior: video de fondo real controlado por CSS */}
      <div className="hero-video-bg" ref={refVideo}>
        <video
          src="/video/video-hero-fondo.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          tabIndex={-1}
          preload="none"
        />
        <motion.div
          className="hero-video-content"
          style={{ opacity: opacityVideo, y: yVideo }}
        >
          <img
            src="/imgs/banner.png"
            alt="Logo Criteria"
            loading="lazy"
            className="hidden lg:block lg:w-2/3 mx-auto"
          />
          <h1 className="text-white text-4xl font-bold text-center drop-shadow-lg">
            {t("title")}
          </h1>
        </motion.div>
      </div>
      {/* Hero inferior: imagen de fondo con overlay desde CSS */}
      <motion.div
        className="hero-img-bg py-6"
        ref={refImg}
        style={{ opacity: opacityImg, y: yImg }}
      >
        <div className="flex flex-col items-center">
          <img
            src="/imgs/logo.png"
            alt="Logo Criteria"
            className="w-20 h-auto"
            loading="lazy"
          />
          <p className="mt-2 text-center text-white text-lg drop-shadow">
            {t("aboutText")}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
