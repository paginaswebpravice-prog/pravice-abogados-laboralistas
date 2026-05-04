"use client";

import Link from "next/link";
import styles from "../Servicios.module.css";

export default function NegociacionesColectivasContent() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.badge}>Derecho laboral colectivo</span>

          <h1 className={styles.title}>
            Negociaciones colectivas en Colombia: proteja su empresa con
            estrategia legal
          </h1>

          <p className={styles.subtitle}>
            Asesoramos y representamos empresas en negociaciones con sindicatos,
            convenciones colectivas y conflictos laborales colectivos en
            Colombia.
          </p>

          <div className={styles.heroActions}>
            <a
              href="https://api.whatsapp.com/send/?phone=573114659315"
              target="_blank"
              className={styles.ctaPrimary}
            >
              Asesoría empresarial
            </a>

            <Link href="/blog" className={styles.ctaSecondary}>
              Ver contenido legal
            </Link>
          </div>
        </div>
      </section>

      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>¿Qué son las negociaciones colectivas?</h2>

          <p>
            Las negociaciones colectivas son procesos en los que una empresa y
            un sindicato discuten condiciones laborales como salarios,
            beneficios y derechos de los trabajadores.
          </p>

          <p>
            Estas negociaciones pueden tener un alto impacto económico y
            jurídico, por lo que deben ser gestionadas con estrategia y respaldo
            legal.
          </p>
        </section>

        {/* GRID */}
        <section className={styles.sectionGrid}>
          <div className={styles.cardInfo}>
            <h3>Situaciones comunes</h3>
            <ul>
              <li>Presentación de pliego de peticiones</li>
              <li>Negociación con sindicatos</li>
              <li>Conflictos laborales colectivos</li>
              <li>Convenciones colectivas</li>
              <li>Huelgas o amenazas de huelga</li>
            </ul>
          </div>

          <div className={styles.cardInfo}>
            <h3>Riesgos sin asesoría legal</h3>
            <ul>
              <li>Altos costos laborales</li>
              <li>Acuerdos desfavorables</li>
              <li>Conflictos prolongados</li>
              <li>Sanciones legales</li>
              <li>Impacto reputacional</li>
            </ul>
          </div>
        </section>

        {/* SOLUCIÓN */}
        <section className={styles.sectionAlt}>
          <h2>Cómo apoyamos su empresa</h2>

          <ul className={styles.checklist}>
            <li>Diseño de estrategia de negociación</li>
            <li>Análisis jurídico del pliego de peticiones</li>
            <li>Representación en mesas de negociación</li>
            <li>Prevención de conflictos laborales</li>
            <li>Acompañamiento integral durante el proceso</li>
          </ul>

          <p>
            Nuestro enfoque busca proteger la estabilidad financiera y jurídica
            de su empresa.
          </p>
        </section>

        {/* PROCESO */}
        <section className={styles.process}>
          <h2>Fases de la negociación colectiva</h2>

          <div className={styles.processGrid}>
            <div className={styles.processItem}>
              <span>1</span>
              <p>Recepción del pliego</p>
            </div>

            <div className={styles.processItem}>
              <span>2</span>
              <p>Análisis legal y económico</p>
            </div>

            <div className={styles.processItem}>
              <span>3</span>
              <p>Negociación con sindicato</p>
            </div>

            <div className={styles.processItem}>
              <span>4</span>
              <p>Acuerdo o resolución del conflicto</p>
            </div>
          </div>
        </section>

        {/* SEO FUERTE */}
        <section className={styles.section}>
          <h2>Importancia de una estrategia en negociación colectiva</h2>

          <p>
            Una negociación colectiva mal gestionada puede generar obligaciones
            económicas permanentes para la empresa y afectar su sostenibilidad.
          </p>

          <p>
            Por eso es clave contar con asesoría legal que permita negociar de
            forma inteligente y equilibrada.
          </p>
        </section>

        {/* DIFERENCIAL */}
        <section className={styles.sectionHighlight}>
          <h2>Defensa estratégica para empresas</h2>

          <p>
            No solo participamos en la negociación, diseñamos una estrategia que
            protege los intereses de su empresa a corto y largo plazo.
          </p>

          <p>Atendemos empresas en Bogotá y todo Colombia de forma remota.</p>
        </section>

        {/* CIERRE */}
        <section className={styles.section}>
          <h2>Asesoría en derecho laboral colectivo</h2>

          <p>
            Si su empresa enfrenta una negociación colectiva, es fundamental
            actuar con preparación y respaldo legal desde el inicio.
          </p>

          <p>Una buena estrategia puede evitar conflictos y reducir riesgos.</p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            <strong>
              Proteja su empresa en negociaciones colectivas con asesoría
              experta.
            </strong>
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
