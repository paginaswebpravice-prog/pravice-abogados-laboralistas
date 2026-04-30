"use client";

import Link from "next/link";
import styles from "../Servicios.module.css";

export default function LiquidacionLaboralContent() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.badge}>
            Abogados laboralistas en Colombia
          </span>

          <h1 className={styles.title}>
            Liquidación laboral en Colombia: calcule y reclame lo que le deben
          </h1>

          <p className={styles.subtitle}>
            Revisamos su liquidación laboral para detectar errores y ayudarle a
            recuperar cesantías, primas, vacaciones e indemnización que no le
            hayan pagado correctamente.
          </p>

          <div className={styles.heroActions}>
            <a
              href="https://api.whatsapp.com/send/?phone=573114659315"
              target="_blank"
              className={styles.ctaPrimary}
            >
              Revisar mi liquidación
            </a>

            <Link href="/blog" className={styles.ctaSecondary}>
              Ver guía completa
            </Link>
          </div>
        </div>
      </section>

      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>¿Qué es la liquidación laboral?</h2>

          <p>
            La liquidación laboral es el pago final que debe recibir un
            trabajador al terminar su contrato. Incluye prestaciones sociales y
            otros conceptos que deben calcularse correctamente según la ley.
          </p>

          <p>
            Sin embargo, en muchos casos las empresas cometen errores o excluyen
            valores importantes, generando pérdidas económicas para el
            trabajador.
          </p>
        </section>

        {/* PROBLEMAS */}
        <section className={styles.sectionGrid}>
          <div className={styles.cardInfo}>
            <h3>Errores comunes</h3>
            <ul>
              <li>No incluyen cesantías</li>
              <li>Prima mal calculada</li>
              <li>Vacaciones incompletas</li>
              <li>No reconocen horas extras</li>
              <li>Indemnización omitida</li>
            </ul>
          </div>

          <div className={styles.cardInfo}>
            <h3>Consecuencias</h3>
            <ul>
              <li>Pérdida de dinero</li>
              <li>Pagos inferiores a lo legal</li>
              <li>Dificultad para reclamar después</li>
              <li>Errores que afectan su historial laboral</li>
              <li>Desconocimiento de sus derechos</li>
            </ul>
          </div>
        </section>

        {/* SOLUCION */}
        <section className={styles.sectionAlt}>
          <h2>Cómo le ayudamos</h2>

          <ul className={styles.checklist}>
            <li>Revisión completa de su liquidación</li>
            <li>Cálculo exacto de valores</li>
            <li>Identificación de errores</li>
            <li>Reclamación a la empresa</li>
            <li>Demanda laboral si aplica</li>
          </ul>

          <p>
            Nuestro objetivo es que reciba el 100% de lo que le corresponde por
            ley.
          </p>
        </section>

        {/* PROCESO */}
        <section className={styles.process}>
          <h2>Proceso de revisión</h2>

          <div className={styles.processGrid}>
            <div className={styles.processItem}>
              <span>1</span>
              <p>Análisis de documentos</p>
            </div>

            <div className={styles.processItem}>
              <span>2</span>
              <p>Cálculo legal</p>
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
          <h2>¿Qué incluye la liquidación laboral?</h2>

          <p>
            Debe incluir cesantías, intereses de cesantías, prima de servicios,
            vacaciones y, dependiendo del caso, indemnización por despido.
          </p>

          <p>
            Cada componente debe calcularse con base en su salario y tiempo
            trabajado.
          </p>
        </section>

        {/* DIFERENCIAL */}
        <section className={styles.sectionHighlight}>
          <h2>Asesoría en todo Colombia</h2>

          <p>
            Atendemos casos en Bogotá y de manera virtual en todo el país,
            facilitando el acceso a asesoría legal especializada.
          </p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            <strong>
              Revise su liquidación hoy mismo y recupere su dinero.
            </strong>
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573114659315"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar revisión
          </a>
        </footer>
      </article>
    </main>
  );
}
