"use client"

import { createContext, useContext, useMemo, useState } from "react"
import { Product } from "@/data/products"

export type DeliveryMethod = "pickup" | "delivery" | "pending"

export type CartItem = {
    product: Product
    quantity: number
    deliveryMethod: DeliveryMethod
    deliveryAddress?: string
}

type CartContextType = {
    items: CartItem[]
    add: (product: Product) => void
    remove: (id: string) => void
    increase: (id: string) => void
    decrease: (id: string) => void
    updateDelivery: (id: string, deliveryMethod: DeliveryMethod, deliveryAddress?: string) => void
    clear: () => void
    subtotal: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: any) {
    const [items, setItems] = useState<CartItem[]>([])

    const add = (product: Product) => {
        setItems(prev => {
            const existing = prev.find(i => i.product.id === product.id)
            if (existing) {
                return prev.map(i =>
                    i.product.id === product.id
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                )
            }
            return [...prev, { product, quantity: 1, deliveryMethod: "pending" }]
        })
    }

    const remove = (id: string) =>
        setItems(prev => prev.filter(i => i.product.id !== id))

    const increase = (id: string) =>
        setItems(prev =>
            prev.map(i =>
                i.product.id === id
                    ? { ...i, quantity: i.quantity + 1 }
                    : i
            )
        )

    const decrease = (id: string) =>
        setItems(prev =>
            prev.map(i =>
                i.product.id === id && i.quantity > 1
                    ? { ...i, quantity: i.quantity - 1 }
                    : i
            )
        )

    const updateDelivery = (id: string, deliveryMethod: DeliveryMethod, deliveryAddress?: string) =>
        setItems(prev =>
            prev.map(i =>
                i.product.id === id
                    ? { ...i, deliveryMethod, deliveryAddress }
                    : i
            )
        )

    const clear = () => setItems([])

    const subtotal = useMemo(() => {
        return items.reduce((total, item) => {
            const price = item.product.salePrice ?? item.product.price
            return total + price * item.quantity
        }, 0)
    }, [items])

    return (
        <CartContext.Provider
            value={{ items, add, remove, increase, decrease, updateDelivery, clear, subtotal }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (!context) throw new Error("Cart must be used inside provider")
    return context
}
