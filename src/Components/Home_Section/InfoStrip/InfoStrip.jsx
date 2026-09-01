import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "./InfoStrip.module.css";
import DividingLine from "../../Dividing_line/DividingLine";
import whatOnImg from "../../../assets/whats_on_this_week.jpeg"
import ReviewsSlider from "../../Review_slider/ReviewSlider";
import DeliciousFoodImg from "../../../assets/delicious_food.jpeg"
import coldrinkImg from "../../../assets/cold_drink_great.jpeg"
import forkKnifeIcon from "../../../assets/knifeIcon1.jpeg";
import calendarIcon from "../../../assets/calendaricon.jpeg";

import dish1 from "../../../assets/dishe_crousal1.jpeg";
import dish2 from "../../../assets/dishe_crousal2.jpeg";
import dish3 from "../../../assets/dishe_crousal3.jpeg";
import dish4 from "../../../assets/dishe_crousal4.jpeg";
import dish5 from "../../../assets/dishe_crousal5.jpeg";
import dish6 from "../../../assets/dishe_crousal6.jpeg";
import dish7 from "../../../assets/dishe_crousal7.jpeg";

const dishImages = [dish1, dish2, dish3, dish4, dish5, dish6, dish7];
const extendedSlides = [...dishImages, dishImages[0]];

const UBER_EATS_URL =
    "https://www.ubereats.com/au/store/the-lucky-australian-hotel/CUK0OZdTQAuCqAci82JvNA";
const ONLINE_ORDER_URL = "https://www.foodbooking.com/api/fb/_x4l6_e";

export default function InfoStrip() {
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [withTransition, setWithTransition] = useState(true);
    const autoplayRef = useRef(null);

    useEffect(() => {
        autoplayRef.current = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, 3500);
        return () => clearInterval(autoplayRef.current);
    }, []);

    const handleTransitionEnd = useCallback(() => {
        if (currentIndex === dishImages.length) {
            setWithTransition(false);
            setCurrentIndex(0);
        }
    }, [currentIndex]);

    useEffect(() => {
        if (!withTransition) {
            const raf = requestAnimationFrame(() => {
                setWithTransition(true);
            });
            return () => cancelAnimationFrame(raf);
        }
    }, [withTransition]);

    return (
        <>
            <section className={styles.infoStrip}>
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

                        <a href="tel:+61296233600" className={styles.secondaryBtnStacked}>
                            <img src={calendarIcon} alt="" className={styles.btnIcon} />
                            Call us to Book a Table
                        </a>
                    </div>
                </div>
                <DividingLine height="8px" />

                <img src={whatOnImg} alt="What's on this week" className={styles.heroImage} />
                <br></br>
                <div className={styles.actions}>
                    <a href="https://www.instagram.com/luckyozhotel" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                        FOLLOW US ON INSTAGRAM
                    </a>
                </div>
                {/* <ReviewsSlider /> */}
                <br></br>
                <br></br>
                <img src={DeliciousFoodImg} alt="Delicious food" className={styles.heroImage} />

                <br></br><br></br>

                <div className={styles.actionsStacked}>
                    <Link to="/eat-and-drink" onClick={handleScrollTop} className={styles.primaryBtnStacked}>
                        <img src={forkKnifeIcon} alt="" className={styles.btnIcon} />
                        View Menu
                    </Link>

                    <a href="tel:+61296233600" className={styles.secondaryBtnStacked}>
                        <img src={calendarIcon} alt="" className={styles.btnIcon} />
                        Call us to Book a Table
                    </a>
                </div>

                <br></br>
                <br></br>
                <DividingLine height="8px" />

                <div className={styles.carouselContainer}>
                    <div
                        className={`${styles.track} ${!withTransition ? styles.noTransition : ""}`}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {extendedSlides.map((src, i) => (
                            <div className={styles.slide} key={i}>
                                <img
                                    src={src}
                                    alt={`Dish ${i + 1}`}
                                    className={styles.slideImage}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <DividingLine height="8px" />
                <section className={styles.orderingSection} aria-label="Online ordering">
                    <a
                        className={styles.orderButton}
                        href={ONLINE_ORDER_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Order our food Online
                    </a>
                    <a
                        className={styles.orderButton}
                        href={UBER_EATS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Order on Uber Eats
                    </a>
                </section>
                <DividingLine height="8px" />
                <img src={coldrinkImg} alt="Cold drinks" className={styles.heroImage} />
                {/* <div className={styles.functionMenuWrapper}>
                    <Link to="/eat-and-drink" onClick={handleScrollTop} className={styles.functionMenuBtn}>
                        View Function Menu
                    </Link>
                </div> */}

            </section>
        </>);
}