import { Metadata } from "next";
import DespidosLaboralesContent from "./DespidoLaboralesContent";

export const metadata: Metadata = {
  title:
    "Abogados para despidos laborales en Colombia | Demande despido injustificado",
  description:
    "Asesoría legal para despidos laborales en Colombia. Defendemos trabajadores despedidos sin justa causa y reclamamos indemnización completa en Bogotá y todo el país.",
  keywords: [
    "despido injustificado Colombia",
    "abogados laborales Bogotá",
    "demanda laboral despido",
    "indemnización despido Colombia",
    "derecho laboral Colombia",
  ],
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/servicios/despidos-laborales",
  },
  openGraph: {
    title:
      "Despido injustificado en Colombia: abogados laborales especializados",
    description:
      "Recupere su indemnización por despido injustificado en Colombia con asesoría legal especializada.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/servicios/despidos-laborales",
    type: "website",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Abogados laborales para despidos en Colombia",
    description:
      "Servicio legal especializado en despidos injustificados en Colombia.",
    areaServed: "Colombia",
    provider: {
      "@type": "Organization",
      name: "PRAVICE",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <DespidosLaboralesContent />
    </>
  );
}
