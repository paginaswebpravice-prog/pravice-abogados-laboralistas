"use client";

import Link from "next/link";
import styles from "../Servicios.module.css";
import { motion } from "framer-motion";

export default function DespidosLaboralesContent() {
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
            Despido injustificado en Colombia: recupere su indemnización
            completa
          </h1>

          <p className={styles.subtitle}>
            Si fue despedido sin justa causa o su empresa no le pagó lo que
            corresponde, podemos ayudarle a recuperar su dinero mediante una
            estrategia legal clara, rápida y efectiva en Colombia.
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
          <h2>¿Fue despedido sin justa causa en Colombia?</h2>

          <p>
            El despido injustificado ocurre cuando una empresa finaliza su
            contrato laboral sin una causa legal válida o sin cumplir los
            requisitos establecidos en la legislación laboral colombiana.
          </p>

          <p>
            En estos casos, el trabajador tiene derecho a recibir una
            indemnización económica adicional a su liquidación, la cual muchas
            veces no es pagada correctamente o es calculada de forma errónea.
          </p>
        </motion.section>

        {/* PROBLEMAS */}
        <section className={styles.sectionGrid}>
          <motion.div
            className={styles.cardInfo}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Situaciones frecuentes</h3>
            <ul>
              <li>No le pagan indemnización</li>
              <li>Liquidación incompleta o incorrecta</li>
              <li>Despido sin explicación válida</li>
              <li>Le hacen firmar documentos bajo presión</li>
              <li>Terminación verbal del contrato</li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.cardInfo}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Riesgos si no actúa</h3>
            <ul>
              <li>Pérdida total o parcial de su dinero</li>
              <li>Dificultad para reclamar después</li>
              <li>Prescripción de derechos laborales</li>
              <li>Errores que debilitan su caso</li>
              <li>Aprovechamiento por parte de la empresa</li>
            </ul>
          </motion.div>
        </section>

        {/* SOLUCION */}
        <motion.section
          className={styles.sectionAlt}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Cómo le ayudamos a recuperar su indemnización</h2>

          <p>
            Nuestro equipo jurídico analiza su caso desde una perspectiva
            estratégica para identificar errores de la empresa y maximizar el
            valor de su reclamación.
          </p>

          <ul className={styles.checklist}>
            <li>Estudio completo de su contrato laboral</li>
            <li>Verificación de legalidad del despido</li>
            <li>Cálculo preciso de indemnización</li>
            <li>Reclamación directa a la empresa</li>
            <li>Negociación o demanda laboral</li>
          </ul>

          <p>
            No solo buscamos que le paguen, sino que le paguen correctamente y
            en el menor tiempo posible.
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
          <h2>Proceso legal paso a paso</h2>

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
                      "Análisis de documentos laborales",
                      "Determinación del tipo de despido",
                      "Cálculo de valores a reclamar",
                      "Negociación o demanda judicial",
                    ][i]
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTENIDO SEO FUERTE */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>¿Cuánto deben pagarle por despido injustificado?</h2>

          <p>
            El valor de la indemnización depende de factores como el tipo de
            contrato, el salario y el tiempo trabajado. En contratos a término
            indefinido, la ley establece una base mínima que aumenta según la
            antigüedad del trabajador.
          </p>

          <p>
            Sin embargo, en la práctica muchas empresas calculan mal estos
            valores o excluyen conceptos importantes, lo que puede generar
            pérdidas significativas.
          </p>

          <p>
            Por eso es clave realizar una revisión jurídica antes de aceptar
            cualquier pago.
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
          <h2>Defensa laboral estratégica en Colombia</h2>

          <p>
            No todos los despidos son legales, y no todas las liquidaciones
            están bien calculadas. Una asesoría adecuada puede representar una
            diferencia económica significativa.
          </p>

          <p>
            Atendemos casos en Bogotá y en todo el país de forma remota,
            permitiendo que cualquier trabajador acceda a defensa legal sin
            importar su ubicación.
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
          <h2>Asesoría laboral inmediata</h2>

          <p>
            Si tiene dudas sobre su despido o ya recibió una liquidación,
            podemos revisarla y orientarlo sobre los pasos a seguir.
          </p>

          <p>
            Actuar a tiempo es clave para evitar la pérdida de sus derechos
            laborales.
          </p>
        </motion.section>

        {/* CTA FINAL */}
        <motion.footer
          className={styles.footer}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            <strong>
              Consulte su caso hoy mismo y recupere lo que legalmente le
              corresponde.
            </strong>
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573114659315"
            target="_blank"
            className={styles.ctaButton}
            rel="noopener noreferrer"
          >
            Solicitar asesoría por WhatsApp
          </a>
        </motion.footer>
      </article>
    </main>
  );
}
