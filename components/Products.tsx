"use client"

import { useState } from "react"
import Link from "next/link"
import styles from "./Products.module.css"

export default function Products() {

  const images = [
    "/products/larimar1.jpg",
    "/products/larimar2.jpg",
    "/products/larimar3.jpg"
  ]

  const variants = [
    { name: "Ring", price: 180 },
    { name: "Bracelet", price: 240 },
    { name: "Necklace", price: 390 },
    { name: "Full Set", price: 750 }
  ]

  const [activeImage, setActiveImage] = useState(images[0])
  const [selected, setSelected] = useState(variants[0])

  return (
    <section className={styles.wrapper}>

      <div className={styles.container}>

        {/* LEFT SIDE */}
        <div className={styles.left}>

          <div className={styles.mainImage}>
            <img src={activeImage} alt="Larimar" />
          </div>

          <div className={styles.thumbs}>
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImage(img)}
                className={activeImage === img ? styles.activeThumb : ""}
              />
            ))}
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>

          <h1 className={styles.title}>
            Ocean Luxury Set
          </h1>

          <div className={styles.rating}>
            ★ ★ ★ ★ ☆ <span>(4 Reviews)</span>
          </div>

          <div className={styles.price}>
            ${selected.price} USD
          </div>

          <p className={styles.shortDesc}>
            Panels of harmoniously-arranged Larimar stones
            create a refined Caribbean expression of elegance.
          </p>

<div className={styles.variantSection}>
  <label>Select Piece</label>

  <div className={styles.variants}>
    {variants.map((item, i) => (
      <button
        key={i}
        onClick={() => setSelected(item)}
        className={`${styles.variantBtn} ${
          selected.name === item.name ? styles.activeVariant : ""
        }`}
      >
        {item.name}
      </button>
    ))}
  </div>
</div>


          <button className={styles.cartBtn}>
  ADD TO CART
</button>

<Link href="/catalogo" className={styles.catalogBtn}>
  VIEW FULL CATALOG →
</Link>

        </div>

      </div>

      <div className={styles.bottom}>
        <div>
          <h3>PRODUCT DESCRIPTION</h3>
          <p>
            Each Larimar piece is crafted in the Dominican Republic,
            capturing the rare ocean-blue gemstone known for its
            tranquility and refined aesthetic.
          </p>
        </div>

        <div>
          <h3>REVIEWS</h3>
          <p>No reviews yet.</p>
        </div>
      </div>

    </section>
  )
}
