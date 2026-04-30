"use client";

import Link from "next/link";
import styles from "../Servicios.module.css";

export default function AccidentesLaboralesContent() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.badge}>Accidentes laborales en Colombia</span>

          <h1 className={styles.title}>
            ¿Sufrió un accidente laboral? Reclame su indemnización y derechos
          </h1>

          <p className={styles.subtitle}>
            Le ayudamos a reclamar incapacidades, indemnizaciones, pensión por
            invalidez o cualquier derecho vulnerado tras un accidente de trabajo
            en Colombia.
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
              Ver guías legales
            </Link>
          </div>
        </div>
      </section>

      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>¿Qué es un accidente laboral en Colombia?</h2>

          <p>
            Un accidente laboral es cualquier evento que ocurre por causa o con
            ocasión del trabajo y que genera una lesión, incapacidad o incluso
            la muerte del trabajador.
          </p>

          <p>
            Esto incluye accidentes dentro del lugar de trabajo, durante
            desplazamientos laborales o ejecutando funciones asignadas.
          </p>
        </section>

        {/* GRID PROBLEMAS */}
        <section className={styles.sectionGrid}>
          <div className={styles.cardInfo}>
            <h3>Problemas frecuentes</h3>
            <ul>
              <li>La empresa no reporta el accidente</li>
              <li>La ARL niega el reconocimiento</li>
              <li>No pagan incapacidades</li>
              <li>Clasifican mal el origen del accidente</li>
              <li>Despido posterior al accidente</li>
            </ul>
          </div>

          <div className={styles.cardInfo}>
            <h3>Consecuencias de no reclamar</h3>
            <ul>
              <li>Pérdida de indemnización</li>
              <li>No acceso a pensión por invalidez</li>
              <li>Gastos médicos no cubiertos</li>
              <li>Reducción de ingresos</li>
              <li>Desprotección legal total</li>
            </ul>
          </div>
        </section>

        {/* SOLUCIÓN */}
        <section className={styles.sectionAlt}>
          <h2>Cómo le ayudamos</h2>

          <ul className={styles.checklist}>
            <li>Análisis del accidente laboral</li>
            <li>Revisión de responsabilidad de empresa y ARL</li>
            <li>Reclamación de incapacidades y prestaciones</li>
            <li>Indemnización por daños</li>
            <li>Demandas laborales si aplica</li>
          </ul>

          <p>
            Nuestro enfoque es maximizar su compensación económica y garantizar
            que reciba todos los beneficios legales.
          </p>
        </section>

        {/* PROCESO */}
        <section className={styles.process}>
          <h2>Proceso de reclamación</h2>

          <div className={styles.processGrid}>
            <div className={styles.processItem}>
              <span>1</span>
              <p>Evaluación del accidente</p>
            </div>

            <div className={styles.processItem}>
              <span>2</span>
              <p>Determinación de responsabilidad</p>
            </div>

            <div className={styles.processItem}>
              <span>3</span>
              <p>Reclamación ante ARL</p>
            </div>

            <div className={styles.processItem}>
              <span>4</span>
              <p>Acción legal si es necesario</p>
            </div>
          </div>
        </section>

        {/* SEO FUERTE */}
        <section className={styles.section}>
          <h2>¿Qué puede reclamar por un accidente laboral?</h2>

          <p>
            Dependiendo del caso, usted puede tener derecho a incapacidades,
            indemnización por pérdida de capacidad laboral, pensión de invalidez
            o incluso reparación completa por daños y perjuicios.
          </p>

          <p>
            Muchas veces las ARL limitan los pagos o rechazan reclamaciones, por
            lo que es clave contar con asesoría legal especializada.
          </p>
        </section>

        {/* DIFERENCIAL */}
        <section className={styles.sectionHighlight}>
          <h2>Defensa frente a ARL y empleadores</h2>

          <p>
            No todas las decisiones de la ARL son correctas. Analizamos su caso
            para identificar errores y exigir el cumplimiento de sus derechos.
          </p>

          <p>Atendemos en Bogotá y todo Colombia de forma virtual.</p>
        </section>

        {/* CTA FINAL */}
        <footer className={styles.footer}>
          <p>
            <strong>
              Reciba asesoría legal y proteja sus derechos tras un accidente
              laboral.
            </strong>
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573114659315"
            target="_blank"
            className={styles.ctaButton}
          >
            Consultar ahora
          </a>
        </footer>
      </article>
    </main>
  );
}
