import DespidoInjustificadoContent from "./DespidoInjustificadoContent";

export const metadata = {
  title:
    "Despido injustificado en Colombia (2026): qué hacer, indemnización y pasos legales",
  description:
    "¿Lo despidieron sin justa causa en Colombia? Conozca qué hacer paso a paso, cómo reclamar indemnización y sus derechos laborales en 2026.",
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/despido-injustificado-colombia",
  },
  openGraph: {
    title:
      "Despido injustificado en Colombia: qué hacer y cómo reclamar indemnización",
    description:
      "Guía legal completa para trabajadores despedidos sin justa causa en Colombia.",
    type: "article",
    url: "https://pravice-abogadoslaboralistas.vercel.app/blog/despido-injustificado-colombia",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Despido injustificado en Colombia: qué hacer paso a paso (2026)",
    description:
      "Guía completa para trabajadores despedidos sin justa causa en Colombia: derechos, indemnización y acciones legales.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/despido-injustificado-colombia",
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

      <DespidoInjustificadoContent />
    </>
  );
}
