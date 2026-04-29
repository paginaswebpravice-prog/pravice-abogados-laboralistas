import AcosolaboralColombiaContent from "./AcosolaboralColombiaContent";

export const metadata = {
  title:
    "Acoso laboral en Colombia (2026): cómo denunciar, pruebas y qué hacer paso a paso",
  description:
    "Guía completa sobre acoso laboral en Colombia: cómo denunciar, qué pruebas necesita, tipos de acoso y cómo proteger sus derechos en 2026.",
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/acoso-laboral-colombia",
  },
  openGraph: {
    title:
      "Acoso laboral en Colombia: cómo denunciar y proteger sus derechos (2026)",
    description:
      "Aprenda a identificar y denunciar el acoso laboral en Colombia con esta guía paso a paso.",
    type: "article",
    url: "https://pravice-abogadoslaboralistas.vercel.app/blog/acoso-laboral-colombia",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Acoso laboral en Colombia: cómo denunciar y proteger sus derechos (2026)",
    description:
      "Guía completa para identificar, probar y denunciar el acoso laboral en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/acoso-laboral-colombia",
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

      <AcosolaboralColombiaContent />
    </>
  );
}
