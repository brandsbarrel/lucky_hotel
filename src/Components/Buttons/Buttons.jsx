import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Buttons.module.css'
import forkKnifeIcon from "../../assets/knifeIcon1.jpeg"
import calendarIcon from '../../assets/calendaricon.jpeg'
import { scrollToTop } from '../../utils/scrollToTop'

const ForkKnifeIcon = () => (
    <img src={forkKnifeIcon} alt="" className={styles.btnIcon} aria-hidden="true" />
)

const CalendarIcon = () => (
    <img src={calendarIcon} alt="" className={styles.btnIcon} aria-hidden="true" />
)

const Buttons = () => {
    return (
        <div className={styles.actions}>
            <Link to="/eat-drink" onClick={scrollToTop} className={`${styles.btn} ${styles.primaryBtn}`}>
                <ForkKnifeIcon />
                View Menu
            </Link>

            <a href="tel:+61296233600" onClick={scrollToTop} className={`${styles.btn} ${styles.secondaryBtn}`}>
                <CalendarIcon />
                Call us to Book a Table
            </a>
        </div>
    )
}

export default Buttons
