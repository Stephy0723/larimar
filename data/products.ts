export type Category = "Anillos" | "Pulseras" | "Collares" | "Aretes" | "Sets"

export type Product = {
  id: string
  name: string
  nameEn: string
  price: number
  salePrice?: number
  description: string
  descriptionEn: string
  image: string
  images?: string[]
  category: Category
  categoryEn: string
  tag?: "new" | "sale" | "limited"
  preparationTime: {
    pickup: number
    delivery: number
  }
}

export const PRODUCTS: Product[] = [
  // ========== ANILLOS ==========
  {
    id: "ocean-ring",
    name: "Anillo Ocean Larimar",
    nameEn: "Ocean Larimar Ring",
    price: 220,
    salePrice: 180,
    description: "Larimar dominicano montado a mano en plata sterling. Tonos azul océano únicos.",
    descriptionEn: "Hand-set Dominican Larimar in sterling silver. Unique ocean blue tones.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    category: "Anillos",
    categoryEn: "Rings",
    tag: "sale",
    preparationTime: { pickup: 3, delivery: 5 }
  },
  {
    id: "minimal-ring",
    name: "Anillo Minimal Blue",
    nameEn: "Minimal Blue Ring",
    price: 190,
    description: "Diseño limpio con banda Larimar para elegancia diaria.",
    descriptionEn: "Clean design with Larimar band for everyday elegance.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    category: "Anillos",
    categoryEn: "Rings",
    preparationTime: { pickup: 2, delivery: 4 }
  },
  {
    id: "royal-ring",
    name: "Anillo Royal Caribbean",
    nameEn: "Royal Caribbean Ring",
    price: 280,
    description: "Larimar de grado AAA con montaje elaborado en plata 925.",
    descriptionEn: "AAA grade Larimar with elaborate 925 silver setting.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    category: "Anillos",
    categoryEn: "Rings",
    tag: "new",
    preparationTime: { pickup: 4, delivery: 6 }
  },
  {
    id: "vintage-ring",
    name: "Anillo Vintage Mar",
    nameEn: "Vintage Sea Ring",
    price: 245,
    salePrice: 210,
    description: "Diseño vintage con piedra Larimar ovalada principal.",
    descriptionEn: "Vintage design with main oval Larimar stone.",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80",
    category: "Anillos",
    categoryEn: "Rings",
    tag: "sale",
    preparationTime: { pickup: 3, delivery: 5 }
  },
  {
    id: "solitaire-ring",
    name: "Anillo Solitario Caribe",
    nameEn: "Caribbean Solitaire Ring",
    price: 320,
    description: "Solitario clásico con Larimar azul cielo excepcional.",
    descriptionEn: "Classic solitaire with exceptional sky blue Larimar.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    category: "Anillos",
    categoryEn: "Rings",
    preparationTime: { pickup: 3, delivery: 5 }
  },

  // ========== PULSERAS ==========
  {
    id: "caribbean-bracelet",
    name: "Pulsera Caribbean Stone",
    nameEn: "Caribbean Stone Bracelet",
    price: 260,
    description: "Piedras Larimar pulidas con marco de plata artesanal.",
    descriptionEn: "Polished Larimar stones with artisan silver frame.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    category: "Pulseras",
    categoryEn: "Bracelets",
    tag: "new",
    preparationTime: { pickup: 4, delivery: 6 }
  },
  {
    id: "artisan-bracelet",
    name: "Pulsera Artesanal Plata",
    nameEn: "Artisan Silver Bracelet",
    price: 310,
    description: "Artesanía dominicana en plata con Larimar raro.",
    descriptionEn: "Dominican craftsmanship in silver with rare Larimar.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    category: "Pulseras",
    categoryEn: "Bracelets",
    preparationTime: { pickup: 5, delivery: 7 }
  },
  {
    id: "tennis-bracelet",
    name: "Pulsera Tennis Larimar",
    nameEn: "Larimar Tennis Bracelet",
    price: 450,
    salePrice: 380,
    description: "Diseño tipo tennis con múltiples piedras Larimar.",
    descriptionEn: "Tennis style design with multiple Larimar stones.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    category: "Pulseras",
    categoryEn: "Bracelets",
    tag: "sale",
    preparationTime: { pickup: 5, delivery: 7 }
  },
  {
    id: "charm-bracelet",
    name: "Pulsera de Dijes Océano",
    nameEn: "Ocean Charm Bracelet",
    price: 290,
    description: "Pulsera con dijes intercambiables y piedra Larimar central.",
    descriptionEn: "Bracelet with interchangeable charms and central Larimar stone.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80",
    category: "Pulseras",
    categoryEn: "Bracelets",
    preparationTime: { pickup: 4, delivery: 6 }
  },
  {
    id: "bangle-bracelet",
    name: "Brazalete Rígido Caribe",
    nameEn: "Caribbean Bangle",
    price: 340,
    description: "Brazalete de plata sólida con incrustación Larimar.",
    descriptionEn: "Solid silver bangle with Larimar inlay.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    category: "Pulseras",
    categoryEn: "Bracelets",
    tag: "new",
    preparationTime: { pickup: 4, delivery: 6 }
  },

  // ========== COLLARES ==========
  {
    id: "ocean-necklace",
    name: "Collar Ocean Drop",
    nameEn: "Ocean Drop Necklace",
    price: 390,
    description: "Colgante Larimar azul cielo raro inspirado en el mar.",
    descriptionEn: "Rare sky blue Larimar pendant inspired by the sea.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    category: "Collares",
    categoryEn: "Necklaces",
    preparationTime: { pickup: 5, delivery: 7 }
  },
  {
    id: "deep-sea-necklace",
    name: "Colgante Deep Sea",
    nameEn: "Deep Sea Pendant",
    price: 420,
    description: "Pieza central grande de Larimar con profundidad oceánica.",
    descriptionEn: "Large centerpiece Larimar with oceanic depth.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    category: "Collares",
    categoryEn: "Necklaces",
    tag: "new",
    preparationTime: { pickup: 6, delivery: 8 }
  },
  {
    id: "teardrop-necklace",
    name: "Collar Lágrima del Mar",
    nameEn: "Sea Teardrop Necklace",
    price: 360,
    salePrice: 310,
    description: "Diseño lágrima con Larimar de tono azul perfecto.",
    descriptionEn: "Teardrop design with perfect blue tone Larimar.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    category: "Collares",
    categoryEn: "Necklaces",
    tag: "sale",
    preparationTime: { pickup: 5, delivery: 7 }
  },
  {
    id: "statement-necklace",
    name: "Collar Statement Caribe",
    nameEn: "Caribbean Statement Necklace",
    price: 580,
    description: "Collar declaración con múltiples piedras Larimar grandes.",
    descriptionEn: "Statement necklace with multiple large Larimar stones.",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80",
    category: "Collares",
    categoryEn: "Necklaces",
    preparationTime: { pickup: 7, delivery: 9 }
  },
  {
    id: "pendant-necklace",
    name: "Colgante Minimalista",
    nameEn: "Minimalist Pendant",
    price: 295,
    description: "Colgante sencillo perfecto para uso diario.",
    descriptionEn: "Simple pendant perfect for daily wear.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    category: "Collares",
    categoryEn: "Necklaces",
    preparationTime: { pickup: 4, delivery: 6 }
  },

  // ========== ARETES ==========
  {
    id: "sea-earrings",
    name: "Aretes Sea Whisper",
    nameEn: "Sea Whisper Earrings",
    price: 180,
    salePrice: 150,
    description: "Studs minimalistas Larimar con elegancia moderna.",
    descriptionEn: "Minimalist Larimar studs with modern elegance.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    category: "Aretes",
    categoryEn: "Earrings",
    tag: "sale",
    preparationTime: { pickup: 2, delivery: 4 }
  },
  {
    id: "caribbean-earrings",
    name: "Aretes Caribbean Glow",
    nameEn: "Caribbean Glow Earrings",
    price: 210,
    description: "Piedras Larimar pulidas suavemente en plata refinada.",
    descriptionEn: "Smoothly polished Larimar stones in refined silver.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    category: "Aretes",
    categoryEn: "Earrings",
    preparationTime: { pickup: 3, delivery: 5 }
  },
  {
    id: "drop-earrings",
    name: "Aretes Colgantes Océano",
    nameEn: "Ocean Drop Earrings",
    price: 240,
    salePrice: 200,
    description: "Aretes tipo drop con movimiento elegante.",
    descriptionEn: "Drop-style earrings with elegant movement.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    category: "Aretes",
    categoryEn: "Earrings",
    tag: "sale",
    preparationTime: { pickup: 3, delivery: 5 }
  },
  {
    id: "hoop-earrings",
    name: "Aros con Larimar",
    nameEn: "Larimar Hoop Earrings",
    price: 195,
    description: "Aros pequeños con detalle central de Larimar.",
    descriptionEn: "Small hoops with central Larimar detail.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80",
    category: "Aretes",
    categoryEn: "Earrings",
    tag: "new",
    preparationTime: { pickup: 2, delivery: 4 }
  },
  {
    id: "stud-earrings",
    name: "Studs Clásicos",
    nameEn: "Classic Studs",
    price: 165,
    description: "Studs redondos perfectos para cualquier ocasión.",
    descriptionEn: "Round studs perfect for any occasion.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    category: "Aretes",
    categoryEn: "Earrings",
    preparationTime: { pickup: 2, delivery: 4 }
  },

  // ========== SETS ==========
  {
    id: "luxury-set",
    name: "Set Ocean Luxury",
    nameEn: "Ocean Luxury Set",
    price: 820,
    salePrice: 750,
    description: "Colección completa: anillo, pulsera y collar Larimar.",
    descriptionEn: "Complete collection: Larimar ring, bracelet and necklace.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    category: "Sets",
    categoryEn: "Sets",
    tag: "limited",
    preparationTime: { pickup: 7, delivery: 10 }
  },
  {
    id: "royal-set",
    name: "Colección Royal Larimar",
    nameEn: "Royal Larimar Collection",
    price: 950,
    description: "Set exclusivo de alta gama artesanal Larimar.",
    descriptionEn: "Exclusive high-end artisan Larimar set.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    category: "Sets",
    categoryEn: "Sets",
    tag: "limited",
    preparationTime: { pickup: 8, delivery: 12 }
  },
  {
    id: "bridal-set",
    name: "Set Nupcial Caribe",
    nameEn: "Caribbean Bridal Set",
    price: 1200,
    description: "Conjunto completo para novias con Larimar excepcional.",
    descriptionEn: "Complete bridal set with exceptional Larimar.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    category: "Sets",
    categoryEn: "Sets",
    tag: "new",
    preparationTime: { pickup: 10, delivery: 14 }
  }
]
