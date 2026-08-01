import React from 'react'
import styles from "./Home_Hero.module.css"
import HeroImage from "../../../assets/Home_Page_Hero.jpeg"


const Home_Hero = () => {
    return (
        <section>
            <div className={styles.Hero_image}>
                <img alt='Lucky Hotel Front' src={HeroImage} />
            </div>
        </section>
    )
}

export default Home_Hero