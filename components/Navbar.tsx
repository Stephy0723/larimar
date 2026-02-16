"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className={styles.navbar}
    >
      <div className={styles.logo}>LARIMAR</div>

      <div className={styles.menu}>
        <Link href="/">INICIO</Link>
        <Link href="/coleccion">COLECCIÓN</Link>
        <Link href="/historia">HISTORIA</Link>
        <Link href="/contacto">CONTACTO</Link>
      </div>
    </motion.nav>
  )
}
