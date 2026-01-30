"use client"

import { useState } from "react"
import Image from "next/image"
import { Wifi, Wind, Coffee, Bath, Waves, Users, ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

const bungalows = [
  {
    id: 1,
    name: "Deniz Manzaralı Apart",
    description: "Denizin hemen yanında, doğa ile iç içe huzur dolu bir kaçış. Sabahları kuş sesleriyle uyanın, gün boyunca deniz manzarasının tadını çıkarın.",
    image: "/gallery/coconut3.jpg",
    amenities: ["wifi", "ac", "coffee", "bath"],
    guests: 2,
    size: "45 m²",
  },
  {
    id: 2,
    name: "Havuz Kenarı Apart",
    description: "Havuzun serin sularının yanında, özenle hazırlanmış rahat köşelerde kendinizi evinizde hissedin. Her an size özel.",
    image: "/gallery/coconut1.png",
    amenities: ["wifi", "ac", "coffee", "pool"],
    guests: 2,
    size: "50 m²",
  },
  {
    id: 3,
    name: "Bahçe Manzaralı Apart",
    description: "Yeşillikler içinde, huzurlu bir ortamda dinlenin. Doğanın seslerini dinleyerek kahvenizin tadını çıkarın.",
    image: "/gallery/coconut2.png",
    amenities: ["wifi", "ac", "bath", "coffee"],
    guests: 2,
    size: "40 m²",
  },
]

const amenityIcons: Record<string, { icon: typeof Wifi; label: string }> = {
  wifi: { icon: Wifi, label: "Ücretsiz WiFi" },
  ac: { icon: Wind, label: "Klima" },
  coffee: { icon: Coffee, label: "Kahve/Çay" },
  bath: { icon: Bath, label: "Özel Banyo" },
  pool: { icon: Waves, label: "Havuz Erişimi" },
}

export function BungalowsSection() {
  const [selectedBungalow, setSelectedBungalow] = useState<typeof bungalows[0] | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useLanguage()

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bungalows.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bungalows.length) % bungalows.length)
  }

  return (
    <section id="bungalows" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="text-cyan text-sm tracking-[0.3em] uppercase">
            {t.bungalows.subtitle}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy mt-4 text-balance">
            {t.bungalows.title}
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Olympos Coconut Apart ve Pansiyon'da her apart özenle tasarlanmış, konforun ve doğanın mükemmel uyumunu sunuyor.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bungalows.map((bungalow, index) => (
            <article
              key={bungalow.id}
              className={cn(
                "group bg-background overflow-hidden transition-all duration-500 hover:shadow-xl rounded-lg",
                index === 1 && "lg:-mt-8"
              )}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={bungalow.image}
                  alt={bungalow.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Users size={14} />
                    {bungalow.guests} Kişi
                  </span>
                  <span>{bungalow.size}</span>
                </div>
                <h3 className="font-serif text-2xl text-navy mb-3">{bungalow.name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                  {bungalow.description}
                </p>
                <div className="flex items-center gap-3 mb-6">
                  {bungalow.amenities.map((amenity) => {
                    const { icon: Icon, label } = amenityIcons[amenity]
                    return (
                      <div
                        key={amenity}
                        className="w-10 h-10 flex items-center justify-center bg-secondary text-navy rounded-md"
                        title={label}
                      >
                        <Icon size={18} />
                      </div>
                    )
                  })}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedBungalow(bungalow)}
                  className="w-full px-6 py-3 bg-navy text-background text-sm tracking-widest uppercase hover:bg-navy-light transition-colors rounded-md"
                >
                  {t.bungalows.viewDetails}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {bungalows.map((bungalow) => (
                <article
                  key={bungalow.id}
                  className="w-full flex-shrink-0 bg-background rounded-lg overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={bungalow.image}
                      alt={bungalow.name}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Users size={14} />
                        {bungalow.guests} Kişi
                      </span>
                      <span>{bungalow.size}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-navy mb-3">{bungalow.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {bungalow.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelectedBungalow(bungalow)}
                      className="w-full px-6 py-3 bg-navy text-background text-sm tracking-widest uppercase rounded-md"
                    >
                      Detaylar
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center border border-navy text-navy hover:bg-navy hover:text-background transition-colors rounded-md"
              aria-label="Önceki bungalow"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {bungalows.map((_, index) => (
                <button
                  key={`slide-${index + 1}`}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    index === currentSlide ? "bg-navy" : "bg-navy/30"
                  )}
                  aria-label={`Slayt ${index + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center border border-navy text-navy hover:bg-navy hover:text-background transition-colors rounded-md"
              aria-label="Sonraki bungalow"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedBungalow && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm"
          onClick={() => setSelectedBungalow(null)}
          onKeyDown={(e) => e.key === 'Escape' && setSelectedBungalow(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-background max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <Image
                src={selectedBungalow.image}
                alt={selectedBungalow.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <button
                type="button"
                onClick={() => setSelectedBungalow(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-background text-navy rounded-md"
                aria-label="Kapat"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-8">
              <h3 id="modal-title" className="font-serif text-3xl text-navy mb-4">
                {selectedBungalow.name}
              </h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Users size={14} />
                  {selectedBungalow.guests} Kişi
                </span>
                <span>{selectedBungalow.size}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {selectedBungalow.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {selectedBungalow.amenities.map((amenity) => {
                  const { icon: Icon, label } = amenityIcons[amenity]
                  return (
                    <div
                      key={amenity}
                      className="flex items-center gap-2 text-navy"
                    >
                      <Icon size={18} />
                      <span className="text-sm">{label}</span>
                    </div>
                  )
                })}
              </div>
              <a
                href="#booking"
                onClick={() => setSelectedBungalow(null)}
                className="block w-full text-center px-8 py-3 bg-navy text-background text-sm tracking-widest uppercase hover:bg-navy-light transition-colors rounded-md"
              >
                Rezervasyon Yap
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
