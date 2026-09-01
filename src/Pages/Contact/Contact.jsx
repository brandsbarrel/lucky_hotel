import React from "react";
import styles from "./Contact.module.css";
import contactImg from "../../assets/contact_img.jpeg";
import WhiteLine from "../../Components/Dividing_line/DividingLine";
import { Link } from "react-router-dom";
import menuPdf from "../../assets/Menu_PDF.pdf"
import DividingLine from "../../Components/Dividing_line/DividingLine";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import dish1 from "../../assets/dishe_crousal1.jpeg";
import dish2 from "../../assets/dishe_crousal2.jpeg";
import dish3 from "../../assets/dishe_crousal3.jpeg";
import dish4 from "../../assets/dishe_crousal4.jpeg";
import dish5 from "../../assets/dishe_crousal5.jpeg";
import dish6 from "../../assets/dishe_crousal6.jpeg";
import dish7 from "../../assets/dishe_crousal7.jpeg";
import ReviewSlider from "../../Components/Review_slider/ReviewSlider";


const dishImages = [dish1, dish2, dish3, dish4, dish5, dish6, dish7];
const extendedSlides = [...dishImages, dishImages[0]];

// How often the carousel auto-advances
const AUTOPLAY_INTERVAL_MS = 3000;

const HOURS = [
    { day: "Monday", time: "10 am–2 am" },
    { day: "Tuesday", time: "10 am–2 am" },
    { day: "Wednesday", time: "10 am–2 am" },
    { day: "Thursday", time: "10 am–2 am" },
    { day: "Friday", time: "10 am–2 am" },
    { day: "Saturday", time: "10 am–2 am" },
    { day: "Sunday", time: "10 am–10 pm" },
];


const handlePrintMenu = () => { // for download menu
    const link = document.createElement("a");
    link.href = menuPdf;
    link.download = "Menu.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


const UBER_EATS_URL =
    "https://www.ubereats.com/au/store/the-lucky-australian-hotel/CUK0OZdTQAuCqAci82JvNA";
const ONLINE_ORDER_URL = "https://www.foodbooking.com/api/fb/_x4l6_e";

export default function ContactPage() {

    const [withTransition, setWithTransition] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef(null);

    // Auto-advance the carousel. This was missing before — nothing ever
    // incremented currentIndex, so the track never moved.
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, AUTOPLAY_INTERVAL_MS);

        return () => clearInterval(timer);
    }, []);

    const handleTransitionEnd = useCallback(() => {
        if (currentIndex === dishImages.length) {
            setWithTransition(false);
            setCurrentIndex(0);
        }
    }, [currentIndex]);

    useEffect(() => {
        if (withTransition) return;

        const frame = requestAnimationFrame(() => {
            setWithTransition(true);
        });

        return () => cancelAnimationFrame(frame);
    }, [withTransition]);

    return (
        <section className={styles.contactPage}>
            <WhiteLine height="14px" />
            {/* ---------- Hero image ---------- */}
            <img src={contactImg} alt="Inside The Lucky Australian" className={styles.heroImage} />
            <WhiteLine height="14px" />

            {/* <div className={styles.carouselContainer}>
                <div
                    ref={trackRef}
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
            </div> */}
            {/* <DividingLine height="10px" /> */}

            {/* ---------- Contact info ---------- */}
            <div className={styles.inner}>
                <p className={styles.eyebrow}>Contact Us</p>
                <h1 className={styles.heading}>We'd Love To Hear From You</h1>

                <div className={styles.divider} aria-hidden="true">
                    <span className={styles.dividerLine}></span>
                    <span className={styles.dividerDot}></span>
                    <span className={styles.dividerLine}></span>
                </div>

                <div className={styles.contactRow}>
                    <div className={styles.contactItem}>
                        <svg viewBox="0 0 24 24" className={styles.contactIcon}>
                            <path
                                fill="currentColor"
                                d="M12 2C7.6 2 4 5.6 4 10c0 5.5 7 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8z"
                            />
                            <circle cx="12" cy="10" r="3" fill="#f8efe8" />
                        </svg>
                        <p className={styles.contactText}>
                            81 Forrester Road,<br />North St Mary's NSW
                        </p>
                    </div>

                    <span className={styles.verticalDivider}></span>

                    <div className={styles.contactItem}>
                        <svg viewBox="0 0 24 24" className={styles.contactIcon}>
                            <path
                                fill="currentColor"
                                d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2c1.1.4 2.3.6 3.6.6c.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1c0 1.3.2 2.5.6 3.6c.1.4 0 .8-.3 1L6.6 10.8z"
                            />
                        </svg>
                        <p className={styles.contactText}>(02) 9623 3600</p>
                    </div>

                    <span className={styles.verticalDivider}></span>

                    <div className={styles.contactItem}>
                        <svg viewBox="0 0 24 24" className={styles.contactIcon}>
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                d="M3.5 6.5h17a.5.5 0 01.5.5v10a1 1 0 01-1 1h-15a1 1 0 01-1-1V7a.5.5 0 01.5-.5z"
                            />
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                d="M4 7l8 6.2L20 7"
                            />
                        </svg>
                        <p className={styles.contactText}>info@luckyaustralian.com</p>
                    </div>
                </div>

                {/* ---------- Opening hours ---------- */}
                <div className={styles.hoursHeader} aria-hidden="true">
                    <span className={styles.hoursHeaderLine}></span>
                    <h2 className={styles.hoursTitle}>Opening Hours</h2>
                    <span className={styles.hoursHeaderLine}></span>
                </div>

                <div className={styles.hoursList}>
                    {HOURS.map(({ day, time }) => (
                        <div className={styles.hoursRow} key={day}>
                            <span className={styles.hoursDay}>{day}</span>
                            <span className={styles.hoursTime}>{time}</span>
                        </div>
                    ))}
                </div>

                <ReviewSlider />


                <div className={styles.actionButtons}>
                    <Link to="/eat-and-drink" className={styles.actionBtn}>
                        View Menu
                    </Link>

                    <a href="tel:+61296233600" className={styles.actionBtn}>
                        Call us to Book a Table
                    </a>

                    <a
                        href={ONLINE_ORDER_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.actionBtn}
                    >
                        ORDER OUR FOOD ONLINE
                    </a>

                    <a
                        href={UBER_EATS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.actionBtn}
                    >
                        ORDER ON UBER EATS
                    </a>
                </div>
                <p className={styles.seeSoon}>See you soon!</p>
            </div>
        </section>
    );
}