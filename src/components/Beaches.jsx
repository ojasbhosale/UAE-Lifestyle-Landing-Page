"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import "../styles/Beaches.css"
import beach1 from "../assets/videos/beaches/beach1.mp4"
import beach2 from "../assets/videos/beaches/beach2.mp4"
import beach3 from "../assets/videos/beaches/beach3.mp4"

const Beaches = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const beachClubs = [
    {
      name: "White Beach, Atlantis",
      tagline: "Luxury, music, and magic by the shore.",
      videoSrc: beach1, // You'll replace with your video path
      gradientOverlay: "linear-gradient(135deg, rgba(99, 102, 241, 0.8), rgba(16, 185, 129, 0.6))"
    },
    {
      name: "Nikki Beach Dubai", 
      tagline: "The global beach club that redefines luxury living.",
      videoSrc: beach2, // You'll replace with your video path
      gradientOverlay: "linear-gradient(135deg, rgba(236, 72, 153, 0.8), rgba(251, 146, 60, 0.6))"
    },
    {
      name: "Zero Gravity",
      tagline: "From sunrise dips to starlit parties.",
      videoSrc: beach3, // You'll replace with your video path
      gradientOverlay: "linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(59, 130, 246, 0.6))"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  }

  return (
    <section id="beaches" className="beaches-section" ref={ref}>
      <div className="beaches-bg-decoration"></div>
      <div className="beaches-gradient-overlay"></div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <h2 className="section-title">
            <span className="text-gradient">Top Beach Clubs</span> – Where Vibes Meet the Waves
          </h2>
          <p className="section-subtitle">
            Find the ultimate beach escapes – whether you're here for poolside beats, sundowner cocktails, or luxury lounging. Handpicked clubs, reviews, and insider perks just for you.
          </p>
        </motion.div>

        <motion.div className="beaches-grid" variants={containerVariants} initial="hidden" animate={controls}>
          {beachClubs.map((club, index) => (
            <motion.div
              className="beach-card"
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <div className="beach-card-inner">
                <div className="beach-video-wrapper">
                  <video
                    className="beach-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/assets/images/placeholder-beach.jpg" // Fallback image
                  >
                    <source src={club.videoSrc} type="video/mp4" />
                  </video>
                  <div 
                    className="beach-overlay"
                    style={{ background: club.gradientOverlay }}
                  ></div>
                </div>
                
                <div className="beach-content">
                  <h3 className="beach-name">{club.name}</h3>
                  <p className="beach-tagline">{club.tagline}</p>
                  <div className="beach-accent-line"></div>
                </div>

                <div className="beach-hover-effect">
                  <div className="beach-explore-btn">
                    <span>Explore Club</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="beaches-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.8,
                duration: 0.6,
              },
            },
          }}
        >
          <p>Ready to See the Hottest Beach Clubs?</p>
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById("community").scrollIntoView({ behavior: "smooth" })}
          >
            Discover All Beach Clubs
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Beaches