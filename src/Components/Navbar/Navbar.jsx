import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/lucky.jpeg";
import { Link, NavLink } from "react-router-dom"

const NAV_LINKS = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Eat & Drink", to: "/eat-and-drink" },
    { label: "Sport", to: "/sport" },
    { label: "Functions & Events", to: "/functions-events" },
    { label: "What's On", to: "/whats-on" },
    { label: "Contact Us", to: "/contact-us" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Jab mobile menu open ho tab background scroll lock kar dete hain
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className={styles.navbar}>
            <div className={styles.inner}>
                {/* Logo (image) */}
                <Link to="/" className={styles.logo} onClick={closeMenu}>
                    <img src={logo} alt="Royal Oak Hotel" className={styles.logoImg} />
                </Link>

                {/* Desktop nav links */}
                <nav className={styles.navLinks} aria-label="Primary">
                    {NAV_LINKS.map((link) => (
                        <NavLink key={link.label} to={link.to} className={styles.navLink}>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Book now button (desktop) */}
                <Link to="/book-now" className={styles.bookBtn}>
                    Book Now
                </Link>

                {/* Hamburger button (mobile) */}
                <button
                    className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""}`}
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </div>

            {/* Mobile menu overlay */}
            <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}>
                <nav className={styles.mobileNavLinks} aria-label="Mobile Primary">
                    {NAV_LINKS.map((link, i) => (
                        <NavLink
                            key={link.label}
                            to={link.to}
                            className={styles.mobileNavLink}
                            style={{ transitionDelay: isOpen ? `${i * 0.05 + 0.1}s` : "0s" }}
                            onClick={closeMenu}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <Link
                        to="/book-now"
                        className={styles.mobileBookBtn}
                        style={{
                            transitionDelay: isOpen ? `${NAV_LINKS.length * 0.05 + 0.1}s` : "0s",
                        }}
                        onClick={closeMenu}
                    >
                        Book Now
                    </Link>
                </nav>
            </div>
        </header>
    );
}