import type { Metadata } from "next";
import VacacionesLaboralesContent from "./VacacionesLaboralesContent";

export const metadata: Metadata = {
  title:
    "Vacaciones laborales en Colombia: cómo se calculan y pagan (2026) | Guía completa",
  description:
    "Aprenda cómo se calculan y pagan las vacaciones laborales en Colombia. Días de descanso, liquidación, pago y derechos del trabajador explicados paso a paso.",
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/Blog/vacaciones-laborales-colombia",
  },
  openGraph: {
    title: "Vacaciones laborales en Colombia: cálculo y pago (2026)",
    description:
      "Guía clara sobre vacaciones en Colombia: cuántos días corresponden, cómo se pagan y qué hacer si no se las reconocen.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/Blog/vacaciones-laborales-colombia",
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
      "Vacaciones laborales en Colombia: cómo se calculan y pagan (2026)",
    description:
      "Guía completa sobre el cálculo y pago de vacaciones laborales en Colombia, incluyendo derechos, días de descanso y liquidación.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://pravice-abogadoslaboralistas.vercel.app/Blog/vacaciones-laborales-colombia",
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

      <VacacionesLaboralesContent />
    </>
  );
}
