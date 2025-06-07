// components/SectionPDF.jsx
import React from "react";
import { useTranslations } from "next-intl";
import Book from "./Book";

const SectionPDF = () => {
  const t = useTranslations("SectionPDF");

  return (
    <main
      className="text-center py-10 min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, rgba(4,7,33,1) 0%, rgba(38,92,145,1) 31%)",
      }}
    >
      <h1>{t("title")}</h1>
      <div className="max-w-3xl mx-auto text-justify p-2">
        <h3>{t("subtitle")}</h3>
      </div>
      <div className="flex flex-col items-center justify-center h-full w-full text-center">
        <Book />
      </div>
    </main>
  );
};

export default SectionPDF;
