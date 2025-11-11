"use client"

import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import AboutSnippet from "@/components/sections/AboutSnippet"
import Highlights from "@/components/sections/Highlights"
import AboutUs from "@/components/sections/AboutUs"
import WhyJoinUs from "@/components/sections/WhyJoinUs"
import Programs from "@/components/sections/Programs"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <AboutSnippet />
        </div>
        <div id="highlights">
          <Highlights />
        </div>
        <AboutUs />
        <div id="why-join">
          <WhyJoinUs />
        </div>
        <div id="programs">
          <Programs />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  )
}
