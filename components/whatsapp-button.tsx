"use client"

import { MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"

export function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Show button after a small delay to not block initial content
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 1000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <a
            href="https://wa.me/905307351297"
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            aria-label="WhatsApp ile iletişime geç"
        >
            <svg
                viewBox="0 0 24 24"
                width="32"
                height="32"
                stroke="currentColor"
                strokeWidth="2"
                fill="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="fill-current text-white"
            >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1.5 rounded-md text-sm font-medium shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
                Bize Ulaşın
            </span>
        </a>
    )
}
