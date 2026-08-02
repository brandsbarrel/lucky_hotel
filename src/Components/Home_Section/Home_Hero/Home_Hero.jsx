import React, { useState, useEffect } from 'react'
import styles from "./Home_Hero.module.css"
import HeroImage from "../../../assets/Home_Page_Hero.jpeg"
import HeroImage1 from "../../../assets/Home_Page_Hero2.jpeg"

const images = [HeroImage, HeroImage1]

const Home_Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 2000) // 2 second

        return () => clearInterval(interval)
    }, [])

    return (
        <section>
            <div className={styles.Hero_image}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        alt='Lucky Hotel Front'
                        src={img}
                        className={`${styles.heroImg} ${index === currentIndex ? styles.active : ''}`}
                    />
                ))}
            </div>
        </section>
    )
}

export default Home_Hero