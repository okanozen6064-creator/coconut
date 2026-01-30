"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, MapPin, Mail, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer id="contact" className="bg-navy-light text-background">
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Google Maps */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif mb-6 text-center">{t.footer.contact}</h3>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24695.187097963215!2d30.445630899999998!3d36.375744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c2377c2c6dc9a5%3A0x1a6d35343c9ffade!2sOlympos%20Coconut%20Apart%20ve%20Pansiyon!5e1!3m2!1str!2str!4v1769777317175!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Olympos Coconut Apart ve Pansiyon"
                width={180}
                height={65}
              />
            </Link>
            <p className="mt-4 text-background/70 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-background/30 text-background/70 hover:border-cyan hover:text-cyan transition-colors rounded-md"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-background/30 text-background/70 hover:border-cyan hover:text-cyan transition-colors rounded-md"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-6">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {[
                { href: "#bungalows", label: t.nav.bungalows },
                { href: "#about", label: t.nav.about },
                { href: "#gallery", label: "Galeri" },
                { href: "#booking", label: t.nav.bookNow },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-6">Deneyimler</h3>
            <ul className="space-y-3">
              {[
                "Doğa ile İç İçe",
                "Deniz Manzarası",
                "Havuz Keyfi",
                "Huzurlu Ortam",
                "Özel Hizmet",
              ].map((item) => (
                <li key={item}>
                  <span className="text-background/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-6">{t.footer.contact}</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24695.187097963215!2d30.445630899999998!3d36.375744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c2377c2c6dc9a5%3A0x1a6d35343c9ffade!2sOlympos%20Coconut%20Apart%20ve%20Pansiyon!5e1!3m2!1str!2str!4v1769777317175!5m2!1str!2str"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-background/70 hover:text-cyan transition-colors"
                >
                  <MapPin size={18} className="flex-shrink-0 mt-1" />
                  <span>Olympos Coconut Apart ve Pansiyon<br />Olympos, Antalya</span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+905307351297"
                  className="flex items-center gap-3 text-background/70 hover:text-cyan transition-colors"
                >
                  <Phone size={18} className="flex-shrink-0" />
                  +90 530 735 12 97
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-background/50 text-sm">
            {currentYear} Olympos Coconut Apart ve Pansiyon. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
