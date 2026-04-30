"use client";

import { useState, useEffect } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Inicio", id: "inicio" },
  { label: "Reforma 2025", id: "reforma" },
  { label: "Metodología", id: "metodologia" },
  { label: "App", id: "app" },
  { label: "Diagnóstico", id: "diagnostico" },
];

const servicios = [
  { label: "Despidos laborales", href: "/servicios/despidos-laborales" },
  { label: "Acoso laboral", href: "/servicios/acoso-laboral-colombia" },
  { label: "Defensa judicial", href: "/servicios/defensa-judicial-laboral" },
  { label: "Demanda laboral", href: "/servicios/demanda-laboral-colombia" },
  {
    label: "Liquidación laboral",
    href: "/servicios/liquidacion-laboral-colombia",
  },
  {
    label: "Investigaciones internas",
    href: "/servicios/investigaciones-internas",
  },
  {
    label: "Negociaciones colectivas",
    href: "/servicios/negociaciones-colectivas",
  },
  { label: "No pago de salario", href: "/servicios/no-pago-salario-colombia" },
  { label: "Seguridad social", href: "/servicios/seguridad-social" },
];

export default function NavBar() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // SOLO detectar secciones si estás en HOME
      if (isHome) {
        navItems.forEach((item) => {
          const section = document.getElementById(item.id);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActive(item.id);
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* LOGO */}
        <Link href="/" className={styles.logoWrapper}>
          <Image
            src="/logo_pravice.png"
            alt="PRAVICE - Abogados Laboralistas"
            width={50}
            height={50}
            priority
          />
        </Link>

        {/* LINKS */}
        <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          {/* 🔥 LINKS DINÁMICOS */}
          {navItems.map((item) =>
            isHome ? (
              <a
                key={item.id}
                href={`/#${item.id}`}
                className={active === item.id ? styles.active : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}

          {/* BLOG */}
          <Link
            href="/blog"
            className={pathname === "/blog" ? styles.active : ""}
          >
            Blog
          </Link>

          {/* DROPDOWN SERVICIOS */}
          <div
            className={styles.dropdown}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span
              className={`${styles.servicios} ${
                pathname.startsWith("/servicios") ? styles.active : ""
              }`}
            >
              Servicios ▾
            </span>

            <div
              className={`${styles.dropdownMenu} ${
                dropdownOpen ? styles.showDropdown : ""
              }`}
            >
              {servicios.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    pathname === item.href ? styles.dropdownActive : ""
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://api.whatsapp.com/send/?phone=573114659315"
            target="_blank"
            className={styles.cta}
          >
            Asesoría por WhatsApp
          </a>
        </div>

        {/* HAMBURGER */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>
    </nav>
  );
}
