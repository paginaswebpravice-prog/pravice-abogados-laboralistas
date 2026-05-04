"use client";

import Link from "next/link";
import styles from "../Servicios.module.css";
import { motion } from "framer-motion";

export default function AcosoLaboralContent() {
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
        </motion.section>

        {/* GRID */}
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
            <h3>Ejemplos de acoso laboral</h3>
            <ul>
              <li>Humillaciones constantes</li>
              <li>Asignación de tareas imposibles</li>
              <li>Aislamiento del trabajador</li>
              <li>Amenazas de despido</li>
              <li>Presión psicológica continua</li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.cardInfo}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3>Consecuencias si no actúa</h3>
            <ul>
              <li>Afectación emocional y estrés</li>
              <li>Pérdida de estabilidad laboral</li>
              <li>Renuncia forzada</li>
              <li>Dificultad para probar el caso después</li>
              <li>Normalización del abuso</li>
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
        </motion.section>

        {/* PROCESO */}
        <motion.section
          className={styles.process}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Proceso para denunciar acoso laboral</h2>

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
                      "Análisis de su situación laboral",
                      "Recolección de pruebas",
                      "Denuncia ante la empresa",
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
        </motion.section>

        {/* DIFERENCIAL */}
        <motion.section
          className={styles.sectionHighlight}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2>Defensa laboral estratégica</h2>

          <p>
            Cada caso de acoso laboral es diferente. Por eso, diseñamos una
            estrategia personalizada que proteja sus derechos y maximice las
            posibilidades de éxito.
          </p>

          <p>Atendemos casos en Bogotá y en todo Colombia de forma virtual.</p>
        </motion.section>

        {/* CIERRE */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Actúe a tiempo</h2>

          <p>
            El acoso laboral no debe normalizarse. Actuar a tiempo puede evitar
            daños mayores y fortalecer su caso legal.
          </p>
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
              Proteja su trabajo y su dignidad. Reciba asesoría legal hoy.
            </strong>
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573114659315"
            target="_blank"
            className={styles.ctaButton}
            rel="noopener noreferrer"
          >
            Hablar con un abogado
          </a>
        </motion.footer>
      </article>
    </main>
  );
}
