"use client";
import { useTranslations } from "next-intl";
import NaviBar from "@/components/naviBar/NaviBar";
import HeroSection from "@/pages/heroSection/HeroSection";
import Contacto from "@/pages/Contacto";
import SectionPDF from "@/pages/sectionPDF/SectionPDF";
import Footer from "@/components/Footer";
import Portafolio from "@/pages/portafolio/Portafolio";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="overflow-hidden">
        <NaviBar />
        <section id="heroSection">
          <HeroSection />
        </section>
        <section id="sectionPDF">
          <SectionPDF />
        </section>
        <section id="portfolio">
          <Portafolio />
        </section>
        <section id="contacto">
          <Contacto />
        </section>
        <Footer />
      </div>
    </>
  );
}
