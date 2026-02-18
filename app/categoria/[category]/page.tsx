import CategoryPage from "@/components/CategoryPage"

export default async function Categoria({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params
    return <CategoryPage category={category} />
}

// Generate static params for all categories
export async function generateStaticParams() {
    return [
        { category: 'anillos' },
        { category: 'collares' },
        { category: 'pulseras' },
        { category: 'aretes' },
    ]
}
