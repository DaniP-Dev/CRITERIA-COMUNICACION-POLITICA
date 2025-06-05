import React from "react";
import { useRouter, usePathname } from "next/navigation";

interface EsEnProps {
  className?: string;
}

const EsEn: React.FC<EsEnProps> = ({ className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname && pathname.startsWith("/en") ? "en" : "es";
  const nextLocale = currentLocale === "es" ? "en" : "es";

  const handleLocaleSwitch = () => {
    // Cambia el prefijo del path
    if (!pathname) return;
    const newPath = pathname.replace(/^\/(es|en)/, `/${nextLocale}`);
    router.replace(newPath);
  };

  return (
    <button
      type="button"
      className={`relative group flex justify-center items-center mx-auto text-center ${className || ""}`}
      onClick={handleLocaleSwitch}
      aria-label="Cambiar idioma"
    >
      {currentLocale === "es" ? (
        <img
          src="/imgs/flagEn.png"
          alt="Español"
          className="inline w-6 h-6 align-middle"
        />
      ) : (
        <img
          src="/imgs/flagEs.png"
          alt="English"
          className="inline w-6 h-6 align-middle"
        />
      )}
      <span
        className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#D63122] transition-all duration-300 group-hover:w-full"
        aria-hidden="true"
      />
    </button>
  );
};

export default EsEn;
