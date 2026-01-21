"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with Offset */}
          <div className="relative">
            <div className="relative aspect-[4/5] lg:aspect-[3/4]">
              <Image
                src="/gallery/image-2.jpg"
                alt="Seyr-i Mavi Bungalow"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border-2 border-cyan -z-10 hidden md:block" />
            {/* Stats Card */}
            <div className="absolute -bottom-4 left-4 md:-bottom-8 md:left-8 bg-navy text-background p-6 md:p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="font-serif text-3xl md:text-4xl text-sky-light">100%</span>
                  <p className="text-sm text-background/70 mt-1">Doğa ile İç İçe</p>
                </div>
                <div>
                  <span className="font-serif text-3xl md:text-4xl text-sky-light">24/7</span>
                  <p className="text-sm text-background/70 mt-1">Özel Hizmet</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-cyan text-sm tracking-[0.3em] uppercase">
              {t.about.title}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy mt-4 text-balance">
              {t.about.subtitle}
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                {t.about.description}
              </p>
              <p>
                Havuzun serin sularının yanında, özenle hazırlanmış rahat köşelerde kendinizi evinizde hissedin.
                Sabahları kuş sesleriyle uyanın, gün boyunca deniz manzarasının tadını çıkarın.
              </p>
              <p>
                Bazen bir köşenin huzuru, bir fincan kahvenin sıcaklığı ya da serin bir kokteylin ferahlığı
                yeterlidir. Seyr-i Mavi size iyi gelecek.
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-secondary text-navy rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-navy">{t.about.features.nature.title}</p>
                  <p className="text-sm text-muted-foreground">{t.about.features.nature.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-secondary text-navy rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-navy">{t.about.features.service.title}</p>
                  <p className="text-sm text-muted-foreground">{t.about.features.service.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
