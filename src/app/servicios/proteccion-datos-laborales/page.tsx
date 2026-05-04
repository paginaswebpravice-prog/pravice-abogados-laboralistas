import { Metadata } from "next";
import ProteccionDatosLaboralesContent from "./ProteccionDatosLaboralesContent";

export const metadata: Metadata = {
  title:
    "Protección de datos laborales en Colombia | Habeas Data trabajadores y empresas",
  description:
    "Asesoría en protección de datos laborales en Colombia. Cumpla con Habeas Data, evite sanciones y proteja la información de empleados.",
  keywords: [
    "protección de datos laborales Colombia",
    "habeas data trabajadores",
    "datos personales empleados Colombia",
    "ley 1581 de 2012 empresas",
    "abogados protección de datos laborales",
    "cumplimiento datos personales empresa",
  ],
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/servicios/proteccion-datos-laborales",
  },
  openGraph: {
    title:
      "Protección de datos laborales en Colombia | Asesoría legal empresarial",
    description:
      "Evite sanciones por manejo de datos personales de empleados. Asesoría legal en protección de datos laborales en Colombia.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/servicios/proteccion-datos-laborales",
    siteName: "Abogados Laborales Colombia",
    locale: "es_CO",
    type: "website",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Protección de datos laborales en Colombia",
    description:
      "Asesoría legal en protección de datos personales de empleados, cumplimiento de Habeas Data y Ley 1581 de 2012 en Colombia.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/servicios/proteccion-datos-laborales",
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    serviceType: [
      "Protección de datos laborales",
      "Habeas Data",
      "Cumplimiento legal empresarial",
    ],
    provider: {
      "@type": "Organization",
      name: "Abogados Laborales Colombia",
      url: "https://pravice-abogadoslaboralistas.vercel.app",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProteccionDatosLaboralesContent />
    </>
  );
}
