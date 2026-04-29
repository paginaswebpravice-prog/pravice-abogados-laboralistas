import { Metadata } from "next";
import HorasExtrasColombiaContent from "./HorasExtrasColombiaContent";

export const metadata: Metadata = {
  title:
    "Horas extras en Colombia 2026: cuándo deben pagarse y cómo reclamarlas correctamente",
  description:
    "Aprenda cuándo deben pagarse las horas extras en Colombia, cómo se calculan y qué hacer si su empleador no las reconoce. Guía legal completa paso a paso.",
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/horas-extras-colombia",
  },
  openGraph: {
    title: "Horas extras en Colombia: cuándo deben pagarse y cómo reclamarlas",
    description:
      "Guía legal sobre horas extras en Colombia: cálculo, recargos y cómo exigir su pago.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/blog/horas-extras-colombia",
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
      "Horas extras en Colombia: cuándo deben pagarse y cómo reclamarlas",
    description:
      "Guía completa sobre el pago de horas extras en Colombia, cálculo de recargos y reclamación legal.",
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
        "https://pravice-abogadoslaboralistas.vercel.app/blog/horas-extras-colombia",
    },
    inLanguage: "es-CO",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HorasExtrasColombiaContent />
    </>
  );
}
