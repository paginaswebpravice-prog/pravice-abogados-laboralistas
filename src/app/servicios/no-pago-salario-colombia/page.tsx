import type { Metadata } from "next";
import NoPagoSalarioContent from "./NoPagoSalarioContent";

const url =
  "https://pravice-abogadoslaboralistas.vercel.app/servicios/no-pago-salario-colombia";

export const metadata: Metadata = {
  metadataBase: new URL("https://pravice-abogadoslaboralistas.vercel.app"),

  title: "No pago de salario en Colombia: cómo reclamar su sueldo legalmente",
  description:
    "¿No le han pagado su salario en Colombia? Conozca cómo reclamar legalmente su sueldo, prestaciones e indemnización con abogados laboralistas.",

  keywords: [
    "no pago de salario Colombia",
    "empresa no paga sueldo",
    "reclamar salario Colombia",
    "demanda laboral salario",
    "retención salario ilegal",
  ],

  alternates: {
    canonical: url,
  },

  openGraph: {
    title: "No pago de salario en Colombia: recupere su dinero legalmente",
    description:
      "Guía legal completa para reclamar salarios no pagados en Colombia y proteger sus derechos laborales.",
    url,
    siteName: "PRAVICE Abogados Laboralistas",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "/og-image.jpg", // puedes personalizar esto luego
        width: 1200,
        height: 630,
        alt: "No pago de salario en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "No pago de salario en Colombia",
    description: "Cómo reclamar su salario legalmente en Colombia.",
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
      <NoPagoSalarioContent />

      {/* ✅ SCHEMA PRINCIPAL */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Reclamación de salario no pagado en Colombia",
            description:
              "Servicio legal para trabajadores que no han recibido su salario en Colombia.",
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
                name: "¿Qué hacer si no me pagan el salario en Colombia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Puede reclamar directamente al empleador o iniciar una demanda laboral para exigir el pago.",
                },
              },
              {
                "@type": "Question",
                name: "¿Puedo renunciar si no me pagan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, el no pago del salario puede justificar la terminación del contrato con indemnización.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto tiempo tengo para reclamar salario?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Generalmente, los derechos laborales prescriben en 3 años en Colombia.",
                },
              },
              {
                "@type": "Question",
                name: "¿Puedo demandar por salario no pagado?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, puede iniciar una demanda laboral para reclamar salarios, prestaciones e indemnizaciones.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
