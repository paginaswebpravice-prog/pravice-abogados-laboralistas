"use client";

import Link from "next/link";
import styles from "../Servicios.module.css";

export default function SeguridadSocialContent() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.badge}>Abogados laborales en Colombia</span>

          <h1 className={styles.title}>
            ¿Su empresa no paga seguridad social? Reclame sus aportes
          </h1>

          <p className={styles.subtitle}>
            Si no le están cotizando salud, pensión o ARL, está en riesgo su
            futuro. Le ayudamos a exigir el pago completo de sus aportes en
            Colombia.
          </p>

          <div className={styles.heroActions}>
            <a
              href="https://api.whatsapp.com/send/?phone=573114659315"
              target="_blank"
              className={styles.ctaPrimary}
            >
              Revisar mi caso
            </a>

            <Link href="/blog" className={styles.ctaSecondary}>
              Ver guía legal
            </Link>
          </div>
        </div>
      </section>

      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>¿Qué es la seguridad social en Colombia?</h2>

          <p>
            La seguridad social incluye los aportes a salud, pensión y riesgos
            laborales (ARL), los cuales son obligatorios para todos los
            trabajadores con contrato laboral.
          </p>

          <p>
            Estos aportes garantizan su acceso a servicios médicos, protección
            económica futura y cobertura en caso de accidentes laborales.
          </p>

          <p>
            Cuando una empresa no realiza estos pagos, está incumpliendo la ley
            y afectando directamente sus derechos.
          </p>
        </section>

        {/* PROBLEMAS */}
        <section className={styles.sectionGrid}>
          <div className={styles.cardInfo}>
            <h3>Situaciones frecuentes</h3>
            <ul>
              <li>No lo afiliaron a seguridad social</li>
              <li>No cotizan regularmente</li>
              <li>Le descuentan pero no pagan</li>
              <li>Aportes incompletos</li>
              <li>Falta de afiliación a ARL</li>
            </ul>
          </div>

          <div className={styles.cardInfo}>
            <h3>Riesgos graves</h3>
            <ul>
              <li>No acceso a servicios de salud</li>
              <li>Pérdida de semanas de pensión</li>
              <li>Falta de cobertura en accidentes</li>
              <li>Problemas legales futuros</li>
              <li>Pérdidas económicas importantes</li>
            </ul>
          </div>
        </section>

        {/* SOLUCION */}
        <section className={styles.sectionAlt}>
          <h2>Cómo le ayudamos</h2>

          <ul className={styles.checklist}>
            <li>Verificación de aportes realizados</li>
            <li>Revisión de afiliaciones</li>
            <li>Cálculo de valores adeudados</li>
            <li>Reclamación formal</li>
            <li>Demanda laboral si aplica</li>
          </ul>

          <p>
            Nuestro objetivo es garantizar que su historial laboral quede
            correctamente registrado.
          </p>
        </section>

        {/* PROCESO */}
        <section className={styles.process}>
          <h2>Proceso legal</h2>

          <div className={styles.processGrid}>
            <div className={styles.processItem}>
              <span>1</span>
              <p>Análisis del caso</p>
            </div>

            <div className={styles.processItem}>
              <span>2</span>
              <p>Validación de aportes</p>
            </div>

            <div className={styles.processItem}>
              <span>3</span>
              <p>Reclamación</p>
            </div>

            <div className={styles.processItem}>
              <span>4</span>
              <p>Acción judicial</p>
            </div>
          </div>
        </section>

        {/* SEO */}
        <section className={styles.section}>
          <h2>¿Cómo saber si su empresa está cotizando?</h2>

          <p>
            Puede verificar directamente en su EPS, fondo de pensiones o ARL si
            existen aportes registrados a su nombre.
          </p>

          <p>
            Si detecta inconsistencias, es importante actuar rápidamente para
            evitar la pérdida de derechos.
          </p>
        </section>

        {/* DIFERENCIAL */}
        <section className={styles.sectionHighlight}>
          <h2>Asesoría en todo Colombia</h2>

          <p>
            Atendemos casos en Bogotá y de manera virtual en todo el país,
            permitiendo acceso a defensa legal sin importar su ubicación.
          </p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            <strong>Proteja su futuro y recupere sus aportes hoy mismo.</strong>
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573114659315"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </footer>
      </article>
    </main>
  );
}
