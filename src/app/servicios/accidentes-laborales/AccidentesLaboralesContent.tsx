"use client";

import Link from "next/link";
import styles from "../Servicios.module.css";
import { motion } from "framer-motion";

export default function AccidentesLaboralesContent() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className={styles.heroContainer}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>
      </motion.section>

      <article className={styles.article}>
        {/* INTRO */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
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
        </motion.section>

        {/* GRID PROBLEMAS */}
        <motion.section
          className={styles.sectionGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className={styles.cardInfo}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3>Problemas frecuentes</h3>
            <ul>
              <li>La empresa no reporta el accidente</li>
              <li>La ARL niega el reconocimiento</li>
              <li>No pagan incapacidades</li>
              <li>Clasifican mal el origen del accidente</li>
              <li>Despido posterior al accidente</li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.cardInfo}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3>Consecuencias de no reclamar</h3>
            <ul>
              <li>Pérdida de indemnización</li>
              <li>No acceso a pensión por invalidez</li>
              <li>Gastos médicos no cubiertos</li>
              <li>Reducción de ingresos</li>
              <li>Desprotección legal total</li>
            </ul>
          </motion.div>
        </motion.section>

        {/* SOLUCIÓN */}
        <motion.section
          className={styles.sectionAlt}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
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
        </motion.section>

        {/* PROCESO */}
        <motion.section
          className={styles.process}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Proceso de reclamación</h2>

          <div className={styles.processGrid}>
            {[1, 2, 3, 4].map((step, i) => (
              <motion.div
                key={i}
                className={styles.processItem}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <span>{step}</span>
                <p>
                  {
                    [
                      "Evaluación del accidente",
                      "Determinación de responsabilidad",
                      "Reclamación ante ARL",
                      "Acción legal si es necesario",
                    ][i]
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SEO FUERTE */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
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
        </motion.section>

        {/* DIFERENCIAL */}
        <motion.section
          className={styles.sectionHighlight}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2>Defensa frente a ARL y empleadores</h2>

          <p>
            No todas las decisiones de la ARL son correctas. Analizamos su caso
            para identificar errores y exigir el cumplimiento de sus derechos.
          </p>

          <p>Atendemos en Bogotá y todo Colombia de forma virtual.</p>
        </motion.section>

        {/* CTA FINAL */}
        <motion.footer
          className={styles.footer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
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
        </motion.footer>
      </article>
    </main>
  );
}
