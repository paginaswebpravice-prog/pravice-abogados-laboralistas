"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Blog.module.css";

const articles = [
  {
    title: "Despido injustificado en Colombia: qué hacer paso a paso (2026)",
    slug: "despido-injustificado-colombia",
    description:
      "Guía legal completa para trabajadores despedidos sin justa causa en Colombia y cómo reclamar indemnización.",
  },
  {
    title:
      "Cómo calcular la liquidación laboral en Colombia (fácil y correcto)",
    slug: "liquidacion-laboral-colombia",
    description:
      "Aprenda a calcular cesantías, primas, vacaciones e indemnización sin errores.",
  },
  {
    title: "Demanda laboral en Colombia: requisitos, proceso y tiempos reales",
    slug: "demanda-laboral-colombia",
    description:
      "Todo lo que debe saber antes de iniciar una demanda laboral en Colombia.",
  },
  {
    title: "Tipos de contrato laboral en Colombia y sus diferencias legales",
    slug: "tipos-contrato-laboral-colombia",
    description:
      "Conozca los contratos laborales y cómo afectan sus derechos y estabilidad.",
  },
  {
    title: "Acoso laboral en Colombia: cómo denunciar y proteger sus derechos",
    slug: "acoso-laboral-colombia",
    description:
      "Guía legal para identificar acoso laboral y actuar correctamente en Colombia.",
  },
  {
    title: "Horas extras en Colombia: cuándo deben pagarse y cómo reclamarlas",
    slug: "horas-extras-colombia",
    description:
      "Reglas legales sobre horas extras, recargos y pagos obligatorios.",
  },
  {
    title: "Indemnización por despido en Colombia: cuánto deben pagarle",
    slug: "indemnizacion-despido-colombia",
    description:
      "Calcule cuánto le corresponde por despido injustificado en Colombia.",
  },
  {
    title: "Periodo de prueba en Colombia: derechos y límites legales",
    slug: "periodo-prueba-colombia",
    description:
      "Qué puede y qué no puede hacer una empresa durante el periodo de prueba.",
  },
  {
    title:
      "Renuncia laboral en Colombia: derechos, liquidación y recomendaciones",
    slug: "renuncia-laboral-colombia",
    description:
      "Todo lo que debe saber antes de renunciar a su trabajo en Colombia.",
  },
  {
    title: "Contrato por prestación de servicios vs laboral: diferencias clave",
    slug: "contrato-servicios-vs-laboral-colombia",
    description:
      "Evite errores legales: conozca cuándo existe realmente un contrato laboral.",
  },
  {
    title: "Despido con justa causa en Colombia: cuándo aplica realmente",
    slug: "despido-justa-causa-colombia",
    description:
      "Conozca cuándo una empresa puede despedir legalmente sin indemnización.",
  },
  {
    title: "Vacaciones laborales en Colombia: cómo se calculan y pagan",
    slug: "vacaciones-laborales-colombia",
    description:
      "Reglas legales sobre vacaciones, acumulación y pago en Colombia.",
  },
  {
    title: "Licencias laborales en Colombia: maternidad, paternidad y más",
    slug: "licencias-laborales-colombia",
    description:
      "Tipos de licencias laborales y derechos de los trabajadores en Colombia.",
  },
  {
    title: "Embargo de salario en Colombia: cuánto pueden descontarle",
    slug: "embargo-salario-colombia",
    description:
      "Conozca los límites legales del embargo de salario en Colombia.",
  },
  {
    title: "Qué hacer si no le pagan su salario en Colombia (guía legal)",
    slug: "no-pago-salario-colombia",
    description: "Pasos legales para reclamar salarios pendientes en Colombia.",
  },
];

export default function BlogClient() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContainer}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className={styles.badge}>Blog jurídico laboral</span>

          <h1 className={styles.title}>
            Derecho laboral en Colombia explicado fácil y sin enredos
          </h1>

          <p className={styles.subtitle}>
            Guías prácticas sobre despidos, liquidaciones, demandas laborales y
            derechos del trabajador en Colombia.
          </p>

          <Link href="/" className={styles.backLink}>
            ← Volver al inicio
          </Link>
        </motion.div>
      </section>

      {/* GRID */}
      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${article.slug}`} className={styles.card}>
                <div className={styles.cardInner}>
                  <h2 className={styles.cardTitle}>{article.title}</h2>

                  <p className={styles.cardDescription}>
                    {article.description}
                  </p>

                  <span className={styles.readMore}>Leer artículo →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2>¿Necesita asesoría laboral en Colombia?</h2>

          <p>
            Nuestro equipo de abogados laboralistas en Bogotá está listo para
            analizar su caso y ayudarle.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573114659315"
            target="_blank"
            className={styles.ctaButton}
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
