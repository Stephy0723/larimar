"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/CartContext"
import styles from "./Products.module.css"

export default function Products() {
  const router = useRouter()
  const { add } = useCart()

  const images = [
    "/products/larimar1.jpg",
    "/products/larimar2.jpg",
    "/products/larimar3.jpg",
    "/products/larimar4.jpg"
  ]

  const variants = [
    { id: "ocean-ring", name: "Ocean Ring", price: 180 },
    { id: "caribbean-bracelet", name: "Caribbean Bracelet", price: 240 },
    { id: "ocean-necklace", name: "Ocean Necklace", price: 390 },
    { id: "luxury-set", name: "Luxury Set", price: 750 }
  ]

  const [activeImage, setActiveImage] = useState(images[0])
  const [selected, setSelected] = useState(variants[0])

  return (
    <div className={styles.luxuryWrapper}>

      {/* HERO STORYTELLING */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className={styles.hero}
      >
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            OCEAN LUXURY COLLECTION
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={styles.heroSubtitle}
          >
            Descubre la elegancia atemporal del Larimar Dominicano
          </motion.p>
        </div>
      </motion.section>

      {/* MAIN PRODUCT SECTION */}
      <section className={styles.wrapper}>
        <div className={styles.container}>

          {/* LEFT SIDE - Gallery */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={styles.left}
          >
            <div className={styles.mainImage}>
              <motion.img
                key={activeImage}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                src={activeImage}
                alt="Larimar Jewelry"
              />
            </div>

            <div className={styles.thumbs}>
              {images.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  onClick={() => setActiveImage(img)}
                  className={activeImage === img ? styles.activeThumb : ""}
                  alt={`View ${i + 1}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE - Product Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={styles.right}
          >
            <span className={styles.badge}>EDICIÓN LIMITADA</span>

            <h1 className={styles.title}>Ocean Luxury Collection</h1>

            <div className={styles.rating}>
              ★ ★ ★ ★ ★ <span>(127 Reviews)</span>
            </div>

            <div className={styles.price}>
              ${selected.price} USD
            </div>

            <p className={styles.shortDesc}>
              Una expresión refinada del Caribe. Paneles de piedras Larimar
              armoniosamente dispuestas crean una obra maestra de elegancia
              natural. Cada pieza es única, reflejando los tonos celestiales
              del mar Caribe.
            </p>

            <div className={styles.variantSection}>
              <label>SELECCIONAR PIEZA</label>
              <div className={styles.variants}>
                {variants.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => setSelected(item)}
                    className={`${styles.variantBtn} ${selected.id === item.id ? styles.activeVariant : ""
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.button
              className={styles.cartBtn}
              onClick={() => {
                // Aquí podrías añadir al carrito el producto seleccionado
                router.push("/carrito")
              }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              AÑADIR AL CARRITO
            </motion.button>

            <motion.button
              className={styles.catalogBtn}
              onClick={() => router.push("/catalogo")}
              whileHover={{ x: 5 }}
            >
              EXPLORAR CATÁLOGO COMPLETO →
            </motion.button>

            {/* Guarantee Badge */}
            <div className={styles.guarantee}>
              <span>✓</span> Auténtico Larimar Dominicano
            </div>
          </motion.div>

        </div>
      </section>

      {/* CRAFTSMANSHIP SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={styles.craftsmanship}
      >
        <div className={styles.craftGrid}>
          <div className={styles.craftItem}>
            <div className={styles.craftIcon}>✦</div>
            <h3>Artesanía Dominicana</h3>
            <p>Cada pieza es elaborada a mano por maestros artesanos con décadas de experiencia</p>
          </div>
          <div className={styles.craftItem}>
            <div className={styles.craftIcon}>◆</div>
            <h3>Larimar Auténtico</h3>
            <p>Piedra semi-preciosa exclusiva de República Dominicana, conocida como "La Piedra del Caribe"</p>
          </div>
          <div className={styles.craftItem}>
            <div className={styles.craftIcon}>✧</div>
            <h3>Plata Sterling 925</h3>
            <p>Monturas de plata de ley que realzan la belleza natural de cada gema</p>
          </div>
        </div>
      </motion.section>

      {/* DESCRIPTION & REVIEWS */}
      <section className={styles.bottom}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>DESCRIPCIÓN DEL PRODUCTO</h3>
          <p>
            El Larimar es una gema rara encontrada únicamente en las montañas de Barahona,
            República Dominicana. Conocido por sus tonos azul cielo que evocan las aguas
            cristalinas del Caribe, cada piedra es única en su patrón y coloración.
          </p>
          <p>
            Nuestra colección Ocean Luxury combina esta piedra excepcional con diseños
            contemporáneos que honran la tradición artesanal dominicana. Cada pieza viene
            con certificado de autenticidad.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>CUIDADO Y GARANTÍA</h3>
          <ul className={styles.careList}>
            <li>Limpiar con paño suave y seco</li>
            <li>Evitar contacto con químicos y perfumes</li>
            <li>Guardar en estuche individual</li>
            <li>Garantía de por vida en monturas</li>
            <li>Certificado de autenticidad incluido</li>
          </ul>
        </motion.div>
      </section>

    </div>
  )
}