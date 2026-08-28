import React, { useState, useMemo, useEffect, useRef } from 'react'
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
        {'★'.repeat(count)}
    </div>
)

// Slower stagger + drop duration than before
const DROP_DELAY_SECONDS = 2
const DROP_DURATION_SECONDS = 1.7

// Small fanned-stack offsets per depth-from-top (0 = frontmost card)
const STACK_OFFSETS = [
    { x: 0, y: 0, rot: 0 },
    { x: 10, y: 10, rot: -4 },
    { x: -12, y: 18, rot: 5 },
    { x: 16, y: 26, rot: -7 },
    { x: -18, y: 34, rot: 8 },
    { x: 20, y: 42, rot: -9 },
]

const ReviewSlider = ({ reviews = DEFAULT_REVIEWS }) => {
    // order[last] = frontmost/top card. Cards keep their identity via id (original index).
    const [order, setOrder] = useState(() => reviews.map((_, i) => i))
    const [exitingId, setExitingId] = useState(null)
    const [hasMounted, setHasMounted] = useState(false)
    const [isInView, setIsInView] = useState(false)
    const wrapperRef = useRef(null)

    // Watch for the stack entering the viewport; trigger the drop-in only then.
    useEffect(() => {
        const node = wrapperRef.current
        if (!node) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 }
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    // Once the initial drop-in sequence has had time to finish, switch every
    // card over to the "settled" state so future reorders use the transform
    // transition instead of replaying the drop animation.
    useEffect(() => {
        if (!isInView) return

        const lastCardDelay = (reviews.length - 1) * DROP_DELAY_SECONDS
        const totalMs = (lastCardDelay + DROP_DURATION_SECONDS) * 1000

        const timer = setTimeout(() => {
            setHasMounted(true)
        }, totalMs)

        return () => clearTimeout(timer)
    }, [isInView, reviews.length])

    const positionOf = useMemo(() => {
        const map = new Map()
        order.forEach((id, pos) => {
            const depthFromTop = order.length - 1 - pos
            map.set(id, depthFromTop)
        })
        return map
    }, [order])

    const handleCardClick = (id) => {
        const isTop = positionOf.get(id) === 0
        if (!isTop || exitingId !== null) return

        setExitingId(id)
        setTimeout(() => {
            setOrder((prev) => [id, ...prev.filter((x) => x !== id)])
            setExitingId(null)
        }, 400)
    }

    const handleKeyDown = (e, id) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleCardClick(id)
        }
    }

    return (
        <section className={styles.reviewsStrip}>
            <h2 className={styles.heading}>Locals Love Us</h2>
            <p className={styles.hint}>Tap a review to see the next one</p>

            <div className={styles.stackWrapper} ref={wrapperRef}>
                {reviews.map((review, id) => {
                    const depth = positionOf.get(id) ?? 0
                    const offset = STACK_OFFSETS[Math.min(depth, STACK_OFFSETS.length - 1)]
                    const dir = id % 2 === 0 ? -1 : 1
                    const isExiting = exitingId === id

                    const cssVars = {
                        '--offsetX': `${offset.x}px`,
                        '--offsetY': `${offset.y}px`,
                        '--rotate': offset.rot,
                        '--dir': dir,
                        '--delay': `${id * DROP_DELAY_SECONDS}s`,
                        zIndex: reviews.length - depth,
                    }

                    // Before the section is in view, keep cards fully hidden.
                    // Once in view, play the drop-in once; after that, settle.
                    let animClass = styles.settled
                    if (!isInView) {
                        animClass = styles.hidden
                    } else if (!hasMounted) {
                        animClass = styles.dropIn
                    }
                    if (isExiting) animClass = styles.exiting

                    return (
                        <div
                            key={id}
                            className={`${styles.card} ${animClass}`}
                            style={cssVars}
                            onClick={() => handleCardClick(id)}
                            onKeyDown={(e) => handleKeyDown(e, id)}
                            role="button"
                            tabIndex={0}
                            aria-label={`Review by ${review.author}`}
                        >
                            <Stars />
                            <p className={styles.quote}>&ldquo;{review.text}&rdquo;</p>
                            <p className={styles.author}>&ndash; {review.author}</p>
                            <GoogleG />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ReviewSlider