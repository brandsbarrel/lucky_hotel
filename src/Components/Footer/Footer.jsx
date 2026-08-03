import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/lucky.jpeg"; // apna actual path check kar lena

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "What's On", href: "#whats-on" },
  { label: "Food & Drinks", href: "#food-drinks" },
  { label: "Functions", href: "#functions" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Logo */}
      <div className={styles.logoWrap}>
        <img src={logo} alt="The Lucky Australian" className={styles.logoImg} />
      </div>

      {/* Address */}
      <div className={styles.infoRow}>
        <svg viewBox="0 0 24 24" className={styles.icon}>
          <path
            d="M12 2C7.6 2 4 5.6 4 10c0 5.5 7 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8z"
            fill="currentColor"
          />
          <circle cx="12" cy="10" r="3" fill="#1c1c1e" />
        </svg>
        <span>81 Forrester Road, North St Mary's NSW</span>
      </div>

      {/* Phone & Email */}
      <div className={styles.infoRow}>
        <svg viewBox="0 0 24 24" className={styles.icon}>
          <path
            d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2c1.1.4 2.3.6 3.5.6c.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.6 21 3 12.4 3 2c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1c0 1.2.2 2.4.6 3.5c.1.4 0 .8-.2 1L6.6 10.8z"
            fill="currentColor"
          />
        </svg>
        <span>(02) 9623 3600</span>
        <span className={styles.pipe}>|</span>
        <svg viewBox="0 0 24 24" className={styles.icon}>
          <rect
            x="2"
            y="4"
            width="20"
            height="16"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M2 6l10 7l10-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
        <span>info@theluckyhotel.com.au</span>
      </div>

      {/* Nav links */}
      <nav className={styles.navLinks} aria-label="Footer">
        {NAV_LINKS.map((link, i) => (
          <React.Fragment key={link.label}>
            <a href={link.href} className={styles.navLink}>
              {link.label}
            </a>
            {i !== NAV_LINKS.length - 1 && <span className={styles.pipe}>|</span>}
          </React.Fragment>
        ))}
      </nav>

      {/* Social icons */}
      <div className={styles.socialRow}>
        <a href="#facebook" className={styles.socialCircle} aria-label="Facebook">
          <svg viewBox="0 0 24 24" className={styles.socialIcon}>
            <path
              d="M15 8.5h2V5.4c-.3 0-1.5-.1-2.9-.1c-2.9 0-4.9 1.8-4.9 5V13H6.5v3.5H9.2V24h3.6v-7.5h2.8l.4-3.5h-3.2V10c0-1 .3-1.5 1.2-1.5z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a href="#instagram" className={styles.socialCircle} aria-label="Instagram">
          <svg viewBox="0 0 24 24" className={styles.socialIcon}>
            <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
          </svg>
        </a>
        <a href="#tripadvisor" className={styles.socialCircle} aria-label="TripAdvisor">
          <svg viewBox="0 0 24 24" className={styles.socialIcon}>
            <circle cx="7.5" cy="13" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="16.5" cy="13" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="7.5" cy="13" r="1.2" fill="currentColor" />
            <circle cx="16.5" cy="13" r="1.2" fill="currentColor" />
            <path
              d="M9.5 7.5C10.6 6.6 11.3 6.3 12 6.3s1.4.3 2.5 1.2M2 7.5h5.5M16.5 7.5H22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </div>

      {/* Divider */}
      <div className={styles.divider}></div>

      {/* Copyright */}
      <div className={styles.bottomRow}>
        <span>© The Lucky Australian Hotel 2026</span>
        <span className={styles.pipe}>|</span>
        <a href="#privacy" className={styles.privacyLink}>
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}