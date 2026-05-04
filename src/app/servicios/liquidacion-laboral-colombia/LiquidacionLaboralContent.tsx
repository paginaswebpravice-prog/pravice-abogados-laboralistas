"use client";

import Link from "next/link";
import styles from "../Servicios.module.css";
import { motion } from "framer-motion";

export default function LiquidacionLaboralContent() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.heroContainer}>
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Abogados laboralistas en Colombia
          </motion.span>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Liquidación laboral en Colombia: calcule y reclame lo que le deben
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Revisamos su liquidación laboral para detectar errores y ayudarle a
            recuperar cesantías, primas, vacaciones e indemnización que no le
            hayan pagado correctamente.
          </motion.p>

          <motion.div
            className={styles.heroActions}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
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
          </motion.div>
        </div>
      </motion.section>

      <article className={styles.article}>
        {/* INTRO */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
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
        </motion.section>

        {/* PROBLEMAS */}
        <motion.section
          className={styles.sectionGrid}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className={styles.cardInfo}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Errores comunes</h3>
            <ul>
              <li>No incluyen cesantías</li>
              <li>Prima mal calculada</li>
              <li>Vacaciones incompletas</li>
              <li>No reconocen horas extras</li>
              <li>Indemnización omitida</li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.cardInfo}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Consecuencias</h3>
            <ul>
              <li>Pérdida de dinero</li>
              <li>Pagos inferiores a lo legal</li>
              <li>Dificultad para reclamar después</li>
              <li>Errores que afectan su historial laboral</li>
              <li>Desconocimiento de sus derechos</li>
            </ul>
          </motion.div>
        </motion.section>

        {/* SOLUCION */}
        <motion.section
          className={styles.sectionAlt}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
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
        </motion.section>

        {/* PROCESO */}
        <motion.section
          className={styles.process}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Proceso de revisión</h2>

          <div className={styles.processGrid}>
            {[1, 2, 3, 4].map((step, i) => (
              <motion.div
                key={i}
                className={styles.processItem}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span>{step}</span>
                <p>
                  {
                    [
                      "Análisis de documentos",
                      "Cálculo legal",
                      "Reclamación",
                      "Acción judicial",
                    ][i]
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SEO */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>¿Qué incluye la liquidación laboral?</h2>

          <p>
            Debe incluir cesantías, intereses de cesantías, prima de servicios,
            vacaciones y, dependiendo del caso, indemnización por despido.
          </p>

          <p>
            Cada componente debe calcularse con base en su salario y tiempo
            trabajado.
          </p>
        </motion.section>

        {/* DIFERENCIAL */}
        <motion.section
          className={styles.sectionHighlight}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Asesoría en todo Colombia</h2>

          <p>
            Atendemos casos en Bogotá y de manera virtual en todo el país,
            facilitando el acceso a asesoría legal especializada.
          </p>
        </motion.section>

        {/* CTA */}
        <motion.footer
          className={styles.footer}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            <strong>
              Revise su liquidación hoy mismo y recupere su dinero.
            </strong>
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573114659315"
            target="_blank"
            className={styles.ctaButton}
            rel="noopener noreferrer"
          >
            Solicitar revisión
          </a>
        </motion.footer>
      </article>
    </main>
  );
}
