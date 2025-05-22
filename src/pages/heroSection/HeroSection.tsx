"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const mobileTextClass =
  "block md:hidden text-white text-center text-2xl font-extrabold px-4";
const desktopTextClass =
  "hidden md:block text-white text-center text-5xl font-extrabold tracking-tight";
const ctaClass =
  "mt-8 inline-block bg-white text-red-500 font-bold rounded-full px-8 py-3 shadow-xl hover:bg-red-100 transition text-lg";
const orgNameClass =
  "text-white text-center text-4xl md:text-2xl font-black mb-8 tracking-widest drop-shadow-lg";

// Animaciones y transiciones centralizadas
const orgNameMotion = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const mobileMotion = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const ctaMotion = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { delay: 0.3, duration: 0.5, ease: "easeOut" },
};

const desktopMotion = {
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" },
};

const desktopCtaMotion = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { delay: 0.4, duration: 0.5, ease: "easeOut" },
};

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative min-h-screen">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/video/videoBG.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Capa de gradiente encima del video */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-600 to-red-400 opacity-80 z-10" />
      <section className="relative w-full h-[10vh] z-20" />
      {/* no modificar*/} 
      <section className="relative w-full h-[90vh] z-20">
        <div
          className="flex flex-col items-center justify-center h-full w-full"
          ref={ref}
        >
          {/* Nombre de la organización */}
          <motion.div
            className={orgNameClass}
            initial={orgNameMotion.initial}
            animate={isInView ? orgNameMotion.animate : {}}
            transition={orgNameMotion.transition}
          >
            CRITERIA GROUP
          </motion.div>
          {/* Mobile */}
          <motion.div
            className={mobileTextClass}
            initial={mobileMotion.initial}
            animate={isInView ? mobileMotion.animate : {}}
            transition={mobileMotion.transition}
          >
            <span>
              <span className="block">Haz que tu voz</span>
              <span className="block text-yellow-300">
                influya y trascienda
              </span>
            </span>
            <motion.a
              href="#contacto"
              className={ctaClass}
              initial={ctaMotion.initial}
              animate={isInView ? ctaMotion.animate : {}}
              transition={ctaMotion.transition}
            >
              ¡Quiero destacar!
            </motion.a>
          </motion.div>
          {/* Desktop */}
          <motion.div
            className={desktopTextClass}
            initial={desktopMotion.initial}
            animate={isInView ? desktopMotion.animate : {}}
            transition={desktopMotion.transition}
          >
            <span>
              <span className="block">Transformamos datos en</span>
              <span className="block text-yellow-300">
                poder político y narrativo
              </span>
            </span>
            <motion.div
              initial={desktopCtaMotion.initial}
              animate={isInView ? desktopCtaMotion.animate : {}}
              transition={desktopCtaMotion.transition}
            >
              <a href="#contacto" className={ctaClass}>
                Agenda tu consultoría estratégica
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
