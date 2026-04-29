import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRAVICE Abogados Laboralistas | Asesoría y Blindaje Laboral",
  description:
    "PRAVICE ofrece servicios legales especializados en derecho laboral: asesoría preventiva, outsourcing laboral, defensa en procesos y auditorías. Blindamos su empresa para minimizar riesgos y garantizar cumplimiento legal.",
  keywords: [
    "abogados laboralistas",
    "derecho laboral",
    "asesoría laboral empresarial",
    "outsourcing laboral",
    "defensa procesos laborales",
    "auditoría laboral",
    "blindaje empresarial",
    "asesoría preventiva laboral",
  ],
  other: {
    "google-site-verification": "Sjvr4v7EGRfdGd1hqq8XTBMdqvhfUlmZSvvsfo5lKmo",
  },
  authors: [
    {
      name: "PRAVICE Abogados Laboralistas",
      url: "https://www.pravice.abogadoslaboralistas.com",
    },
  ],
  creator: "PRAVICE Abogados Laboralistas",

  openGraph: {
    title: "PRAVICE Abogados Laboralistas | Asesoría y Blindaje Laboral",
    description:
      "Servicios legales especializados en derecho laboral: asesoría preventiva, outsourcing laboral, defensa en procesos y auditorías.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/",
    siteName: "PRAVICE Abogados Laboralistas",
    images: [
      {
        url: "https://pravice-abogadoslaboralistas.vercel.app/",
        width: 1200,
        height: 630,
        alt: "PRAVICE Abogados Laboralistas",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PRAVICE Abogados Laboralistas",
    description:
      "Servicios legales especializados en derecho laboral: asesoría preventiva, outsourcing laboral, defensa en procesos y auditorías.",
    images: ["https://pravice-abogadoslaboralistas.vercel.app/og-image.jpg"],
    creator: "@pravice_abogados",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// 👇 AQUÍ VA AHORA (CLAVE)
export const viewport: Viewport = {
  themeColor: "#004a80",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
