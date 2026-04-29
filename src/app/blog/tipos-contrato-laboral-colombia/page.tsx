import TiposContratoLaboralColombiaContent from "./TiposContratoLaboralColombiaContent";

export const metadata = {
  title:
    "Tipos de contrato laboral en Colombia (2026): diferencias, ventajas y cuál le conviene",
  description:
    "Conozca los tipos de contrato laboral en Colombia: término fijo, indefinido, obra o labor y prestación de servicios. Diferencias legales y cuál le conviene en 2026.",
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/tipos-contrato-laboral-colombia",
  },
  openGraph: {
    title:
      "Tipos de contrato laboral en Colombia: diferencias y cuál elegir (2026)",
    description:
      "Guía completa sobre contratos laborales en Colombia y sus implicaciones legales.",
    type: "article",
    url: "https://pravice-abogadoslaboralistas.vercel.app/blog/tipos-contrato-laboral-colombia",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Tipos de contrato laboral en Colombia y sus diferencias legales (2026)",
    description:
      "Guía completa sobre contratos laborales en Colombia: tipos, características y diferencias legales.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/tipos-contrato-laboral-colombia",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <TiposContratoLaboralColombiaContent />
    </>
  );
}
