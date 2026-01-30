"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSelector } from "./language-selector"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#bungalows", label: t.nav.bungalows },
    { href: "#about", label: t.nav.about },
    { href: "#gallery", label: "Galeri" },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-4"
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="relative transition-all duration-300"
        >
          <Image
            src="/logo.png"
            alt="Olympos Coconut Apart ve Pansiyon"
            width={isScrolled ? 140 : 160}
            height={isScrolled ? 50 : 60}
            className="transition-all duration-300"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-70",
                isScrolled ? "text-navy" : "text-background"
              )}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSelector isScrolled={isScrolled} />
          <Link
            href="#booking"
            className={cn(
              "px-6 py-2.5 text-sm tracking-widest uppercase transition-all duration-300 rounded-md",
              isScrolled
                ? "bg-navy text-background hover:bg-navy-light"
                : "bg-background text-navy hover:bg-background/90"
            )}
          >
            {t.nav.bookNow}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "md:hidden p-2 transition-colors",
            isScrolled ? "text-navy" : "text-background"
          )}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-navy text-sm tracking-widest uppercase py-2 border-b border-border"
            >
              {link.label}
            </Link>
          ))}
          <div className="py-2">
            <LanguageSelector isScrolled={true} />
          </div>
          <Link
            href="#booking"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-navy text-background text-center py-3 text-sm tracking-widest uppercase mt-2 rounded-md"
          >
            {t.nav.bookNow}
          </Link>
        </div>
      </div>
    </header>
  )
}
