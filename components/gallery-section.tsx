"use client"

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/contexts/language-context'

const galleryItems = [
    { type: "image", src: "/gallery/image-3.jpg", alt: "Seyr-i Mavi Bungalow - Doğa ve deniz" },
    { type: "image", src: "/gallery/image-1.jpg", alt: "Seyr-i Mavi Bungalow - Huzur anları" },
    { type: "image", src: "/gallery/image-2.jpg", alt: "Seyr-i Mavi Bungalow - Deniz manzarası" },
    { type: "video", src: "/gallery/video-1.mp4", alt: "Seyr-i Mavi Bungalow - Turu" },
    { type: "image", src: "/gallery/image-11.jpg", alt: "Seyr-i Mavi - Kahve keyfi" },
    { type: "image", src: "/gallery/image-4.jpg", alt: "Seyr-i Mavi - Kokteyl zamanı" },
    { type: "image", src: "/gallery/image-5.jpg", alt: "Seyr-i Mavi - Rahat köşeler" },
    { type: "image", src: "/gallery/image-6.jpg", alt: "Seyr-i Mavi - Huzurlu anlar" },
    { type: "image", src: "/gallery/image-7.jpg", alt: "Seyr-i Mavi - Özel köşeler" },
    { type: "image", src: "/gallery/image-8.jpg", alt: "Seyr-i Mavi - Ferah alanlar" },
    { type: "image", src: "/gallery/image-9.jpg", alt: "Seyr-i Mavi - Sıcak atmosfer" },
    { type: "image", src: "/gallery/image-10.jpg", alt: "Seyr-i Mavi - Keyifli köşeler" },
    { type: "video", src: "/gallery/video-2.mp4", alt: "Seyr-i Mavi - Havuz ve doğa" },
]

export function GallerySection() {
    const { t } = useLanguage()
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const openLightbox = (index: number) => {
        setSelectedIndex(index)
    }

    const closeLightbox = () => {
        setSelectedIndex(null)
    }

    const goToPrevious = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + galleryItems.length) % galleryItems.length)
        }
    }

    const goToNext = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % galleryItems.length)
        }
    }

    return (
        <section id="gallery" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-sky-light text-sm tracking-[0.3em] uppercase">
                        Galeri
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-navy mt-4">
                        Anılarınızı Keşfedin
                    </h2>
                    <p className="mt-4 text-navy/70 max-w-2xl mx-auto">
                        Seyr-i Mavi Bungalow'da sizi bekleyen huzur dolu anların görüntüleri
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                            onClick={() => openLightbox(index)}
                        >
                            {item.type === 'image' ? (
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                />
                            ) : (
                                <>
                                    <video
                                        src={item.src}
                                        className="w-full h-full object-cover"
                                        muted
                                        loop
                                        playsInline
                                    />
                                    <div className="absolute inset-0 bg-navy/30 flex items-center justify-center">
                                        <Play className="w-12 h-12 text-background" fill="currentColor" />
                                    </div>
                                </>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedIndex !== null && (
                <div className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4">
                    <button
                        type="button"
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-background hover:text-sky-light transition-colors z-10"
                        aria-label="Close"
                    >
                        <X size={32} />
                    </button>

                    <button
                        type="button"
                        onClick={goToPrevious}
                        className="absolute left-4 text-background hover:text-sky-light transition-colors z-10"
                        aria-label="Previous"
                    >
                        <ChevronLeft size={48} />
                    </button>

                    <button
                        type="button"
                        onClick={goToNext}
                        className="absolute right-4 text-background hover:text-sky-light transition-colors z-10"
                        aria-label="Next"
                    >
                        <ChevronRight size={48} />
                    </button>

                    <div className="max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
                        {galleryItems[selectedIndex].type === 'image' ? (
                            <div className="relative w-full h-full">
                                <Image
                                    src={galleryItems[selectedIndex].src}
                                    alt={galleryItems[selectedIndex].alt}
                                    fill
                                    className="object-contain"
                                    sizes="90vw"
                                />
                            </div>
                        ) : (
                            <video
                                src={galleryItems[selectedIndex].src}
                                controls
                                autoPlay
                                className="max-w-full max-h-full"
                            />
                        )}
                    </div>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-background text-sm">
                        {selectedIndex + 1} / {galleryItems.length}
                    </div>
                </div>
            )}
        </section>
    )
}
