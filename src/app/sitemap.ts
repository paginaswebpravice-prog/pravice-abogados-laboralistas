import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pravice-abogadoslaboralistas.vercel.app";

  const routes = [
    "",
    "/blog",

    // BLOGS
    "/blog/acoso-laboral-colombia",
    "/blog/contrato-servicios-vs-laboral-colombia",
    "/blog/demanda-laboral-colombia",
    "/blog/despido-injustificado-colombia",
    "/blog/despido-justa-causa-colombia",
    "/blog/horas-extras-colombia",
    "/blog/indemnizacion-despido-colombia",
    "/blog/liquidacion-laboral-colombia",
    "/blog/periodo-prueba-colombia",
    "/blog/renuncia-laboral-colombia",
    "/blog/tipos-contrato-laboral-colombia",
    "/blog/vacaciones-laborales-colombia",

    // SERVICIOS
    "/servicios/demanda-laboral",
    "/servicios/despidos-laborales",
    "/servicios/no-pago-salario-colombia",
    "/servicios/seguridad-social",
    "/servicios/liquidacion-laboral",
    "/servicios/accidentes-laborales",
    "/servicios/acoso-laboral",
    "/servicios/defensa-judicial-laboral",
    "/servicios/investigaciones-internas",
    "/servicios/negociaciones-colectivas",
    "/servicios/proteccion-datos-laborales",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
