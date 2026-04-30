import type { Metadata } from "next";
import LiquidacionLaboralContent from "./LiquidacionLaboralContent";

const url =
  "https://pravice-abogadoslaboralistas.vercel.app/servicios/liquidacion-laboral-colombia";

export const metadata: Metadata = {
  metadataBase: new URL("https://pravice-abogadoslaboralistas.vercel.app"),

  title:
    "Liquidación laboral en Colombia: calcule y reclame lo que le corresponde",
  description:
    "¿Le liquidaron mal su contrato? Calculamos su liquidación laboral en Colombia y reclamamos cesantías, primas, vacaciones e indemnización.",

  keywords: [
    "liquidación laboral Colombia",
    "calcular liquidación laboral",
    "liquidación mal calculada",
    "cesantías primas vacaciones Colombia",
    "abogados laborales Colombia",
  ],

  alternates: {
    canonical: url,
  },

  openGraph: {
    title: "Liquidación laboral en Colombia: revise y recupere su dinero",
    description:
      "Asesoría legal para verificar y reclamar liquidaciones laborales incorrectas en Colombia.",
    url,
    siteName: "PRAVICE Abogados Laboralistas",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Liquidación laboral Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Liquidación laboral en Colombia",
    description: "Cómo calcular y reclamar su liquidación correctamente.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function Page() {
  return (
    <>
      <LiquidacionLaboralContent />

      {/* ✅ SCHEMA SERVICIO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Revisión de liquidación laboral en Colombia",
            description:
              "Servicio legal para calcular y reclamar liquidaciones laborales incorrectas en Colombia.",
            url,
            areaServed: "CO",
            provider: {
              "@type": "Organization",
              name: "PRAVICE Abogados Laboralistas",
              url: "https://pravice-abogadoslaboralistas.vercel.app/",
            },
            serviceType: "Derecho laboral",
          }),
        }}
      />

      {/* ✅ FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué incluye la liquidación laboral en Colombia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Incluye cesantías, intereses, prima de servicios, vacaciones y en algunos casos indemnización.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué pasa si mi liquidación está mal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Puede reclamar el pago correcto e incluso iniciar una demanda laboral para recuperar el dinero faltante.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto tiempo tengo para reclamar la liquidación?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Generalmente 3 años desde la terminación del contrato.",
                },
              },
              {
                "@type": "Question",
                name: "¿Debo firmar la liquidación si no estoy de acuerdo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No es obligatorio firmar si existen inconsistencias. Es recomendable revisarla antes con un abogado.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
