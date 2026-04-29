import { Metadata } from "next";
import IndemnizacionDespidoColombiaContent from "./IndemnizacionDespidoColombiaContent";

export const metadata: Metadata = {
  title:
    "Indemnización por despido en Colombia 2026: cuánto deben pagarle y cómo calcularla",
  description:
    "Descubra cuánto deben pagarle por indemnización por despido en Colombia. Guía clara con ejemplos, tipos de contrato y cómo reclamar legalmente.",
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/indemnizacion-despido-colombia",
  },
  openGraph: {
    title: "Indemnización por despido en Colombia: cuánto deben pagarle",
    description:
      "Aprenda a calcular su indemnización por despido sin justa causa en Colombia y cómo exigir el pago correcto.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/blog/indemnizacion-despido-colombia",
    type: "article",
    locale: "es_CO",
    siteName: "PRAVICE Abogados Laboralistas",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Indemnización por despido en Colombia: cuánto deben pagarle",
    description:
      "Guía completa para calcular la indemnización por despido en Colombia según tipo de contrato y salario.",
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
        "https://pravice-abogadoslaboralistas.vercel.app/blog/indemnizacion-despido-colombia",
    },
    inLanguage: "es-CO",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <IndemnizacionDespidoColombiaContent />
    </>
  );
}
