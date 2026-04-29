"use client";

import Link from "next/link";
import styles from "../BlogContent.module.css";

export default function AcosolaboralColombiaContent() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Protección laboral 2026</span>

          <h1 className={styles.title}>
            Acoso laboral en Colombia: cómo denunciar y proteger sus derechos
          </h1>

          <p className={styles.subtitle}>
            Aprenda a identificar el acoso laboral, reunir pruebas y denunciar
            correctamente para proteger su trabajo y su bienestar.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>¿Qué es el acoso laboral en Colombia?</h2>

          <p>
            El acoso laboral es toda conducta persistente y demostrable ejercida
            sobre un trabajador que busca intimidar, desmotivar o afectar su
            estabilidad emocional o profesional.
          </p>

          <p>
            En Colombia, está regulado por la Ley 1010 de 2006 y puede generar
            sanciones para el empleador.
          </p>

          <p>
            Este tipo de situaciones no solo afectan el desempeño laboral, sino
            también la salud mental y la calidad de vida del trabajador.
          </p>
        </section>

        {/* TIPOS */}
        <section className={styles.sectionAlt}>
          <h2>Tipos de acoso laboral más comunes</h2>

          <ul className={styles.checklist}>
            <li>Maltrato verbal o psicológico</li>
            <li>Humillaciones públicas</li>
            <li>Asignación excesiva de tareas</li>
            <li>Aislamiento laboral</li>
            <li>Amenazas de despido injustificado</li>
            <li>Descalificación constante del trabajo</li>
          </ul>

          <p>
            Estas conductas deben ser repetitivas para ser consideradas acoso
            laboral.
          </p>
        </section>

        {/* COMO IDENTIFICAR */}
        <section className={styles.section}>
          <h2>¿Cómo saber si está siendo víctima de acoso laboral?</h2>

          <p>
            No todas las situaciones incómodas en el trabajo constituyen acoso,
            pero hay señales claras que deben alertarlo.
          </p>

          <ul className={styles.checklist}>
            <li>Trato degradante constante</li>
            <li>Presión psicológica continua</li>
            <li>Ambiente laboral hostil</li>
            <li>Desmotivación causada por terceros</li>
          </ul>

          <p>
            La clave está en la persistencia y la intención de afectar al
            trabajador.
          </p>
        </section>

        {/* PRUEBAS */}
        <section className={styles.sectionAlt}>
          <h2>Pruebas necesarias para denunciar acoso laboral</h2>

          <p>
            Para que una denuncia tenga éxito, es fundamental contar con pruebas
            que respalden los hechos.
          </p>

          <ul className={styles.checklist}>
            <li>Correos electrónicos</li>
            <li>Mensajes de WhatsApp</li>
            <li>Testigos</li>
            <li>Grabaciones (cuando sean legales)</li>
            <li>Documentos internos</li>
          </ul>

          <p>Sin pruebas, el proceso puede ser más difícil de demostrar.</p>
        </section>

        {/* COMO DENUNCIAR */}
        <section className={styles.section}>
          <h2>Cómo denunciar acoso laboral en Colombia paso a paso</h2>

          <ol className={styles.numberedList}>
            <li>Presentar queja ante el Comité de Convivencia Laboral</li>
            <li>Documentar todas las situaciones</li>
            <li>Solicitar intervención del empleador</li>
            <li>Acudir al Ministerio del Trabajo</li>
            <li>Iniciar demanda laboral si es necesario</li>
          </ol>

          <p>
            Este proceso busca primero una solución interna antes de acudir a la
            vía judicial.
          </p>
        </section>

        {/* CONSECUENCIAS */}
        <section className={styles.sectionAlt}>
          <h2>Consecuencias legales del acoso laboral</h2>

          <p>
            El empleador puede enfrentar sanciones económicas y legales si se
            comprueba el acoso laboral.
          </p>

          <p>
            Además, el trabajador puede tener derecho a indemnización y
            protección especial.
          </p>
        </section>

        {/* ERRORES */}
        <section className={styles.section}>
          <h2>Errores comunes al enfrentar acoso laboral</h2>

          <ul className={styles.checklist}>
            <li>No documentar las situaciones</li>
            <li>No denunciar a tiempo</li>
            <li>Renunciar sin asesoría legal</li>
            <li>No buscar apoyo jurídico</li>
          </ul>

          <p>Estos errores pueden afectar el resultado del proceso.</p>
        </section>

        {/* PROTECCION */}
        <section className={styles.sectionHighlight}>
          <h2>Cómo proteger sus derechos laborales</h2>

          <p>
            Actuar a tiempo es clave para evitar que el acoso laboral continúe o
            empeore.
          </p>

          <p>
            Contar con asesoría legal permite tomar decisiones estratégicas y
            proteger su estabilidad laboral.
          </p>
        </section>

        {/* CIERRE */}
        <section className={styles.section}>
          <h2>No está solo: actúe frente al acoso laboral</h2>

          <p>
            El acoso laboral no debe normalizarse ni tolerarse en ningún entorno
            de trabajo.
          </p>

          <p>
            Existen herramientas legales en Colombia para proteger a los
            trabajadores y sancionar estas conductas.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>
              Denuncie el acoso laboral y proteja sus derechos en Colombia.
            </strong>
          </p>
        </footer>
      </article>
    </main>
  );
}
