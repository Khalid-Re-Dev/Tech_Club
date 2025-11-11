"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"

const highlights = [
  {
    icon: "💻",
    title: "Free Tech Workshops",
    description: "Access high-quality programming courses and workshops at no cost.",
  },
  {
    icon: "🚀",
    title: "Community Projects",
    description: "Collaborate on real-world projects that make a difference.",
  },
  {
    icon: "🌍",
    title: "Volunteer Certificates",
    description: "Earn recognized certificates for your contributions and learning.",
  },
  {
    icon: "🤝",
    title: "Expert Mentorship",
    description: "Learn from experienced developers and industry professionals.",
  },
]

export default function Highlights() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: cardsRef.current,
              opacity: [0, 1],
              translateY: [60, 0],
              scale: [0.9, 1],
              delay: anime.stagger(150),
              duration: 800,
              easing: "easeOutExpo",
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleCardHover = (index) => {
    anime({
      targets: cardsRef.current[index],
      scale: 1.05,
      translateY: -10,
      duration: 300,
      easing: "easeOutQuad",
    })
  }

  const handleCardLeave = (index) => {
    anime({
      targets: cardsRef.current[index],
      scale: 1,
      translateY: 0,
      duration: 300,
      easing: "easeOutQuad",
    })
  }

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          What We <span className="text-primary">Offer</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-card border border-border rounded-2xl p-8 text-center opacity-0 cursor-pointer transition-shadow hover:shadow-xl hover:shadow-primary/20"
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardLeave(index)}
            >
              <div className="text-6xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{highlight.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
