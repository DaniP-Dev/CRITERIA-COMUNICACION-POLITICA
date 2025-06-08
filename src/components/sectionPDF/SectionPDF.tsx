// components/SectionPDF.jsx
import React from "react";
import { useTranslations } from "next-intl";
import Book from "./Book";

const SectionPDF = () => {
  const t = useTranslations("SectionPDF");

  return (
    <main
      role="main"
      aria-label={t("title")}
      className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-[#040721] to-[#265c91] py-10"
    >
      <header className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-white w-full px-4 mx-auto leading-relaxed max-w-[40ch] sm:max-w-[55ch] lg:max-w-[66ch] text-center drop-shadow-lg">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-blue-100 w-full px-4 mx-auto leading-relaxed max-w-[40ch] sm:max-w-[55ch] lg:max-w-[66ch] text-center">
          {t("subtitle")}
        </p>
      </header>
      <section className="mt-8 w-full flex flex-col items-center">
        <Book />
      </section>
    </main>
  );
};

export default SectionPDF;
