import { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title:
    "Blog de Derecho Laboral en Colombia | Abogados Laboralistas en Bogotá",
  description:
    "Aprenda sobre derecho laboral en Colombia: despidos injustificados, liquidaciones, demandas laborales y asesoría empresarial. Blog jurídico actualizado por abogados laboralistas en Bogotá.",

  alternates: {
    canonical: "https://pravice-abogadoslaboralistas.vercel.app/blog",
  },

  openGraph: {
    title:
      "Blog de Derecho Laboral en Colombia | PRAVICE Abogados Laboralistas",
    description:
      "Guías legales sobre despidos, liquidaciones, demandas laborales y asesoría empresarial en Colombia.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/blog",
    type: "website",
    locale: "es_CO",
    siteName: "PRAVICE Abogados Laboralistas",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog de Derecho Laboral en Colombia",
    description:
      "Artículos sobre despidos, demandas laborales, liquidaciones y asesoría laboral en Colombia.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/blog",
    publisher: {
      "@type": "Organization",
      name: "PRAVICE Abogados Laboralistas",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <BlogContent />
    </>
  );
}
