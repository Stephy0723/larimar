"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { Product } from "@/data/products"

type Language = "es" | "en"

type LanguageContextType = {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
    formatPrice: (usdPrice: number) => string
    pName: (product: Product) => string
    pDesc: (product: Product) => string
    pCat: (product: Product) => string
}

const USD_TO_DOP = 56 // Tasa de cambio aproximada

const translations = {
    es: {
        // Navbar
        "nav.home": "Inicio",
        "nav.catalog": "Catálogo",
        "nav.about": "Nosotros",
        "nav.contact": "Contacto",
        "nav.cart": "Carrito",

        // Homepage
        "home.hero.title": "Larimar Dominicano",
        "home.hero.subtitle": "Joyería Artesanal Auténtica",
        "home.hero.cta": "EXPLORAR COLECCIÓN",
        "home.featured.title": "Productos Destacados",
        "home.featured.label": "COLECCIÓN DESTACADA",
        "home.featured.subtitle": "Piezas Exclusivas",
        "home.featured.description": "Joyas únicas talladas a mano con Larimar auténtico dominicano",
        "home.featured.viewAll": "VER TODA LA COLECCIÓN",
        "home.why.title": "¿Por Qué Larimar Dominicano?",
        "home.why.description": "El Larimar es una piedra semipreciosa única encontrada exclusivamente en República Dominicana. Cada pieza es trabajada artesanalmente por maestros joyeros dominicanos, garantizando autenticidad y calidad excepcional.",
        "home.why.feature1": "100% hecha a mano",
        "home.why.feature2": "Certificado de autenticidad",
        "home.why.feature3": "Plata sterling 925",
        "home.why.learnMore": "CONOCE NUESTRA HISTORIA",
        "home.categories.label": "CATEGORÍAS",
        "home.categories.title": "Explora por Tipo",
        "home.categories.rings": "Anillos",
        "home.categories.bracelets": "Pulseras",
        "home.categories.necklaces": "Collares",
        "home.categories.earrings": "Aretes",
        "home.testimonials.label": "TESTIMONIOS",
        "home.testimonials.title": "Lo Que Dicen Nuestros Clientes",
        "home.newsletter.title": "Únete a Nuestra Comunidad",
        "home.newsletter.description": "Recibe ofertas exclusivas y novedades sobre nuevas colecciones",
        "home.newsletter.placeholder": "Tu correo electrónico",
        "home.newsletter.button": "SUSCRIBIRME",
        "home.newsletter.privacy": "Respetamos tu privacidad. Sin spam.",
        "home.why.label": "¿POR QUÉ LARIMAR?",
        "home.why.sectionTitle": "El Tesoro del Caribe",
        "home.why.sectionDesc": "El Larimar es una gema semi-preciosa encontrada exclusivamente en la República Dominicana. Sus tonos azules únicos recuerdan las aguas cristalinas del Caribe.",
        "home.why.feature0": "Única en el mundo",
        "home.testimonial1": "\"Una pieza absolutamente impresionante. La piedra de Larimar es aún más hermosa en persona. La artesanía es impecable.\"",
        "home.testimonial1.author": "Maria González",
        "home.testimonial1.location": "Nueva York, USA",
        "home.testimonial2": "\"Compré un anillo para mi esposa y quedó encantada. La piedra tiene unos tonos azules únicos. Vale cada centavo.\"",
        "home.testimonial2.author": "Carlos Méndez",
        "home.testimonial2.location": "Madrid, España",
        "home.testimonial3": "\"He coleccionado joyería de Larimar por años y estas piezas están entre las mejores que he visto. ¡Altamente recomendado!\"",
        "home.testimonial3.author": "Sophie Laurent",
        "home.testimonial3.location": "París, Francia",

        // Catalog
        "catalog.title": "CATÁLOGO EXCLUSIVO",
        "catalog.subtitle": "Joyería Larimar • Hecha a mano en República Dominicana",
        "catalog.firstPurchase": "PRIMERA COMPRA:",
        "catalog.firstPurchaseDesc": "Usa código {code} para 10% descuento",
        "catalog.discountActive": "🎉 ¡Descuento de {percent}% activado! ({amount} en carrito)",
        "catalog.discountNext": "💎 Agrega {amount} más para 10% de descuento",
        "catalog.newArrivals": "RECIÉN LLEGADOS",
        "catalog.newDesigns": "Nuevos Diseños 2024",
        "catalog.newDesignsDesc": "Descubre nuestras últimas creaciones inspiradas en las olas del Caribe. Cada pieza cuenta la historia única del Larimar dominicano, combinando tradición artesanal con diseño contemporáneo.",
        "catalog.newFeature1": "✓ Diseños exclusivos 2024",
        "catalog.newFeature2": "✓ Piedras Larimar AAA",
        "catalog.newFeature3": "✓ Edición limitada",
        "catalog.exploreCollection": "EXPLORAR COLECCIÓN",
        "catalog.springLabel": "TENDENCIAS DE TEMPORADA",
        "catalog.spring": "Colección Primavera",
        "catalog.springDesc": "Tonos frescos y diseños ligeros perfectos para la nueva estación",
        "catalog.saleLabel": "OFERTAS LIMITADAS",
        "catalog.clearance": "Liquidación de Temporada",
        "catalog.clearanceDesc": "Aprovecha precios especiales en piezas seleccionadas. Descuentos de hasta 30% en joyería Larimar auténtica. ¡Stock limitado!",
        "catalog.upTo30": "HASTA 30% OFF",
        "catalog.whileStocks": "Solo mientras duren existencias",
        "catalog.viewOffers": "VER OFERTAS",
        "catalog.limitedLabel": "EDICIÓN LIMITADA",
        "catalog.limited": "Piezas Exclusivas",
        "catalog.limitedDesc": "Sets únicos de alta gama, disponibles en cantidades limitadas",
        "catalog.categoriesLabel": "EXPLORA POR TIPO",
        "catalog.categories": "Categorías",
        "catalog.volumeTitle": "Descuentos por Volumen",
        "catalog.volumeTier1": "10% de descuento",
        "catalog.volumeTier2": "15% de descuento",
        "catalog.volumeTier3": "Primera Compra",
        "catalog.volumeTier3Desc": "10% con LARIMAR10",
        "catalog.saleBadge": "OFERTA",
        "catalog.newBadge": "NUEVO",
        "catalog.limitedBadge": "LIMITADO",
        "catalog.viewDetails": "VER DETALLES",
        "catalog.addToCart": "+ AÑADIR",
        "catalog.customize": "PERSONALIZAR",

        // Cart
        "cart.title": "CARRITO DE COMPRAS",
        "cart.empty": "Tu carrito está vacío",
        "cart.viewCatalog": "VER CATÁLOGO",
        "cart.exploreProducts": "EXPLORAR PRODUCTOS",
        "cart.delivery": "Método de entrega:",
        "cart.selectDelivery": "⚠️ Selecciona entrega:",
        "cart.pickup": "Recogida",
        "cart.shipping": "Envío",
        "cart.days": "días",
        "cart.free": "Gratis",
        "cart.from": "Desde",
        "cart.address": "Dirección de entrega...",
        "cart.summary": "Resumen",
        "cart.subtotal": "Subtotal:",
        "cart.estimatedTime": "⏱ Tiempo estimado:",
        "cart.prepTime": "⏱️ Tiempo de preparación:",
        "cart.businessDays": "días hábiles",
        "cart.checkout": "PROCEDER AL PAGO",
        "cart.selectAllDelivery": "SELECCIONA ENTREGA",
        "cart.selectAllWarning": "⚠️ Selecciona el método de entrega para todos los productos",
        "cart.clear": "Vaciar Carrito",
        "cart.total": "TOTAL:",
        "cart.deliveryMethods": "Métodos de Entrega:",
        "cart.pickupAt": " Recogida en Tienda:",
        "cart.shippingInsured": " Envío a Domicilio:",

        // Checkout
        "checkout.title": "FINALIZAR COMPRA",
        "checkout.orderSummary": "Resumen de Orden",
        "checkout.quantity": "Cantidad:",
        "checkout.customerInfo": "Información del Cliente",
        "checkout.fullName": "Nombre Completo",
        "checkout.email": "Email",
        "checkout.phone": "Teléfono",
        "checkout.paymentMethod": "Método de Pago",
        "checkout.creditCard": "Tarjeta de Crédito/Débito",
        "checkout.cardAccepted": "Visa, Mastercard, AmEx",
        "checkout.paypal": "PayPal",
        "checkout.paypalSecure": "Pago seguro PayPal",
        "checkout.cardNumber": "Número de Tarjeta",
        "checkout.cardName": "Nombre en la Tarjeta",
        "checkout.expiry": "Vencimiento",
        "checkout.cvv": "CVV",
        "checkout.paypalNotice": "✓ Serás redirigido a PayPal para completar el pago de forma segura.",
        "checkout.processing": "PROCESANDO...",
        "checkout.pay": "PAGAR",
        "checkout.processingTitle": "Procesando Pago...",
        "checkout.processingMsg": "Por favor espera mientras validamos tu transacción",
        "checkout.totalPrepTime": "⏱ Tiempo total de preparación:",
        "checkout.total": "TOTAL:",

        // Invoice
        "invoice.successTitle": "¡Pago Exitoso!",
        "invoice.successMsg": "Tu pedido ha sido confirmado y está en proceso",
        "invoice.invoice": "FACTURA",
        "invoice.billedTo": "Facturado a:",
        "invoice.paymentMethod": "Método de Pago:",
        "invoice.product": "Producto",
        "invoice.delivery": "Entrega",
        "invoice.time": "Tiempo",
        "invoice.quantity": "Cant.",
        "invoice.price": "Precio",
        "invoice.total": "Total",
        "invoice.totalPaid": "TOTAL PAGADO:",
        "invoice.deliveryDetails": "Detalles de Entrega:",
        "invoice.pickupProducts": "Productos para Recogida en Tienda:",
        "invoice.shippingProducts": "Productos para Envío:",
        "invoice.pickupNote": "* Puedes recoger estos productos en nuestra tienda después de",
        "invoice.shippingNote": "* Estos productos serán enviados a la dirección especificada en",
        "invoice.shippingFeatures": "Características del envío:",
        "invoice.premiumPackaging": "✓ Empaque premium con seguro incluido",
        "invoice.realTimeTracking": "✓ Rastreo en tiempo real",
        "invoice.signatureRequired": "✓ Firma requerida en entrega",
        "invoice.certificateIncluded": "✓ Certificado de autenticidad incluido",
        "invoice.thankYou": "¡Gracias por confiar en",
        "invoice.questions": "Dudas o consultas:",
        "invoice.electronicInvoice": "Esta es una factura electrónica válida. No se requiere firma física.",
        "invoice.print": "🖨️ IMPRIMIR FACTURA",
        "invoice.download": "📄 DESCARGAR PDF",
        "invoice.home": "🏠 VOLVER AL INICIO",
        "invoice.location": "Ubicación:",
        "invoice.hours": "Horario:",
        "invoice.saturday": "Sábados:",

        // Product Detail
        "product.reviews": "Reviews",
        "product.reviewCount": "(4 Reviews)",
        "product.category": "Categoría",
        "product.addToCart": "AÑADIR AL CARRITO",
        "product.viewCatalog": "VER CATÁLOGO COMPLETO →",
        "product.descTitle": "DESCRIPCIÓN DEL PRODUCTO",
        "product.descText": "Cada pieza de Larimar es elaborada en República Dominicana, capturando la rara gema azul océano conocida por su tranquilidad y estética refinada. Material: Larimar auténtico y plata sterling 925. Hecho a mano por artesanos dominicanos.",
        "product.reviewsTitle": "REVIEWS",
        "product.review1": "\"Hermosa pieza, calidad excepcional\"",
        "product.review2": "\"Me encanta el diseño único\"",

        // Common
        "common.currency": "RD$"
    },

    en: {
        // Navbar
        "nav.home": "Home",
        "nav.catalog": "Catalog",
        "nav.about": "About Us",
        "nav.contact": "Contact",
        "nav.cart": "Cart",

        // Homepage
        "home.hero.title": "Dominican Larimar",
        "home.hero.subtitle": "Authentic Handcrafted Jewelry",
        "home.hero.cta": "EXPLORE COLLECTION",
        "home.featured.title": "Featured Products",
        "home.featured.label": "FEATURED COLLECTION",
        "home.featured.subtitle": "Exclusive Pieces",
        "home.featured.description": "Unique handcrafted jewelry with authentic Dominican Larimar",
        "home.featured.viewAll": "VIEW ENTIRE COLLECTION",
        "home.why.title": "Why Dominican Larimar?",
        "home.why.description": "Larimar is a unique semi-precious stone found exclusively in the Dominican Republic. Each piece is handcrafted by master Dominican jewelers, guaranteeing authenticity and exceptional quality.",
        "home.why.feature1": "100% handmade",
        "home.why.feature2": "Certificate of authenticity",
        "home.why.feature3": "Sterling silver 925",
        "home.why.learnMore": "LEARN OUR STORY",
        "home.categories.label": "CATEGORIES",
        "home.categories.title": "Explore by Type",
        "home.categories.rings": "Rings",
        "home.categories.bracelets": "Bracelets",
        "home.categories.necklaces": "Necklaces",
        "home.categories.earrings": "Earrings",
        "home.testimonials.label": "TESTIMONIALS",
        "home.testimonials.title": "What Our Customers Say",
        "home.newsletter.title": "Join Our Community",
        "home.newsletter.description": "Receive exclusive offers and news about new collections",
        "home.newsletter.placeholder": "Your email address",
        "home.newsletter.button": "SUBSCRIBE",
        "home.newsletter.privacy": "We respect your privacy. No spam.",
        "home.why.label": "WHY LARIMAR?",
        "home.why.sectionTitle": "The Treasure of the Caribbean",
        "home.why.sectionDesc": "Larimar is a semi-precious gem found exclusively in the Dominican Republic. Its unique blue tones echo the crystal-clear waters of the Caribbean.",
        "home.why.feature0": "One of a kind in the world",
        "home.testimonial1": "\"Absolutely stunning piece! The Larimar stone is even more beautiful in person. The craftsmanship is impeccable.\"",
        "home.testimonial1.author": "Maria González",
        "home.testimonial1.location": "New York, USA",
        "home.testimonial2": "\"I bought a ring for my wife and she was thrilled. The stone has unique blue tones. Worth every penny.\"",
        "home.testimonial2.author": "Carlos Méndez",
        "home.testimonial2.location": "Madrid, Spain",
        "home.testimonial3": "\"I've been collecting Larimar jewelry for years and these pieces are among the finest I've seen. Highly recommend!\"",
        "home.testimonial3.author": "Sophie Laurent",
        "home.testimonial3.location": "Paris, France",

        // Catalog
        "catalog.title": "EXCLUSIVE CATALOG",
        "catalog.subtitle": "Larimar Jewelry • Handmade in Dominican Republic",
        "catalog.firstPurchase": "FIRST PURCHASE:",
        "catalog.firstPurchaseDesc": "Use code {code} for 10% discount",
        "catalog.discountActive": "🎉 {percent}% discount activated! ({amount} in cart)",
        "catalog.discountNext": "💎 Add {amount} more for 10% discount",
        "catalog.newArrivals": "NEW ARRIVALS",
        "catalog.newDesigns": "New Designs 2024",
        "catalog.newDesignsDesc": "Discover our latest creations inspired by the Caribbean waves. Each piece tells the unique story of Dominican Larimar, blending artisan tradition with contemporary design.",
        "catalog.newFeature1": "✓ Exclusive 2024 designs",
        "catalog.newFeature2": "✓ AAA Larimar stones",
        "catalog.newFeature3": "✓ Limited edition",
        "catalog.exploreCollection": "EXPLORE COLLECTION",
        "catalog.springLabel": "SEASONAL TRENDS",
        "catalog.spring": "Spring Collection",
        "catalog.springDesc": "Fresh tones and lightweight designs perfect for the new season",
        "catalog.saleLabel": "LIMITED OFFERS",
        "catalog.clearance": "Seasonal Clearance",
        "catalog.clearanceDesc": "Take advantage of special prices on selected pieces. Up to 30% off on authentic Larimar jewelry. Limited stock!",
        "catalog.upTo30": "UP TO 30% OFF",
        "catalog.whileStocks": "While supplies last",
        "catalog.viewOffers": "VIEW OFFERS",
        "catalog.limitedLabel": "LIMITED EDITION",
        "catalog.limited": "Exclusive Pieces",
        "catalog.limitedDesc": "Unique high-end sets, available in limited quantities",
        "catalog.categoriesLabel": "BROWSE BY TYPE",
        "catalog.categories": "Categories",
        "catalog.volumeTitle": "Volume Discounts",
        "catalog.volumeTier1": "10% discount",
        "catalog.volumeTier2": "15% discount",
        "catalog.volumeTier3": "First Purchase",
        "catalog.volumeTier3Desc": "10% with LARIMAR10",
        "catalog.saleBadge": "SALE",
        "catalog.newBadge": "NEW",
        "catalog.limitedBadge": "LIMITED",
        "catalog.viewDetails": "VIEW DETAILS",
        "catalog.addToCart": "+ ADD",
        "catalog.customize": "CUSTOMIZE",

        // Cart
        "cart.title": "SHOPPING CART",
        "cart.empty": "Your cart is empty",
        "cart.viewCatalog": "VIEW CATALOG",
        "cart.exploreProducts": "EXPLORE PRODUCTS",
        "cart.delivery": "Delivery method:",
        "cart.selectDelivery": "⚠️ Select delivery:",
        "cart.pickup": "🏪 Pickup",
        "cart.shipping": "🚚 Shipping",
        "cart.days": "days",
        "cart.free": "Free",
        "cart.from": "From",
        "cart.address": "Delivery address...",
        "cart.summary": "Summary",
        "cart.subtotal": "Subtotal:",
        "cart.estimatedTime": "⏱ Estimated time:",
        "cart.prepTime": "⏱️ Preparation time:",
        "cart.businessDays": "business days",
        "cart.checkout": "PROCEED TO CHECKOUT",
        "cart.selectAllDelivery": "SELECT DELIVERY",
        "cart.selectAllWarning": "⚠️ Select a delivery method for all products",
        "cart.clear": "Clear Cart",
        "cart.total": "TOTAL:",
        "cart.deliveryMethods": "Delivery Methods:",
        "cart.pickupAt": "🏪 Store Pickup:",
        "cart.shippingInsured": "🚚 Home Delivery:",

        // Checkout
        "checkout.title": "CHECKOUT",
        "checkout.orderSummary": "Order Summary",
        "checkout.quantity": "Quantity:",
        "checkout.customerInfo": "Customer Information",
        "checkout.fullName": "Full Name",
        "checkout.email": "Email",
        "checkout.phone": "Phone",
        "checkout.paymentMethod": "Payment Method",
        "checkout.creditCard": "Credit/Debit Card",
        "checkout.cardAccepted": "Visa, Mastercard, AmEx",
        "checkout.paypal": "PayPal",
        "checkout.paypalSecure": "Secure PayPal payment",
        "checkout.cardNumber": "Card Number",
        "checkout.cardName": "Name on Card",
        "checkout.expiry": "Expiry",
        "checkout.cvv": "CVV",
        "checkout.paypalNotice": "✓ You will be redirected to PayPal to complete your payment securely.",
        "checkout.processing": "PROCESSING...",
        "checkout.pay": "PAY",
        "checkout.processingTitle": "Processing Payment...",
        "checkout.processingMsg": "Please wait while we validate your transaction",
        "checkout.totalPrepTime": "⏱ Total preparation time:",
        "checkout.total": "TOTAL:",

        // Invoice
        "invoice.successTitle": "Payment Successful!",
        "invoice.successMsg": "Your order has been confirmed and is being processed",
        "invoice.invoice": "INVOICE",
        "invoice.billedTo": "Billed to:",
        "invoice.paymentMethod": "Payment Method:",
        "invoice.product": "Product",
        "invoice.delivery": "Delivery",
        "invoice.time": "Time",
        "invoice.quantity": "Qty.",
        "invoice.price": "Price",
        "invoice.total": "Total",
        "invoice.totalPaid": "TOTAL PAID:",
        "invoice.deliveryDetails": "Delivery Details:",
        "invoice.pickupProducts": "Products for Store Pickup:",
        "invoice.shippingProducts": "Products for Shipping:",
        "invoice.pickupNote": "* You can pick up these products at our store after",
        "invoice.shippingNote": "* These products will be shipped to the specified address within",
        "invoice.shippingFeatures": "Shipping features:",
        "invoice.premiumPackaging": "✓ Premium packaging with insurance included",
        "invoice.realTimeTracking": "✓ Real-time tracking",
        "invoice.signatureRequired": "✓ Signature required on delivery",
        "invoice.certificateIncluded": "✓ Certificate of authenticity included",
        "invoice.thankYou": "Thank you for trusting",
        "invoice.questions": "Questions or inquiries:",
        "invoice.electronicInvoice": "This is a valid electronic invoice. No physical signature required.",
        "invoice.print": "🖨️ PRINT INVOICE",
        "invoice.download": "📄 DOWNLOAD PDF",
        "invoice.home": "🏠 BACK TO HOME",
        "invoice.location": "Location:",
        "invoice.hours": "Hours:",
        "invoice.saturday": "Saturdays:",

        // Product Detail
        "product.reviews": "Reviews",
        "product.reviewCount": "(4 Reviews)",
        "product.category": "Category",
        "product.addToCart": "ADD TO CART",
        "product.viewCatalog": "VIEW FULL CATALOG →",
        "product.descTitle": "PRODUCT DESCRIPTION",
        "product.descText": "Each piece of Larimar is crafted in the Dominican Republic, capturing the rare ocean blue gem known for its tranquility and refined aesthetics. Material: Authentic Larimar and 925 sterling silver. Handmade by Dominican artisans.",
        "product.reviewsTitle": "REVIEWS",
        "product.review1": "\"Beautiful piece, exceptional quality\"",
        "product.review2": "\"I love the unique design\"",

        // Common
        "common.currency": "$"
    }
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: any) {
    const [language, setLanguageState] = useState<Language>("es")

    useEffect(() => {
        const saved = localStorage.getItem("language") as Language
        if (saved) setLanguageState(saved)
    }, [])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem("language", lang)
    }

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations.es] || key
    }

    const formatPrice = (usdPrice: number): string => {
        if (language === "es") {
            // Spanish: show in Dominican Pesos
            const dopPrice = Math.round(usdPrice * USD_TO_DOP)
            return `RD$ ${dopPrice.toLocaleString('es-DO')}`
        } else {
            // English: show in USD
            return `$${usdPrice.toFixed(2)}`
        }
    }

    const pName = (product: Product): string => {
        return language === "en" ? product.nameEn : product.name
    }

    const pDesc = (product: Product): string => {
        return language === "en" ? product.descriptionEn : product.description
    }

    const pCat = (product: Product): string => {
        return language === "en" ? product.categoryEn : product.category
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, formatPrice, pName, pDesc, pCat }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) throw new Error("useLanguage must be used inside LanguageProvider")
    return context
}
