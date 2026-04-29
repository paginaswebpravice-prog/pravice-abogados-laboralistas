"use client";

import Link from "next/link";
import styles from "../BlogContent.module.css";

export default function ContratoServiciosVsLaboralContent() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Guía legal laboral Colombia</span>

          <h1 className={styles.title}>
            Contrato por prestación de servicios vs contrato laboral en
            Colombia: diferencias clave (2026)
          </h1>

          <p className={styles.subtitle}>
            Entienda las diferencias legales, riesgos y derechos entre contrato
            laboral y prestación de servicios en Colombia para evitar problemas
            legales y proteger su situación laboral.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>
            ¿Cuál es la diferencia entre contrato laboral y prestación de
            servicios?
          </h2>

          <p>
            En Colombia, muchas personas trabajan bajo la figura de contrato por
            prestación de servicios, incluso cuando en realidad existe una
            relación laboral.
          </p>

          <p>
            La diferencia principal radica en la <strong>subordinación</strong>.
            Si existe dependencia, horarios y órdenes directas, se configura un
            contrato laboral, sin importar el nombre del contrato.
          </p>

          <p>
            Esta distinción es clave porque define si una persona tiene derecho
            a prestaciones sociales, seguridad social y estabilidad laboral.
          </p>
        </section>

        {/* CONTRATO LABORAL */}
        <section className={styles.sectionAlt}>
          <h2>Contrato laboral en Colombia: características principales</h2>

          <p>
            El contrato laboral está regulado por el Código Sustantivo del
            Trabajo y se configura cuando existen tres elementos:
          </p>

          <ul className={styles.checklist}>
            <li>Prestación personal del servicio</li>
            <li>Subordinación o dependencia</li>
            <li>Pago de salario</li>
          </ul>

          <p>
            Cuando estos elementos están presentes, el trabajador tiene derecho
            a:
          </p>

          <ul className={styles.checklist}>
            <li>Prima de servicios</li>
            <li>Cesantías e intereses</li>
            <li>Vacaciones</li>
            <li>Seguridad social pagada por el empleador</li>
            <li>Indemnización por despido injustificado</li>
          </ul>
        </section>

        {/* PRESTACION SERVICIOS */}
        <section className={styles.section}>
          <h2>Contrato por prestación de servicios: cómo funciona realmente</h2>

          <p>
            Este tipo de contrato es de naturaleza civil o comercial, no
            laboral.
          </p>

          <p>La persona contratada actúa como independiente, por lo que:</p>

          <ul className={styles.checklist}>
            <li>No hay subordinación</li>
            <li>No hay horario obligatorio</li>
            <li>No hay prestaciones sociales</li>
            <li>El contratista paga su propia seguridad social</li>
          </ul>

          <p>
            Este modelo es válido solo cuando realmente existe autonomía en la
            ejecución del servicio.
          </p>
        </section>

        {/* COMPARACION */}
        <section className={styles.sectionHighlight}>
          <h2>
            Diferencias clave entre contrato laboral y prestación de servicios
          </h2>

          <ul className={styles.checklist}>
            <li>
              <strong>Subordinación:</strong> Sí (laboral) / No (servicios)
            </li>
            <li>
              <strong>Prestaciones sociales:</strong> Sí / No
            </li>
            <li>
              <strong>Seguridad social:</strong> Empleador / Contratista
            </li>
            <li>
              <strong>Horario:</strong> Definido / Flexible
            </li>
            <li>
              <strong>Indemnización:</strong> Sí / No
            </li>
          </ul>

          <p>
            Esta diferencia tiene un impacto directo en los ingresos reales y en
            la protección legal del trabajador.
          </p>
        </section>

        {/* CONTRATO REALIDAD */}
        <section className={styles.section}>
          <h2>Contrato realidad: cuando un contrato de servicios es laboral</h2>

          <p>
            En muchos casos, empresas utilizan contratos de prestación de
            servicios para evitar pagar prestaciones sociales.
          </p>

          <p>
            Sin embargo, si se demuestra subordinación, la ley reconoce la
            figura de <strong>contrato realidad</strong>.
          </p>

          <p>Esto permite al trabajador reclamar:</p>

          <ul className={styles.checklist}>
            <li>Pago de prestaciones sociales</li>
            <li>Indemnización</li>
            <li>Seguridad social retroactiva</li>
          </ul>
        </section>

        {/* RIESGOS */}
        <section className={styles.sectionAlt}>
          <h2>Riesgos para empresas y trabajadores</h2>

          <p>
            Para las empresas, usar incorrectamente contratos de servicios puede
            generar demandas laborales costosas.
          </p>

          <p>
            Para los trabajadores, aceptar este tipo de contrato sin analizarlo
            implica perder derechos importantes.
          </p>

          <p>
            Por eso, es fundamental evaluar la realidad de la relación laboral y
            no solo el documento firmado.
          </p>
        </section>

        {/* RECOMENDACIONES */}
        <section className={styles.section}>
          <h2>Recomendaciones antes de firmar un contrato</h2>

          <ul className={styles.checklist}>
            <li>Verifique si tendrá jefe directo o subordinación</li>
            <li>Revise si debe cumplir horarios</li>
            <li>Analice quién paga seguridad social</li>
            <li>Evalúe estabilidad y continuidad del trabajo</li>
          </ul>

          <p>
            Estas variables permiten identificar si el contrato es adecuado o si
            existe un posible fraude laboral.
          </p>
        </section>

        {/* CONCLUSION */}
        <section className={styles.sectionHighlight}>
          <h2>Conclusión: no todos los contratos de servicios son legales</h2>

          <p>
            La diferencia entre contrato laboral y prestación de servicios no es
            solo teórica: define sus derechos y su protección legal.
          </p>

          <p>
            Si existe subordinación, la ley protege al trabajador, incluso si el
            contrato dice lo contrario.
          </p>

          <p>
            Identificar esto a tiempo puede evitar pérdidas económicas y
            permitir reclamar lo que realmente corresponde.
          </p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            <strong>
              ¿Tiene dudas sobre su contrato en Colombia? Un análisis jurídico
              adecuado puede proteger sus derechos laborales.
            </strong>
          </p>
        </footer>
      </article>
    </main>
  );
}
