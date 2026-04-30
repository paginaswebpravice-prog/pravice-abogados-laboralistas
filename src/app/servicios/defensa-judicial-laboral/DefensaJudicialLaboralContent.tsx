"use client";

import Link from "next/link";
import styles from "../Servicios.module.css";

export default function DefensaJudicialLaboralContent() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.badge}>Representación legal laboral</span>

          <h1 className={styles.title}>
            Defensa judicial laboral en Colombia: represente su caso con
            abogados expertos
          </h1>

          <p className={styles.subtitle}>
            Lo representamos en demandas laborales, audiencias y procesos
            judiciales. Defendemos sus derechos frente a empleadores, empresas y
            decisiones injustas.
          </p>

          <div className={styles.heroActions}>
            <a
              href="https://api.whatsapp.com/send/?phone=573114659315"
              target="_blank"
              className={styles.ctaPrimary}
            >
              Consultar mi caso
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
          <h2>¿Necesita un abogado para un proceso laboral?</h2>

          <p>
            Si está enfrentando una demanda laboral o necesita iniciar una,
            contar con una defensa judicial adecuada es fundamental para
            proteger sus derechos.
          </p>

          <p>
            Los procesos laborales en Colombia requieren conocimiento técnico,
            estrategia jurídica y experiencia en audiencias y pruebas.
          </p>
        </section>

        {/* GRID PROBLEMAS */}
        <section className={styles.sectionGrid}>
          <div className={styles.cardInfo}>
            <h3>Casos comunes</h3>
            <ul>
              <li>Despido injustificado</li>
              <li>No pago de salarios o prestaciones</li>
              <li>Acoso laboral</li>
              <li>Accidentes de trabajo</li>
              <li>Reclamaciones contra empleadores</li>
            </ul>
          </div>

          <div className={styles.cardInfo}>
            <h3>Riesgos sin defensa adecuada</h3>
            <ul>
              <li>Pérdida del proceso</li>
              <li>Pruebas mal presentadas</li>
              <li>Estrategia legal débil</li>
              <li>Menor indemnización</li>
              <li>Errores en audiencias</li>
            </ul>
          </div>
        </section>

        {/* SOLUCIÓN */}
        <section className={styles.sectionAlt}>
          <h2>Cómo lo representamos</h2>

          <ul className={styles.checklist}>
            <li>Análisis completo de su caso</li>
            <li>Definición de estrategia jurídica</li>
            <li>Preparación de pruebas</li>
            <li>Representación en audiencias</li>
            <li>Seguimiento del proceso judicial</li>
          </ul>

          <p>
            Nuestro objetivo es maximizar sus probabilidades de éxito y lograr
            el mejor resultado posible.
          </p>
        </section>

        {/* PROCESO */}
        <section className={styles.process}>
          <h2>Etapas del proceso judicial laboral</h2>

          <div className={styles.processGrid}>
            <div className={styles.processItem}>
              <span>1</span>
              <p>Evaluación del caso</p>
            </div>

            <div className={styles.processItem}>
              <span>2</span>
              <p>Presentación de demanda o defensa</p>
            </div>

            <div className={styles.processItem}>
              <span>3</span>
              <p>Audiencias y pruebas</p>
            </div>

            <div className={styles.processItem}>
              <span>4</span>
              <p>Sentencia y ejecución</p>
            </div>
          </div>
        </section>

        {/* SEO FUERTE */}
        <section className={styles.section}>
          <h2>¿Por qué es importante una buena defensa laboral?</h2>

          <p>
            En los procesos laborales, cada detalle cuenta. La forma en que se
            presentan las pruebas, los argumentos jurídicos y la estrategia
            utilizada pueden determinar el resultado del caso.
          </p>

          <p>
            Una defensa adecuada puede significar obtener una indemnización
            completa o perder derechos importantes.
          </p>
        </section>

        {/* DIFERENCIAL */}
        <section className={styles.sectionHighlight}>
          <h2>Defensa laboral estratégica en Colombia</h2>

          <p>
            No solo representamos su caso, diseñamos una estrategia para ganar.
            Analizamos cada detalle para fortalecer su posición frente a la
            contraparte.
          </p>

          <p>Atendemos en Bogotá y en todo el país de forma virtual.</p>
        </section>

        {/* CIERRE */}
        <section className={styles.section}>
          <h2>Asesoría legal para su proceso laboral</h2>

          <p>
            Si está involucrado en un proceso laboral o está considerando
            iniciar uno, es fundamental actuar con asesoría legal desde el
            inicio.
          </p>

          <p>
            Una buena estrategia desde el principio aumenta significativamente
            las probabilidades de éxito.
          </p>
        </section>

        {/* CTA FINAL */}
        <footer className={styles.footer}>
          <p>
            <strong>
              Defienda sus derechos con representación legal experta.
            </strong>
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573114659315"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar asesoría ahora
          </a>
        </footer>
      </article>
    </main>
  );
}
