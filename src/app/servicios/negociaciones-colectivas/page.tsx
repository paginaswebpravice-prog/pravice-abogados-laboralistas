import type { Metadata } from "next";
import NegociacionesColectivasContent from "./NegociacionesColectivasContent";

export const metadata: Metadata = {
  title:
    "Negociaciones colectivas en Colombia | Abogados laborales para empresas",
  description:
    "Asesoría en negociaciones colectivas en Colombia. Representación de empresas en sindicatos, convenciones colectivas y conflictos laborales.",
  keywords: [
    "negociaciones colectivas Colombia",
    "convención colectiva trabajo",
    "sindicatos Colombia empresa",
    "abogados negociación colectiva",
    "derecho laboral colectivo Colombia",
  ],
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/servicios/negociaciones-colectivas",
  },
  openGraph: {
    title: "Negociaciones colectivas en Colombia",
    description:
      "Asesoría legal para empresas en procesos de negociación colectiva con sindicatos.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/servicios/negociaciones-colectivas",
    siteName: "PRAVICE Abogados Laboralistas",
    images: [
      {
        url: "https://pravice-abogadoslaboralistas.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Negociaciones colectivas laborales",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Negociaciones colectivas en Colombia",
    description: "Representación legal en negociaciones colectivas laborales.",
    images: ["https://pravice-abogadoslaboralistas.vercel.app/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <NegociacionesColectivasContent />

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Negociaciones colectivas en Colombia",
            description:
              "Asesoría legal para negociación colectiva entre empresas y sindicatos.",
            url: "https://pravice-abogadoslaboralistas.vercel.app/servicios/negociaciones-colectivas",
            areaServed: "CO",
            provider: {
              "@type": "Organization",
              name: "PRAVICE Abogados Laboralistas",
            },
          }),
        }}
      />
    </>
  );
}
