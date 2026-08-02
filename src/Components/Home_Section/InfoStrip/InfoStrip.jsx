import React from "react";
import { Link } from "react-router-dom";
import styles from "./InfoStrip.module.css";

const INFO_ITEMS = [
    {
        title: "Local Favourite",
        subtitle: "Proudly part of the North St Mary's community.",
        icon: (
            <svg viewBox="0 0 24 24" className={styles.icon}>
                <path
                    fill="currentColor"
                    d="M12 3.2c-1.9 0-3.4 1.5-3.4 3.4c0 .5.1 1 .3 1.4C7.6 7.4 6.2 8.7 6.2 10.4c0 1.9 1.5 3.4 3.4 3.4c.7 0 1.3-.2 1.9-.6c-.2.6-.3 1.2-.3 1.9v3.7h1.6v-3.7c0-.7-.1-1.3-.3-1.9c.5.4 1.2.6 1.9.6c1.9 0 3.4-1.5 3.4-3.4c0-1.7-1.4-3-3.1-2.4c.2-.4.3-.9.3-1.4C15.4 4.7 13.9 3.2 12 3.2z"
                />
            </svg>
        ),
    },
    {
        title: "What's On",
        subtitle: "Live music, events & specials all week long.",
        icon: (
            <svg viewBox="0 0 24 24" className={styles.icon}>
                <rect
                    x="3.2"
                    y="5.2"
                    width="17.6"
                    height="15.6"
                    rx="1.8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                />
                <line x1="3.2" y1="9.6" x2="20.8" y2="9.6" stroke="currentColor" strokeWidth="1.6" />
                <line x1="7.6" y1="2.8" x2="7.6" y2="6.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="16.4" y1="2.8" x2="16.4" y2="6.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <rect x="6.8" y="12.4" width="2.8" height="2.8" fill="currentColor" />
                <rect x="10.6" y="12.4" width="2.8" height="2.8" fill="currentColor" />
                <rect x="14.4" y="12.4" width="2.8" height="2.8" fill="currentColor" />
            </svg>
        ),
    },
    {
        title: "Delicious Food",
        subtitle: "Pub classics, weekly specials & more.",
        icon: (
            <svg viewBox="0 0 24 24" className={styles.icon}>
                <path
                    d="M5.5 3.5l3.2 3.2l-6 6c-1.1 1.1-1.1 2.7 0 3.8s2.7 1.1 3.8 0l6-6l3.2 3.2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <line x1="7" y1="15.5" x2="2.5" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path
                    d="M18.5 3.5l-3.2 3.2l6 6c1.1 1.1 1.1 2.7 0 3.8s-2.7 1.1-3.8 0l-6-6l-3.2 3.2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <line x1="17" y1="15.5" x2="21.5" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Find Us",
        subtitle: "Forrester Road, North St Mary's NSW",
        icon: (
            <svg viewBox="0 0 24 24" className={styles.icon}>
                <path
                    d="M12 2C7.6 2 4 5.6 4 10c0 5.5 7 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8z"
                    fill="currentColor"
                />
                <circle cx="12" cy="10" r="3" fill="#17181c" />
            </svg>
        ),
    },
];

export default function InfoStrip() {
    return (
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
                    <svg viewBox="0 0 40 20" className={styles.heroDividerIcon}>
                        <path
                            d="M2 10c6-8 12-8 18 0c6-8 12-8 18 0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                        />
                        <circle cx="20" cy="10" r="2" fill="currentColor" />
                    </svg>
                    <span className={styles.heroDividerLine}></span>
                </div>

                <p className={styles.description}>
                    A classic Australian pub in the heart of North St Marys,
                    serving great food, friendly hospitality and{" "}
                    <span className={styles.highlight}>good times every day.</span>
                </p>

                <div className={styles.actions}>
                    <Link to="/eat-drink" className={styles.primaryBtn}>
                        <svg viewBox="0 0 24 24" className={styles.btnIcon}>
                            <path
                                d="M6 3l3 3-5 5c-1 1-1 2.5 0 3.5s2.5 1 3.5 0l5-5l3 3"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <line x1="7.5" y1="14.5" x2="3" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path
                                d="M18 3l-3 3l5 5c1 1 1 2.5 0 3.5s-2.5 1-3.5 0l-5-5l-3 3"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <line x1="16.5" y1="14.5" x2="21" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        View Menu
                    </Link>

                    <Link to="/book-now" className={styles.secondaryBtn}>
                        <svg viewBox="0 0 24 24" className={styles.btnIcon}>
                            <rect
                                x="3.2"
                                y="5.2"
                                width="17.6"
                                height="15.6"
                                rx="1.8"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                            />
                            <line x1="3.2" y1="9.6" x2="20.8" y2="9.6" stroke="currentColor" strokeWidth="1.6" />
                            <line x1="7.6" y1="2.8" x2="7.6" y2="6.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                            <line x1="16.4" y1="2.8" x2="16.4" y2="6.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                        Book a Table
                    </Link>
                </div>
            </div>

            {/* ---------- Info items ---------- */}
            <div className={styles.inner}>
                {INFO_ITEMS.map((item, index) => (
                    <div className={styles.item} key={item.title}>
                        <div className={styles.itemContent}>
                            <div className={styles.itemHeader}>
                                {item.icon}
                                <h3 className={styles.title}>{item.title}</h3>
                            </div>
                            <p className={styles.subtitle}>{item.subtitle}</p>
                        </div>
                        <svg
                            className={styles.chevron}
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M9 6l6 6l-6 6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        {index !== INFO_ITEMS.length - 1 && <span className={styles.divider}></span>}
                    </div>
                ))}
            </div>
        </section>
    );
}