"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/context/LanguageContext"
import styles from "./Homepage.module.css"
import { PRODUCTS, Product } from "@/data/products"

export default function Homepage() {
    const router = useRouter()
    const { formatPrice, t, pName, pCat } = useLanguage()

    // Featured products (best sellers)
    const featuredProducts = PRODUCTS.slice(0, 4)

    return (
        <div className={styles.wrapper}>

            {/* FEATURED PRODUCTS */}
            <section className={styles.featuredSection}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.sectionHeader}
                >
                    <span className={styles.sectionLabel}>{t("home.featured.label")}</span>
                    <h2>{t("home.featured.subtitle")}</h2>
                    <p>{t("home.featured.description")}</p>
                </motion.div>

                <div className={styles.productsGrid}>
                    {featuredProducts.map((product: Product, index: number) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.productCard}
                            onClick={() => router.push(`/product/${product.id}`)}
                        >
                            <div className={styles.productImage}>
                                <img src={product.image} alt={product.name} />
                                {product.salePrice && (
                                    <span className={styles.saleBadge}>{t("catalog.clearance").toUpperCase()}</span>
                                )}
                            </div>
                            <div className={styles.productInfo}>
                                <h3>{pName(product)}</h3>
                                <p className={styles.category}>{pCat(product)}</p>
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
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={styles.viewAllBtn}
                    onClick={() => router.push('/catalogo')}
                >
                    {t("home.featured.viewAll")}
                </motion.button>
            </section>

            {/* WHY LARIMAR */}
            <section className={styles.whySection}>
                <div className={styles.whyContent}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.whyText}
                    >
                        <span className={styles.sectionLabel}>{t("home.why.label")}</span>
                        <h2>{t("home.why.sectionTitle")}</h2>
                        <p>{t("home.why.sectionDesc")}</p>
                        <ul className={styles.features}>
                            <li>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                </svg>
                                {t("home.why.feature0")}
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                </svg>
                                {t("home.why.feature1")}
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                </svg>
                                {t("home.why.feature2")}
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                </svg>
                                {t("home.why.feature3")}
                            </li>
                        </ul>
                        <button
                            className={styles.learnMoreBtn}
                            onClick={() => router.push('/historia')}
                        >
                            {t("home.why.learnMore")}
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.whyImage}
                    >
                        <div className={styles.imagePlaceholder}>
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </section >

            {/* CATEGORIES */}
            < section className={styles.categoriesSection} >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.sectionHeader}
                >
                    <span className={styles.sectionLabel}>{t("home.categories.label")}</span>
                    <h2>{t("home.categories.title")}</h2>
                </motion.div>

                <div className={styles.categoriesGrid}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={styles.categoryCard}
                        onClick={() => router.push('/products')}
                        style={{ backgroundImage: `url(${PRODUCTS.find(p => p.category === 'Anillos')?.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className={styles.categoryOverlay}></div>
                        <h3>{t("home.categories.rings")}</h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.categoryCard}
                        onClick={() => router.push('/products')}
                        style={{ backgroundImage: `url(${PRODUCTS.find(p => p.category === 'Pulseras')?.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className={styles.categoryOverlay}></div>
                        <h3>{t("home.categories.bracelets")}</h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={styles.categoryCard}
                        onClick={() => router.push('/products')}
                        style={{ backgroundImage: `url(${PRODUCTS.find(p => p.category === 'Collares')?.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className={styles.categoryOverlay}></div>
                        <h3>{t("home.categories.necklaces")}</h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className={styles.categoryCard}
                        onClick={() => router.push('/products')}
                        style={{ backgroundImage: `url(${PRODUCTS.find(p => p.category === 'Aretes')?.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className={styles.categoryOverlay}></div>
                        <h3>{t("home.categories.earrings")}</h3>
                    </motion.div>
                </div>
            </section >

            {/* TESTIMONIALS */}
            < section className={styles.testimonialsSection} >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.sectionHeader}
                >
                    <span className={styles.sectionLabel}>{t("home.testimonials.label")}</span>
                    <h2>{t("home.testimonials.title")}</h2>
                </motion.div>

                <div className={styles.testimonialsGrid}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.testimonialCard}
                    >
                        <div className={styles.stars}>★★★★★</div>
                        <p>{t("home.testimonial1")}</p>
                        <div className={styles.author}>
                            <strong>{t("home.testimonial1.author")}</strong>
                            <span>{t("home.testimonial1.location")}</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.testimonialCard}
                    >
                        <div className={styles.stars}>★★★★★</div>
                        <p>{t("home.testimonial2")}</p>
                        <div className={styles.author}>
                            <strong>{t("home.testimonial2.author")}</strong>
                            <span>{t("home.testimonial2.location")}</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={styles.testimonialCard}
                    >
                        <div className={styles.stars}>★★★★★</div>
                        <p>{t("home.testimonial3")}</p>
                        <div className={styles.author}>
                            <strong>{t("home.testimonial3.author")}</strong>
                            <span>{t("home.testimonial3.location")}</span>
                        </div>
                    </motion.div>
                </div>
            </section >

            {/* NEWSLETTER */}
            < section className={styles.newsletterSection} >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.newsletterContent}
                >
                    <h2>{t("home.newsletter.title")}</h2>
                    <p>{t("home.newsletter.description")}</p>

                    <form className={styles.newsletterForm}>
                        <input type="email" placeholder={t("home.newsletter.placeholder")} required />
                        <button type="submit">{t("home.newsletter.button")}</button>
                    </form>

                    <p className={styles.privacy}>
                        {t("home.newsletter.privacy")}
                    </p>
                </motion.div>
            </section >

        </div >
    )
}
