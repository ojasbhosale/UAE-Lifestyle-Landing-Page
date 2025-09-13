"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import "../styles/Community.css"

const Community = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    travelInterest: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    // Mock submission with a delay to simulate loading
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: "", email: "", travelInterest: "" })
      setSubmitting(false)
    }, 1500) // 1.5 second delay for realistic loading experience
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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

  if (submitted) {
    return (
      <section id="community" className="community-section" ref={ref}>
        <div className="community-bg-decoration"></div>
        <div className="community-gradient-overlay"></div>
        
        <div className="container">
          <motion.div
            className="community-success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
          >
            <div className="success-icon">🎉</div>
            <h2>Welcome to the Community!</h2>
            <p>You're now part of the UAE lifestyle insider circle. Get ready for exclusive guides, events, and the best local tips!</p>
            <motion.button
              className="btn btn-primary"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Top
            </motion.button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="community" className="community-section" ref={ref}>
      <div className="community-bg-decoration"></div>
      <div className="community-gradient-overlay"></div>

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
             <span className="text-gradient">Join the Vibe</span> - Live the Life.
          </h2>
          <p className="section-subtitle">
            Get the latest guides, events, and insider tips straight to your inbox. Stay connected with people who live and breathe the UAE lifestyle.
          </p>
        </motion.div>

        <div className="form-container-wrapper">
          <motion.div className="form-container" variants={containerVariants} initial="hidden" animate={controls}>
            <div className="form-decoration top-left"></div>
            <div className="form-decoration bottom-right"></div>

            <form onSubmit={handleSubmit}>
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </motion.div>

              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </motion.div>

              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="travelInterest">Your UAE Interest</label>
                <select
                  id="travelInterest"
                  name="travelInterest"
                  value={formData.travelInterest}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    What interests you most?
                  </option>
                  <option value="Nightlife & Dining">Nightlife & Dining</option>
                  <option value="Beach Clubs">Beach Clubs</option>
                  <option value="Adventure Sports">Adventure Sports</option>
                  <option value="Shopping & Fashion">Shopping & Fashion</option>
                  <option value="Cultural Events">Cultural Events</option>
                  <option value="Luxury Experiences">Luxury Experiences</option>
                </select>
              </motion.div>

              <motion.button
                type="submit"
                className="btn btn-primary form-button"
                disabled={submitting}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {submitting ? <span className="loading-spinner"></span> : "Join the Community"}
              </motion.button>

              {error && <p className="form-error">{error}</p>}
            </form>
          </motion.div>

          <motion.div
            className="form-image"
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.5,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            <div className="image-content">
              <h3>🌟 Insider Access</h3>
              <ul>
                <li>
                  <span className="check-icon">📧</span>
                  <div>
                    <strong>Weekly Lifestyle Guides</strong>
                    <span>Curated hotspots, hidden gems & trending venues</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">🎉</span>
                  <div>
                    <strong>Exclusive Event Invites</strong>
                    <span>VIP access to parties, launches & networking events</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">💎</span>
                  <div>
                    <strong>Member Perks & Discounts</strong>
                    <span>Special rates at premium venues & experiences</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">👥</span>
                  <div>
                    <strong>Community Network</strong>
                    <span>Connect with like-minded lifestyle enthusiasts</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">⚡</span>
                  <div>
                    <strong>Early Access</strong>
                    <span>Be first to know about new openings & trends</span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Community