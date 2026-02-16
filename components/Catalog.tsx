"use client"

import styles from "@/components/Catalog.module.css"

export default function Catalogo() {
    const prefix = process.env.NODE_ENV === 'production' ? '/larimar' : '';

  const products = [
    { id: 1, name: "Ocean Ring", price: 180, image: `${prefix}/products/larimar1.jpg` },
    { id: 2, name: "Ocean Necklace", price: 390, image: `${prefix}/products/larimar2.jpg` },
    { id: 3, name: "Ocean Bracelet", price: 240, image: `${prefix}/products/larimar3.jpg` },
    { id: 4, name: "Luxury Pendant", price: 320, image: `${prefix}/products/larimar4.jpg` },
  ]

  return (
    <div className={styles.catalog}>

      {/* PROMO HERO */}
      <section className={styles.promo}>
        <div className={styles.promoText}>
          <h2>Handcrafted <br /> Ethically Sourced</h2>
          <p>A collection designed with rare Caribbean Larimar.</p>
          <button>Explore →</button>
        </div>

        <div className={styles.promoImage}>
          <img src="/products/larimar1.jpg" />
        </div>
      </section>

      {/* CATEGORY ICONS */}
      <section className={styles.categories}>
        {["Bracelets", "Rings", "Necklaces", "Earrings", "Sets"].map((cat, i) => (
          <div key={i} className={styles.categoryItem}>
            <div className={styles.circle}></div>
            <span>{cat}</span>
          </div>
        ))}
      </section>

      {/* LIMITED COLLECTION */}
      <section className={styles.collection}>
        <h3>Shop our limited edition collections</h3>

        <div className={styles.grid}>
          {products.map(product => (
            <div key={product.id} className={styles.card}>
              <img src={product.image} />
              <h4>{product.name}</h4>
              <p>${product.price} USD</p>
            </div>
          ))}
        </div>
      </section>

      {/* VISUAL SPLIT */}
      <section className={styles.split}>
        <div className={styles.splitItem}>
          <img src="/products/larimar2.jpg" />
          <div className={styles.overlay}>
            <h2>Limited</h2>
            <span>Discover Collection</span>
          </div>
        </div>

        <div className={styles.splitItem}>
          <img src="/products/larimar3.jpg" />
          <div className={styles.overlay}>
            <h2>Trending</h2>
            <span>Shop Now</span>
          </div>
        </div>
      </section>

      {/* TOP OFFERS */}
      <section className={styles.collection}>
        <h3>Top Offers</h3>

        <div className={styles.grid}>
          {products.map(product => (
            <div key={product.id} className={styles.card}>
              <img src={product.image} />
              <h4>{product.name}</h4>
              <p>${product.price} USD</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
