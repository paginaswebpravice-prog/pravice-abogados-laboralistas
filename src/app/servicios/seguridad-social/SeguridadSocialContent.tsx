"use client";

import Link from "next/link";
import styles from "../Servicios.module.css";
import { motion } from "framer-motion";

export default function SeguridadSocialContent() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={styles.heroContainer}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
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
        </motion.div>
      </motion.section>

      <article className={styles.article}>
        {/* INTRO */}
        <motion.section
          className={styles.section}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
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
        </motion.section>

        {/* PROBLEMAS */}
        <motion.section
          className={styles.sectionGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className={styles.cardInfo}
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Situaciones frecuentes</h3>
            <ul>
              <li>No lo afiliaron a seguridad social</li>
              <li>No cotizan regularmente</li>
              <li>Le descuentan pero no pagan</li>
              <li>Aportes incompletos</li>
              <li>Falta de afiliación a ARL</li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.cardInfo}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Riesgos graves</h3>
            <ul>
              <li>No acceso a servicios de salud</li>
              <li>Pérdida de semanas de pensión</li>
              <li>Falta de cobertura en accidentes</li>
              <li>Problemas legales futuros</li>
              <li>Pérdidas económicas importantes</li>
            </ul>
          </motion.div>
        </motion.section>

        {/* SOLUCION */}
        <motion.section
          className={styles.sectionAlt}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
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
        </motion.section>

        {/* PROCESO */}
        <motion.section
          className={styles.process}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Proceso legal</h2>

          <div className={styles.processGrid}>
            {[1, 2, 3, 4].map((step, i) => (
              <motion.div
                key={i}
                className={styles.processItem}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.15 }}
              >
                <span>{step}</span>
                <p>
                  {
                    [
                      "Análisis del caso",
                      "Validación de aportes",
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
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>¿Cómo saber si su empresa está cotizando?</h2>

          <p>
            Puede verificar directamente en su EPS, fondo de pensiones o ARL si
            existen aportes registrados a su nombre.
          </p>

          <p>
            Si detecta inconsistencias, es importante actuar rápidamente para
            evitar la pérdida de derechos.
          </p>
        </motion.section>

        {/* DIFERENCIAL */}
        <motion.section
          className={styles.sectionHighlight}
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Asesoría en todo Colombia</h2>

          <p>
            Atendemos casos en Bogotá y de manera virtual en todo el país,
            permitiendo acceso a defensa legal sin importar su ubicación.
          </p>
        </motion.section>

        {/* CTA */}
        <motion.footer
          className={styles.footer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            <strong>Proteja su futuro y recupere sus aportes hoy mismo.</strong>
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
