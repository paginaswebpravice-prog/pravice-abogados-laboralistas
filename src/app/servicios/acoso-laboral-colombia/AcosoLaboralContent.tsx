"use client";

import Link from "next/link";
import styles from "../Servicios.module.css";

export default function AcosoLaboralContent() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.badge}>Defensa laboral en Colombia</span>

          <h1 className={styles.title}>
            Acoso laboral en Colombia: denuncie y proteja sus derechos
          </h1>

          <p className={styles.subtitle}>
            Si está siendo víctima de acoso laboral, hostigamiento o presión en
            su trabajo, podemos ayudarle a actuar legalmente, reunir pruebas y
            proteger su estabilidad laboral.
          </p>

          <div className={styles.heroActions}>
            <a
              href="https://api.whatsapp.com/send/?phone=573114659315"
              target="_blank"
              className={styles.ctaPrimary}
            >
              Consultar por WhatsApp
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
          <h2>¿Qué es el acoso laboral?</h2>

          <p>
            El acoso laboral en Colombia ocurre cuando un trabajador es sometido
            a conductas repetitivas de hostigamiento, presión, intimidación o
            maltrato que afectan su dignidad, salud mental o estabilidad
            laboral.
          </p>

          <p>
            Estas situaciones no solo son ilegales, sino que pueden dar lugar a
            sanciones contra la empresa y a indemnizaciones a favor del
            trabajador.
          </p>
        </section>

        {/* GRID */}
        <section className={styles.sectionGrid}>
          <div className={styles.cardInfo}>
            <h3>Ejemplos de acoso laboral</h3>
            <ul>
              <li>Humillaciones constantes</li>
              <li>Asignación de tareas imposibles</li>
              <li>Aislamiento del trabajador</li>
              <li>Amenazas de despido</li>
              <li>Presión psicológica continua</li>
            </ul>
          </div>

          <div className={styles.cardInfo}>
            <h3>Consecuencias si no actúa</h3>
            <ul>
              <li>Afectación emocional y estrés</li>
              <li>Pérdida de estabilidad laboral</li>
              <li>Renuncia forzada</li>
              <li>Dificultad para probar el caso después</li>
              <li>Normalización del abuso</li>
            </ul>
          </div>
        </section>

        {/* SOLUCIÓN */}
        <section className={styles.sectionAlt}>
          <h2>Cómo le ayudamos a denunciar correctamente</h2>

          <p>
            No basta con “denunciar”. Es necesario hacerlo estratégicamente, con
            pruebas y dentro de los canales correctos.
          </p>

          <ul className={styles.checklist}>
            <li>Evaluación jurídica de su caso</li>
            <li>Identificación de conductas de acoso</li>
            <li>Recolección de pruebas válidas</li>
            <li>Asesoría para denuncia interna</li>
            <li>Demanda laboral si aplica</li>
          </ul>
        </section>

        {/* PROCESO */}
        <section className={styles.process}>
          <h2>Proceso para denunciar acoso laboral</h2>

          <div className={styles.processGrid}>
            <div className={styles.processItem}>
              <span>1</span>
              <p>Análisis de su situación laboral</p>
            </div>

            <div className={styles.processItem}>
              <span>2</span>
              <p>Recolección de pruebas</p>
            </div>

            <div className={styles.processItem}>
              <span>3</span>
              <p>Denuncia ante la empresa</p>
            </div>

            <div className={styles.processItem}>
              <span>4</span>
              <p>Acción legal si es necesario</p>
            </div>
          </div>
        </section>

        {/* SEO FUERTE */}
        <section className={styles.section}>
          <h2>¿Cómo probar el acoso laboral?</h2>

          <p>
            Uno de los errores más comunes es no documentar las situaciones de
            acoso. Sin pruebas, el caso pierde fuerza.
          </p>

          <p>
            Algunos elementos clave incluyen correos electrónicos, mensajes,
            testigos, grabaciones (en ciertos casos) y reportes internos.
          </p>

          <p>
            La forma en que se recopilan estas pruebas es determinante para el
            éxito del caso.
          </p>
        </section>

        {/* DIFERENCIAL */}
        <section className={styles.sectionHighlight}>
          <h2>Defensa laboral estratégica</h2>

          <p>
            Cada caso de acoso laboral es diferente. Por eso, diseñamos una
            estrategia personalizada que proteja sus derechos y maximice las
            posibilidades de éxito.
          </p>

          <p>Atendemos casos en Bogotá y en todo Colombia de forma virtual.</p>
        </section>

        {/* CIERRE */}
        <section className={styles.section}>
          <h2>Actúe a tiempo</h2>

          <p>
            El acoso laboral no debe normalizarse. Actuar a tiempo puede evitar
            daños mayores y fortalecer su caso legal.
          </p>
        </section>

        {/* CTA FINAL */}
        <footer className={styles.footer}>
          <p>
            <strong>
              Proteja su trabajo y su dignidad. Reciba asesoría legal hoy.
            </strong>
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573114659315"
            target="_blank"
            className={styles.ctaButton}
          >
            Hablar con un abogado
          </a>
        </footer>
      </article>
    </main>
  );
}
