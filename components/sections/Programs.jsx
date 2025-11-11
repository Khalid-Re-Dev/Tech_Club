"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"

const stages = [
  {
    number: "1",
    title: "Foundation & Setup",
    description: "Establish the community infrastructure, define goals, and create initial learning resources.",
    icon: "🏗️",
  },
  {
    number: "2",
    title: "Building the Community",
    description: "Recruit members, establish communication channels, and foster a welcoming environment.",
    icon: "👥",
  },
  {
    number: "3",
    title: "Training & Workshops",
    description: "Launch comprehensive programming courses, workshops, and hands-on learning sessions.",
    icon: "📖",
  },
  {
    number: "4",
    title: "Volunteer Projects & Challenges",
    description: "Engage members in real-world projects, hackathons, and collaborative coding challenges.",
    icon: "🎯",
  },
  {
    number: "5",
    title: "Growth & Sustainability",
    description: "Scale the community, establish partnerships, and ensure long-term impact and success.",
    icon: "🌱",
  },
]

export default function Programs() {
  const sectionRef = useRef(null)
  const stagesRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: stagesRef.current,
              opacity: [0, 1],
              translateY: [50, 0],
              scale: [0.95, 1],
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

  const handleStageHover = (index) => {
    anime({
      targets: stagesRef.current[index],
      scale: 1.03,
      duration: 300,
      easing: "easeOutQuad",
    })
  }

  const handleStageLeave = (index) => {
    anime({
      targets: stagesRef.current[index],
      scale: 1,
      duration: 300,
      easing: "easeOutQuad",
    })
  }

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Our <span className="text-primary">Programs</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          A structured journey from foundation to growth, designed to maximize impact and learning.
        </p>

        <div className="max-w-5xl mx-auto space-y-6">
          {stages.map((stage, index) => (
            <div
              key={index}
              ref={(el) => (stagesRef.current[index] = el)}
              className="bg-card border-2 border-border rounded-2xl p-8 opacity-0 cursor-pointer transition-all hover:border-primary"
              onMouseEnter={() => handleStageHover(index)}
              onMouseLeave={() => handleStageLeave(index)}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-primary/30">
                  {stage.number}
                </div>
                <div className="text-5xl">{stage.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{stage.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{stage.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
