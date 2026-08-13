import React from "react";
import { Link } from "react-router-dom";
import styles from "./InfoStrip.module.css";
import DividingLine from "../../Dividing_line/DividingLine";
import whatOnImg from "../../../assets/whats_on_this_week.jpeg"
import ReviewsSlider from "../../Review_slider/ReviewSlider";
import DeliciousFoodImg from "../../../assets/delicious_food.jpeg"
import coldrinkImg from "../../../assets/cold_drink_great.jpeg"
import forkKnifeIcon from "../../../assets/knifeIcon1.jpeg";
import calendarIcon from "../../../assets/calendaricon.jpeg";

export default function InfoStrip() {
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    return (
        <>
            <section className={styles.infoStrip}>
                {/* ---------- Hero ---------- */}
                <div className={styles.heroInner}>
                    <p className={styles.eyebrow}>
                        <span className={styles.eyebrowLine}></span>
                        <span className={styles.eyebrowScript}>Welcome to</span>
                        <span className={styles.eyebrowLine}></span>
                    </p>

                    <h1 className={styles.heading}>The Lucky Australian</h1>

                    <div className={styles.heroDivider} aria-hidden="true">
                        <span className={styles.heroDividerLine}></span>
                        <span className={styles.heroDividerLine}></span>
                    </div>

                    <p className={styles.description}>
                        A classic Australian pub in the heart of North St Marys,
                        serving great food, friendly hospitality and{" "}
                        <span className={styles.highlight}>good times every day.</span>
                    </p>

                    <div className={styles.actionsStacked}>
                        <Link to="/eat-and-drink" onClick={handleScrollTop} className={styles.primaryBtnStacked}>
                            <img src={forkKnifeIcon} alt="" className={styles.btnIcon} />
                            View Menu
                        </Link>

                        <Link to="/book-now" className={styles.secondaryBtnStacked}>
                            <img src={calendarIcon} alt="" className={styles.btnIcon} />
                            Book a Table
                        </Link>
                    </div>
                </div>
                <DividingLine height="8px" />
                <img src={whatOnImg} alt="What's on this week" className={styles.heroImage} />
                <br></br>
                <div className={styles.actions}>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                        FOLLOW US ON INSTAGRAM
                    </a>
                </div>
                <ReviewsSlider />
                <img src={DeliciousFoodImg} alt="Delicious food" className={styles.heroImage} />

                <br></br><br></br>

                <div className={styles.actions}>
                    <Link to="/eat-and-drink" onClick={handleScrollTop} onClick={handleScrollTop} className={styles.primaryBtn}>
                        <img src={forkKnifeIcon} alt="" className={styles.btnIcon} />
                        View Menu
                    </Link>

                    <Link to="/book-now" className={styles.secondaryBtn}>
                        <img src={calendarIcon} alt="" className={styles.btnIcon} />
                        Book a Table
                    </Link>
                </div>

                <br></br>
                <br></br>
                <DividingLine height="8px" />
                <img src={coldrinkImg} alt="Cold drinks" className={styles.heroImage} />
                <div className={styles.functionMenuWrapper}>
                    <Link to="/function-menu" onClick={handleScrollTop} className={styles.functionMenuBtn}>
                        View Function Menu
                    </Link>
                </div>

            </section>
        </>);
}