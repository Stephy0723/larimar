import { PRODUCTS } from "@/data/products"
import { notFound } from "next/navigation"
import ProductDetailClient from "./ProductDetailClient"

// Required for static export with dynamic routes
export function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        id: product.id,
    }))
}

export default async function ProductPage({ params }: any) {
    const { id } = await params
    const product = PRODUCTS.find(p => p.id === id)

    if (!product) return notFound()

    return <ProductDetailClient product={product} />
}
