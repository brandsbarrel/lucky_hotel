import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./EatAndDrink.module.css";

import menuCover from "../../assets/menu_hero.jpeg";
import menuPdf from "../../assets/Menu_PDF.pdf";
import menuPage1 from "../../assets/menu_page_1.png";
import menuPage2 from "../../assets/menu_page_2.png";

import DividingLine from "../../Components/Dividing_line/DividingLine";
import ReviewSlider from "../../Components/Review_slider/ReviewSlider";
import { scrollToTop } from "../../utils/scrollToTop";

import dish1 from "../../assets/dishe_crousal1.jpeg";
import dish2 from "../../assets/dishe_crousal2.jpeg";
import dish3 from "../../assets/dishe_crousal3.jpeg";
import dish4 from "../../assets/dishe_crousal4.jpeg";
import dish5 from "../../assets/dishe_crousal5.jpeg";
import dish6 from "../../assets/dishe_crousal6.jpeg";
import dish7 from "../../assets/dishe_crousal7.jpeg";

const dishImages = [dish1, dish2, dish3, dish4, dish5, dish6, dish7];
const extendedSlides = [...dishImages, dishImages[0]];
const menus = [menuPage1, menuPage2];
const UBER_EATS_URL =
  "https://www.ubereats.com/au/store/the-lucky-australian-hotel/CUK0OZdTQAuCqAci82JvNA";

const EatAndDrink = () => {
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

  useEffect(() => {
    scrollToTop("auto");
  }, []);

  const handleScrollTop = () => {
    scrollToTop();
  };

  // Opens the PDF in a new tab so people can read/view it first
  const handleViewMenu = () => {
    handleScrollTop();
    window.open(menuPdf, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <DividingLine height="14px" />

      <main className={styles.page}>
        <img
          src={menuCover}
          alt="Menu Cover"
          className={styles.coverImage}
        />

        <section className={styles.orderingSection} aria-label="Online ordering">
          <a
            className={styles.orderButton}
            href={UBER_EATS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleScrollTop}
          >
            Order on Uber Eats
          </a>
        </section>

        {menus.map((item, index) => (
          <React.Fragment key={item}>
            <img
              src={item}
              alt={`Menu ${index + 1}`}
              className={styles.menuImage}
            />
            {index < menus.length - 1 && <DividingLine height="14px" />}
          </React.Fragment>
        ))}

        <div className={styles.buttonContainer}>
          <button
            className={styles.printButton}
            onClick={handleViewMenu}
          >
            DOWNLOAD PDF MENU
          </button>
        </div>


        
        <ReviewSlider />
{/* 
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
                        </div> */}
      </main>
    </>
  );
};

export default EatAndDrink;
