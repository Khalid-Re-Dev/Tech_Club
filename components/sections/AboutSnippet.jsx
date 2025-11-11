"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"

export default function AboutSnippet() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: contentRef.current,
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 1000,
              easing: "easeOutExpo",
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center opacity-0">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            <span className="text-primary font-semibold">Tech Pioneers Club</span> is a volunteer-driven tech community
            dedicated to empowering people through{" "}
            <span className="text-accent font-semibold">free programming education</span> and
            <span className="text-accent font-semibold"> digital innovation projects</span>. We believe in the power of
            collaboration, learning, and giving back to create a brighter digital future for everyone.
          </p>
        </div>
      </div>
    </section>
  )
}
