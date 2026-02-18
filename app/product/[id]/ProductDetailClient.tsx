"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/CartContext"
import { useLanguage } from "@/context/LanguageContext"
import { Product } from "@/data/products"
import styles from "./ProductDetail.module.css"

type ProductDetailClientProps = {
    product: Product
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
    const router = useRouter()
    const { add } = useCart()
    const { t, formatPrice, pName, pDesc, pCat } = useLanguage()

    // Create gallery: use images array if available, otherwise use main image multiple times
    const gallery = product.images || [
        product.image,
        product.image,
        product.image
    ]

    const [activeImage, setActiveImage] = useState(gallery[0])

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>

                {/* LEFT SIDE - Images */}
                <div className={styles.left}>
                    <div className={styles.mainImage}>
                        <img src={activeImage} alt={pName(product)} />
                    </div>

                    <div className={styles.thumbs}>
                        {gallery.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                onClick={() => setActiveImage(img)}
                                className={activeImage === img ? styles.activeThumb : ""}
                                alt={`${pName(product)} view ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE - Product Info */}
                <div className={styles.right}>
                    {product.tag && (
                        <span className={`${styles.tag} ${styles[product.tag]}`}>
                            {product.tag === "sale" ? t("catalog.saleBadge") : product.tag === "new" ? t("catalog.newBadge") : t("catalog.limitedBadge")}
                        </span>
                    )}

                    <h1 className={styles.title}>{pName(product)}</h1>

                    <div className={styles.rating}>
                        ★ ★ ★ ★ ☆ <span>{t("product.reviewCount")}</span>
                    </div>

                    <div className={styles.price}>
                        {product.salePrice ? (
                            <>
                                <span className={styles.oldPrice}>{formatPrice(product.price)}</span>
                                <span className={styles.salePrice}>{formatPrice(product.salePrice)}</span>
                            </>
                        ) : (
                            <span>{formatPrice(product.price)}</span>
                        )}
                    </div>

                    <p className={styles.shortDesc}>
                        {pDesc(product)}
                    </p>

                    <div className={styles.variantSection}>
                        <label>{t("product.category")}</label>
                        <div className={styles.category}>
                            {pCat(product)}
                        </div>
                    </div>

                    <button
                        className={styles.cartBtn}
                        onClick={() => add(product)}
                    >
                        {t("product.addToCart")}
                    </button>

                    <button
                        className={styles.catalogBtn}
                        onClick={() => router.push("/catalogo")}
                    >
                        {t("product.viewCatalog")}
                    </button>
                </div>

            </div>

            {/* BOTTOM SECTION - Description & Reviews */}
            <div className={styles.bottom}>
                <div>
                    <h3>{t("product.descTitle")}</h3>
                    <p>{t("product.descText")}</p>
                </div>
                <div>
                    <h3>{t("product.reviewsTitle")}</h3>
                    <div className={styles.reviewItem}>
                        <div className={styles.reviewStars}>★ ★ ★ ★ ★</div>
                        <p><strong>María García</strong> - {t("product.review1")}</p>
                    </div>
                    <div className={styles.reviewItem}>
                        <div className={styles.reviewStars}>★ ★ ★ ★ ☆</div>
                        <p><strong>Juan Pérez</strong> - {t("product.review2")}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
