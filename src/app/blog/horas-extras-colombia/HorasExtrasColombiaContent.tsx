"use client";

import Link from "next/link";
import styles from "../BlogContent.module.css";

export default function HorasExtrasColombia() {
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
            Horas extras en Colombia: cuándo deben pagarse y cómo reclamarlas
          </h1>

          <p className={styles.subtitle}>
            Conozca sus derechos laborales, cómo calcular horas extras y qué
            hacer si su empleador no se las paga correctamente.
          </p>
        </div>
      </section>

      {/* ARTÍCULO */}
      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>¿Qué son las horas extras en Colombia?</h2>

          <p>
            Las horas extras son aquellas que un trabajador realiza por fuera de
            su jornada laboral ordinaria. En Colombia, la ley establece límites
            claros sobre la duración de la jornada y obliga al empleador a pagar
            recargos cuando estos límites se superan.
          </p>

          <p>
            Esto aplica tanto para trabajadores del sector privado como para
            aquellos vinculados mediante contratos laborales formales.
          </p>
        </section>

        {/* CUÁNDO SE PAGAN */}
        <section className={styles.sectionAlt}>
          <h2>¿Cuándo se deben pagar las horas extras?</h2>

          <p>
            Las horas extras deben pagarse cuando el trabajador supera la
            jornada máxima legal establecida en Colombia.
          </p>

          <p>
            Actualmente, la jornada laboral se ha venido reduciendo gradualmente
            y no puede exceder el límite semanal establecido por la ley.
          </p>

          <p>
            Cualquier tiempo adicional trabajado debe ser reconocido como hora
            extra y pagado con recargo.
          </p>
        </section>

        {/* TIPOS */}
        <section className={styles.section}>
          <h2>Tipos de horas extras y sus recargos</h2>

          <ul className={styles.checklist}>
            <li>Hora extra diurna: recargo adicional sobre el valor normal</li>
            <li>Nocturna: mayor recargo por trabajo en la noche</li>
            <li>Dominical o festiva: recargos más altos</li>
            <li>Extra nocturna dominical: el mayor recargo permitido</li>
          </ul>

          <p>
            Cada tipo de hora extra tiene un porcentaje diferente que incrementa
            el valor del salario ordinario.
          </p>
        </section>

        {/* CÁLCULO */}
        <section className={styles.sectionAlt}>
          <h2>Cómo calcular las horas extras correctamente</h2>

          <p>
            Para calcular una hora extra, primero se debe determinar el valor de
            la hora ordinaria dividiendo el salario mensual entre las horas
            trabajadas en el mes.
          </p>

          <p>
            Luego, se aplica el recargo correspondiente según el tipo de hora
            extra.
          </p>

          <p>
            Un error común es no incluir todos los factores salariales en el
            cálculo, lo que puede afectar el valor real a pagar.
          </p>
        </section>

        {/* ERRORES */}
        <section className={styles.section}>
          <h2>Errores comunes de los empleadores</h2>

          <p>
            En Colombia, muchos empleadores cometen errores al manejar las horas
            extras, lo que puede generar sanciones legales.
          </p>

          <ul className={styles.checklist}>
            <li>No pagar horas extras trabajadas</li>
            <li>No llevar control de jornada</li>
            <li>Compensar horas sin autorización legal</li>
            <li>Incluirlas dentro del salario sin claridad</li>
          </ul>

          <p>
            Estas prácticas pueden dar lugar a demandas laborales por parte del
            trabajador.
          </p>
        </section>

        {/* QUÉ HACER */}
        <section className={styles.sectionAlt}>
          <h2>¿Qué hacer si no le pagan las horas extras?</h2>

          <p>
            Si su empleador no reconoce las horas extras, usted puede iniciar un
            proceso de reclamación.
          </p>

          <p>
            El primer paso es solicitar el pago de manera formal. Si no hay
            respuesta, puede acudir al Ministerio del Trabajo o iniciar una
            demanda laboral.
          </p>

          <p>
            Es importante contar con pruebas como registros de horario, correos
            o testigos.
          </p>
        </section>

        {/* PRESCRIPCIÓN */}
        <section className={styles.section}>
          <h2>Término para reclamar horas extras en Colombia</h2>

          <p>
            Las horas extras no pagadas pueden reclamarse dentro de un tiempo
            limitado. Si se deja pasar este plazo, se pierde el derecho a exigir
            el pago.
          </p>

          <p>
            Por eso, es fundamental actuar a tiempo y no dejar acumular este
            tipo de reclamaciones.
          </p>
        </section>

        {/* ESTRATEGIA */}
        <section className={styles.sectionHighlight}>
          <h2>Proteja sus derechos laborales</h2>

          <p>
            Las horas extras son un derecho, no un beneficio opcional. Si usted
            trabaja más allá de su jornada, debe recibir una compensación justa.
          </p>

          <p>
            Una asesoría legal adecuada puede ayudarle a recuperar lo que le
            corresponde y evitar abusos laborales.
          </p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            <strong>
              ¿No le están pagando sus horas extras? Nuestro equipo legal puede
              ayudarle a reclamarlas correctamente.
            </strong>
          </p>
        </footer>
      </article>
    </main>
  );
}
