import type { Metadata } from "next";
import InvestigacionesInternasContent from "./InvestigacionesInternasContent";

export const metadata: Metadata = {
  title: "Investigaciones internas laborales en Colombia | PRAVICE Abogados",
  description:
    "Realizamos investigaciones internas laborales en Colombia. Manejo de acoso laboral, fraudes, faltas disciplinarias y cumplimiento empresarial.",
  keywords: [
    "investigaciones internas Colombia",
    "acoso laboral investigación empresa",
    "procesos disciplinarios laborales",
    "abogados investigaciones internas",
    "cumplimiento laboral empresas Colombia",
  ],
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/servicios/investigaciones-internas",
  },
  openGraph: {
    title: "Investigaciones internas laborales en Colombia",
    description:
      "Proteja su empresa con investigaciones internas legales y estratégicas.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/servicios/investigaciones-internas",
    siteName: "PRAVICE Abogados Laboralistas",
    images: [
      {
        url: "https://pravice-abogadoslaboralistas.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Investigaciones internas laborales",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Investigaciones internas laborales",
    description: "Gestión legal de investigaciones internas en empresas.",
    images: ["https://pravice-abogadoslaboralistas.vercel.app/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <InvestigacionesInternasContent />

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Investigaciones internas laborales en Colombia",
            description:
              "Servicio legal de investigaciones internas para empresas.",
            url: "https://pravice-abogadoslaboralistas.vercel.app/servicios/investigaciones-internas",
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
