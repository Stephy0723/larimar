"use client"

import styles from "./History.module.css"
import Image from "next/image"
import { FaGem, FaHandsHelping, FaLeaf } from "react-icons/fa"

export default function History() {
  // Definimos el prefijo para las rutas de GitHub Pages
  const prefix = process.env.NODE_ENV === 'production' ? '/larimar' : '';

  return (
    <section className={styles.history}>

      {/* HEADER */}
      <div className={styles.header}>
        <span className={styles.smallTitle}>Maison Larimar</span>
        <h2 className={styles.title}>Our Heritage</h2>
        <div className={styles.line}></div>
      </div>

      {/* STORY SECTION */}
      <div className={styles.storySection}>
        <div className={styles.storyText}>
          <h3>Born from the Caribbean</h3>
          <p>
            Formed in the volcanic mountains of the Dominican Republic,
            Larimar carries the depth of the Caribbean Sea.
            Our maison transforms this rare gemstone into refined,
            contemporary luxury.
          </p>
        </div>

        <div className={styles.storyImage}>
          <Image
            src={`${prefix}/team/work.jpg`}
            alt="Workshop"
            fill
            style={{ objectFit: "cover" }}
            unoptimized // Necesario para evitar errores de optimización en exportación estática
          />
        </div>
      </div>

      {/* VALUES */}
      <div className={styles.values}>
        <div className={styles.valueCard}>
          <FaGem className={styles.icon} />
          <h4>Authenticity</h4>
          <p>Ethically sourced Dominican Larimar.</p>
        </div>

        <div className={styles.valueCard}>
          <FaHandsHelping className={styles.icon} />
          <h4>Craftsmanship</h4>
          <p>Handcrafted by skilled artisans.</p>
        </div>

        <div className={styles.valueCard}>
          <FaLeaf className={styles.icon} />
          <h4>Sustainability</h4>
          <p>Responsible production practices.</p>
        </div>
      </div>

      {/* TEAM */}
      <div className={styles.team}>
        <h3>Our Artisans</h3>

        <div className={styles.teamGrid}>

          <div className={styles.member}>
            <div className={styles.memberImage}>
              <Image
                src={`${prefix}/team/team1.jpg`}
                alt="Designer"
                width={500}
                height={600}
                className={styles.image}
                unoptimized
              />
            </div>
            <h5>Isabella Cruz</h5>
            <span>Creative Director</span>
          </div>

          <div className={styles.member}>
            <div className={styles.memberImage}>
              <Image
                src={`${prefix}/team/team2.jpg`}
                alt="Master Artisan"
                width={500}
                height={600}
                className={styles.image}
                unoptimized
              />
            </div>
            <h5>Mateo Alvarez</h5>
            <span>Master Artisan</span>
          </div>

          <div className={styles.member}>
            <div className={styles.memberImage}>
              <Image
                src={`${prefix}/team/team3.jpg`}
                alt="Gem Specialist"
                width={500}
                height={600}
                className={styles.image}
                unoptimized
              />
            </div>
            <h5>Sofia Martinez</h5>
            <span>Gem Specialist</span>
          </div>

        </div>
      </div>

    </section>
  )
}