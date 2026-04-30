import type { Metadata } from "next";
import AcosoLaboralContent from "./AcosoLaboralContent";

export const metadata: Metadata = {
  title:
    "Acoso laboral en Colombia: abogados para denunciar y proteger sus derechos",
  description:
    "Abogados expertos en acoso laboral en Colombia. Denuncie correctamente, reúna pruebas y proteja sus derechos frente a hostigamiento laboral.",
  keywords: [
    "acoso laboral Colombia",
    "denunciar acoso laboral",
    "hostigamiento laboral Colombia",
    "derechos del trabajador acoso laboral",
    "abogados laborales acoso",
    "demanda acoso laboral Colombia",
  ],
  openGraph: {
    title: "Acoso laboral en Colombia | Abogados laboralistas",
    description:
      "Defensa legal frente al acoso laboral en Colombia. Asesoría, pruebas y demanda.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/servicios/acoso-laboral-colombia",
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
         SCHEMA: SERVICIO LEGAL
      ========================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Abogados de acoso laboral en Colombia",
            description:
              "Asesoría legal para casos de acoso laboral en Colombia. Denuncias, pruebas y defensa del trabajador.",
            url: "https://pravice-abogadoslaboralistas.vercel.app/servicios/acoso-laboral-colombia",
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
         SCHEMA: FAQ (RICH RESULTS)
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
                name: "¿Qué se considera acoso laboral en Colombia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Se considera acoso laboral cualquier conducta persistente de hostigamiento, presión o maltrato que afecte la dignidad o estabilidad del trabajador.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cómo denunciar acoso laboral?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Se puede denunciar ante el comité de convivencia laboral de la empresa o mediante una acción legal con apoyo de un abogado laboral.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué pruebas sirven para acoso laboral?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Correos, mensajes, testigos, grabaciones y reportes internos pueden servir como prueba dependiendo del caso.",
                },
              },
              {
                "@type": "Question",
                name: "¿Puedo demandar por acoso laboral?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, si se logra demostrar el acoso laboral, se pueden iniciar acciones legales para proteger sus derechos y reclamar indemnización.",
                },
              },
            ],
          }),
        }}
      />

      {/* CONTENIDO */}
      <AcosoLaboralContent />
    </>
  );
}
