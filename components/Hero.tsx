"use client"

import { motion } from "framer-motion"
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* Video Fondo */}
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/beach.mp4" type="video/mp4" />
      </video>

      {/* Overlay degradado */}
      <div className={styles.overlay}></div>

      {/* Contenido */}
      <div className={styles.content}>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5 }}
          className={styles.title}
        >
          Larimar
          <br />
          Ocean Luxury
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1.5 }}
          className={styles.subtitle}
        >
          Born from the Caribbean sea.
          Crafted into timeless elegance.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className={styles.button}
        >
          Explore Collection
        </motion.button>

      </div>

    </section>
  )
}
