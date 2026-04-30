import type { Metadata } from "next";
import DemandaLaboralContent from "./DemandaLaboralContent";

export const metadata: Metadata = {
  title: "Demanda laboral en Colombia: requisitos, proceso y abogados expertos",
  description:
    "Inicie su demanda laboral en Colombia con abogados expertos. Requisitos, tiempos, pruebas y proceso completo para reclamar sus derechos.",
  keywords: [
    "demanda laboral Colombia",
    "cómo demandar empresa Colombia",
    "proceso laboral Colombia",
    "abogados demanda laboral",
    "derecho laboral Colombia demanda",
  ],
  openGraph: {
    title: "Demanda laboral en Colombia | Abogados laboralistas",
    description:
      "Asesoría para iniciar demanda laboral en Colombia. Defensa del trabajador.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/servicios/demanda-laboral-colombia",
    siteName: "PRAVICE Abogados Laboralistas",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      {/* =========================
         SCHEMA: LEGAL SERVICE
      ========================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Abogados demanda laboral en Colombia",
            description:
              "Asesoría y representación en demandas laborales en Colombia. Reclamación de derechos laborales.",
            url: "https://pravice-abogadoslaboralistas.vercel.app/servicios/demanda-laboral-colombia",
            areaServed: "CO",
            serviceType: "Derecho laboral",
            provider: {
              "@type": "Organization",
              name: "PRAVICE Abogados Laboralistas",
            },
          }),
        }}
      />

      {/* =========================
         SCHEMA: FAQ
      ========================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cuándo puedo iniciar una demanda laboral?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cuando la empresa vulnera sus derechos laborales, como no pagar salarios, despedir sin justa causa o incumplir el contrato.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto tiempo dura una demanda laboral?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Puede tardar entre varios meses y más de un año, dependiendo del caso y la carga del juzgado.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué necesito para demandar a una empresa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Documentos laborales, pruebas del incumplimiento y asesoría legal para estructurar correctamente la demanda.",
                },
              },
              {
                "@type": "Question",
                name: "¿Es obligatorio tener abogado?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, en la mayoría de los procesos laborales es necesario contar con un abogado para representar el caso.",
                },
              },
            ],
          }),
        }}
      />

      <DemandaLaboralContent />
    </>
  );
}
