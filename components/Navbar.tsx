"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { useLanguage } from "@/context/LanguageContext"
import styles from "./Navbar.module.css"

export default function Navbar() {
  const { items } = useCart()
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className={styles.navbar}
    >
      <div className={styles.logo}>LARIMAR</div>

      <div className={styles.menu}>
        <Link href="/">{t("nav.home")}</Link>
        <Link href="/products">{t("nav.catalog")}</Link>
        <Link href="/historia">{t("nav.about")}</Link>
        <Link href="/contacto">{t("nav.contact")}</Link>
        <Link href="/carrito">{t("nav.cart")} ({items.length})</Link>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className={styles.langBtn}
          title={language === "es" ? "Switch to English" : "Cambiar a Español"}
        >
          {language === "es" ? "EN" : "ES"}
        </button>
      </div>
    </motion.nav>
  )
}
