"use client";
import NaviBar from "@/components/naviBar/NaviBar";
import HeroSection from "@/pages/heroSection/HeroSection";
import Portfolio from "@/pages/Portfolio";
import Contacto from "@/pages/Contacto";
import SectionPDF from "@/pages/sectionPDF/SectionPDF";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NaviBar />
      <section id="heroSection">
        <HeroSection />
      </section>
      <section id="sectionPDF">
        <SectionPDF />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contacto">
        <Contacto />
      </section>
      <Footer />
    </>
  );
}
