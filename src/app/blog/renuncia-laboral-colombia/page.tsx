import { Metadata } from "next";
import RenunciaLaboralColombiaContent from "./RenunciaLaboralColombiaContent";

export const metadata: Metadata = {
  title:
    "Renuncia laboral en Colombia 2026: derechos, liquidación y cómo hacerlo correctamente",
  description:
    "Guía completa sobre renuncia laboral en Colombia: derechos, liquidación, preaviso y recomendaciones para evitar problemas legales.",
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/renuncia-laboral-colombia",
  },
  openGraph: {
    title:
      "Renuncia laboral en Colombia: derechos, liquidación y recomendaciones",
    description:
      "Aprenda cómo renunciar correctamente en Colombia, qué le deben pagar y qué errores evitar.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/blog/renuncia-laboral-colombia",
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
      "Renuncia laboral en Colombia: derechos, liquidación y recomendaciones",
    description:
      "Guía legal sobre renuncia laboral en Colombia, liquidación y aspectos clave para evitar riesgos.",
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
        "https://pravice-abogadoslaboralistas.vercel.app/blog/renuncia-laboral-colombia",
    },
    inLanguage: "es-CO",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <RenunciaLaboralColombiaContent />
    </>
  );
}
