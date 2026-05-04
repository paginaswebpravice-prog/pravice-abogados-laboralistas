"use client";

import Link from "next/link";
import styles from "../Servicios.module.css";
import { motion } from "framer-motion";

export default function NoPagoSalarioContent() {
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
          <span className={styles.badge}>
            Defensa laboral inmediata en Colombia
          </span>

          <h1 className={styles.title}>
            ¿No le han pagado su salario? Recupere su dinero legalmente
          </h1>

          <p className={styles.subtitle}>
            Si su empresa no le paga su sueldo, está vulnerando sus derechos
            laborales. Le ayudamos a reclamar su salario, prestaciones e
            indemnizaciones de forma rápida y efectiva en Colombia.
          </p>

          <div className={styles.heroActions}>
            <a
              href="https://api.whatsapp.com/send/?phone=573114659315"
              target="_blank"
              className={styles.ctaPrimary}
            >
              Reclamar mi salario
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
          <h2>¿Qué pasa si la empresa no paga el salario?</h2>

          <p>
            El salario es un derecho fundamental del trabajador en Colombia. Su
            no pago constituye una violación directa a la ley laboral y puede
            generar sanciones legales para el empleador.
          </p>

          <p>
            Muchas empresas retrasan pagos, pagan incompleto o simplemente dejan
            de pagar, afectando gravemente la estabilidad económica del
            trabajador.
          </p>

          <p>
            En estos casos, usted puede exigir el pago inmediato y, en algunos
            casos, incluso recibir indemnización adicional.
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
            <h3>Situaciones más comunes</h3>
            <ul>
              <li>Salarios atrasados por semanas o meses</li>
              <li>Pagos incompletos</li>
              <li>No pago de comisiones</li>
              <li>Empresa con excusas constantes</li>
              <li>Retención injustificada del sueldo</li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.cardInfo}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Consecuencias si no actúa</h3>
            <ul>
              <li>Pérdida de dinero difícil de recuperar</li>
              <li>Debilitamiento de su reclamación</li>
              <li>Prescripción de derechos laborales</li>
              <li>Mayor abuso por parte del empleador</li>
              <li>Impacto económico personal grave</li>
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
          <h2>Cómo le ayudamos a recuperar su salario</h2>

          <p>
            Diseñamos una estrategia legal enfocada en recuperar su dinero lo
            más rápido posible, ya sea mediante negociación directa o acción
            judicial.
          </p>

          <ul className={styles.checklist}>
            <li>Análisis de su contrato laboral</li>
            <li>Verificación de pagos pendientes</li>
            <li>Cálculo exacto de deuda</li>
            <li>Reclamación formal a la empresa</li>
            <li>Demanda laboral si es necesario</li>
          </ul>

          <p>
            Nuestro objetivo es que usted reciba cada peso que le corresponde
            por ley.
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
          <h2>Proceso para reclamar su salario</h2>

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
                      "Revisión de su caso",
                      "Cálculo de valores adeudados",
                      "Reclamación directa",
                      "Demanda laboral",
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
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>¿Puede renunciar si no le pagan?</h2>

          <p>
            Sí. En Colombia, el no pago del salario puede considerarse una causa
            válida para terminar el contrato con responsabilidad del empleador,
            lo que puede dar lugar a indemnización.
          </p>

          <p>
            Esto significa que usted no solo puede reclamar su salario, sino
            también otros pagos adicionales dependiendo del caso.
          </p>

          <p>
            Cada situación es diferente, por eso es clave analizar su caso antes
            de tomar decisiones.
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
          <h2>Defensa laboral en todo Colombia</h2>

          <p>
            Atendemos casos en Bogotá y en todo el país de manera remota, lo que
            permite que cualquier trabajador pueda acceder a asesoría legal sin
            importar su ubicación.
          </p>

          <p>
            Actuar rápido puede marcar la diferencia entre recuperar su dinero o
            perderlo.
          </p>
        </motion.section>

        {/* CIERRE */}
        <motion.section
          className={styles.section}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Reciba asesoría inmediata</h2>

          <p>
            Si su empresa no le paga, no espere más. Podemos analizar su caso y
            ayudarle a tomar la mejor decisión legal.
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
            <strong>
              Reclame su salario hoy mismo y proteja sus derechos laborales.
            </strong>
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573114659315"
            target="_blank"
            className={styles.ctaButton}
            rel="noreferrer noopener"
          >
            Solicitar asesoría ahora
          </a>
        </motion.footer>
      </article>
    </main>
  );
}
