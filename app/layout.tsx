import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { CartProvider } from "@/context/CartContext"
import { LanguageProvider } from "@/context/LanguageContext"

const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Larimar",
  description: "Luxury Larimar Jewelry",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={playfair.className} style={{ margin: 0, padding: 0 }}>
        <LanguageProvider>
          <CartProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
