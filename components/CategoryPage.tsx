"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { PRODUCTS, Product } from "@/data/products"
import { useCart } from "@/context/CartContext"
import styles from "./CategoryPage.module.css"

interface CategoryPageProps {
    category: string
}

const CATEGORY_NAMES: { [key: string]: string } = {
    'anillos': 'Anillos',
    'collares': 'Collares',
    'pulseras': 'Pulseras',
    'aretes': 'Aretes',
}

const METAL_OPTIONS = [
    { id: 'plata', name: 'Plata Sterling 925', priceMultiplier: 1, color: '#C0C0C0' },
    { id: 'oro-bano', name: 'Baño de Oro', priceMultiplier: 1.3, color: '#FFD700' },
    { id: 'oro-blanco', name: 'Oro Blanco 18K', priceMultiplier: 2.5, color: '#E5E4E2' },
    { id: 'oro', name: 'Oro Amarillo 18K', priceMultiplier: 3, color: '#FFD700' },
]

export default function CategoryPage({ category }: CategoryPageProps) {
    const router = useRouter()
    const { add } = useCart()
    const [selectedMetal, setSelectedMetal] = useState<{ [key: string]: string }>({})

    // Filter products by category
    const categoryName = CATEGORY_NAMES[category] || category
    const filteredProducts = PRODUCTS.filter(
        (product: Product) => product.category.toLowerCase() === categoryName.toLowerCase()
    )

    const handleAddToCart = (product: Product) => {
        const metal = selectedMetal[product.id] || 'plata'
        const metalOption = METAL_OPTIONS.find(m => m.id === metal)
        const finalPrice = (product.salePrice || product.price) * (metalOption?.priceMultiplier || 1)

        // Add product with metal customization
        add({
            ...product,
            price: finalPrice,
            name: `${product.name} - ${metalOption?.name}`
        })
    }

    return (
        <div className={styles.wrapper}>

            {/* CATEGORY HERO */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={styles.hero}
            >
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className={styles.breadcrumb}>
                        <a onClick={() => router.push('/')}>Inicio</a> / <a onClick={() => router.push('/catalogo')}>Catálogo</a> / {categoryName}
                    </span>
                    <h1>{categoryName}</h1>
                    <div className={styles.heroLine}></div>
                    <p>Joyería artesanal con Larimar auténtico dominicano</p>
                </motion.div>
            </motion.div>

            <div className={styles.container}>

                {/* FILTER BAR */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={styles.filterBar}
                >
                    <span>{filteredProducts.length} productos encontrados</span>
                </motion.div>

                {/* PRODUCTS GRID */}
                <div className={styles.productsGrid}>
                    {filteredProducts.map((product: Product, index: number) => {
                        const currentMetal = selectedMetal[product.id] || 'plata'
                        const metalOption = METAL_OPTIONS.find(m => m.id === currentMetal)
                        const basePrice = product.salePrice || product.price
                        const finalPrice = basePrice * (metalOption?.priceMultiplier || 1)

                        return (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className={styles.productCard}
                            >
                                {/* Product Image */}
                                <div
                                    className={styles.productImage}
                                    onClick={() => router.push(`/product/${product.id}`)}
                                >
                                    <img src={product.image} alt={product.name} />
                                    {product.salePrice && (
                                        <span className={styles.saleBadge}>OFERTA</span>
                                    )}
                                </div>

                                {/* Product Info */}
                                <div className={styles.productInfo}>
                                    <h3 onClick={() => router.push(`/product/${product.id}`)}>
                                        {product.name}
                                    </h3>

                                    {/* Metal Selector */}
                                    <div className={styles.metalSelector}>
                                        <label>Metal:</label>
                                        <div className={styles.metalOptions}>
                                            {METAL_OPTIONS.map(metal => (
                                                <button
                                                    key={metal.id}
                                                    className={`${styles.metalOption} ${currentMetal === metal.id ? styles.active : ''}`}
                                                    onClick={() => setSelectedMetal({ ...selectedMetal, [product.id]: metal.id })}
                                                    style={{ borderColor: currentMetal === metal.id ? metal.color : '#e5e5e5' }}
                                                >
                                                    <span
                                                        className={styles.metalDot}
                                                        style={{ background: metal.color }}
                                                    />
                                                    {metal.name.split(' ')[0]}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className={styles.priceSection}>
                                        {product.salePrice && (
                                            <span className={styles.oldPrice}>
                                                ${(product.price * (metalOption?.priceMultiplier || 1)).toFixed(2)}
                                            </span>
                                        )}
                                        <span className={styles.price}>${finalPrice.toFixed(2)}</span>
                                    </div>

                                    {/* Actions */}
                                    <div className={styles.actions}>
                                        <button
                                            className={styles.addToCartBtn}
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            AÑADIR AL CARRITO
                                        </button>
                                        <button
                                            className={styles.viewBtn}
                                            onClick={() => router.push(`/product/${product.id}`)}
                                        >
                                            VER DETALLES
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={styles.emptyState}
                    >
                        <h2>No hay productos en esta categoría</h2>
                        <p>Explora otras categorías</p>
                        <button onClick={() => router.push('/catalogo')}>
                            VER TODO EL CATÁLOGO
                        </button>
                    </motion.div>
                )}

            </div>
        </div>
    )
}
