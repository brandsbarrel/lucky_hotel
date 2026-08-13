import React, { useEffect } from "react";
import styles from "./EatAndDrink.module.css";

import menuCover from "../../assets/menu_hero.jpeg";
import menu1 from "../../assets/Menu_details_1.jpeg";
import menu2 from "../../assets/Menu_details_2.jpeg";
import menu3 from "../../assets/Menu_details_3.jpeg";
import menuPdf from "../../assets/Menu_PDF.pdf";

import DividingLine from "../../Components/Dividing_line/DividingLine";

const menus = [menu1, menu2, menu3];

const EatAndDrink = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  // const handlePrintMenu = () => {
  //   const printWindow = window.open(menuPdf, "_blank");

  //   if (printWindow) {
  //     printWindow.onload = () => {
  //       printWindow.print();
  //     };
  //   }
  // };

  const handlePrintMenu = () => { // for download menu
    const link = document.createElement("a");
    link.href = menuPdf;
    link.download = "Menu.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <DividingLine height="15px" />

      <main className={styles.page}>
        <img
          src={menuCover}
          alt="Menu Cover"
          className={styles.coverImage}
        />

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
            onClick={handlePrintMenu}
          >
            Menu in PDF
          </button>
        </div>
      </main>
    </>
  );
};

export default EatAndDrink;