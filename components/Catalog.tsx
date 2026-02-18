"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { PRODUCTS, Product } from "@/data/products"
import { useCart, DeliveryMethod } from "@/context/CartContext"
import { useLanguage } from "@/context/LanguageContext"
import DeliveryModal from "@/components/DeliveryModal"
import styles from "./Catalog.module.css"

export default function Catalog() {
  const router = useRouter()
  const { add, subtotal } = useCart()
  const { formatPrice, t, pName, pDesc, pCat } = useLanguage()
  const [showFirstPurchase, setShowFirstPurchase] = useState(true)
  const [modalProduct, setModalProduct] = useState<Product | null>(null)

  const handleAddToCart = (deliveryMethod: DeliveryMethod, deliveryAddress?: string) => {
    if (modalProduct) {
      add(modalProduct, deliveryMethod, deliveryAddress)
      setModalProduct(null)
    }
  }

  // Filter products by tags
  const newProducts = PRODUCTS.filter((p: Product) => p.tag === "new")
  const saleProducts = PRODUCTS.filter((p: Product) => p.tag === "sale")
  const limitedProducts = PRODUCTS.filter((p: Product) => p.tag === "limited")
  const springProducts = PRODUCTS.filter((p: Product) =>
    p.category === "Anillos" || p.category === "Aretes"
  ).slice(0, 4)

  // Calculate volume discount
  const volumeDiscount = subtotal >= 1000 ? 15 : subtotal >= 500 ? 10 : 0

  return (
    <div className={styles.wrapper}>

      {/* FIRST PURCHASE BANNER */}
      {showFirstPurchase && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={styles.firstPurchaseBanner}
        >
          <div className={styles.bannerContent}>
            <span className={styles.bannerIcon}>🎁</span>
            <div>
              <strong>{t("catalog.firstPurchase")}</strong> {t("catalog.firstPurchaseDesc").replace("{code}", "LARIMAR10")}
            </div>
            <button onClick={() => setShowFirstPurchase(false)}>✕</button>
          </div>
        </motion.div>
      )}

      {/* VOLUME DISCOUNT BANNER */}
      {subtotal > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.volumeBanner}
        >
          {volumeDiscount > 0 ? (
            <div className={styles.activeDiscount}>
              {t("catalog.discountActive").replace("{percent}", String(volumeDiscount)).replace("{amount}", formatPrice(subtotal))}
            </div>
          ) : (
            <div className={styles.nextDiscount}>
              {t("catalog.discountNext").replace("{amount}", formatPrice(500 - subtotal))}
            </div>
          )}
        </motion.div>
      )}

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
          {t("catalog.title")}
        </motion.h1>
        <div className={styles.heroLine}></div>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {t("catalog.subtitle")}
        </motion.p>
      </motion.div>

      {/* ========== NEW DESIGNS ========== */}
      <section className={styles.newSection}>
        <div className={styles.splitLayout}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.splitImage}
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=80')`
            }}
          >
            <div className={styles.imageOverlay}></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.splitContent}
          >
            <span className={styles.sectionLabel}>{t("catalog.newArrivals")}</span>
            <h2>{t("catalog.newDesigns")}</h2>
            <p>{t("catalog.newDesignsDesc")}</p>
            <ul className={styles.features}>
              <li>{t("catalog.newFeature1")}</li>
              <li>{t("catalog.newFeature2")}</li>
              <li>{t("catalog.newFeature3")}</li>
            </ul>
            <button
              className={styles.exploreBtn}
              onClick={() => router.push('/categoria/anillos')}
            >
              {t("catalog.exploreCollection")}
            </button>
          </motion.div>
        </div>

        {/* New Products Grid */}
        <div className={styles.container}>
          <div className={styles.productsGrid}>
            {newProducts.map((product: Product, index: number) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                router={router}
                add={add}
                t={t}
                formatPrice={formatPrice}
                pName={pName}
                pDesc={pDesc}
                pCat={pCat}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== SPRING COLLECTION ========== */}
      <section className={styles.springSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <span className={styles.sectionLabel}>{t("catalog.springLabel")}</span>
            <h2>{t("catalog.spring")}</h2>
            <p>{t("catalog.springDesc")}</p>
          </motion.div>

          <div className={styles.productsGrid}>
            {springProducts.map((product: Product, index: number) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                router={router}
                add={add}
                t={t}
                formatPrice={formatPrice}
                pName={pName}
                pDesc={pDesc}
                pCat={pCat}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== CLEARANCE ========== */}
      <section className={styles.saleSection}>
        <div className={styles.splitLayout}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.splitContent}
          >
            <span className={styles.sectionLabel}>{t("catalog.saleLabel")}</span>
            <h2>{t("catalog.clearance")}</h2>
            <p>{t("catalog.clearanceDesc")}</p>
            <div className={styles.saleHighlight}>
              <div className={styles.discount}>{t("catalog.upTo30")}</div>
              <div className={styles.urgency}>{t("catalog.whileStocks")}</div>
            </div>
            <button
              className={styles.saleBtn}
              onClick={() => {
                const element = document.getElementById('sale-products')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {t("catalog.viewOffers")}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.splitImage}
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80')`
            }}
          >
            <div className={styles.imageOverlay}></div>
          </motion.div>
        </div>

        {/* Sale Products Grid */}
        <div className={styles.container} id="sale-products">
          <div className={styles.productsGrid}>
            {saleProducts.map((product: Product, index: number) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                router={router}
                add={add}
                t={t}
                formatPrice={formatPrice}
                pName={pName}
                pDesc={pDesc}
                pCat={pCat}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== LIMITED EDITION ========== */}
      {limitedProducts.length > 0 && (
        <section className={styles.limitedSection}>
          <div className={styles.container}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.sectionHeader}
            >
              <span className={styles.sectionLabel}>{t("catalog.limitedLabel")}</span>
              <h2>{t("catalog.limited")}</h2>
              <p>{t("catalog.limitedDesc")}</p>
            </motion.div>

            <div className={styles.productsGrid}>
              {limitedProducts.map((product: Product, index: number) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  router={router}
                  add={add}
                  t={t}
                  formatPrice={formatPrice}
                  pName={pName}
                  pDesc={pDesc}
                  pCat={pCat}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========== CATEGORIES ========== */}
      <section className={styles.categoriesSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <span className={styles.sectionLabel}>{t("catalog.categoriesLabel")}</span>
            <h2>{t("catalog.categories")}</h2>
          </motion.div>

          <div className={styles.categoriesGrid}>
            {[
              { name: t("home.categories.rings"), url: 'anillos', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80' },
              { name: t("home.categories.bracelets"), url: 'pulseras', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80' },
              { name: t("home.categories.necklaces"), url: 'collares', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
              { name: t("home.categories.earrings"), url: 'aretes', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            ].map((cat, index) => (
              <motion.div
                key={cat.url}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={styles.categoryCard}
                onClick={() => router.push(`/categoria/${cat.url}`)}
                style={{ backgroundImage: `url('${cat.image}')` }}
              >
                <div className={styles.categoryOverlay}></div>
                <h3>{cat.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCOUNT INFO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={styles.discountInfo}
      >
        <h2>{t("catalog.volumeTitle")}</h2>
        <div className={styles.discountTiers}>
          <div className={styles.tier}>
            <div className={styles.tierIcon}>💎</div>
            <h3>$500+</h3>
            <p>{t("catalog.volumeTier1")}</p>
          </div>
          <div className={styles.tier}>
            <div className={styles.tierIcon}>💍</div>
            <h3>$1000+</h3>
            <p>{t("catalog.volumeTier2")}</p>
          </div>
          <div className={styles.tier}>
            <div className={styles.tierIcon}>🎁</div>
            <h3>{t("catalog.volumeTier3")}</h3>
            <p>{t("catalog.volumeTier3Desc")}</p>
          </div>
        </div>
      </motion.div>

      {modalProduct && (
        <DeliveryModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
          onConfirm={handleAddToCart}
        />
      )}

    </div>
  )
}

// Product Card Component
function ProductCard({ product, index, router, add, t, formatPrice, pName, pDesc, pCat }: {
  product: Product
  index: number
  router: any
  add: (p: Product) => void
  t: (key: string) => string
  formatPrice: (price: number) => string
  pName: (p: Product) => string
  pDesc: (p: Product) => string
  pCat: (p: Product) => string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * (index % 4) }}
      className={styles.productCard}
      whileHover={{ y: -8 }}
    >
      <div
        className={styles.productImage}
        onClick={() => router.push(`/product/${product.id}`)}
      >
        <img src={product.image} alt={pName(product)} />

        {product.tag === "sale" && (
          <span className={styles.saleBadge}>{t("catalog.saleBadge")}</span>
        )}
        {product.tag === "new" && (
          <span className={styles.newBadge}>{t("catalog.newBadge")}</span>
        )}
        {product.tag === "limited" && (
          <span className={styles.limitedBadge}>{t("catalog.limitedBadge")}</span>
        )}

        <motion.div
          className={styles.quickView}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <button onClick={() => router.push(`/product/${product.id}`)}>
            {t("catalog.viewDetails")}
          </button>
        </motion.div>
      </div>

      <div className={styles.productInfo}>
        <span className={styles.category}>{pCat(product)}</span>
        <h3 onClick={() => router.push(`/product/${product.id}`)}>
          {pName(product)}
        </h3>
        <p className={styles.description}>{pDesc(product)}</p>

        <div className={styles.priceRow}>
          {product.salePrice ? (
            <>
              <span className={styles.oldPrice}>{formatPrice(product.price)}</span>
              <span className={styles.price}>{formatPrice(product.salePrice)}</span>
            </>
          ) : (
            <span className={styles.price}>{formatPrice(product.price)}</span>
          )}
        </div>

        <div className={styles.actions}>
          <button
            className={styles.addToCartBtn}
            onClick={() => add(product)}
          >
            {t("catalog.addToCart")}
          </button>
          <button
            className={styles.customizeBtn}
            onClick={() => router.push(`/categoria/${product.category.toLowerCase()}`)}
          >
            {t("catalog.customize")}
          </button>
        </div>
      </div>

      <div className={styles.animatedBorder}></div>
    </motion.div>
  )
}
