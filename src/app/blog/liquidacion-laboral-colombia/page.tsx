import LiquidacionLaboralColombiaContent from "./LiquidacionLaboralColombiaContent";

export const metadata = {
  title:
    "Cómo calcular la liquidación laboral en Colombia (2026) paso a paso + ejemplos reales",
  description:
    "Aprenda a calcular la liquidación laboral en Colombia correctamente: cesantías, intereses, primas, vacaciones e indemnización con ejemplos claros y actualizados 2026.",
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/liquidacion-laboral-colombia",
  },
  openGraph: {
    title:
      "Cómo calcular la liquidación laboral en Colombia paso a paso (2026)",
    description:
      "Guía práctica con ejemplos para calcular liquidación laboral completa en Colombia.",
    type: "article",
    url: "https://pravice-abogadoslaboralistas.vercel.app/blog/liquidacion-laboral-colombia",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Cómo calcular la liquidación laboral en Colombia paso a paso (2026)",
    description:
      "Guía completa para calcular cesantías, primas, vacaciones e indemnización en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/liquidacion-laboral-colombia",
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

      <LiquidacionLaboralColombiaContent />
    </>
  );
}
