import React, { useEffect } from 'react'
import styles from './EatAndDrink.module.css'
import menuCover from '../../assets/menu_hero.jpeg'
import menu from '../../assets/Menu_details.jpeg';

const EatAndDrink = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <main className={styles.page}>
      <section className={styles.imageGrid}>
        <div className={styles.imageCard}>
          <img src={menuCover} alt="Menu cover" className={styles.image} />
        </div>
        <div className={styles.imageCard}>
          <img src={menu} alt="Menu details" className={styles.image} />
        </div>
      </section>
    </main>
  )
}

export default EatAndDrink;
