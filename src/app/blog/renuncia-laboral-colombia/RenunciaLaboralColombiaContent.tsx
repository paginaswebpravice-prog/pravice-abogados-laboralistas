"use client";

import Link from "next/link";
import styles from "../BlogContent.module.css";

export default function RenunciaLaboralColombia() {
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
            Renuncia laboral en Colombia: derechos, liquidación y
            recomendaciones
          </h1>

          <p className={styles.subtitle}>
            Conozca qué pasa cuando renuncia a su trabajo, qué le deben pagar y
            cómo hacerlo correctamente para evitar problemas legales.
          </p>
        </div>
      </section>

      {/* ARTÍCULO */}
      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>¿Qué es la renuncia laboral en Colombia?</h2>

          <p>
            La renuncia laboral es la decisión voluntaria del trabajador de dar
            por terminado su contrato de trabajo.
          </p>

          <p>
            A diferencia del despido, en este caso es el empleado quien toma la
            iniciativa de finalizar la relación laboral.
          </p>
        </section>

        {/* DERECHOS */}
        <section className={styles.sectionAlt}>
          <h2>¿Qué derechos tiene al renunciar?</h2>

          <p>
            Renunciar no significa perder sus derechos laborales. El trabajador
            tiene derecho a recibir su liquidación completa.
          </p>

          <ul className={styles.checklist}>
            <li>Salarios pendientes</li>
            <li>Cesantías</li>
            <li>Intereses sobre cesantías</li>
            <li>Prima de servicios</li>
            <li>Vacaciones no disfrutadas</li>
          </ul>

          <p>
            Estos pagos deben realizarse independientemente del motivo de la
            renuncia.
          </p>
        </section>

        {/* LIQUIDACIÓN */}
        <section className={styles.section}>
          <h2>¿Cómo se calcula la liquidación por renuncia?</h2>

          <p>
            La liquidación incluye todas las prestaciones sociales causadas
            hasta la fecha de finalización del contrato.
          </p>

          <p>
            Se calcula con base en el salario del trabajador y el tiempo
            laborado.
          </p>

          <p>
            Es importante verificar que todos los valores estén correctamente
            incluidos para evitar pérdidas económicas.
          </p>
        </section>

        {/* PREAVISO */}
        <section className={styles.sectionAlt}>
          <h2>¿Debe dar preaviso al renunciar?</h2>

          <p>
            En Colombia, el trabajador no está obligado por ley a dar preaviso
            cuando renuncia.
          </p>

          <p>
            Sin embargo, hacerlo puede ser recomendable para mantener una buena
            relación laboral y evitar conflictos.
          </p>

          <p>
            Algunas empresas lo solicitan, pero no pueden imponer sanciones
            económicas por no hacerlo.
          </p>
        </section>

        {/* ERRORES */}
        <section className={styles.section}>
          <h2>Errores comunes al renunciar</h2>

          <ul className={styles.checklist}>
            <li>No dejar la renuncia por escrito</li>
            <li>No revisar la liquidación</li>
            <li>Firmar documentos sin verificar valores</li>
            <li>Renunciar bajo presión del empleador</li>
          </ul>

          <p>
            Estos errores pueden afectar sus derechos y dificultar futuras
            reclamaciones.
          </p>
        </section>

        {/* RENUNCIA INDUCIDA */}
        <section className={styles.sectionAlt}>
          <h2>Renuncia inducida: cuándo puede ser ilegal</h2>

          <p>
            En algunos casos, el empleador presiona al trabajador para que
            renuncie en lugar de despedirlo.
          </p>

          <p>
            Esto se conoce como renuncia inducida y puede considerarse ilegal si
            vulnera los derechos del trabajador.
          </p>

          <p>
            En estas situaciones, puede ser posible reclamar como si se tratara
            de un despido injustificado.
          </p>
        </section>

        {/* QUÉ HACER */}
        <section className={styles.section}>
          <h2>¿Qué hacer antes de renunciar?</h2>

          <p>
            Antes de presentar su renuncia, es recomendable evaluar su situación
            laboral y económica.
          </p>

          <ul className={styles.checklist}>
            <li>Revisar su contrato laboral</li>
            <li>Calcular su liquidación</li>
            <li>Guardar soportes y documentos</li>
            <li>Evitar decisiones impulsivas</li>
          </ul>

          <p>Una decisión informada puede evitar problemas futuros.</p>
        </section>

        {/* CIERRE */}
        <section className={styles.sectionHighlight}>
          <h2>Renunciar bien es proteger sus derechos</h2>

          <p>
            Aunque es una decisión personal, renunciar correctamente puede
            marcar la diferencia entre perder dinero o recibir lo que le
            corresponde.
          </p>

          <p>
            Con asesoría adecuada, puede asegurar una salida laboral sin
            riesgos.
          </p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            <strong>
              ¿Va a renunciar o ya lo hizo y tiene dudas sobre su liquidación?
              Podemos ayudarle a verificar y proteger sus derechos.
            </strong>
          </p>
        </footer>
      </article>
    </main>
  );
}
