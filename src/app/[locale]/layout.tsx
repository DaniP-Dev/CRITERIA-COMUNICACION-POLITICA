import "../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import Head from "next/head";

// Metadata global para el sitio
export const metadata: Metadata = {
  title: {
    default: "Criteria Comunicación Política",
    template: "%s | Criteria Comunicación Política",
  },
  description:
    "Análisis profundo de la conversación política en plataformas digitales.",
  metadataBase: new URL("https://criteria-comunicacion-politica.vercel.app/"),
  openGraph: {
    title: "Criteria Comunicación Política",
    description:
      "Análisis profundo de la conversación política en plataformas digitales.",
    url: "https://criteria-comunicacion-politica.vercel.app/",
    siteName: "Criteria Comunicación Política",
    images: [
      {
        url: "/imgs/logo.png",
        width: 1200,
        height: 630,
        alt: "Imagen Open Graph Criteria",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Criteria Comunicación Política",
    description:
      "Análisis profundo de la conversación política en plataformas digitales.",
    images: ["/imgs/logo.png"],
  },
  keywords: ["comunicación política", "análisis", "datos", "estrategia"],
  robots: { index: true, follow: true },
  applicationName: "Criteria Comunicación Política",
  icons: {
    icon: "/imgs/logo.png",
  },
};

export const viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
