import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <section className={styles.contact}>

      <div className={styles.overlay}></div>

      <div className={styles.container}>

        {/* LEFT SIDE */}
<div className={styles.left}>

  <div className={styles.verticalLine}></div>

  <span className={styles.smallTitle}>Maison Larimar</span>

  <h2 className={styles.title}>
    Private <br /> Inquiries
  </h2>

  <p className={styles.description}>
    For bespoke commissions, private consultations,
    and exclusive Larimar creations crafted in the
    Dominican Republic.
  </p>

  <div className={styles.info}>
    <div>
      <p>Address</p>
      <span>Dominican Republic</span>
    </div>

    <div>
      <p>Phone</p>
      <span>+1 809 000 0000</span>
    </div>

    <div>
      <p>Email</p>
      <span>contact@larimar.com</span>
    </div>
  </div>

  <div className={styles.socials}>
    <span>Follow Us</span>
    <div className={styles.socialIcons}>
      <a href="#">Instagram</a>
      <a href="#">Pinterest</a>
      <a href="#">Facebook</a>
    </div>
  </div>

</div>


        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <h3>Bespoke Consultation</h3>

          <form className={styles.form}>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Your message"></textarea>

            <button type="submit">
              Request Appointment →
            </button>
          </form>
        </div>

      </div>

    </section>
  )
}
