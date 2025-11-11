"use client"

import { useState, useEffect } from "react"
import anime from "animejs"

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export default function Header() {
  const [language, setLanguage] = useState("en")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    anime
      .timeline({
        easing: "easeOutExpo",
      })
      .add({
        targets: ".header-logo",
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 800,
      })
      .add(
        {
          targets: ".nav-link",
          opacity: [0, 1],
          translateY: [-20, 0],
          duration: 600,
          delay: anime.stagger(100),
        },
        "-=600",
      )
      .add(
        {
          targets: ".header-language-toggle",
          opacity: [0, 1],
          scale: [0.8, 1],
          duration: 600,
        },
        "-=400",
      )

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="header-logo flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => scrollToSection("hero")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && scrollToSection("hero")}
            aria-label="Tech Pioneers Club - Home"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D8%B1%D9%88%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A9-r2WAhFUedwcaMNteRQ1V0AEewdQTOb.png"
              alt="Tech Pioneers Club Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="text-xl font-bold text-foreground hidden sm:block">Tech Pioneers Club</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="nav-link text-foreground hover:text-primary transition-colors font-medium relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("highlights")}
              className="nav-link text-foreground hover:text-primary transition-colors font-medium relative group"
            >
              Highlights
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className="nav-link text-foreground hover:text-primary transition-colors font-medium relative group"
            >
              Programs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("why-join")}
              className="nav-link text-foreground hover:text-primary transition-colors font-medium relative group"
            >
              Why Join
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link text-foreground hover:text-primary transition-colors font-medium relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Language Toggle */}
          <div className="header-language-toggle hidden md:flex items-center gap-2">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                language === "en"
                  ? "bg-primary text-white shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("ar")}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                language === "ar"
                  ? "bg-primary text-white shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              aria-label="Switch to Arabic"
            >
              AR
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left hover:translate-x-2 transition-transform"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("highlights")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left hover:translate-x-2 transition-transform"
              >
                Highlights
              </button>
              <button
                onClick={() => scrollToSection("programs")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left hover:translate-x-2 transition-transform"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection("why-join")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left hover:translate-x-2 transition-transform"
              >
                Why Join
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left hover:translate-x-2 transition-transform"
              >
                Contact
              </button>
              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                    language === "en" ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("ar")}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                    language === "ar" ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                  }`}
                  aria-label="Switch to Arabic"
                >
                  AR
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
