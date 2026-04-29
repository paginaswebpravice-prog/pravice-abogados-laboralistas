import type { Metadata } from "next";
import DespidoJustaCausaContent from "./DespidoJustaCausaContent";

export const metadata: Metadata = {
  title:
    "Despido con justa causa en Colombia: cuándo aplica realmente (2026) | Guía legal",
  description:
    "Conozca cuándo un despido con justa causa es válido en Colombia. Causales legales, ejemplos reales y qué hacer si lo despiden injustamente.",
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/Blog/despido-justa-causa-colombia",
  },
  openGraph: {
    title:
      "Despido con justa causa en Colombia: cuándo aplica realmente (2026)",
    description:
      "Guía legal con causales reales de despido con justa causa en Colombia y qué hacer si es indebido.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/Blog/despido-justa-causa-colombia",
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
      "Despido con justa causa en Colombia: cuándo aplica realmente (2026)",
    description:
      "Guía completa sobre despido con justa causa en Colombia, causales legales, ejemplos y derechos del trabajador.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://pravice-abogadoslaboralistas.vercel.app/Blog/despido-justa-causa-colombia",
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

      <DespidoJustaCausaContent />
    </>
  );
}
