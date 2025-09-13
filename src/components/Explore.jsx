"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import "../styles/Explore.css"
import explore1 from "../assets/images/explore/explore1.jpg"
import explore2 from "../assets/images/explore/explore2.jpg"
import explore3 from "../assets/images/explore/explore3.jpg"
import explore4 from "../assets/images/explore/explore4.jpg"

const Explore = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const exploreCategories = [
    {
      emoji: "🍹",
      title: "Nightlife & Eats",
      tagline: "Where Nights Come Alive",
      description: "Rooftop lounges, beach clubs, and food streets that never sleep – discover the flavors and beats that define UAE nights.",
      cta: "Explore Nightlife →",
      imageSrc: explore1,
      gradientOverlay: "linear-gradient(135deg, rgba(99, 102, 241, 0.8), rgba(16, 185, 129, 0.6))"
    },
    {
      emoji: "⛰️",
      title: "Outdoor Thrills",
      tagline: "Adventure Awaits",
      description: "Skydive, desert dune bash, hike mountains, or paddle through serene mangroves – the UAE is your adventure playground.",
      cta: "Plan Adventure →",
      imageSrc: explore2,
      gradientOverlay: "linear-gradient(135deg, rgba(236, 72, 153, 0.8), rgba(251, 146, 60, 0.6))"
    },
    {
      emoji: "🛍️",
      title: "Shopping Spree",
      tagline: "Retail Therapy, UAE Style",
      description: "Luxury malls, buzzing souks, and hidden boutiques – shop from bling to bargains with insider tips.",
      cta: "Shop the Best Finds →",
      imageSrc: explore3,
      gradientOverlay: "linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(59, 130, 246, 0.6))"
    },
    {
      emoji: "🏖️",
      title: "Staycays",
      tagline: "Mini Vacays, Major Vibes",
      description: "Resorts, boutique stays, and weekend escapes made for Insta-worthy memories – all right here in the Emirates.",
      cta: "Discover Staycays →",
      imageSrc: explore4,
      gradientOverlay: "linear-gradient(135deg, rgba(251, 146, 60, 0.8), rgba(99, 102, 241, 0.6))"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  }

  return (
    <section id="explore" className="explore-section" ref={ref}>
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
            <span className="text-gradient">Explore UAE</span> Beyond the Ordinary
          </h2>
          <p className="section-subtitle">
            From electric nightlife to desert adventures, luxury shopping to hidden cultural gems – your UAE journey starts here. Choose your vibe, and we'll guide you there.
          </p>
        </motion.div>

        <motion.div 
          className="explore-grid" 
          variants={containerVariants} 
          initial="hidden" 
          animate={controls}
        >
          {exploreCategories.map((category, index) => (
            <motion.div
              className="explore-card"
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <div className="explore-image-wrapper">
                <img
                  className="explore-image"
                  src={category.imageSrc}
                  alt={category.title}
                />
                <div 
                  className="explore-overlay"
                  style={{ background: category.gradientOverlay }}
                ></div>
                
                <div className="explore-emoji-badge">
                  <span className="explore-emoji">{category.emoji}</span>
                </div>
              </div>
              
              <div className="explore-content">
                <h3 className="explore-title">{category.title}</h3>
                <p className="explore-tagline">{category.tagline}</p>
                <p className="explore-description">{category.description}</p>
                
                <div className="explore-cta">
                  <div className="explore-accent-line"></div>
                  <span className="explore-cta-text">{category.cta}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="explore-bottom-cta"
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
          <p>Ready to Start Your UAE Exploration?</p>
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Started Now
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Explore