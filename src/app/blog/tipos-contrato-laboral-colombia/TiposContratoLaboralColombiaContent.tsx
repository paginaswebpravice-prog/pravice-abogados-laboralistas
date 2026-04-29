"use client";

import Link from "next/link";
import styles from "../Article.module.css";

export default function TiposContratoLaboralColombia() {
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
            Tipos de contrato laboral en Colombia y sus diferencias legales
          </h1>

          <p className={styles.subtitle}>
            Conozca los tipos de contrato laboral en Colombia, sus
            características, ventajas y cuál le conviene según su situación.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>¿Qué es un contrato laboral en Colombia?</h2>

          <p>
            El contrato laboral es un acuerdo entre un trabajador y un empleador
            en el que se establecen las condiciones bajo las cuales se prestará
            un servicio personal a cambio de un salario.
          </p>

          <p>
            Este contrato genera derechos y obligaciones para ambas partes, y
            está regulado por el Código Sustantivo del Trabajo en Colombia.
          </p>

          <p>
            Elegir el tipo de contrato adecuado es fundamental, ya que impacta
            aspectos como estabilidad, prestaciones sociales e indemnización.
          </p>
        </section>

        {/* TIPOS */}
        <section className={styles.sectionAlt}>
          <h2>Tipos de contrato laboral en Colombia</h2>

          <p>
            En Colombia existen varios tipos de contrato laboral, cada uno con
            características específicas:
          </p>

          <ul className={styles.checklist}>
            <li>Contrato a término indefinido</li>
            <li>Contrato a término fijo</li>
            <li>Contrato por obra o labor</li>
            <li>Contrato de prestación de servicios</li>
          </ul>
        </section>

        {/* INDEFINIDO */}
        <section className={styles.section}>
          <h2>Contrato a término indefinido</h2>

          <p>
            Es el contrato más estable, ya que no tiene una fecha de
            finalización definida.
          </p>

          <p>
            Permanece vigente hasta que una de las partes decida terminarlo, ya
            sea con justa causa o mediante indemnización.
          </p>

          <p>
            Este tipo de contrato otorga mayor estabilidad laboral y acceso a
            todas las prestaciones sociales.
          </p>
        </section>

        {/* FIJO */}
        <section className={styles.sectionAlt}>
          <h2>Contrato a término fijo</h2>

          <p>Tiene una duración determinada que debe constar por escrito.</p>

          <p>
            Puede ser renovado sucesivamente, pero debe cumplir ciertas reglas
            legales.
          </p>

          <p>
            Si el empleador no notifica su terminación con anticipación, se
            renueva automáticamente.
          </p>
        </section>

        {/* OBRA */}
        <section className={styles.section}>
          <h2>Contrato por obra o labor</h2>

          <p>
            Este contrato se utiliza para trabajos específicos que tienen un
            inicio y un final definido.
          </p>

          <p>
            Finaliza automáticamente cuando se termina la obra o labor para la
            cual fue contratado el trabajador.
          </p>

          <p>Es común en sectores como construcción o proyectos temporales.</p>
        </section>

        {/* SERVICIOS */}
        <section className={styles.sectionAlt}>
          <h2>Contrato de prestación de servicios</h2>

          <p>No es un contrato laboral, sino un contrato civil o comercial.</p>

          <p>
            El contratista no tiene subordinación y no recibe prestaciones
            sociales.
          </p>

          <p>
            Sin embargo, en muchos casos se usa incorrectamente para ocultar una
            relación laboral real.
          </p>
        </section>

        {/* DIFERENCIAS */}
        <section className={styles.section}>
          <h2>Diferencias clave entre los contratos</h2>

          <ul className={styles.checklist}>
            <li>Duración del contrato</li>
            <li>Estabilidad laboral</li>
            <li>Pago de prestaciones sociales</li>
            <li>Indemnización en caso de despido</li>
            <li>Existencia de subordinación</li>
          </ul>

          <p>
            Estas diferencias impactan directamente los derechos del trabajador.
          </p>
        </section>

        {/* RIESGOS */}
        <section className={styles.sectionAlt}>
          <h2>Errores comunes en contratación laboral</h2>

          <ul className={styles.checklist}>
            <li>Usar contratos de servicios para relaciones laborales</li>
            <li>No formalizar contratos por escrito</li>
            <li>No pagar prestaciones sociales</li>
            <li>Desconocer las obligaciones legales</li>
          </ul>

          <p>Estos errores pueden generar sanciones y demandas laborales.</p>
        </section>

        {/* RECOMENDACION */}
        <section className={styles.sectionHighlight}>
          <h2>¿Qué contrato laboral le conviene?</h2>

          <p>
            La elección del contrato depende del tipo de trabajo, duración y
            necesidades del empleador.
          </p>

          <p>
            Sin embargo, desde el punto de vista del trabajador, el contrato a
            término indefinido ofrece mayor protección y estabilidad.
          </p>
        </section>

        {/* CIERRE */}
        <section className={styles.section}>
          <h2>Proteja sus derechos laborales en Colombia</h2>

          <p>
            Conocer los tipos de contrato laboral le permite identificar
            irregularidades y tomar decisiones informadas.
          </p>

          <p>
            Si considera que su contrato no cumple con la ley, es recomendable
            buscar asesoría jurídica.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>
              Conozca su contrato y evite riesgos legales en Colombia.
            </strong>
          </p>
        </footer>
      </article>
    </main>
  );
}
