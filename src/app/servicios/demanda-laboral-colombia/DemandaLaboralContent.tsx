"use client";

import Link from "next/link";
import styles from "../Servicios.module.css";
import { motion } from "framer-motion";

export default function DemandaLaboralContent() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContainer}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>
      </section>

      <article className={styles.article}>
        {/* INTRO */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
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
        </motion.section>

        {/* GRID */}
        <section className={styles.sectionGrid}>
          <motion.div
            className={styles.cardInfo}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Casos más comunes</h3>
            <ul>
              <li>No pago de salario</li>
              <li>Despido injustificado</li>
              <li>No pago de liquidación</li>
              <li>Contrato realidad</li>
              <li>Acoso laboral</li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.cardInfo}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Riesgos de no demandar</h3>
            <ul>
              <li>Pérdida de dinero</li>
              <li>Prescripción de derechos</li>
              <li>Dificultad para probar el caso</li>
              <li>Ventaja para la empresa</li>
              <li>Renuncia a indemnización</li>
            </ul>
          </motion.div>
        </section>

        {/* SOLUCIÓN */}
        <motion.section
          className={styles.sectionAlt}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
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
        </motion.section>

        {/* PROCESO */}
        <motion.section
          className={styles.process}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Proceso de una demanda laboral</h2>

          <div className={styles.processGrid}>
            {[1, 2, 3, 4].map((num, i) => (
              <motion.div
                key={i}
                className={styles.processItem}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span>{num}</span>
                <p>
                  {
                    [
                      "Evaluación del caso",
                      "Presentación de la demanda",
                      "Audiencias judiciales",
                      "Sentencia del juez",
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
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
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
        </motion.section>

        {/* DIFERENCIAL */}
        <motion.section
          className={styles.sectionHighlight}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2>Estrategia legal enfocada en resultados</h2>

          <p>
            No todas las demandas se ganan igual. Una correcta estructuración
            del caso y el uso adecuado de pruebas puede marcar la diferencia.
          </p>

          <p>Atendemos casos en Bogotá y en todo Colombia de forma virtual.</p>
        </motion.section>

        {/* CIERRE */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Consulte su caso</h2>

          <p>
            Antes de iniciar una demanda laboral, es clave evaluar la viabilidad
            del caso para evitar errores.
          </p>
        </motion.section>

        {/* CTA */}
        <motion.footer
          className={styles.footer}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            <strong>
              Inicie su demanda laboral con respaldo jurídico profesional.
            </strong>
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573114659315"
            target="_blank"
            className={styles.ctaButton}
            rel="noopener noreferrer"
          >
            Solicitar asesoría
          </a>
        </motion.footer>
      </article>
    </main>
  );
}
