import type { Metadata } from "next";
import SeguridadSocialContent from "./SeguridadSocialContent";

const url =
  "https://pravice-abogadoslaboralistas.vercel.app/servicios/seguridad-social";

export const metadata: Metadata = {
  metadataBase: new URL("https://pravice-abogadoslaboralistas.vercel.app"),

  title: "Seguridad social en Colombia: qué hacer si su empresa no cotiza",
  description:
    "¿Su empresa no paga salud, pensión o ARL? Conozca cómo reclamar sus aportes a seguridad social en Colombia y proteja sus derechos laborales.",

  keywords: [
    "seguridad social Colombia",
    "empresa no paga seguridad social",
    "no cotizan salud pensión",
    "aportes seguridad social Colombia",
    "abogados laborales Colombia",
  ],

  alternates: {
    canonical: url,
  },

  openGraph: {
    title: "Seguridad social en Colombia: reclame sus aportes",
    description:
      "Guía legal para reclamar salud, pensión y ARL cuando su empleador no cumple.",
    url,
    siteName: "PRAVICE Abogados Laboralistas",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Seguridad social en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Seguridad social en Colombia",
    description: "Cómo reclamar aportes a salud, pensión y ARL.",
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
      <SeguridadSocialContent />

      {/* ✅ SCHEMA SERVICIO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Asesoría en seguridad social Colombia",
            description:
              "Servicio legal para trabajadores en Colombia cuyos empleadores no realizan aportes a seguridad social.",
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
                name: "¿Qué pasa si mi empresa no paga seguridad social?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El empleador puede ser sancionado y usted puede exigir el pago de los aportes junto con indemnizaciones.",
                },
              },
              {
                "@type": "Question",
                name: "¿Puedo demandar si no cotizan salud y pensión?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, puede iniciar una demanda laboral para exigir el pago de aportes y proteger sus derechos.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cómo saber si estoy afiliado a seguridad social?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Puede verificar en las plataformas de EPS, fondo de pensiones o ARL si existen aportes registrados.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto tiempo tengo para reclamar aportes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Generalmente los derechos laborales prescriben en 3 años en Colombia.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
