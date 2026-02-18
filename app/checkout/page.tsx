"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/CartContext"
import { STORE_INFO } from "@/data/storeInfo"
import styles from "./Checkout.module.css"

type PaymentMethod = "card" | "paypal" | null

export default function Checkout() {
    const router = useRouter()
    const { items, subtotal, clear } = useCart()

    // Customer information
    const [customerName, setCustomerName] = useState("")
    const [customerEmail, setCustomerEmail] = useState("")
    const [customerPhone, setCustomerPhone] = useState("")

    // Payment
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null)
    const [cardNumber, setCardNumber] = useState("")
    const [cardName, setCardName] = useState("")
    const [cardExpiry, setCardExpiry] = useState("")
    const [cardCVV, setCardCVV] = useState("")

    // Processing
    const [isProcessing, setIsProcessing] = useState(false)
    const [orderNumber, setOrderNumber] = useState("")

    const totalTime = items.reduce((max, item) => {
        const time = item.deliveryMethod === "pickup"
            ? item.product.preparationTime.pickup
            : item.product.preparationTime.delivery
        return Math.max(max, time)
    }, 0)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        setIsProcessing(true)

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 3000))

        // Generate order number
        const orderNum = `LAR-${Date.now().toString().slice(-6)}`
        setOrderNumber(orderNum)

        // Store order data in sessionStorage before clearing cart
        sessionStorage.setItem('orderData', JSON.stringify({
            items: items,
            orderNumber: orderNum,
            customerName,
            customerEmail,
            customerPhone,
            paymentMethod,
            total: subtotal,
            estimatedTime: totalTime
        }))

        setIsProcessing(false)

        // Navigate to invoice
        router.push(`/invoice/${orderNum}?customer=${encodeURIComponent(customerName)}&email=${encodeURIComponent(customerEmail)}&phone=${encodeURIComponent(customerPhone)}&payment=${paymentMethod}&total=${subtotal.toFixed(2)}&time=${totalTime}`)
    }

    const isFormValid = customerName && customerEmail && customerPhone &&
        paymentMethod &&
        (paymentMethod === "paypal" || (cardNumber && cardName && cardExpiry && cardCVV))

    if (items.length === 0) {
        router.push("/products")
        return null
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    FINALIZAR COMPRA
                </motion.h1>

                <div className={styles.checkoutLayout}>
                    {/* ORDER SUMMARY */}
                    <div className={styles.orderSummary}>
                        <h2>Resumen de Orden</h2>

                        {items.map(item => (
                            <div key={item.product.id} className={styles.summaryItem}>
                                <img src={item.product.image} alt={item.product.name} />
                                <div className={styles.summaryInfo}>
                                    <h3>{item.product.name}</h3>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p className={styles.deliveryInfo}>
                                        {item.deliveryMethod === "pickup" ? "🏪 Recogida" : "🚚 Envío"}
                                        <span className={styles.redText}>
                                            {" "}→ {item.deliveryMethod === "pickup"
                                                ? item.product.preparationTime.pickup
                                                : item.product.preparationTime.delivery} días
                                        </span>
                                    </p>
                                    {item.deliveryAddress && (
                                        <p className={styles.address}>📍 {item.deliveryAddress}</p>
                                    )}
                                </div>
                                <div className={styles.summaryPrice}>
                                    ${((item.product.salePrice || item.product.price) * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))}

                        <div className={styles.summaryTotal}>
                            <div className={styles.timeNotice}>
                                <strong className={styles.redText}>⏱ Tiempo total de preparación:</strong>
                                <span className={styles.redText}>{totalTime} días hábiles</span>
                            </div>
                            <div className={styles.totalRow}>
                                <span>TOTAL:</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    {/* CHECKOUT FORM */}
                    <form className={styles.checkoutForm} onSubmit={handleSubmit}>
                        <div className={styles.formSection}>
                            <h3>Información del Cliente</h3>

                            <div className={styles.formGroup}>
                                <label>Nombre Completo *</label>
                                <input
                                    type="text"
                                    value={customerName}
                                    onChange={(e) => setCustomerName(e.target.value)}
                                    required
                                    placeholder="Juan Pérez"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Email *</label>
                                <input
                                    type="email"
                                    value={customerEmail}
                                    onChange={(e) => setCustomerEmail(e.target.value)}
                                    required
                                    placeholder="juan@email.com"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Teléfono *</label>
                                <input
                                    type="tel"
                                    value={customerPhone}
                                    onChange={(e) => setCustomerPhone(e.target.value)}
                                    required
                                    placeholder="+1 (809) 123-4567"
                                />
                            </div>
                        </div>

                        <div className={styles.formSection}>
                            <h3>Método de Pago</h3>

                            <div className={styles.paymentMethods}>
                                <div
                                    className={`${styles.paymentOption} ${paymentMethod === "card" ? styles.active : ""}`}
                                    onClick={() => setPaymentMethod("card")}
                                >
                                    <div className={styles.radio}>
                                        {paymentMethod === "card" && <div className={styles.radioDot} />}
                                    </div>
                                    <span>💳 Tarjeta de Crédito</span>
                                </div>

                                <div
                                    className={`${styles.paymentOption} ${paymentMethod === "paypal" ? styles.active : ""}`}
                                    onClick={() => setPaymentMethod("paypal")}
                                >
                                    <div className={styles.radio}>
                                        {paymentMethod === "paypal" && <div className={styles.radioDot} />}
                                    </div>
                                    <span>💰 PayPal</span>
                                </div>
                            </div>

                            {paymentMethod === "card" && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    className={styles.cardForm}
                                >
                                    <div className={styles.formGroup}>
                                        <label>Número de Tarjeta *</label>
                                        <input
                                            type="text"
                                            value={cardNumber}
                                            onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))}
                                            required
                                            placeholder="1234 5678 9012 3456"
                                            maxLength={16}
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Nombre en la Tarjeta *</label>
                                        <input
                                            type="text"
                                            value={cardName}
                                            onChange={(e) => setCardName(e.target.value)}
                                            required
                                            placeholder="JUAN PEREZ"
                                        />
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label>Vencimiento *</label>
                                            <input
                                                type="text"
                                                value={cardExpiry}
                                                onChange={(e) => {
                                                    let value = e.target.value.replace(/\D/g, "")
                                                    if (value.length >= 2) {
                                                        value = value.slice(0, 2) + "/" + value.slice(2, 4)
                                                    }
                                                    setCardExpiry(value)
                                                }}
                                                required
                                                placeholder="MM/AA"
                                                maxLength={5}
                                            />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label>CVV *</label>
                                            <input
                                                type="text"
                                                value={cardCVV}
                                                onChange={(e) => setCardCVV(e.target.value.replace(/\D/g, "").slice(0, 3))}
                                                required
                                                placeholder="123"
                                                maxLength={3}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {paymentMethod === "paypal" && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    className={styles.paypalNotice}
                                >
                                    <p>✓ Serás redirigido a PayPal para completar el pago de forma segura.</p>
                                </motion.div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={!isFormValid || isProcessing}
                        >
                            {isProcessing ? "PROCESANDO..." : `PAGAR $${subtotal.toFixed(2)}`}
                        </button>
                    </form>
                </div>

                {/* PROCESSING OVERLAY */}
                <AnimatePresence>
                    {isProcessing && (
                        <motion.div
                            className={styles.processingOverlay}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className={styles.processingCard}
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                            >
                                <div className={styles.spinner} />
                                <h2>Procesando Pago...</h2>
                                <p>Por favor espera mientras validamos tu transacción</p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
