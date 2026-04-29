"use client";

import Link from "next/link";
import styles from "../BlogContent.module.css";

export default function LiquidacionLaboralColombiaContent() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Guía práctica 2026</span>

          <h1 className={styles.title}>
            Cómo calcular la liquidación laboral en Colombia paso a paso (con
            ejemplos)
          </h1>

          <p className={styles.subtitle}>
            Aprenda a calcular correctamente su liquidación laboral en Colombia:
            cesantías, intereses, primas, vacaciones e indemnización sin
            errores.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>¿Qué es la liquidación laboral en Colombia?</h2>

          <p>
            La liquidación laboral es el pago que el empleador debe realizar al
            trabajador cuando finaliza el contrato de trabajo, sin importar la
            causa.
          </p>

          <p>
            Este pago incluye todas las prestaciones sociales y conceptos
            pendientes como cesantías, primas, vacaciones y en algunos casos
            indemnización.
          </p>

          <p>
            Calcular correctamente la liquidación es fundamental para evitar
            conflictos legales o pérdidas económicas.
          </p>
        </section>

        {/* COMPONENTES */}
        <section className={styles.sectionAlt}>
          <h2>Conceptos que incluye una liquidación laboral</h2>

          <ul className={styles.checklist}>
            <li>Cesantías</li>
            <li>Intereses sobre cesantías</li>
            <li>Prima de servicios</li>
            <li>Vacaciones</li>
            <li>Salarios pendientes</li>
            <li>Indemnización (si aplica)</li>
          </ul>

          <p>
            Cada uno de estos conceptos se calcula de manera independiente según
            el tiempo trabajado y el salario.
          </p>
        </section>

        {/* CESANTIAS */}
        <section className={styles.section}>
          <h2>Cómo calcular las cesantías</h2>

          <p>
            Las cesantías corresponden a un mes de salario por cada año
            trabajado o proporcional al tiempo laborado.
          </p>

          <div className={styles.highlightBox}>
            <p>
              <strong>Fórmula:</strong> (Salario × Días trabajados) / 360
            </p>
          </div>

          <p>Ejemplo: si gana $1.500.000 y trabajó 180 días:</p>

          <p>(1.500.000 × 180) / 360 = $750.000</p>
        </section>

        {/* INTERESES */}
        <section className={styles.sectionAlt}>
          <h2>Intereses sobre cesantías</h2>

          <p>
            El empleador debe pagar el 12% anual sobre el valor de las
            cesantías.
          </p>

          <div className={styles.highlightBox}>
            <p>
              <strong>Fórmula:</strong> (Cesantías × Días trabajados × 0.12) /
              360
            </p>
          </div>

          <p>Este valor es adicional y obligatorio por ley.</p>
        </section>

        {/* PRIMA */}
        <section className={styles.section}>
          <h2>Cómo calcular la prima de servicios</h2>

          <p>
            La prima corresponde a 30 días de salario por año, dividida en dos
            pagos (junio y diciembre).
          </p>

          <div className={styles.highlightBox}>
            <p>
              <strong>Fórmula:</strong> (Salario × Días trabajados) / 360
            </p>
          </div>

          <p>
            Se calcula igual que las cesantías, pero se paga directamente al
            trabajador.
          </p>
        </section>

        {/* VACACIONES */}
        <section className={styles.sectionAlt}>
          <h2>Vacaciones en la liquidación</h2>

          <p>
            Las vacaciones corresponden a 15 días hábiles por cada año
            trabajado.
          </p>

          <div className={styles.highlightBox}>
            <p>
              <strong>Fórmula:</strong> (Salario × Días trabajados) / 720
            </p>
          </div>

          <p>Este valor se paga si el trabajador no disfrutó sus vacaciones.</p>
        </section>

        {/* INDEMNIZACION */}
        <section className={styles.section}>
          <h2>Indemnización por despido (si aplica)</h2>

          <p>
            Si el despido fue sin justa causa, el trabajador tiene derecho a una
            indemnización adicional.
          </p>

          <p>El valor depende del tipo de contrato y el tiempo trabajado.</p>

          <p>
            En contratos a término indefinido, puede variar entre 30 días de
            salario o más según la antigüedad.
          </p>
        </section>

        {/* ERRORES */}
        <section className={styles.sectionAlt}>
          <h2>Errores comunes al calcular la liquidación</h2>

          <ul className={styles.checklist}>
            <li>No incluir todos los conceptos</li>
            <li>Calcular mal los días trabajados</li>
            <li>No incluir indemnización cuando aplica</li>
            <li>Usar salario incorrecto</li>
          </ul>

          <p>
            Estos errores pueden generar demandas laborales o pagos adicionales.
          </p>
        </section>

        {/* CTA */}
        <section className={styles.sectionHighlight}>
          <h2>¿Tiene dudas sobre su liquidación?</h2>

          <p>
            Una mala liquidación puede significar pérdida de dinero o problemas
            legales.
          </p>

          <p>
            Revisar su caso con un abogado laboral puede ayudarle a reclamar lo
            que realmente le corresponde.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>
              Calcule correctamente su liquidación y proteja sus derechos en
              Colombia.
            </strong>
          </p>
        </footer>
      </article>
    </main>
  );
}
