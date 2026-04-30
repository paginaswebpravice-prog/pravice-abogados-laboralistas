import type { Metadata } from "next";
import DefensaJudicialLaboralContent from "./DefensaJudicialLaboralContent";

export const metadata: Metadata = {
  title:
    "Defensa judicial laboral en Colombia | Abogados expertos en demandas laborales",
  description:
    "Abogados especialistas en defensa judicial laboral en Colombia. Representación en demandas laborales, audiencias y procesos judiciales.",
  keywords: [
    "defensa judicial laboral Colombia",
    "abogado demanda laboral",
    "proceso laboral Colombia",
    "representación judicial laboral",
    "abogado laboral Colombia demanda",
  ],
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/servicios/defensa-judicial-laboral",
  },
  openGraph: {
    title: "Defensa judicial laboral en Colombia",
    description:
      "Representación legal en procesos laborales. Defienda sus derechos con abogados expertos.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/servicios/defensa-judicial-laboral",
    siteName: "PRAVICE Abogados Laboralistas",
    images: [
      {
        url: "https://pravice-abogadoslaboralistas.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Defensa judicial laboral",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Defensa judicial laboral en Colombia",
    description:
      "Abogados expertos en demandas laborales y procesos judiciales.",
    images: ["https://pravice-abogadoslaboralistas.vercel.app/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <DefensaJudicialLaboralContent />

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Defensa judicial laboral en Colombia",
            description:
              "Representación en procesos judiciales laborales en Colombia.",
            url: "https://pravice-abogadoslaboralistas.vercel.app/servicios/defensa-judicial-laboral",
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
