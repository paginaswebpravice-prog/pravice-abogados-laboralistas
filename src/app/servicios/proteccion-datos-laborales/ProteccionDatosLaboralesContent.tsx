"use client";

import Link from "next/link";
import styles from "../Servicios.module.css";
import { motion } from "framer-motion";

export default function ProteccionDatosLaboralesContent() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.heroContainer}>
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Cumplimiento legal empresarial
          </motion.span>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Protección de datos laborales en Colombia: evite sanciones y cumpla
            la ley
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Asesoramos empresas en el manejo legal de datos personales de
            empleados, cumplimiento de Habeas Data y prevención de sanciones en
            Colombia.
          </motion.p>

          <motion.div
            className={styles.heroActions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="https://api.whatsapp.com/send/?phone=573114659315"
              target="_blank"
              className={styles.ctaPrimary}
            >
              Asesoría en protección de datos
            </a>

            <Link href="/blog" className={styles.ctaSecondary}>
              Ver contenido legal
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
          <h2>¿Qué es la protección de datos laborales?</h2>

          <p>
            La protección de datos laborales hace referencia al manejo adecuado
            de la información personal de los empleados dentro de una empresa,
            conforme a la legislación colombiana.
          </p>

          <p>
            Esto incluye datos sensibles, información médica, historial laboral,
            evaluaciones y cualquier información que identifique al trabajador.
          </p>

          <p>
            Su mal manejo puede generar sanciones económicas, demandas y daños
            reputacionales para la empresa.
          </p>
        </motion.section>

        {/* GRID */}
        <motion.section
          className={styles.sectionGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className={styles.cardInfo}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Datos que debe proteger</h3>
            <ul>
              <li>Información personal del trabajador</li>
              <li>Datos de salud</li>
              <li>Historial laboral</li>
              <li>Evaluaciones de desempeño</li>
              <li>Información salarial</li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.cardInfo}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Riesgos de incumplimiento</h3>
            <ul>
              <li>Sanciones de la SIC</li>
              <li>Demandas de empleados</li>
              <li>Multas económicas altas</li>
              <li>Daño reputacional</li>
              <li>Problemas legales futuros</li>
            </ul>
          </motion.div>
        </motion.section>

        {/* SOLUCIÓN */}
        <motion.section
          className={styles.sectionAlt}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Cómo ayudamos a su empresa</h2>

          <ul className={styles.checklist}>
            <li>Diagnóstico de cumplimiento legal</li>
            <li>Diseño de políticas de tratamiento de datos</li>
            <li>Elaboración de autorizaciones</li>
            <li>Capacitación a empleados</li>
            <li>Defensa ante sanciones</li>
          </ul>

          <p>
            Nuestro enfoque garantiza que su empresa cumpla con la ley y reduzca
            riesgos legales.
          </p>
        </motion.section>

        {/* PROCESO */}
        <motion.section
          className={styles.process}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Proceso de implementación</h2>

          <div className={styles.processGrid}>
            {[1, 2, 3, 4].map((step, i) => (
              <motion.div
                key={i}
                className={styles.processItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span>{step}</span>
                <p>
                  {
                    [
                      "Diagnóstico legal",
                      "Diseño de políticas",
                      "Implementación",
                      "Seguimiento y control",
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
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>¿Qué dice la ley en Colombia?</h2>

          <p>
            La Ley 1581 de 2012 regula la protección de datos personales en
            Colombia y obliga a las empresas a garantizar el correcto manejo de
            la información.
          </p>

          <p>
            Esto incluye obtener autorizaciones, proteger datos sensibles y
            garantizar derechos como acceso, rectificación y eliminación.
          </p>
        </motion.section>

        {/* DIFERENCIAL */}
        <motion.section
          className={styles.sectionHighlight}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Asesoría legal especializada</h2>

          <p>
            No solo implementamos políticas, diseñamos estrategias legales para
            proteger su empresa frente a auditorías y sanciones.
          </p>

          <p>
            Atendemos empresas en Bogotá y en todo Colombia de forma virtual.
          </p>
        </motion.section>

        {/* CIERRE */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Cumpla la ley y proteja su empresa</h2>

          <p>
            La protección de datos no es opcional. Implementarla correctamente
            puede evitar sanciones y fortalecer la confianza dentro de su
            organización.
          </p>
        </motion.section>

        {/* CTA */}
        <motion.footer
          className={styles.footer}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            <strong>
              Evite sanciones y cumpla con la ley de protección de datos hoy
              mismo.
            </strong>
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573114659315"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </motion.footer>
      </article>
    </main>
  );
}
