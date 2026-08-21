import React from 'react'
import styles from "./Home.module.css"
import Home_Hero from '../../Components/Home_Section/Home_Hero/Home_Hero'
import InfoStrip from "../../Components/Home_Section/InfoStrip/InfoStrip"
const Home = () => {
    return (
        <div className={styles.heading}>
            <Home_Hero />
            <InfoStrip />
        </div>
    )
}

export default Home
