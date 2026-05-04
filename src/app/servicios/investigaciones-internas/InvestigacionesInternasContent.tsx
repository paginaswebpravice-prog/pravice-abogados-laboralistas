"use client";

import Link from "next/link";
import styles from "../Servicios.module.css";

export default function InvestigacionesInternasContent() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.badge}>
            Cumplimiento y gestión laboral empresarial
          </span>

          <h1 className={styles.title}>
            Investigaciones internas laborales en Colombia: proteja su empresa
            legalmente
          </h1>

          <p className={styles.subtitle}>
            Realizamos investigaciones internas con enfoque jurídico para casos
            de acoso laboral, faltas disciplinarias, fraudes y conflictos
            laborales dentro de su empresa.
          </p>

          <div className={styles.heroActions}>
            <a
              href="https://api.whatsapp.com/send/?phone=573114659315"
              target="_blank"
              className={styles.ctaPrimary}
            >
              Solicitar asesoría empresarial
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
          <h2>¿Qué son las investigaciones internas laborales?</h2>

          <p>
            Las investigaciones internas son procesos que permiten a una empresa
            analizar hechos que pueden constituir faltas disciplinarias,
            conductas indebidas o riesgos legales dentro del entorno laboral.
          </p>

          <p>
            Estas investigaciones deben realizarse bajo parámetros legales para
            evitar sanciones, demandas o nulidad de decisiones.
          </p>
        </section>

        {/* GRID */}
        <section className={styles.sectionGrid}>
          <div className={styles.cardInfo}>
            <h3>Casos que investigamos</h3>
            <ul>
              <li>Acoso laboral</li>
              <li>Fraude interno</li>
              <li>Incumplimientos contractuales</li>
              <li>Conductas disciplinarias</li>
              <li>Conflictos entre empleados</li>
            </ul>
          </div>

          <div className={styles.cardInfo}>
            <h3>Riesgos sin investigación adecuada</h3>
            <ul>
              <li>Demandas laborales</li>
              <li>Sanciones legales</li>
              <li>Despidos inválidos</li>
              <li>Pérdida de pruebas</li>
              <li>Daño reputacional empresarial</li>
            </ul>
          </div>
        </section>

        {/* SOLUCIÓN */}
        <section className={styles.sectionAlt}>
          <h2>Cómo realizamos la investigación</h2>

          <ul className={styles.checklist}>
            <li>Recolección de información y pruebas</li>
            <li>Entrevistas a empleados involucrados</li>
            <li>Análisis jurídico del caso</li>
            <li>Informe legal con conclusiones</li>
            <li>Recomendaciones estratégicas</li>
          </ul>

          <p>
            Garantizamos un proceso objetivo, confidencial y alineado con la ley
            laboral colombiana.
          </p>
        </section>

        {/* PROCESO */}
        <section className={styles.process}>
          <h2>Etapas de la investigación interna</h2>

          <div className={styles.processGrid}>
            <div className={styles.processItem}>
              <span>1</span>
              <p>Recepción del caso</p>
            </div>

            <div className={styles.processItem}>
              <span>2</span>
              <p>Recolección de pruebas</p>
            </div>

            <div className={styles.processItem}>
              <span>3</span>
              <p>Análisis jurídico</p>
            </div>

            <div className={styles.processItem}>
              <span>4</span>
              <p>Informe y decisiones</p>
            </div>
          </div>
        </section>

        {/* SEO FUERTE */}
        <section className={styles.section}>
          <h2>Importancia legal de una investigación interna bien hecha</h2>

          <p>
            Una investigación mal realizada puede invalidar sanciones, despidos
            o decisiones empresariales, generando responsabilidades legales para
            la empresa.
          </p>

          <p>
            Por eso, es fundamental que estos procesos sean dirigidos por
            abogados con experiencia en derecho laboral.
          </p>
        </section>

        {/* DIFERENCIAL */}
        <section className={styles.sectionHighlight}>
          <h2>Enfoque legal y estratégico</h2>

          <p>
            No solo investigamos, protegemos jurídicamente a su empresa.
            Diseñamos estrategias que minimizan riesgos legales y fortalecen la
            toma de decisiones.
          </p>

          <p>Atendemos empresas en Bogotá y todo Colombia de forma remota.</p>
        </section>

        {/* CIERRE */}
        <section className={styles.section}>
          <h2>Asesoría para empresas en Colombia</h2>

          <p>
            Si su empresa enfrenta un caso interno, es clave actuar de forma
            inmediata y con respaldo legal.
          </p>

          <p>
            Una investigación adecuada puede evitar problemas legales futuros.
          </p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            <strong>
              Proteja su empresa con investigaciones internas legales y seguras.
            </strong>
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573114659315"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar asesoría empresarial
          </a>
        </footer>
      </article>
    </main>
  );
}
