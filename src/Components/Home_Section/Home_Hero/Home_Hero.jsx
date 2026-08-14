import React, { useState, useEffect } from 'react'
import styles from "./Home_Hero.module.css"
import HeroImage from "../../../assets/Home_Page_Hero.jpeg"
import HeroImage1 from "../../../assets/Home_Page_Hero2.jpeg"
import HeroImage2 from "../../../assets/Home_Page_Hero3.jpeg"
import Whiteline from '../../Dividing_line/DividingLine'
import DividingLine from '../../Dividing_line/DividingLine'

const images = [HeroImage, HeroImage1, HeroImage2]

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
            <DividingLine height="14px"/>
            <div className={styles.Hero_image}>
                <img src={images[0]} alt="" aria-hidden="true" className={styles.heroImg} style={{ visibility: 'hidden' }} />

                {images.map((img, index) => (
                    <img
                        key={index}
                        alt='Lucky Hotel Front'
                        src={img}
                        className={`${styles.heroImgAbsolute} ${index === currentIndex ? styles.active : ''}`}
                    />
                ))}
            </div>
            <Whiteline height="18px" />
        </section>
    )
}

export default Home_Hero;