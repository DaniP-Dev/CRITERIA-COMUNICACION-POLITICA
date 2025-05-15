"use client";
import NaviBar from "@/components/naviBar/NaviBar";
import HeroSection from "@/pages/heroSection/HeroSection";
import Portfolio from "@/pages/Portfolio";
import Contacto from "@/pages/Contacto";

export default function Home() {
  return (
    <>
      <NaviBar />
      <section id="heroSection">
        <HeroSection />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contacto">
        <Contacto />
      </section>
    </>
  );
}
