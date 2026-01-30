"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        const parallax = scrollY * 0.4
        heroRef.current.style.transform = `translateY(${parallax}px)`
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        ref={heroRef}
        className="absolute inset-0 -top-20"
      >
        <Image
          src="/gallery/coconut3.jpg"
          alt="Olympos Coconut Apart ve Pansiyon - Doğa ile iç içe"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <span className="text-sky-light text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in">
          {t.hero.welcome}
        </span>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-background max-w-4xl leading-tight text-balance">
          {t.hero.title}
          <br />
          <em className="not-italic text-sky-light">{t.hero.titleHighlight}</em>
        </h1>
        <p className="mt-6 text-background/90 max-w-xl text-lg md:text-xl leading-relaxed">
          {t.hero.description}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="#booking"
            className="px-10 py-4 bg-background text-navy text-sm tracking-widest uppercase transition-all duration-300 hover:bg-sky-light hover:scale-105 rounded-md"
          >
            {t.hero.reserve}
          </Link>
          <Link
            href="#bungalows"
            className="px-10 py-4 border border-background text-background text-sm tracking-widest uppercase transition-all duration-300 hover:bg-background/10 rounded-md"
          >
            {t.hero.explore}
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Link href="#bungalows" aria-label="Scroll to explore">
          <ChevronDown className="text-background w-8 h-8" />
        </Link>
      </div>
    </section>
  )
}
