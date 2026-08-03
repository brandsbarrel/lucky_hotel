import React, { useMemo } from 'react'
import styles from './ReviewSlider.module.css'

const DEFAULT_REVIEWS = [
    { text: "Best pub in North St Mary's!", author: 'Sarah T.' },
    { text: 'Amazing food, friendly staff.', author: 'Michael R.' },
    { text: 'Great atmosphere every time.', author: 'Jess K.' },
    { text: 'Our favourite place to catch up.', author: 'Daniel P.' },
    { text: 'Sunday roast is unbeatable.', author: 'Emma L.' },
    { text: 'Warm welcome, every single visit.', author: 'Tom H.' },
]

const GoogleG = () => (
    <div className={styles.googleG} aria-hidden="true">
        <span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span>
    </div>
)

const Stars = ({ count = 5 }) => (
    <div className={styles.stars} aria-hidden="true">
        {'★'.repeat(count)}
    </div>
)

// Roughly 4s of scroll time per card keeps speed consistent
// regardless of how many reviews are passed in.
const SECONDS_PER_CARD = 4

const ReviewsSlider = ({ reviews = DEFAULT_REVIEWS }) => {
    // Duplicate the list so translateX(-50%) loops seamlessly.
    const loopItems = useMemo(() => [...reviews, ...reviews], [reviews])
    const duration = reviews.length * SECONDS_PER_CARD

    return (
        <section className={styles.reviewsStrip}>
            <h2 className={styles.heading}>Locals Love Us</h2>

            <div className={styles.viewport}>
                <div
                    className={styles.track}
                    style={{ '--duration': `${duration}s` }}
                >
                    {loopItems.map((review, idx) => (
                        <div className={styles.card} key={idx} aria-hidden={idx >= reviews.length}>
                            <Stars />
                            <p className={styles.quote}>&ldquo;{review.text}&rdquo;</p>
                            <p className={styles.author}>&ndash; {review.author}</p>
                            <GoogleG />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ReviewsSlider