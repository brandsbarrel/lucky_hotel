import { useEffect } from "react";
import styles from "./EatAndDrink.module.css";

import menuCover from "../../assets/menu_hero.jpeg";
import menu1 from "../../assets/Menu_details_1.jpeg";
import menu2 from "../../assets/Menu_details_2.jpeg";
import menuPdf from "../../assets/Menu_PDF.pdf";

import DividingLine from "../../Components/Dividing_line/DividingLine";
import ReviewSlider from "../../Components/Review_slider/ReviewSlider";

const menus = [menu2, menu1];
const UBER_EATS_URL =
  "https://www.ubereats.com/au/store/the-lucky-australian-hotel/CUK0OZdTQAuCqAci82JvNA";
const ONLINE_ORDER_URL = "https://www.foodbooking.com/api/fb/_x4l6_e";

const EatAndDrink = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  // Opens the PDF in a new tab so people can read/view it first
  const handleViewMenu = () => {
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
          >
            Order on Uber Eats
          </a>
          <a
            className={styles.orderButton}
            href={ONLINE_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Online
          </a>
        </section>

        {menus.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`Menu ${index + 1}`}
            className={styles.menuImage}
          />
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
      </main>
    </>
  );
};

export default EatAndDrink;
