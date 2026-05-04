"use client";

import styles from "../styles/MethodologySection.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faFileLines,
  faUsers,
  faShieldHalved,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  { icon: faMagnifyingGlass, title: "Diagnóstico" },
  { icon: faFileLines, title: "Implementación documental" },
  { icon: faUsers, title: "Socialización interna" },
  { icon: faShieldHalved, title: "Blindaje probatorio" },
  { icon: faClipboardCheck, title: "Auditoría periódica" },
];

export default function MethodologySection() {
  return (
    <section className={styles.section} id="metodologia">
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Metodología PRAVICE
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Blindaje Laboral Estructurado
        </motion.p>

        <div className={styles.grid}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <div className={styles.icon}>
                <FontAwesomeIcon icon={step.icon} />
              </div>

              <h3>Paso {i + 1}</h3>
              <p>{step.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Shape geométrico */}
        <div className={styles.shape}></div>
      </div>
    </section>
  );
}
