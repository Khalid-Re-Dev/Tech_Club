"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"

const objectives = [
  "Provide free, accessible tech education to all",
  "Build a supportive community of learners and mentors",
  "Create real-world projects that solve community problems",
  "Foster innovation and creative problem-solving",
  "Recognize and celebrate volunteer contributions",
  "Bridge the digital divide through inclusive programs",
]

export default function AboutUs() {
  const sectionRef = useRef(null)
  const sectionsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: sectionsRef.current,
              opacity: [0, 1],
              translateY: [40, 0],
              delay: anime.stagger(200),
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

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          About <span className="text-primary">Us</span>
        </h2>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Who We Are */}
          <div ref={(el) => (sectionsRef.current[0] = el)} className="opacity-0">
            <h3 className="text-3xl font-bold mb-4 text-primary">Who We Are</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tech Pioneers Club is a youth-led, volunteer-driven community passionate about technology and innovation.
              We bring together aspiring developers, designers, and tech enthusiasts who want to learn, grow, and make a
              positive impact through digital solutions.
            </p>
          </div>

          {/* Our Mission */}
          <div ref={(el) => (sectionsRef.current[1] = el)} className="opacity-0">
            <h3 className="text-3xl font-bold mb-4 text-primary">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To democratize tech education and empower individuals from all backgrounds to become confident creators
              and problem-solvers in the digital age. We provide free resources, mentorship, and hands-on project
              experience to help everyone unlock their potential.
            </p>
          </div>

          {/* Our Vision */}
          <div ref={(el) => (sectionsRef.current[2] = el)} className="opacity-0">
            <h3 className="text-3xl font-bold mb-4 text-primary">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A world where technology is accessible to everyone, where communities collaborate to solve real problems,
              and where the next generation of innovators emerges from diverse backgrounds, united by curiosity and a
              passion for positive change.
            </p>
          </div>

          {/* Our Objectives */}
          <div ref={(el) => (sectionsRef.current[3] = el)} className="opacity-0">
            <h3 className="text-3xl font-bold mb-6 text-primary">Our Objectives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
