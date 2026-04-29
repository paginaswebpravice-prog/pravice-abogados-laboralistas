"use client";

import Link from "next/link";
import styles from "../BlogContent.module.css";

export default function DemandaLaboralColombiaContent() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Guía legal 2026</span>

          <h1 className={styles.title}>
            Demanda laboral en Colombia: requisitos, proceso y tiempos reales
            paso a paso
          </h1>

          <p className={styles.subtitle}>
            Conozca cómo demandar a su empleador en Colombia, qué necesita,
            cuánto tarda el proceso y cómo aumentar sus probabilidades de éxito.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>¿Qué es una demanda laboral en Colombia?</h2>

          <p>
            Una demanda laboral es un proceso judicial mediante el cual un
            trabajador reclama sus derechos cuando considera que han sido
            vulnerados por su empleador.
          </p>

          <p>
            Es el mecanismo legal más efectivo para exigir pagos pendientes,
            indemnizaciones o reconocimiento de prestaciones sociales.
          </p>

          <p>
            En Colombia, este proceso se tramita ante jueces laborales y puede
            incluir audiencias, pruebas y decisiones judiciales obligatorias.
          </p>
        </section>

        {/* CUANDO DEMANDAR */}
        <section className={styles.sectionAlt}>
          <h2>¿Cuándo se puede demandar laboralmente?</h2>

          <ul className={styles.checklist}>
            <li>Despido sin justa causa</li>
            <li>No pago de salarios o prestaciones</li>
            <li>Acoso laboral</li>
            <li>Incumplimiento de contrato</li>
            <li>Liquidación incorrecta</li>
            <li>Falta de afiliación a seguridad social</li>
          </ul>

          <p>
            Si existe incumplimiento por parte del empleador, el trabajador
            tiene derecho a acudir a la justicia.
          </p>
        </section>

        {/* REQUISITOS */}
        <section className={styles.section}>
          <h2>Requisitos para presentar una demanda laboral</h2>

          <p>
            Para iniciar una demanda laboral en Colombia, es fundamental contar
            con ciertos elementos básicos que respalden la reclamación.
          </p>

          <ul className={styles.checklist}>
            <li>Documento de identidad</li>
            <li>Contrato laboral (si existe)</li>
            <li>Pruebas de la relación laboral</li>
            <li>Desprendibles de pago o comprobantes</li>
            <li>Comunicación de despido (si aplica)</li>
          </ul>

          <p>
            Incluso si no hay contrato escrito, se puede demandar con pruebas
            como testigos o consignaciones.
          </p>
        </section>

        {/* PROCESO */}
        <section className={styles.sectionAlt}>
          <h2>Etapas del proceso laboral en Colombia</h2>

          <p>
            El proceso laboral sigue una serie de etapas que deben cumplirse
            ante el juez:
          </p>

          <ul className={styles.checklist}>
            <li>Presentación de la demanda</li>
            <li>Admisión por el juez</li>
            <li>Audiencia de conciliación</li>
            <li>Audiencia de pruebas</li>
            <li>Sentencia</li>
          </ul>

          <p>
            En algunos casos, el proceso puede resolverse en conciliación sin
            llegar a sentencia.
          </p>
        </section>

        {/* TIEMPOS */}
        <section className={styles.section}>
          <h2>¿Cuánto dura una demanda laboral?</h2>

          <p>
            El tiempo de una demanda laboral en Colombia puede variar según la
            complejidad del caso y la congestión judicial.
          </p>

          <div className={styles.highlightBox}>
            <p>
              <strong>Tiempo estimado:</strong> entre 6 meses y 2 años
            </p>
          </div>

          <p>
            Algunos procesos pueden resolverse más rápido si hay conciliación o
            pruebas claras.
          </p>
        </section>

        {/* COSTOS */}
        <section className={styles.sectionAlt}>
          <h2>¿Cuánto cuesta demandar laboralmente?</h2>

          <p>
            En muchos casos, los abogados laborales trabajan bajo modalidad de
            cuota de éxito, lo que significa que solo cobran si se gana el caso.
          </p>

          <p>
            Esto permite que los trabajadores accedan a la justicia sin grandes
            costos iniciales.
          </p>
        </section>

        {/* ERRORES */}
        <section className={styles.section}>
          <h2>Errores comunes al demandar</h2>

          <ul className={styles.checklist}>
            <li>No reunir pruebas suficientes</li>
            <li>Dejar vencer los términos legales</li>
            <li>No buscar asesoría jurídica</li>
            <li>Aceptar acuerdos desfavorables</li>
          </ul>

          <p>
            Estos errores pueden afectar gravemente el resultado del proceso.
          </p>
        </section>

        {/* RECOMENDACION */}
        <section className={styles.sectionHighlight}>
          <h2>Clave para ganar una demanda laboral</h2>

          <p>
            El éxito en una demanda laboral depende principalmente de la
            estrategia jurídica y la calidad de las pruebas.
          </p>

          <p>
            Actuar a tiempo y contar con asesoría especializada aumenta
            significativamente las probabilidades de éxito.
          </p>
        </section>

        {/* CIERRE */}
        <section className={styles.section}>
          <h2>Defienda sus derechos laborales en Colombia</h2>

          <p>
            Si sus derechos han sido vulnerados, iniciar una demanda laboral
            puede ser la mejor opción para obtener justicia.
          </p>

          <p>
            No actuar puede significar perder dinero o derechos importantes.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>
              Inicie su demanda laboral con estrategia y aumente sus
              probabilidades de éxito en Colombia.
            </strong>
          </p>
        </footer>
      </article>
    </main>
  );
}
