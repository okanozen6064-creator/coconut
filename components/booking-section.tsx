"use client"

import React from "react"

import { useState } from "react"
import { Calendar, Users, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

export function BookingSection() {
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("2")
  const [isGuestsOpen, setIsGuestsOpen] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking submission
    console.log({ checkIn, checkOut, guests })
  }

  return (
    <section id="booking" className="py-24 md:py-32 bg-navy">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-cyan text-sm tracking-[0.3em] uppercase">
            {t.booking.title}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-background mt-4 text-balance">
            {t.booking.subtitle}
          </h2>
          <p className="mt-6 text-background/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Tarihlerinizi seçin ve unutulmaz bir deneyim yaşayın.
            Ekibimiz 7/24 rezervasyonunuz için hazır.
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="bg-background p-8 md:p-10 rounded-lg">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Check In */}
              <div className="space-y-2">
                <label htmlFor="check-in" className="text-sm text-muted-foreground tracking-widest uppercase">
                  {t.booking.checkIn}
                </label>
                <div className="relative">
                  <input
                    id="check-in"
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-4 bg-secondary border-0 text-navy font-medium appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan rounded-md"
                    required
                  />
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
                </div>
              </div>

              {/* Check Out */}
              <div className="space-y-2">
                <label htmlFor="check-out" className="text-sm text-muted-foreground tracking-widest uppercase">
                  {t.booking.checkOut}
                </label>
                <div className="relative">
                  <input
                    id="check-out"
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    min={checkIn || new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-4 bg-secondary border-0 text-navy font-medium appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan rounded-md"
                    required
                  />
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
                </div>
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label htmlFor="guests" className="text-sm text-muted-foreground tracking-widest uppercase">
                  {t.booking.guests}
                </label>
                <div className="relative">
                  <button
                    id="guests"
                    type="button"
                    onClick={() => setIsGuestsOpen(!isGuestsOpen)}
                    className="w-full px-4 py-4 bg-secondary border-0 text-navy font-medium text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-cyan rounded-md"
                  >
                    <span className="flex items-center gap-3">
                      <Users size={18} className="text-muted-foreground" />
                      {guests} Kişi
                    </span>
                    <ChevronDown size={18} className={cn("text-muted-foreground transition-transform", isGuestsOpen && "rotate-180")} />
                  </button>
                  {isGuestsOpen && (
                    <div className="absolute top-full left-0 right-0 bg-background border border-border mt-1 z-10 shadow-lg rounded-md overflow-hidden">
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => {
                            setGuests(num.toString())
                            setIsGuestsOpen(false)
                          }}
                          className={cn(
                            "w-full px-4 py-3 text-left text-navy hover:bg-secondary transition-colors",
                            guests === num.toString() && "bg-secondary"
                          )}
                        >
                          {num} Kişi
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-8 px-8 py-5 bg-navy text-background text-sm tracking-widest uppercase hover:bg-navy-light transition-all duration-300 hover:shadow-lg rounded-md"
            >
              Müsaitlik Kontrolü
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-background/60 text-sm">
            Telefon ile iletişim kurmak ister misiniz?{" "}
            <a href="tel:+905327340282" className="text-sky-light hover:text-cyan transition-colors">
              +90 532 734 02 82
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
