import React from "react";
import styles from "./InfoStrip.module.css";

const INFO_ITEMS = [
    {
        title: "Local Favourite",
        subtitle: "Proudly part of the North St Mary's community.",
        icon: (
            <svg viewBox="0 0 24 24" className={styles.icon}>
                <path
                    fill="currentColor"
                    d="M12 2c-2 0-3.5 1.6-3.5 3.5c0 .7.2 1.4.6 2C7.4 6.9 6 8.3 6 10c0 2 1.6 3.5 3.5 3.5c.6 0 1.1-.1 1.6-.4c-.3.6-.4 1.3-.4 1.9v2h2.6v-2c0-.6-.1-1.3-.4-1.9c.5.3 1 .4 1.6.4C16 13.5 17.6 12 17.6 10c0-1.7-1.4-3.1-3.1-2.5c.4-.6.6-1.3.6-2C15.1 3.6 13.6 2 12 2z"
                />
                <rect x="11" y="15" width="2" height="7" fill="currentColor" />
            </svg>
        ),
    },
    {
        title: "What's On",
        subtitle: "Live music, events & specials all week long.",
        icon: (
            <svg viewBox="0 0 24 24" className={styles.icon}>
                <rect
                    x="3"
                    y="5"
                    width="18"
                    height="16"
                    rx="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                />
                <line x1="3" y1="9.5" x2="21" y2="9.5" stroke="currentColor" strokeWidth="1.6" />
                <line x1="7.5" y1="3" x2="7.5" y2="7" stroke="currentColor" strokeWidth="1.6" />
                <line x1="16.5" y1="3" x2="16.5" y2="7" stroke="currentColor" strokeWidth="1.6" />
                <rect x="6.5" y="12" width="2.6" height="2.6" fill="currentColor" />
                <rect x="10.7" y="12" width="2.6" height="2.6" fill="currentColor" />
                <rect x="14.9" y="12" width="2.6" height="2.6" fill="currentColor" />
            </svg>
        ),
    },
    {
        title: "Delicious Food",
        subtitle: "Pub classics, weekly specials & more.",
        icon: (
            <svg viewBox="0 0 24 24" className={styles.icon}>
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
                <circle cx="12" cy="10" r="3" fill="#0e1621" />
            </svg>
        ),
    },
];

export default function InfoStrip() {
    return (
        <section className={styles.infoStrip}>
            <div className={styles.inner}>
                {INFO_ITEMS.map((item, index) => (
                    <div className={styles.item} key={item.title}>
                        <div className={styles.itemHeader}>
                            {item.icon}
                            <h3 className={styles.title}>{item.title}</h3>
                        </div>
                        <p className={styles.subtitle}>{item.subtitle}</p>
                        {index !== INFO_ITEMS.length - 1 && <span className={styles.divider}></span>}
                    </div>
                ))}
            </div>
            <infoStrip />
        </section>
    );
}