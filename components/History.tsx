"use client"

import { motion } from "framer-motion"
import styles from "./History.module.css"

export default function History() {
  return (
    <section className={styles.wrapper}>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={styles.hero}
      >
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          NUESTRA HISTORIA
        </motion.h1>
        <div className={styles.heroLine}></div>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La joya del Caribe | Larimar Auténtico Dominicano
        </motion.p>
      </motion.div>

      <div className={styles.container}>

        {/* INTRO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.introSection}
        >
          <h2>El Tesoro Azul del Caribe</h2>
          <p className={styles.leadText}>
            El Larimar, conocido como la "Piedra del Caribe" o la "Atlántida Dominicana",
            es una gema semi-preciosa única en el mundo, encontrada exclusivamente en la
            provincia de Barahona, República Dominicana.
          </p>
        </motion.div>

        {/* DISCOVERY STORY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.discoverySection}
        >
          <div className={styles.discoveryText}>
            <span className={styles.sectionLabel}>DESCUBRIMIENTO</span>
            <h2>Una Gema Única en el Mundo</h2>
            <p>
              Aunque los habitantes locales conocían la piedra desde hace generaciones,
              el Larimar fue "descubierto" oficialmente en 1974 por Miguel Méndez,
              quien nombró la gema combinando el nombre de su hija "Larissa" con
              la palabra española "mar".
            </p>
            <p>
              Esta pectolita azul se formó hace millones de años por actividad volcánica,
              creando los únicos depósitos conocidos de este mineral en todo el planeta.
              Los tonos azules, que varían desde el azul cielo hasta el azul profundo del océano,
              son el resultado de la sustitución del calcio por cobre durante su formación.
            </p>

            <div className={styles.statsGrid}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>1974</div>
                <div className={styles.statLabel}>Año de Descubrimiento Oficial</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>1</div>
                <div className={styles.statLabel}>Único Lugar en el Mundo</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Hecho a Mano</div>
              </div>
            </div>
          </div>

          <div className={styles.discoveryImage}>
            <div className={styles.imagePlaceholder}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* MINING PROCESS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.processSection}
        >
          <span className={styles.sectionLabel}>EXTRACCIÓN</span>
          <h2>Proceso de Minería Responsable</h2>

          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>01</div>
              <h3>Extracción Artesanal</h3>
              <p>
                El Larimar se extrae de forma artesanal en las montañas de Barahona.
                Los mineros locales trabajan en pequeños túneles, utilizando herramientas
                manuales para preservar la calidad de la piedra.
              </p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>02</div>
              <h3>Selección</h3>
              <p>
                Cada piedra es cuidadosamente seleccionada por expertos gemólogos.
                Solo las piezas con los tonos azules más vibrantes y patrones únicos
                son elegidas para nuestra colección.
              </p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>03</div>
              <h3>Tallado y Pulido</h3>
              <p>
                Maestros artesanos con décadas de experiencia tallan y pulen cada piedra
                a mano, revelando su belleza natural y patrones únicos que recuerdan
                las olas del Caribe.
              </p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>04</div>
              <h3>Montaje en Plata</h3>
              <p>
                Las gemas son montadas en plata sterling 925 por orfebres especializados,
                creando piezas únicas que combinan la tradición dominicana con diseño
                contemporáneo.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CRAFTSMANSHIP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.craftsmanshipSection}
        >
          <div className={styles.twoColumns}>
            <div>
              <span className={styles.sectionLabel}>ARTESANÍA</span>
              <h2>Herencia Dominicana</h2>
              <p>
                Cada pieza de joyería Larimar es el resultado de generaciones de
                conocimiento artesanal transmitido de maestro a aprendiz en las
                comunidades de Barahona.
              </p>
              <p>
                Nuestros artesanos no solo crean joyas; preservan una tradición cultural
                que define la identidad de la República Dominicana. Cada anillo, collar
                o pulsera lleva consigo horas de trabajo meticuloso y pasión por la perfección.
              </p>

              <blockquote className={styles.quote}>
                "Cada piedra de Larimar es única, como las olas del mar que nunca se repiten.
                Nuestro trabajo es revelar esa belleza natural"
                <cite>— Mateo Álvarez, Maestro Artesano</cite>
              </blockquote>
            </div>

            <div className={styles.craftFeatures}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h4>100% Artesanal</h4>
                <p>Cada pieza tallada y pulida a mano</p>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z" />
                  </svg>
                </div>
                <h4>Certificado de Autenticidad</h4>
                <p>Garantía de Larimar genuino dominicano</p>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                  </svg>
                </div>
                <h4>Diseños Únicos</h4>
                <p>Cada patrón de piedra es irrepetible</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SUSTAINABILITY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.sustainabilitySection}
        >
          <span className={styles.sectionLabel}>SOSTENIBILIDAD</span>
          <h2>Compromiso con el Futuro</h2>

          <div className={styles.sustainabilityGrid}>
            <div className={styles.sustainabilityCard}>
              <h3>Minería Responsable</h3>
              <p>
                Trabajamos exclusivamente con mineros locales que practican extracción
                sostenible, minimizando el impacto ambiental y asegurando la regeneración
                natural del ecosistema.
              </p>
            </div>

            <div className={styles.sustainabilityCard}>
              <h3>Comercio Justo</h3>
              <p>
                Todos nuestros artesanos reciben salarios justos y trabajan en condiciones
                seguras. Apoyamos el desarrollo económico de las comunidades locales de Barahona.
              </p>
            </div>

            <div className={styles.sustainabilityCard}>
              <h3>Preservación Cultural</h3>
              <p>
                Invertimos en programas de capacitación para jóvenes artesanos, asegurando
                que las técnicas tradicionales se transmitan a futuras generaciones.
              </p>
            </div>
          </div>
        </motion.div>

        {/* TIMELINE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.timelineSection}
        >
          <span className={styles.sectionLabel}>CRONOLOGÍA</span>
          <h2>Nuestra Trayectoria</h2>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>1974</div>
              <div className={styles.timelineContent}>
                <h3>Descubrimiento Oficial</h3>
                <p>Miguel Méndez descubre y nombra el Larimar</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>1985</div>
              <div className={styles.timelineContent}>
                <h3>Primera Exportación</h3>
                <p>El Larimar llega a mercados internacionales</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2010</div>
              <div className={styles.timelineContent}>
                <h3>Fundación de Nuestra Marca</h3>
                <p>Iniciamos operaciones con maestros artesanos locales</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2024</div>
              <div className={styles.timelineContent}>
                <h3>Reconocimiento Internacional</h3>
                <p>Presencia en las principales ferias de joyería del mundo</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}