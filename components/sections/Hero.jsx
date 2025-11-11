"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const heroRef = useRef(null)
  const logoRef = useRef(null)
  const headlineRef = useRef(null)
  const subheadlineRef = useRef(null)
  const quoteRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    // Hero entrance animations
    const timeline = anime.timeline({
      easing: "easeOutExpo",
    })

    timeline
      .add({
        targets: logoRef.current,
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 1000,
      })
      .add(
        {
          targets: headlineRef.current,
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 800,
        },
        "-=600",
      )
      .add(
        {
          targets: subheadlineRef.current,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 800,
        },
        "-=600",
      )
      .add(
        {
          targets: quoteRef.current,
          opacity: [0, 1],
          scale: [0.95, 1],
          duration: 600,
        },
        "-=400",
      )
      .add(
        {
          targets: buttonsRef.current?.children,
          opacity: [0, 1],
          translateY: [20, 0],
          delay: anime.stagger(150),
          duration: 600,
        },
        "-=400",
      )
  }, [])

  const handleButtonHover = (e) => {
    anime({
      targets: e.currentTarget,
      scale: 1.05,
      duration: 300,
      easing: "easeOutQuad",
    })
  }

  const handleButtonLeave = (e) => {
    anime({
      targets: e.currentTarget,
      scale: 1,
      duration: 300,
      easing: "easeOutQuad",
    })
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div ref={logoRef} className="mb-12 opacity-0 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D8%B1%D9%88%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A9-r2WAhFUedwcaMNteRQ1V0AEewdQTOb.png"
              alt="Tech Pioneers Club Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
            />
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 opacity-0 leading-tight"
          >
            Welcome to <br />
            <span className="text-primary">Tech Pioneers Club</span>
          </h1>

          {/* Subheadline */}
          <p
            ref={subheadlineRef}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 opacity-0 leading-relaxed max-w-4xl mx-auto"
          >
            Empowering youth and communities through technology, innovation, and volunteer-driven learning.
          </p>

          {/* Quote */}
          <div ref={quoteRef} className="mb-12 opacity-0">
            <p className="text-2xl md:text-3xl font-semibold text-accent italic">"Together, we code the future."</p>
          </div>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30"
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              Join Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
