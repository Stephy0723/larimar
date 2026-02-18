"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useCart, DeliveryMethod } from "@/context/CartContext"
import { useLanguage } from "@/context/LanguageContext"
import { STORE_INFO } from "@/data/storeInfo"
import styles from "./Cart.module.css"

export default function Cart() {
    const router = useRouter()
    const { t, formatPrice, pName, pCat } = useLanguage()
    const { items, remove, increase, decrease, updateDelivery, subtotal, clear } = useCart()

    // Calculate total preparation time
    const totalTime = items.reduce((max, item) => {
        if (item.deliveryMethod === "pending") return max
        const time = item.deliveryMethod === "pickup"
            ? item.product.preparationTime.pickup
            : item.product.preparationTime.delivery
        return Math.max(max, time)
    }, 0)

    const hasPendingDelivery = items.some(i => i.deliveryMethod === "pending")

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {t("cart.title")}
                </motion.h1>

                {items.length === 0 ? (
                    <motion.div
                        className={styles.empty}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <p>{t("cart.empty")}</p>
                        <button onClick={() => router.push("/products")}>
                            {t("cart.exploreProducts")}
                        </button>
                    </motion.div>
                ) : (
                    <div className={styles.cartLayout}>
                        {/* ITEMS LIST */}
                        <div className={styles.itemsList}>
                            {items.map((item, index) => (
                                <motion.div
                                    key={item.product.id}
                                    className={styles.cartItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <img src={item.product.image} alt={pName(item.product)} />

                                    <div className={styles.itemInfo}>
                                        <h3>{pName(item.product)}</h3>
                                        <p className={styles.category}>{pCat(item.product)}</p>
                                        <p className={styles.price}>
                                            {formatPrice(item.product.salePrice || item.product.price)}
                                        </p>
                                    </div>

                                    <div className={styles.quantity}>
                                        <button onClick={() => decrease(item.product.id)}>−</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => increase(item.product.id)}>+</button>
                                    </div>

                                    {/* DELIVERY METHOD SELECTOR */}
                                    <div className={styles.deliverySelector}>
                                        <label className={item.deliveryMethod === "pending" ? styles.pending : ""}>
                                            {item.deliveryMethod === "pending" ? t("cart.selectDelivery") : t("cart.delivery")}
                                        </label>

                                        <div className={styles.deliveryOptions}>
                                            <button
                                                className={`${styles.deliveryBtn} ${item.deliveryMethod === "pickup" ? styles.active : ""}`}
                                                onClick={() => updateDelivery(item.product.id, "pickup")}
                                            >
                                                {t("cart.pickup")}
                                                <span className={styles.time}>{item.product.preparationTime.pickup} {t("cart.days")}</span>
                                            </button>

                                            <button
                                                className={`${styles.deliveryBtn} ${item.deliveryMethod === "delivery" ? styles.active : ""}`}
                                                onClick={() => updateDelivery(item.product.id, "delivery")}
                                            >
                                                {t("cart.shipping")}
                                                <span className={styles.time}>{item.product.preparationTime.delivery} {t("cart.days")}</span>
                                            </button>
                                        </div>

                                        {/* ADDRESS INPUT for delivery */}
                                        {item.deliveryMethod === "delivery" && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                className={styles.addressInput}
                                            >
                                                <input
                                                    type="text"
                                                    placeholder={t("cart.address")}
                                                    value={item.deliveryAddress || ""}
                                                    onChange={(e) => updateDelivery(item.product.id, "delivery", e.target.value)}
                                                />
                                            </motion.div>
                                        )}
                                    </div>

                                    <button
                                        className={styles.removeBtn}
                                        onClick={() => remove(item.product.id)}
                                    >
                                        ✕
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        {/* SUMMARY */}
                        <motion.div
                            className={styles.summary}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h2>{t("cart.summary")}</h2>

                            <div className={styles.summaryRow}>
                                <span>{t("cart.subtotal")}</span>
                                <span>{formatPrice(subtotal)}</span>
                            </div>

                            {!hasPendingDelivery && totalTime > 0 && (
                                <div className={`${styles.summaryRow} ${styles.timeRow}`}>
                                    <span>{t("cart.estimatedTime")}</span>
                                    <span className={styles.redText}>{totalTime} {t("cart.days")}</span>
                                </div>
                            )}

                            {hasPendingDelivery && (
                                <div className={styles.warning}>
                                    {t("cart.selectAllWarning")}
                                </div>
                            )}

                            {/* DELIVERY SUMMARY */}
                            {!hasPendingDelivery && items.length > 0 && (
                                <div className={styles.deliverySummary}>
                                    <h3>{t("cart.deliveryMethods")}</h3>
                                    {items.filter(i => i.deliveryMethod === "pickup").length > 0 && (
                                        <div className={styles.deliveryGroup}>
                                            <strong className={styles.redText}>{t("cart.pickupAt")}</strong>
                                            <ul>
                                                {items.filter(i => i.deliveryMethod === "pickup").map(i => (
                                                    <li key={i.product.id}>{pName(i.product)}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {items.filter(i => i.deliveryMethod === "delivery").length > 0 && (
                                        <div className={styles.deliveryGroup}>
                                            <strong className={styles.redText}>{t("cart.shippingInsured")}</strong>
                                            <ul>
                                                {items.filter(i => i.deliveryMethod === "delivery").map(i => (
                                                    <li key={i.product.id}>
                                                        {pName(i.product)}
                                                        {i.deliveryAddress && (
                                                            <span className={styles.address}> → {i.deliveryAddress}</span>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className={styles.total}>
                                <span>{t("cart.total")}</span>
                                <span>{formatPrice(subtotal)}</span>
                            </div>

                            <button
                                className={styles.checkoutBtn}
                                onClick={() => router.push("/checkout")}
                                disabled={hasPendingDelivery}
                            >
                                {hasPendingDelivery ? t("cart.selectAllDelivery") : t("cart.checkout")}
                            </button>

                            <button
                                className={styles.clearBtn}
                                onClick={clear}
                            >
                                {t("cart.clear")}
                            </button>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    )
}
