import styles from './ReviewSlider.module.css'

const DEFAULT_REVIEWS = [
    { text: "Best pub in North St Mary's! The staff go above and beyond every single time we visit.", author: 'Sarah T.' },
    { text: 'Amazing food, friendly staff. We come here at least once a fortnight and it never disappoints.', author: 'Michael R.' },
    { text: 'Great atmosphere every time. Perfect spot for a quiet pint or a big group celebration.', author: 'Jess K.' },
    { text: 'Our favourite place to catch up with friends. Cosy, relaxed, and the drinks keep getting better.', author: 'Daniel P.' },
    { text: 'Sunday roast is unbeatable. Generous portions, proper gravy, and they always remember how we like it.', author: 'Emma L.' },
    { text: 'Warm welcome, every single visit. Feels like a proper local pub should.', author: 'Tom H.' },
]

const GoogleG = () => (
    <div className={styles.googleG} aria-hidden="true">
        <span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span>
    </div>
)

const Stars = ({ count = 5 }) => (
    <div className={styles.stars} aria-hidden="true">
        {'\u2605'.repeat(count)}
    </div>
)

const ReviewCard = ({ review }) => (
    <article className={styles.card}>
        <Stars />
        <p className={styles.quote}>&ldquo;{review.text}&rdquo;</p>
        <p className={styles.author}>&ndash; {review.author}</p>
        <GoogleG />
    </article>
)

const ReviewSlider = ({ reviews = DEFAULT_REVIEWS }) => {
    if (!reviews.length) return null

    // Track ko duplicate karte hain taaki loop seamless dikhe (infinite train effect)
    const trackReviews = [...reviews, ...reviews]

    return (
        <section className={styles.reviewsStrip}>
            <h2 className={styles.heading}>Locals Love Us</h2>

            <div className={styles.marqueeViewport}>
                <div className={styles.marqueeTrack} style={{ '--review-count': reviews.length }}>
                    {trackReviews.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ReviewSlider