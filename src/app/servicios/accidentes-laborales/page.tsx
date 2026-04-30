import type { Metadata } from "next";
import AccidentesLaboralesContent from "./AccidentesLaboralesContent";

export const metadata: Metadata = {
  title:
    "Accidentes laborales en Colombia: indemnización y reclamación | PRAVICE",
  description:
    "Abogados expertos en accidentes laborales en Colombia. Reclame indemnización, incapacidades, pensión o reparación por accidentes de trabajo.",
  keywords: [
    "accidentes laborales Colombia",
    "indemnización accidente laboral",
    "ARL Colombia reclamaciones",
    "abogado accidente trabajo",
    "pensión invalidez laboral",
    "riesgos laborales Colombia",
  ],
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/servicios/accidentes-laborales",
  },
  openGraph: {
    title: "Accidentes laborales en Colombia: reclamación e indemnización",
    description:
      "Reciba asesoría legal para reclamar indemnización por accidente laboral en Colombia.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/servicios/accidentes-laborales",
    siteName: "PRAVICE Abogados Laboralistas",
    images: [
      {
        url: "https://pravice-abogadoslaboralistas.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Accidentes laborales en Colombia",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accidentes laborales en Colombia",
    description:
      "Asesoría legal para reclamar indemnización por accidentes de trabajo.",
    images: ["https://pravice-abogadoslaboralistas.vercel.app/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <AccidentesLaboralesContent />

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Accidentes laborales en Colombia",
            description:
              "Asesoría legal para reclamación de indemnización por accidentes laborales.",
            url: "https://pravice-abogadoslaboralistas.vercel.app/servicios/accidentes-laborales",
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
