"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: "📚",
    text: "Learn coding through free, high-quality content and workshops",
  },
  {
    icon: "🎯",
    text: "Join volunteer tech projects & earn recognized certificates",
  },
  {
    icon: "🎪",
    text: "Participate in exciting events, hackathons, and challenges",
  },
  {
    icon: "✨",
    text: "Inspire others through collaboration and knowledge sharing",
  },
]

export default function WhyJoinUs() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const benefitsRef = useRef([])
  const ctaRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeline = anime.timeline({
              easing: "easeOutExpo",
            })

            timeline
              .add({
                targets: contentRef.current,
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 800,
              })
              .add(
                {
                  targets: benefitsRef.current,
                  opacity: [0, 1],
                  translateX: [-40, 0],
                  delay: anime.stagger(150),
                  duration: 600,
                },
                "-=400",
              )
              .add(
                {
                  targets: ctaRef.current,
                  opacity: [0, 1],
                  scale: [0.9, 1],
                  duration: 600,
                },
                "-=200",
              )

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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div ref={contentRef} className="text-center mb-12 opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why <span className="text-primary">Join Us?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Become part of a vibrant community that's shaping the future of technology, one line of code at a time.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                ref={(el) => (benefitsRef.current[index] = el)}
                className="flex items-start gap-4 bg-card border border-border rounded-xl p-6 opacity-0 hover:shadow-lg hover:shadow-primary/10 transition-shadow"
              >
                <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                <p className="text-lg text-muted-foreground leading-relaxed pt-2">{benefit.text}</p>
              </div>
            ))}
          </div>

          <div ref={ctaRef} className="text-center opacity-0">
            <p className="text-2xl font-semibold text-accent mb-8 italic">
              "Together, we're building a brighter digital future!"
            </p>
            <Button
              size="lg"
              className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30"
            >
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
