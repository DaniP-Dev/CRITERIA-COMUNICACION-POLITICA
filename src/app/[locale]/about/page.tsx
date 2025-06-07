import React from "react";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("about");

  const routes = [
    {
      href: "/",
      className:
        "btn btn-ghost absolute top-4 left-4 z-10 flex items-center gap-2 text-[var(--color-accent-purple)]",
      title: t("backButton"),
      icon: <span className="text-2xl">←</span>,
      label: <span className="font-bold">{t("backButton")}</span>,
      show: true,
    },
    {
      href: "https://wa.me/",
      className:
        "btn bg-[var(--color-accent-green)] text-white hover:bg-green-700 my-4 mt-6",
      title: t("buttonWhatsapp"),
      label: t("buttonWhatsapp"),
      show: false, // handled separately for placement
    },
  ];

  return (
    <div>
      {/* Mobile y tablet */}
      <div className="lg:hidden p-4 h-[100vh] w-[100vw]">
        {routes.filter((r) => r.show).map((route, idx) => (
          <a
            key={idx}
            href={route.href}
            className={route.className}
            title={route.title}
          >
            {route.icon}
            {route.label}
          </a>
        ))}
        <div
          className="card shadow-md rounded-lg bg-[var(--color-base)] border border-[var(--color-gray)] h-auto"
        >
          <div className="card-body p-0">
            <h2 className="text-xl font-bold text-[var(--color-neutral)] text-center pt-4">
              {t("title")}
            </h2>
            <p className="text-[var(--color-neutral)] mt-3 text-justify leading-relaxed text-base sm:text-lg">
              {t("paragraph1")}
            </p>
            <p className="text-[var(--color-neutral)] mt-2 text-justify leading-relaxed text-base sm:text-lg">
              {t("paragraph2")}
            </p>
            <a
              href={routes[1].href}
              target="_blank"
              rel="noopener noreferrer"
              className={routes[1].className}
              title={routes[1].title}
            >
              {routes[1].label}
            </a>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block p-4 h-[100vh] w-[100vw]">
        {routes.filter((r) => r.show).map((route, idx) => (
          <a
            key={idx}
            href={route.href}
            className={route.className}
            title={route.title}
          >
            {route.icon}
            {route.label}
          </a>
        ))}
        <div
          className="card shadow-lg rounded-lg bg-[var(--color-base)] border border-[var(--color-gray)] h-auto w-auto"
        >
          <div className="card-body p-8 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-[var(--color-neutral)]">
              {t("title")}
            </h2>
            <p className="text-[var(--color-neutral)] mt-6 text-justify leading-relaxed text-lg max-w-2xl">
              {t("paragraph1")}
            </p>
            <p className="text-[var(--color-neutral)] mt-4 text-justify leading-relaxed text-lg max-w-2xl">
              {t("paragraph2")}
            </p>
            <a
              href={routes[1].href}
              target="_blank"
              rel="noopener noreferrer"
              className={routes[1].className}
              title={routes[1].title}
            >
              {routes[1].label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
