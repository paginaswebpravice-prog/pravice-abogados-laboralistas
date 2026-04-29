"use client";

import Link from "next/link";
import styles from "../Article.module.css";

export default function IndemnizacionDespidoColombiaContent() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Derecho laboral en Colombia</span>

          <h1 className={styles.title}>
            Indemnización por despido en Colombia: cuánto deben pagarle
          </h1>

          <p className={styles.subtitle}>
            Conozca cuánto dinero le corresponde si fue despedido sin justa
            causa y cómo calcular correctamente su indemnización.
          </p>
        </div>
      </section>

      {/* ARTÍCULO */}
      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>¿Qué es la indemnización por despido en Colombia?</h2>

          <p>
            La indemnización por despido es el dinero que el empleador debe
            pagar al trabajador cuando finaliza el contrato sin una causa legal
            válida.
          </p>

          <p>
            Este pago busca compensar al trabajador por la terminación
            unilateral del contrato y proteger su estabilidad económica.
          </p>
        </section>

        {/* CUÁNDO APLICA */}
        <section className={styles.sectionAlt}>
          <h2>¿Cuándo deben pagar indemnización?</h2>

          <p>
            La indemnización aplica principalmente cuando el trabajador es
            despedido sin justa causa.
          </p>

          <p>
            Si existe una causa legal válida comprobable, el empleador no está
            obligado a pagarla.
          </p>

          <p>
            Por eso, es clave analizar si el despido realmente fue justificado o
            no.
          </p>
        </section>

        {/* TIPOS */}
        <section className={styles.section}>
          <h2>Tipos de contrato y cómo afecta la indemnización</h2>

          <ul className={styles.checklist}>
            <li>Contrato a término indefinido</li>
            <li>Contrato a término fijo</li>
            <li>Contrato por obra o labor</li>
          </ul>

          <p>
            Cada tipo de contrato tiene reglas diferentes para calcular la
            indemnización.
          </p>
        </section>

        {/* CÁLCULO INDEFINIDO */}
        <section className={styles.sectionAlt}>
          <h2>Indemnización en contrato a término indefinido</h2>

          <p>
            En este tipo de contrato, la indemnización depende del salario y del
            tiempo trabajado.
          </p>

          <p>
            Generalmente se reconoce un número de días de salario por el primer
            año y un valor adicional por cada año siguiente.
          </p>

          <p>Entre mayor sea la antigüedad, mayor será el valor a recibir.</p>
        </section>

        {/* FIJO */}
        <section className={styles.section}>
          <h2>Indemnización en contrato a término fijo</h2>

          <p>
            En los contratos a término fijo, la indemnización corresponde al
            tiempo que faltaba para finalizar el contrato.
          </p>

          <p>
            Esto significa que el empleador debe pagar los salarios restantes
            hasta la fecha pactada de finalización.
          </p>
        </section>

        {/* EJEMPLO */}
        <section className={styles.sectionAlt}>
          <h2>Ejemplo práctico de indemnización</h2>

          <p>
            Si un trabajador con contrato indefinido es despedido sin justa
            causa después de varios años de servicio, el cálculo incluirá el
            salario base y los años trabajados.
          </p>

          <p>
            Este valor puede variar considerablemente dependiendo del caso
            específico.
          </p>
        </section>

        {/* ERRORES */}
        <section className={styles.section}>
          <h2>Errores comunes al pagar indemnizaciones</h2>

          <ul className={styles.checklist}>
            <li>No pagar la indemnización completa</li>
            <li>Calcular mal el salario base</li>
            <li>No incluir factores salariales</li>
            <li>Intentar justificar el despido sin pruebas</li>
          </ul>

          <p>
            Estos errores pueden generar demandas laborales y sanciones para el
            empleador.
          </p>
        </section>

        {/* QUÉ HACER */}
        <section className={styles.sectionAlt}>
          <h2>¿Qué hacer si no le pagan correctamente?</h2>

          <p>
            Si la indemnización no fue pagada o fue mal liquidada, el trabajador
            puede reclamar formalmente.
          </p>

          <p>
            En caso de no obtener respuesta, puede acudir a una demanda laboral
            para exigir el pago completo.
          </p>

          <p>
            Contar con asesoría legal aumenta significativamente las
            probabilidades de éxito.
          </p>
        </section>

        {/* TIEMPO */}
        <section className={styles.section}>
          <h2>Tiempo límite para reclamar</h2>

          <p>
            La ley establece un plazo para reclamar indemnizaciones laborales.
          </p>

          <p>
            Si no se actúa dentro de este tiempo, se puede perder el derecho a
            exigir el pago.
          </p>
        </section>

        {/* CIERRE */}
        <section className={styles.sectionHighlight}>
          <h2>Defienda su derecho a una indemnización justa</h2>

          <p>
            Un despido sin justa causa no debe dejarlo sin protección económica.
          </p>

          <p>
            Con una estrategia legal adecuada, es posible recuperar el dinero
            que le corresponde.
          </p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            <strong>
              ¿Fue despedido y no le pagaron correctamente? Nuestro equipo
              jurídico puede ayudarle a reclamar su indemnización.
            </strong>
          </p>
        </footer>
      </article>
    </main>
  );
}
