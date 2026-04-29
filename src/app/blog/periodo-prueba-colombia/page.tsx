import { Metadata } from "next";
import PeriodoPruebaColombiaContent from "./PeriodoPruebaColombiaContent";

export const metadata: Metadata = {
  title:
    "Periodo de prueba en Colombia 2026: derechos, duración y cuándo es ilegal",
  description:
    "Conozca los derechos durante el periodo de prueba en Colombia, su duración legal y qué hacer si lo despiden injustamente en esta etapa.",
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/periodo-prueba-colombia",
  },
  openGraph: {
    title: "Periodo de prueba en Colombia: derechos y límites legales",
    description:
      "Guía completa sobre el periodo de prueba en Colombia: duración, derechos y despido.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/blog/periodo-prueba-colombia",
    type: "article",
    locale: "es_CO",
    siteName: "PRAVICE Abogados Laboralistas",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Periodo de prueba en Colombia: derechos y límites legales",
    description:
      "Guía legal sobre el periodo de prueba en Colombia, su duración, derechos del trabajador y posibles abusos.",
    author: {
      "@type": "Organization",
      name: "PRAVICE Abogados Laboralistas",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE Abogados Laboralistas",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://pravice-abogadoslaboralistas.vercel.app/blog/periodo-prueba-colombia",
    },
    inLanguage: "es-CO",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PeriodoPruebaColombiaContent />
    </>
  );
}
