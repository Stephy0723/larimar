"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import styles from "./Hero.module.css"

export default function Hero() {
  const router = useRouter()
  const REPO_NAME = process.env.NODE_ENV === 'production' ? '/larimar' : ''

  return (
    <section className={styles.hero}>

      {/* Video Background */}
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={`${REPO_NAME}/beach.mp4`} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.content}>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={styles.badge}
        >
          Única en el Mundo
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className={styles.title}
        >
          JOYERÍA LARIMAR
          <br />
          <span className={styles.titleAccent}>AUTÉNTICA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className={styles.subtitle}
        >
          La piedra del Caribe • Hecha a mano en República Dominicana
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className={styles.ctaButtons}
        >
          <button
            className={styles.primaryBtn}
            onClick={() => router.push('/catalogo')}
          >
            EXPLORAR COLECCIÓN
          </button>
          <button
            className={styles.secondaryBtn}
            onClick={() => router.push('/historia')}
          >
            NUESTRA HISTORIA
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className={styles.scrollIndicator}
        >
          <div className={styles.scrollMouse}></div>
          <span>Descubre más</span>
        </motion.div>

      </div>

    </section>
  )
}