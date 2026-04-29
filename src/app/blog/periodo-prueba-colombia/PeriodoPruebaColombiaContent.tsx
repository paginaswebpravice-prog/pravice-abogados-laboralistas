"use client";

import Link from "next/link";
import styles from "../BlogContent.module.css";

export default function PeriodoPruebaColombia() {
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
            Periodo de prueba en Colombia: derechos y límites legales
          </h1>

          <p className={styles.subtitle}>
            Conozca cuánto puede durar el periodo de prueba, qué derechos tiene
            y cuándo un despido puede ser ilegal.
          </p>
        </div>
      </section>

      {/* ARTÍCULO */}
      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>¿Qué es el periodo de prueba en Colombia?</h2>

          <p>
            El periodo de prueba es una etapa inicial del contrato laboral en la
            que el empleador evalúa las capacidades del trabajador y este
            verifica si las condiciones del empleo son adecuadas.
          </p>

          <p>
            Durante este tiempo, ambas partes pueden dar por terminado el
            contrato sin necesidad de justificar la decisión, siempre que se
            respeten los límites legales.
          </p>
        </section>

        {/* DURACIÓN */}
        <section className={styles.sectionAlt}>
          <h2>¿Cuánto dura el periodo de prueba?</h2>

          <p>
            La duración del periodo de prueba depende del tipo de contrato
            laboral.
          </p>

          <ul className={styles.checklist}>
            <li>Contrato a término indefinido: hasta 2 meses</li>
            <li>Contrato a término fijo: máximo la quinta parte del plazo</li>
            <li>Contratos cortos: proporcional al tiempo pactado</li>
          </ul>

          <p>
            Si se excede este límite, el periodo de prueba puede considerarse
            inválido.
          </p>
        </section>

        {/* DERECHOS */}
        <section className={styles.section}>
          <h2>Derechos del trabajador en periodo de prueba</h2>

          <p>
            Estar en periodo de prueba no significa que el trabajador pierda sus
            derechos laborales.
          </p>

          <ul className={styles.checklist}>
            <li>Pago de salario completo</li>
            <li>Afiliación a seguridad social</li>
            <li>Pago de prestaciones sociales</li>
            <li>Derecho a condiciones dignas de trabajo</li>
          </ul>

          <p>
            El trabajador debe recibir el mismo trato que cualquier otro
            empleado.
          </p>
        </section>

        {/* DESPIDO */}
        <section className={styles.sectionAlt}>
          <h2>¿Pueden despedirlo durante el periodo de prueba?</h2>

          <p>
            Sí, el empleador puede terminar el contrato durante el periodo de
            prueba sin necesidad de justificar la decisión.
          </p>

          <p>
            Sin embargo, este despido no puede basarse en razones
            discriminatorias o violar derechos fundamentales.
          </p>

          <p>En esos casos, el despido puede ser considerado ilegal.</p>
        </section>

        {/* CASOS ILEGALES */}
        <section className={styles.section}>
          <h2>Cuándo el despido en periodo de prueba es ilegal</h2>

          <ul className={styles.checklist}>
            <li>Despido por embarazo</li>
            <li>Despido por enfermedad o discapacidad</li>
            <li>Discriminación por género, edad o religión</li>
            <li>Vulneración de derechos fundamentales</li>
          </ul>

          <p>
            En estos casos, el trabajador puede reclamar incluso reintegro o
            indemnización.
          </p>
        </section>

        {/* ERRORES */}
        <section className={styles.sectionAlt}>
          <h2>Errores comunes de los empleadores</h2>

          <p>
            Muchas empresas cometen errores al aplicar el periodo de prueba en
            Colombia.
          </p>

          <ul className={styles.checklist}>
            <li>No dejarlo por escrito en el contrato</li>
            <li>Extenderlo más allá del límite legal</li>
            <li>Usarlo de forma abusiva para evitar indemnizaciones</li>
            <li>Despedir sin respetar derechos fundamentales</li>
          </ul>

          <p>Estos errores pueden generar demandas laborales.</p>
        </section>

        {/* QUÉ HACER */}
        <section className={styles.section}>
          <h2>¿Qué hacer si vulneran sus derechos?</h2>

          <p>
            Si considera que su despido fue injusto o ilegal durante el periodo
            de prueba, puede iniciar una reclamación.
          </p>

          <p>
            Es recomendable recopilar pruebas y buscar asesoría legal para
            evaluar el caso.
          </p>

          <p>En algunos casos, es posible obtener indemnización o reintegro.</p>
        </section>

        {/* CIERRE */}
        <section className={styles.sectionHighlight}>
          <h2>El periodo de prueba no elimina sus derechos</h2>

          <p>
            Aunque permite mayor flexibilidad, el periodo de prueba no autoriza
            abusos por parte del empleador.
          </p>

          <p>Conocer la ley es clave para proteger su estabilidad laboral.</p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            <strong>
              ¿Fue despedido en periodo de prueba y cree que fue injusto?
              Podemos ayudarle a analizar su caso y defender sus derechos.
            </strong>
          </p>
        </footer>
      </article>
    </main>
  );
}
