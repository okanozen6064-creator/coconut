"use client"

import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '@/contexts/language-context'
import { locales, localeNames, localeFlags, Locale } from '@/lib/i18n'
import { Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LanguageSelectorProps {
    isScrolled?: boolean
}

export function LanguageSelector({ isScrolled = false }: LanguageSelectorProps) {
    const { locale, setLocale } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleLocaleChange = (newLocale: Locale) => {
        setLocale(newLocale)
        setIsOpen(false)
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300",
                    isScrolled
                        ? "text-navy hover:bg-navy/10"
                        : "text-background hover:bg-background/10"
                )}
                aria-label="Select language"
            >
                <Globe size={18} />
                <span className="text-sm font-medium">{localeFlags[locale]}</span>
                <span className="hidden sm:inline text-sm">{localeNames[locale]}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-background rounded-lg shadow-xl border border-border overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {locales.map((loc) => (
                        <button
                            key={loc}
                            type="button"
                            onClick={() => handleLocaleChange(loc)}
                            className={cn(
                                "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors",
                                locale === loc
                                    ? "bg-navy text-background"
                                    : "text-navy hover:bg-navy/10"
                            )}
                        >
                            <span className="text-xl">{localeFlags[loc]}</span>
                            <span className="text-sm font-medium">{localeNames[loc]}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
