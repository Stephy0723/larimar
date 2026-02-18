export const STORE_INFO = {
    name: "Joyería Larimar Dominicana",
    tagline: "Auténtica Joyería Artesanal desde 1985",

    contact: {
        email: "ventas@larimardom.com",
        phone: "+1 (809) 555-0123",
        whatsapp: "+1 (809) 555-0124"
    },

    location: {
        address: "Calle El Conde #253, Zona Colonial",
        city: "Santo Domingo",
        country: "República Dominicana",
        zipCode: "10210",
        coordinates: {
            lat: 18.4765,
            lng: -69.8933
        }
    },

    hours: {
        weekdays: "Lunes a Viernes: 9:00 AM - 6:00 PM",
        saturday: "Sábado: 10:00 AM - 4:00 PM",
        sunday: "Domingo: Cerrado"
    },

    delivery: {
        pickup: {
            title: "Recogida en Tienda",
            description: "Recoge tu pedido sin costo en nuestra ubicación en Zona Colonial",
            benefits: [
                "Sin costo de envío",
                "Inspección del producto antes de recoger",
                "Asesoría personalizada al recoger",
                "Certificado de autenticidad inmediato"
            ],
            process: [
                "Recibirás notificación cuando tu pedido esté listo",
                "Trae tu orden de confirmación y documento de identidad",
                "Nuestros expertos verificarán el producto contigo",
                "Recibes tu joyería con certificado de autenticidad"
            ]
        },

        shipping: {
            title: "Envío a Domicilio",
            description: "Entrega segura y asegurada a la dirección que prefieras",
            benefits: [
                "Empaque premium con seguro incluido",
                "Rastreo en tiempo real",
                "Firma requerida en entrega",
                "Certificado de autenticidad incluido"
            ],
            nationalRates: {
                santodomingo: { name: "Santo Domingo", price: 200, days: "2-3" },
                santiago: { name: "Santiago", price: 300, days: "3-4" },
                laromana: { name: "La Romana", price: 350, days: "4-5" },
                puntacana: { name: "Punta Cana", price: 400, days: "4-5" },
                other: { name: "Otras ciudades", price: 450, days: "5-7" }
            },
            international: {
                usa: { name: "Estados Unidos", price: 2500, days: "7-10" },
                canada: { name: "Canadá", price: 3000, days: "10-14" },
                europe: { name: "Europa", price: 3500, days: "12-16" }
            }
        }
    },

    policies: {
        returns: "30 días de garantía de satisfacción",
        warranty: "Garantía de autenticidad de por vida",
        certification: "Cada pieza incluye certificado de autenticidad",
        repair: "Servicio de reparación y mantenimiento gratuito primer año"
    },

    about: {
        founded: 1985,
        story: "Con más de 35 años de experiencia, somos especialistas en la extracción y transformación del Larimar Dominicano. Trabajamos directamente con mineros artesanales en Barahona, asegurando prácticas sostenibles y comercio justo.",
        craftsmen: 12,
        piecesCreated: "15,000+"
    }
}
