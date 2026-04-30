"use client";

import Link from "next/link";
import styles from "../Servicios.module.css";

export default function DemandaLaboralContent() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.badge}>
            Abogados laboralistas en Colombia
          </span>

          <h1 className={styles.title}>
            Demanda laboral en Colombia: recupere sus derechos legalmente
          </h1>

          <p className={styles.subtitle}>
            Si su empresa no le pagó, incumplió su contrato o vulneró sus
            derechos, puede iniciar una demanda laboral. Le ayudamos a
            estructurar su caso y reclamar lo que le corresponde.
          </p>

          <div className={styles.heroActions}>
            <a
              href="https://api.whatsapp.com/send/?phone=573114659315"
              target="_blank"
              className={styles.ctaPrimary}
            >
              Evaluar mi caso
            </a>

            <Link href="/blog" className={styles.ctaSecondary}>
              Ver artículos legales
            </Link>
          </div>
        </div>
      </section>

      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>¿Qué es una demanda laboral?</h2>

          <p>
            Una demanda laboral es el mecanismo legal mediante el cual un
            trabajador reclama ante un juez el cumplimiento de sus derechos
            cuando la empresa ha incumplido sus obligaciones.
          </p>

          <p>
            Este proceso permite exigir pagos pendientes, indemnizaciones o
            incluso el reconocimiento de una relación laboral.
          </p>
        </section>

        {/* GRID */}
        <section className={styles.sectionGrid}>
          <div className={styles.cardInfo}>
            <h3>Casos más comunes</h3>
            <ul>
              <li>No pago de salario</li>
              <li>Despido injustificado</li>
              <li>No pago de liquidación</li>
              <li>Contrato realidad</li>
              <li>Acoso laboral</li>
            </ul>
          </div>

          <div className={styles.cardInfo}>
            <h3>Riesgos de no demandar</h3>
            <ul>
              <li>Pérdida de dinero</li>
              <li>Prescripción de derechos</li>
              <li>Dificultad para probar el caso</li>
              <li>Ventaja para la empresa</li>
              <li>Renuncia a indemnización</li>
            </ul>
          </div>
        </section>

        {/* SOLUCIÓN */}
        <section className={styles.sectionAlt}>
          <h2>Cómo le ayudamos en su demanda laboral</h2>

          <p>
            Diseñamos una estrategia legal completa para maximizar sus
            posibilidades de éxito en el proceso laboral.
          </p>

          <ul className={styles.checklist}>
            <li>Análisis jurídico del caso</li>
            <li>Recolección de pruebas</li>
            <li>Redacción de la demanda</li>
            <li>Representación ante el juez</li>
            <li>Seguimiento del proceso</li>
          </ul>
        </section>

        {/* PROCESO */}
        <section className={styles.process}>
          <h2>Proceso de una demanda laboral</h2>

          <div className={styles.processGrid}>
            <div className={styles.processItem}>
              <span>1</span>
              <p>Evaluación del caso</p>
            </div>

            <div className={styles.processItem}>
              <span>2</span>
              <p>Presentación de la demanda</p>
            </div>

            <div className={styles.processItem}>
              <span>3</span>
              <p>Audiencias judiciales</p>
            </div>

            <div className={styles.processItem}>
              <span>4</span>
              <p>Sentencia del juez</p>
            </div>
          </div>
        </section>

        {/* SEO FUERTE */}
        <section className={styles.section}>
          <h2>¿Cuánto tarda una demanda laboral en Colombia?</h2>

          <p>
            El tiempo varía según el caso, pero generalmente puede tardar entre
            6 meses y más de un año. Factores como la complejidad del caso y la
            carga del juzgado influyen directamente.
          </p>

          <p>
            Sin embargo, una buena estrategia puede acelerar etapas clave del
            proceso.
          </p>
        </section>

        {/* DIFERENCIAL */}
        <section className={styles.sectionHighlight}>
          <h2>Estrategia legal enfocada en resultados</h2>

          <p>
            No todas las demandas se ganan igual. Una correcta estructuración
            del caso y el uso adecuado de pruebas puede marcar la diferencia.
          </p>

          <p>Atendemos casos en Bogotá y en todo Colombia de forma virtual.</p>
        </section>

        {/* CIERRE */}
        <section className={styles.section}>
          <h2>Consulte su caso</h2>

          <p>
            Antes de iniciar una demanda laboral, es clave evaluar la viabilidad
            del caso para evitar errores.
          </p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            <strong>
              Inicie su demanda laboral con respaldo jurídico profesional.
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
