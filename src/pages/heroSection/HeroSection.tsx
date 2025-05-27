import React from "react";
import "./hero.css";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  // Parallax solo para los textos de este archivo
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section className="relative w-full z-20 h-auto overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center  " />

      {/* Aquí va tu contenido encima del fondo */}
      <div className="relative z-10 text-white">
        {/* div 1 */}
        <div className="w-screen h-[100vh] flex items-center justify-center relative left-1/2 right-1/2 -mx-[50vw]">
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 clip-video"
            src="/video/video-hero-fondo.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <motion.div
            style={{ y: parallaxY }}
            className="relative z-10 flex flex-col items-center justify-center w-full h-full"
          >
            <h1>Criteria Comunicación Política</h1>
          </motion.div>
        </div>
        {/* div 2 */}
        <div className="text-center flex items-center justify-center flex-col fondo-pico pb-20">
          <div className="border border-red-500 w-0 h-30 parallaxY"/>
          <motion.h1 style={{ y: parallaxY }}>
            Sobre Criteria Comunicación Política Group
          </motion.h1>
          <motion.p style={{ y: parallaxY }} className="w-[80vw]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            eum labore corporis necessitatibus, facere ad eveniet officia beatae
            debitis, ducimus quam molestiae sit perspiciatis adipisci laboriosam
            et porro a quidem?
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
