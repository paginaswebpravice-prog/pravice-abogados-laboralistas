"use client";

import Link from "next/link";
import styles from "../BlogContent.module.css";

export default function DespidoInjustificadoContent() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Guía laboral 2026</span>

          <h1 className={styles.title}>
            Despido injustificado en Colombia: qué hacer paso a paso
          </h1>

          <p className={styles.subtitle}>
            Si fue despedido sin justa causa, conozca sus derechos, cómo
            reclamar indemnización y qué acciones legales tomar en Colombia.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>¿Qué es un despido injustificado en Colombia?</h2>

          <p>
            Un despido injustificado ocurre cuando el empleador termina el
            contrato laboral sin una causa válida establecida en la legislación
            colombiana.
          </p>

          <p>
            En Colombia, el empleador solo puede despedir sin pagar
            indemnización cuando existe una justa causa demostrable. Si esto no
            ocurre, el trabajador tiene derecho a reclamar una compensación
            económica.
          </p>

          <p>
            Este tipo de despido es más común de lo que parece, especialmente en
            situaciones donde las empresas buscan reducir costos o terminar
            relaciones laborales sin seguir el debido proceso.
          </p>
        </section>

        {/* SEÑALES */}
        <section className={styles.sectionAlt}>
          <h2>Cómo identificar un despido injustificado</h2>

          <p>
            Existen varias señales que pueden indicar que su despido fue
            injustificado:
          </p>

          <ul className={styles.checklist}>
            <li>No le entregaron una causa clara por escrito</li>
            <li>No hubo proceso disciplinario previo</li>
            <li>No existen pruebas de faltas laborales</li>
            <li>Fue despedido de forma repentina</li>
            <li>Le presionaron para firmar documentos</li>
          </ul>

          <p>
            Si identifica una o varias de estas situaciones, es altamente
            probable que tenga derecho a una indemnización.
          </p>
        </section>

        {/* PASOS */}
        <section className={styles.section}>
          <h2>Qué hacer inmediatamente después de un despido</h2>

          <p>
            Las primeras decisiones después del despido son determinantes para
            el éxito de una reclamación laboral:
          </p>

          <ul className={styles.checklist}>
            <li>Solicitar la carta de despido</li>
            <li>Revisar detalladamente la liquidación</li>
            <li>No firmar paz y salvo sin asesoría</li>
            <li>Guardar correos, contratos y pruebas</li>
            <li>Consultar con un abogado laboral</li>
          </ul>

          <p>
            Muchos trabajadores pierden dinero simplemente por actuar sin
            asesoría en esta etapa.
          </p>
        </section>

        {/* INDEMNIZACIÓN */}
        <section className={styles.sectionAlt}>
          <h2>Cómo funciona la indemnización por despido injustificado</h2>

          <p>La indemnización depende principalmente de tres factores:</p>

          <ul className={styles.checklist}>
            <li>Tipo de contrato (fijo o indefinido)</li>
            <li>Salario del trabajador</li>
            <li>Tiempo de servicio</li>
          </ul>

          <p>
            En contratos a término indefinido, la indemnización aumenta con los
            años trabajados. En contratos a término fijo, suele corresponder al
            tiempo restante del contrato.
          </p>

          <p>
            Es importante tener en cuenta que muchas empresas calculan mal estas
            indemnizaciones, afectando directamente al trabajador.
          </p>
        </section>

        {/* DEMANDA */}
        <section className={styles.section}>
          <h2>Demanda laboral por despido injustificado</h2>

          <p>
            Cuando no se llega a un acuerdo con el empleador, el trabajador
            puede presentar una demanda laboral.
          </p>

          <p>Este proceso permite reclamar:</p>

          <ul className={styles.checklist}>
            <li>Indemnización completa</li>
            <li>Salarios pendientes</li>
            <li>Prestaciones sociales</li>
            <li>Intereses y sanciones</li>
          </ul>

          <p>
            Un proceso bien estructurado puede aumentar significativamente el
            valor a recuperar.
          </p>
        </section>

        {/* ERRORES */}
        <section className={styles.sectionAlt}>
          <h2>Errores que debe evitar</h2>

          <ul className={styles.checklist}>
            <li>Firmar documentos sin leer</li>
            <li>Aceptar pagos incompletos</li>
            <li>No actuar a tiempo</li>
            <li>No guardar evidencia</li>
          </ul>

          <p>
            Estos errores son una de las principales razones por las que los
            trabajadores pierden dinero.
          </p>
        </section>

        {/* BLOQUE ESTRATÉGICO */}
        <section className={styles.sectionHighlight}>
          <h2>La clave está en actuar con estrategia</h2>

          <p>
            Un despido injustificado no es solo una situación incómoda: es una
            oportunidad para reclamar derechos laborales que muchas veces son
            vulnerados.
          </p>

          <p>
            Con la estrategia adecuada, es posible recuperar dinero y proteger
            su historial laboral.
          </p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            ¿Fue despedido sin justa causa?{" "}
            <strong>
              PRAVICE analiza su caso y le ayuda a reclamar lo que le
              corresponde.
            </strong>
          </p>
        </footer>
      </article>
    </main>
  );
}
