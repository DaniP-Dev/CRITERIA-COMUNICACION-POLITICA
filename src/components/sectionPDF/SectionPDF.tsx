// components/SectionPDF.jsx
import React from "react";
import { useTranslations } from "next-intl";
import Book from "./Book";
import { section } from "framer-motion/client";

const SectionPDF = () => {
  const t = useTranslations("SectionPDF");

  const DownloadButton = (
    <a
      href="/pdf/pruebaPDF.pdf"
      download
      className="btn btn-primary w-full lg:w-auto rounded-md shadow-md text-base font-semibold transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
    >
      Descargar PDF
    </a>
  );

  const BookRender = <Book />;

  return (
    <section className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-[#040721] to-[#265c91] py-8 sm:py-12 overflow-x-hidden w-full">
      <h1 className="text-2xl font-extrabold text-white text-center pt-8">
        {t("title")}
      </h1>
      {/* Vista para computadoras */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 w-full max-w-5xl mx-auto items-center">
        <div className="flex justify-center items-center">{BookRender}</div>
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">
            {t("sideTitle")}
          </h2>
          <p className="text-blue-100 text-base leading-relaxed mb-4 text-center">
            {t("subtitle")}
          </p>
          <div className="w-full flex justify-center">{DownloadButton}</div>
        </div>
      </div>
      {/* Vista para celulares */}
      <div className="flex flex-col items-center gap-2 px-2 w-full max-w-md mx-auto lg:hidden">
        <p className="text-blue-100 text-base text-center mb-2">
          {t("subtitle")}
        </p>
        <div className="relative w-full" style={{ height: "400px" }}>
          {BookRender}
        </div>
        <div className="w-full flex justify-center">{DownloadButton}</div>
      </div>
    </section>
  );
};

export default SectionPDF;
