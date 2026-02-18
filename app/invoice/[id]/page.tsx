"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useRouter, useSearchParams } from "next/navigation"
import { useCart } from "@/context/CartContext"
import { STORE_INFO } from "@/data/storeInfo"
import styles from "./Invoice.module.css"

export default function Invoice({ params }: { params: { id: string } }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const { clear } = useCart()

    // Load order data from sessionStorage
    const [orderData, setOrderData] = useState<any>(null)

    useEffect(() => {
        const storedData = sessionStorage.getItem('orderData')
        if (storedData) {
            setOrderData(JSON.parse(storedData))
        }
    }, [])

    const [invoiceData] = useState({
        orderNumber: params.id,
        ncf: `B01${Date.now().toString().slice(-8)}`, // Número de Comprobante Fiscal
        customerName: searchParams.get("customer") || "",
        customerEmail: searchParams.get("email") || "",
        customerPhone: searchParams.get("phone") || "",
        paymentMethod: searchParams.get("payment") || "",
        total: parseFloat(searchParams.get("total") || "0"),
        estimatedTime: parseInt(searchParams.get("time") || "0"),
        date: new Date().toLocaleDateString("es-DO", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        })
    })

    useEffect(() => {
        // Clear cart and sessionStorage after showing invoice
        const timer = setTimeout(() => {
            clear()
            sessionStorage.removeItem('orderData')
        }, 2000)
        return () => clearTimeout(timer)
    }, [clear])

    const handlePrint = () => {
        window.print()
    }

    const handleDownload = () => {
        // In a real app, this would generate a PDF
        alert("¡Factura descargada! (Simulación)")
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {/* SUCCESS MESSAGE */}
                <motion.div
                    className={styles.successBanner}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className={styles.successIcon}>✓</div>
                    <div>
                        <h2>¡Pago Exitoso!</h2>
                        <p>Tu pedido ha sido confirmado y está en proceso</p>
                    </div>
                </motion.div>

                {/* INVOICE */}
                <motion.div
                    className={styles.invoice}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {/* HEADER */}
                    <div className={styles.invoiceHeader}>
                        <div>
                            <h1>JOYERÍA LARIMAR</h1>
                            <p><strong>LARIMAR DOMINICANA SRL</strong></p>
                            <p><strong>RNC:</strong> 131-77889-4</p>
                            <p>Calle El Conde #253, Zona Colonial</p>
                            <p>Santo Domingo, República Dominicana</p>
                            <p>Tel: +1 (809) 555-0123 | Email: ventas@larimardom.com</p>
                        </div>
                        <div className={styles.invoiceNumber}>
                            <h3>FACTURA</h3>
                            <p>#{invoiceData.orderNumber}</p>
                            <p><strong>NCF:</strong> {invoiceData.ncf}</p>
                            <p className={styles.date}>{invoiceData.date}</p>
                        </div>
                    </div>

                    <div className={styles.divider}></div>

                    {/* CUSTOMER INFO */}
                    <div className={styles.customerInfo}>
                        <div>
                            <h3>Facturado a:</h3>
                            <p><strong>{invoiceData.customerName}</strong></p>
                            <p>{invoiceData.customerEmail}</p>
                            <p>{invoiceData.customerPhone}</p>
                        </div>
                        <div>
                            <h3>Método de Pago:</h3>
                            <p>
                                {invoiceData.paymentMethod === "card" ? "💳 Tarjeta de Crédito" : "💰 PayPal"}
                            </p>
                        </div>
                    </div>

                    {/* ITEMS TABLE */}
                    <div className={styles.itemsTable}>
                        <div className={styles.tableHeader}>
                            <div>Producto</div>
                            <div>Entrega</div>
                            <div>Tiempo</div>
                            <div>Cant.</div>
                            <div>Precio</div>
                            <div>Total</div>
                        </div>

                        {orderData?.items.map((item: any) => (
                            <div key={item.product.id} className={styles.tableRow}>
                                <div>
                                    <strong>{item.product.name}</strong>
                                    <span className={styles.category}>{item.product.category}</span>
                                </div>
                                <div className={styles.deliveryCell}>
                                    <span className={styles.redText}>
                                        {item.deliveryMethod === "pickup" ? "📍 Recogida" : "📦 Envío"}
                                    </span>
                                    {item.deliveryAddress && (
                                        <span className={styles.smallText}>{item.deliveryAddress}</span>
                                    )}
                                </div>
                                <div className={styles.redText}>
                                    {item.deliveryMethod === "pickup"
                                        ? item.product.preparationTime.pickup
                                        : item.product.preparationTime.delivery} días
                                </div>
                                <div>{item.quantity}</div>
                                <div>${(item.product.salePrice || item.product.price).toFixed(2)}</div>
                                <div className={styles.itemTotal}>
                                    ${((item.product.salePrice || item.product.price) * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* TOTALS */}
                    <div className={styles.totalsSection}>
                        <div className={styles.timeNotice}>
                            <strong className={styles.redText}>⏱ Tiempo Total de Preparación:</strong>
                            <strong className={styles.redText}>{invoiceData.estimatedTime} días hábiles</strong>
                        </div>

                        <div className={styles.totalRow}>
                            <span>TOTAL PAGADO:</span>
                            <span>${invoiceData.total.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* DELIVERY SUMMARY */}
                    <div className={styles.deliveryDetails}>
                        <h3>Detalles de Entrega:</h3>

                        {orderData?.items.filter((i: any) => i.deliveryMethod === "pickup").length > 0 && (
                            <div className={styles.deliveryGroup}>
                                <p><strong className={styles.redText}> Productos para Recogida en Tienda:</strong></p>
                                <ul>
                                    {orderData.items.filter((i: any) => i.deliveryMethod === "pickup").map((i: any) => (
                                        <li key={i.product.id}>{i.product.name} (x{i.quantity})</li>
                                    ))}
                                </ul>
                                <p className={styles.note}>
                                    * Puedes recoger estos productos en nuestra tienda después de {
                                        Math.max(...orderData.items.filter((i: any) => i.deliveryMethod === "pickup")
                                            .map((i: any) => i.product.preparationTime.pickup))
                                    } días hábiles.
                                </p>
                            </div>
                        )}

                        {orderData?.items.filter((i: any) => i.deliveryMethod === "delivery").length > 0 && (
                            <div className={styles.deliveryGroup}>
                                <p><strong className={styles.redText}>📦 Productos para Envío:</strong></p>
                                <ul>
                                    {orderData.items.filter((i: any) => i.deliveryMethod === "delivery").map((i: any) => (
                                        <li key={i.product.id}>
                                            {i.product.name} (x{i.quantity})
                                            {i.deliveryAddress && <span> → {i.deliveryAddress}</span>}
                                        </li>
                                    ))}
                                </ul>
                                <p className={styles.note}>
                                    * Estos productos serán enviados a la dirección especificada en {
                                        Math.max(...orderData.items.filter((i: any) => i.deliveryMethod === "delivery")
                                            .map((i: any) => i.product.preparationTime.delivery))
                                    } días hábiles.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* FOOTER */}
                    <div className={styles.invoiceFooter}>
                        <p><strong>Gracias por tu compra!</strong></p>
                        <p>Si tienes alguna pregunta sobre tu pedido, contáctanos en info@larimar.com</p>
                        <p className={styles.smallText}>
                            Esta es una factura electrónica válida. No se requiere firma.
                        </p>
                    </div>
                </motion.div>

                {/* ACTIONS */}
                <div className={styles.actions}>
                    <button className={styles.printBtn} onClick={handlePrint}>
                        🖨️ IMPRIMIR
                    </button>
                    <button className={styles.downloadBtn} onClick={handleDownload}>
                        ⬇️ DESCARGAR PDF
                    </button>
                    <button className={styles.homeBtn} onClick={() => router.push("/")}>
                        🏠 VOLVER AL INICIO
                    </button>
                </div>
            </div>
        </div>
    )
}
