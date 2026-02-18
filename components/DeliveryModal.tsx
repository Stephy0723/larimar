"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Product } from "@/data/products"
import { DeliveryMethod } from "@/context/CartContext"
import styles from "./DeliveryModal.module.css"

interface DeliveryModalProps {
    product: Product
    isOpen: boolean
    onClose: () => void
    onConfirm: (deliveryMethod: DeliveryMethod, deliveryAddress?: string) => void
}

export default function DeliveryModal({ product, isOpen, onClose, onConfirm }: DeliveryModalProps) {
    const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>("pickup")
    const [deliveryAddress, setDeliveryAddress] = useState("")

    const handleConfirm = () => {
        onConfirm(deliveryMethod, deliveryMethod === "delivery" ? deliveryAddress : undefined)
        onClose()
        setDeliveryAddress("")
    }

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <motion.div
                className={styles.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className={styles.modal}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className={styles.closeBtn} onClick={onClose}>✕</button>

                    <div className={styles.header}>
                        <h2>Método de Entrega</h2>
                        <p>Selecciona cómo deseas recibir tu producto</p>
                    </div>

                    <div className={styles.productPreview}>
                        <img src={product.image} alt={product.name} />
                        <div>
                            <h3>{product.name}</h3>
                            <p className={styles.price}>${product.salePrice || product.price}</p>
                        </div>
                    </div>

                    <div className={styles.options}>
                        <div
                            className={`${styles.option} ${deliveryMethod === "pickup" ? styles.active : ""}`}
                            onClick={() => setDeliveryMethod("pickup")}
                        >
                            <div className={styles.radio}>
                                {deliveryMethod === "pickup" && <div className={styles.radioDot} />}
                            </div>
                            <div className={styles.optionContent}>
                                <h4> Recogida en Tienda</h4>
                                <p>Recoge gratis en nuestra tienda física</p>
                            </div>
                        </div>

                        <div
                            className={`${styles.option} ${deliveryMethod === "delivery" ? styles.active : ""}`}
                            onClick={() => setDeliveryMethod("delivery")}
                        >
                            <div className={styles.radio}>
                                {deliveryMethod === "delivery" && <div className={styles.radioDot} />}
                            </div>
                            <div className={styles.optionContent}>
                                <h4> Envío a Domicilio</h4>
                                <p>Entrega en la dirección que prefieras</p>
                            </div>
                        </div>
                    </div>

                    {deliveryMethod === "delivery" && (
                        <motion.div
                            className={styles.addressInput}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                        >
                            <label>Dirección de Entrega</label>
                            <textarea
                                value={deliveryAddress}
                                onChange={(e) => setDeliveryAddress(e.target.value)}
                                placeholder="Escribe tu dirección completa..."
                                rows={3}
                                required
                            />
                        </motion.div>
                    )}

                    <div className={styles.actions}>
                        <button className={styles.cancelBtn} onClick={onClose}>
                            Cancelar
                        </button>
                        <button
                            className={styles.confirmBtn}
                            onClick={handleConfirm}
                            disabled={deliveryMethod === "delivery" && !deliveryAddress.trim()}
                        >
                            Añadir al Carrito
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
