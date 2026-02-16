import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.top}>

        {/* BRAND */}
        <div className={styles.brand}>
          <h2>LARIMAR</h2>
          <p>
            Timeless Caribbean jewelry crafted with authenticity,
            purity and refined elegance.
          </p>
        </div>

        {/* LINKS */}
        <div className={styles.links}>
          <h4>Collections</h4>
          <a href="#">Rings</a>
          <a href="#">Bracelets</a>
          <a href="#">Necklaces</a>
          <a href="#">Earrings</a>
        </div>

        <div className={styles.links}>
          <h4>Company</h4>
          <a href="#">Our Story</a>
          <a href="#">Artisans</a>
          <a href="#">Ethical Sourcing</a>
          <a href="#">Contact</a>
        </div>

        <div className={styles.links}>
          <h4>Client Care</h4>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">Warranty</a>
          <a href="#">Privacy Policy</a>
        </div>

        {/* NEWSLETTER */}
        <div className={styles.newsletter}>
          <h4>Private Updates</h4>
          <p>Subscribe to receive exclusive releases and private offers.</p>

          <div className={styles.inputGroup}>
            <input type="email" placeholder="Your email address" />
            <button>→</button>
          </div>
        </div>

      </div>

      <div className={styles.bottom}>
        <span>© 2026 Larimar Essence — Caribbean Luxury</span>
        <div className={styles.socials}>
          <a href="#">Instagram</a>
          <a href="#">Pinterest</a>
          <a href="#">Facebook</a>
        </div>
      </div>

    </footer>
  )
}
