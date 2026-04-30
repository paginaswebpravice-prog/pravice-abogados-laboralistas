"use client";

import Link from "next/link";
import styles from "../Servicios.module.css";

export default function NoPagoSalarioContent() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
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
        </div>
      </section>

      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
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
        </section>

        {/* PROBLEMAS */}
        <section className={styles.sectionGrid}>
          <div className={styles.cardInfo}>
            <h3>Situaciones más comunes</h3>
            <ul>
              <li>Salarios atrasados por semanas o meses</li>
              <li>Pagos incompletos</li>
              <li>No pago de comisiones</li>
              <li>Empresa con excusas constantes</li>
              <li>Retención injustificada del sueldo</li>
            </ul>
          </div>

          <div className={styles.cardInfo}>
            <h3>Consecuencias si no actúa</h3>
            <ul>
              <li>Pérdida de dinero difícil de recuperar</li>
              <li>Debilitamiento de su reclamación</li>
              <li>Prescripción de derechos laborales</li>
              <li>Mayor abuso por parte del empleador</li>
              <li>Impacto económico personal grave</li>
            </ul>
          </div>
        </section>

        {/* SOLUCION */}
        <section className={styles.sectionAlt}>
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
        </section>

        {/* PROCESO */}
        <section className={styles.process}>
          <h2>Proceso para reclamar su salario</h2>

          <div className={styles.processGrid}>
            <div className={styles.processItem}>
              <span>1</span>
              <p>Revisión de su caso</p>
            </div>

            <div className={styles.processItem}>
              <span>2</span>
              <p>Cálculo de valores adeudados</p>
            </div>

            <div className={styles.processItem}>
              <span>3</span>
              <p>Reclamación directa</p>
            </div>

            <div className={styles.processItem}>
              <span>4</span>
              <p>Demanda laboral</p>
            </div>
          </div>
        </section>

        {/* SEO FUERTE */}
        <section className={styles.section}>
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
        </section>

        {/* DIFERENCIAL */}
        <section className={styles.sectionHighlight}>
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
        </section>

        {/* CIERRE */}
        <section className={styles.section}>
          <h2>Reciba asesoría inmediata</h2>

          <p>
            Si su empresa no le paga, no espere más. Podemos analizar su caso y
            ayudarle a tomar la mejor decisión legal.
          </p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            <strong>
              Reclame su salario hoy mismo y proteja sus derechos laborales.
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
