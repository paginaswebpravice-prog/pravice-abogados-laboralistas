import type { Metadata } from "next";
import ContratoServiciosVsLaboralContent from "./ContratoServiciosVsLaboralContent";

export const metadata: Metadata = {
  title:
    "Contrato por prestación de servicios vs contrato laboral en Colombia (2026) | Diferencias y derechos",
  description:
    "Descubra las diferencias entre contrato laboral y prestación de servicios en Colombia. Conozca derechos, riesgos y cuándo aplica el contrato realidad.",
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/Blog/contrato-servicios-vs-laboral-colombia",
  },
  openGraph: {
    title:
      "Contrato de servicios vs laboral en Colombia: diferencias clave (2026)",
    description:
      "Guía clara sobre contrato laboral vs prestación de servicios en Colombia. Derechos, riesgos y cómo identificar contrato realidad.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/Blog/contrato-servicios-vs-laboral-colombia",
    type: "article",
    locale: "es_CO",
    siteName: "PRAVICE Abogados Laboralistas",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Contrato por prestación de servicios vs contrato laboral en Colombia: diferencias clave (2026)",
    description:
      "Guía completa para entender las diferencias entre contrato laboral y prestación de servicios en Colombia, incluyendo derechos, riesgos y contrato realidad.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://pravice-abogadoslaboralistas.vercel.app/Blog/contrato-servicios-vs-laboral-colombia",
    author: {
      "@type": "Organization",
      name: "PRAVICE Abogados Laboralistas",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE Abogados Laboralistas",
    },
  };

  return (
    <>
      {/* SCHEMA SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* CONTENT */}
      <ContratoServiciosVsLaboralContent />
    </>
  );
}
