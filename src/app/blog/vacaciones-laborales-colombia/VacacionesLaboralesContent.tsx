"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function VacacionesLaborales() {
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
            Vacaciones laborales en Colombia: cómo se calculan y pagan (2026)
          </h1>

          <p className={styles.subtitle}>
            Conozca cuántos días de vacaciones le corresponden, cómo se liquidan
            y qué hacer si su empleador no las reconoce.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>¿Cuántos días de vacaciones corresponden en Colombia?</h2>

          <p>
            En Colombia, todo trabajador tiene derecho a{" "}
            <strong>15 días hábiles de vacaciones</strong> por cada año de
            trabajo.
          </p>

          <p>
            Este derecho aplica tanto para contratos a término fijo como
            indefinido.
          </p>

          <p>
            Las vacaciones son un descanso remunerado obligatorio que busca
            proteger la salud física y mental del trabajador.
          </p>
        </section>

        {/* CALCULO */}
        <section className={styles.sectionAlt}>
          <h2>Cómo se calculan las vacaciones laborales</h2>

          <p>
            El cálculo de las vacaciones se basa en el tiempo trabajado y el
            salario del empleado.
          </p>

          <p>
            La fórmula general es proporcional al tiempo laborado si no se ha
            cumplido el año completo.
          </p>

          <ul className={styles.checklist}>
            <li>15 días hábiles por cada año trabajado</li>
            <li>Proporcional si trabajó menos de un año</li>
            <li>Se calculan sobre el salario ordinario</li>
          </ul>

          <p>
            Es importante tener en cuenta que las vacaciones no incluyen
            domingos ni festivos.
          </p>
        </section>

        {/* PAGO */}
        <section className={styles.section}>
          <h2>Cómo se pagan las vacaciones en Colombia</h2>

          <p>
            Las vacaciones deben pagarse con base en el salario que el
            trabajador esté devengando al momento de disfrutarlas.
          </p>

          <p>
            Este pago debe realizarse antes de iniciar el periodo de descanso.
          </p>

          <ul className={styles.checklist}>
            <li>Se pagan como salario normal</li>
            <li>No incluyen auxilio de transporte</li>
            <li>Se cancelan antes de salir a vacaciones</li>
          </ul>

          <p>
            En algunos casos, si el contrato termina, las vacaciones se pagan en
            dinero dentro de la liquidación.
          </p>
        </section>

        {/* ACUMULAR */}
        <section className={styles.sectionAlt}>
          <h2>¿Se pueden acumular las vacaciones?</h2>

          <p>
            Sí, pero con límites. La ley permite acumular vacaciones hasta por
            dos años.
          </p>

          <p>
            Sin embargo, no es recomendable acumularlas por largos periodos, ya
            que el descanso es un derecho obligatorio.
          </p>

          <p>
            El empleador también puede exigir que el trabajador tome sus
            vacaciones.
          </p>
        </section>

        {/* ERRORES */}
        <section className={styles.section}>
          <h2>Errores comunes sobre las vacaciones laborales</h2>

          <ul className={styles.checklist}>
            <li>Creer que se pierden si no se toman</li>
            <li>No pagarlas correctamente</li>
            <li>Obligar a trabajar durante el descanso</li>
            <li>No reconocer vacaciones en la liquidación</li>
          </ul>

          <p>
            Estos errores pueden generar sanciones para el empleador y derechos
            reclamables para el trabajador.
          </p>
        </section>

        {/* QUE HACER */}
        <section className={styles.sectionHighlight}>
          <h2>¿Qué hacer si no le reconocen sus vacaciones?</h2>

          <p>
            Si su empleador no le otorga o paga correctamente sus vacaciones,
            puede tomar acciones legales.
          </p>

          <ul className={styles.checklist}>
            <li>Solicitar el reconocimiento formal</li>
            <li>Revisar su contrato y tiempo trabajado</li>
            <li>Consultar con un abogado laboral</li>
            <li>Iniciar reclamación si es necesario</li>
          </ul>

          <p>Las vacaciones son un derecho irrenunciable y deben respetarse.</p>
        </section>

        {/* CONCLUSION */}
        <section className={styles.section}>
          <h2>Conclusión: las vacaciones son un derecho obligatorio</h2>

          <p>
            Todo trabajador en Colombia tiene derecho a vacaciones remuneradas y
            su reconocimiento no es opcional.
          </p>

          <p>
            Entender cómo se calculan y pagan permite evitar abusos y proteger
            sus derechos laborales.
          </p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            <strong>
              ¿No le han pagado o reconocido sus vacaciones en Colombia? Una
              asesoría legal puede ayudarle a reclamar lo que le corresponde.
            </strong>
          </p>
        </footer>
      </article>
    </main>
  );
}
