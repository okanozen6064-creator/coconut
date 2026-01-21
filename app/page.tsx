import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BungalowsSection } from "@/components/bungalows-section"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"
import { BookingSection } from "@/components/booking-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <BungalowsSection />
      <AboutSection />
      <GallerySection />
      <BookingSection />
      <Footer />
    </main>
  )
}
