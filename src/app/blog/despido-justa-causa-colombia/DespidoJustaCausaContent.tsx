"use client";

import Link from "next/link";
import styles from "../BlogContent.module.css";

export default function DespidoJustaCausa() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Derecho laboral Colombia</span>

          <h1 className={styles.title}>
            Despido con justa causa en Colombia: cuándo aplica realmente (2026)
          </h1>

          <p className={styles.subtitle}>
            Conozca cuándo un empleador puede despedir legalmente sin
            indemnización y qué hacer si la causa no está justificada.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>¿Qué es el despido con justa causa en Colombia?</h2>

          <p>
            El despido con justa causa ocurre cuando el empleador termina el
            contrato laboral basado en una razón válida establecida en la ley.
          </p>

          <p>
            En estos casos, el trabajador{" "}
            <strong>no tiene derecho a indemnización</strong>, pero sí al pago
            de su liquidación laboral.
          </p>

          <p>
            Sin embargo, no cualquier motivo es válido. La causa debe estar
            claramente demostrada y cumplir requisitos legales.
          </p>
        </section>

        {/* CAUSALES */}
        <section className={styles.sectionAlt}>
          <h2>Causales de despido con justa causa según la ley</h2>

          <p>
            El Código Sustantivo del Trabajo establece varias causales que
            permiten el despido sin indemnización.
          </p>

          <ul className={styles.checklist}>
            <li>Faltas graves de disciplina</li>
            <li>Incumplimiento de obligaciones laborales</li>
            <li>Actos de violencia o injuria</li>
            <li>Daños intencionales a la empresa</li>
            <li>Revelación de información confidencial</li>
            <li>Bajo rendimiento injustificado</li>
          </ul>

          <p>
            Estas causales deben ser probadas por el empleador para que el
            despido sea válido.
          </p>
        </section>

        {/* REQUISITOS */}
        <section className={styles.section}>
          <h2>Requisitos para que el despido sea legal</h2>

          <p>
            Para que un despido con justa causa sea válido en Colombia, deben
            cumplirse ciertos requisitos:
          </p>

          <ul className={styles.checklist}>
            <li>Existencia de una causa legal</li>
            <li>Pruebas claras del incumplimiento</li>
            <li>Respeto al debido proceso</li>
            <li>Comunicación formal al trabajador</li>
          </ul>

          <p>
            Si alguno de estos elementos falla, el despido puede considerarse
            injustificado.
          </p>
        </section>

        {/* ERRORES */}
        <section className={styles.sectionAlt}>
          <h2>Errores comunes de los empleadores</h2>

          <p>
            Muchas empresas cometen errores al aplicar despidos con justa causa,
            lo que puede generar demandas laborales.
          </p>

          <ul className={styles.checklist}>
            <li>No documentar las faltas</li>
            <li>No permitir defensa al trabajador</li>
            <li>Usar causas genéricas sin pruebas</li>
            <li>Despedir sin proceso disciplinario previo</li>
          </ul>

          <p>
            Estos errores pueden convertir un despido en injustificado ante un
            juez.
          </p>
        </section>

        {/* QUE HACER */}
        <section className={styles.section}>
          <h2>¿Qué hacer si lo despiden con justa causa?</h2>

          <p>
            Si considera que el despido no fue válido, puede tomar acciones
            legales.
          </p>

          <ul className={styles.checklist}>
            <li>Solicitar explicación formal del despido</li>
            <li>Revisar pruebas presentadas por la empresa</li>
            <li>Consultar con un abogado laboral</li>
            <li>Iniciar demanda si aplica</li>
          </ul>

          <p>
            Un análisis jurídico puede determinar si tiene derecho a
            indemnización.
          </p>
        </section>

        {/* CONCLUSION */}
        <section className={styles.sectionHighlight}>
          <h2>No todo despido con justa causa es válido</h2>

          <p>
            Aunque la ley permite el despido con justa causa, este debe cumplir
            requisitos estrictos.
          </p>

          <p>
            Muchos casos catalogados como “justa causa” en realidad no lo son,
            lo que abre la posibilidad de reclamar indemnización.
          </p>

          <p>
            Identificar esto a tiempo puede marcar la diferencia entre perder
            derechos o recuperarlos.
          </p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            <strong>
              ¿Fue despedido con justa causa en Colombia? Una revisión legal
              puede determinar si realmente aplica o si tiene derecho a
              reclamar.
            </strong>
          </p>
        </footer>
      </article>
    </main>
  );
}
