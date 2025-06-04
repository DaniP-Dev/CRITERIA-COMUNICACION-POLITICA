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
      className={className}
      onClick={handleLocaleSwitch}
      aria-label="Cambiar idioma"
    >
      ES / EN
    </button>
  );
};

export default EsEn;
