import DemandaLaboralColombiaContent from "./DemandaLaboralColombiaContent";

export const metadata = {
  title:
    "Demanda laboral en Colombia (2026): requisitos, proceso y tiempos reales paso a paso",
  description:
    "Guía completa sobre demanda laboral en Colombia: requisitos, etapas del proceso, tiempos reales y costos. Aprenda cómo demandar correctamente en 2026.",
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/demanda-laboral-colombia",
  },
  openGraph: {
    title:
      "Demanda laboral en Colombia: requisitos, proceso y tiempos reales (2026)",
    description:
      "Todo lo que necesita saber para iniciar una demanda laboral en Colombia paso a paso.",
    type: "article",
    url: "https://pravice-abogadoslaboralistas.vercel.app/blog/demanda-laboral-colombia",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Demanda laboral en Colombia: requisitos, proceso y tiempos reales (2026)",
    description:
      "Guía práctica para iniciar una demanda laboral en Colombia con requisitos, etapas y tiempos reales.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/demanda-laboral-colombia",
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

      <DemandaLaboralColombiaContent />
    </>
  );
}
