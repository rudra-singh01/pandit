"use client"

import { Search, User, ShoppingCart, Menu, X } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 bg-orange-50 border-b border-gray-200 z-50 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              {/* <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
              🔥
            </div>
            <div className="text-sm font-serif text-amber-900">
              <div className="font-bold">PANDIT</div>
              <div className="font-bold">JAGANNATH</div>
              <div className="text-xs">GURUJI</div>
            </div> */}
              <Image
                src='https://panditjagannathguruji.com/cdn/shop/files/PJG_Final_Logo.svg?v=1754622785&width=320'
                alt='Pandit Jagannath Guruji Logo'
                width={170}
                height={30}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 font-medium hover:text-amber-700">
                ASTROLOGY
              </a>
              <a href="#" className="text-gray-700 font-medium hover:text-amber-700">
                PREDICTIONS
              </a>
              <a href="#" className="text-gray-700 font-medium hover:text-amber-700">
                ABOUT
              </a>
              <a href="#" className="text-gray-700 font-medium hover:text-amber-700">
                CONTACT
              </a>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="text-gray-700 hover:text-amber-700">
                <Search size={20} />
              </button>
              <button className="text-gray-700 hover:text-amber-700">
                <User size={20} />
              </button>
              <button className="text-gray-700 hover:text-amber-700">
                <ShoppingCart size={20} />
              </button>
              <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-4">
              <a href="#" className="text-gray-700 font-medium">
                ASTROLOGY
              </a>
              <a href="#" className="text-gray-700 font-medium">
                PREDICTIONS
              </a>
              <a href="#" className="text-gray-700 font-medium">
                ABOUT
              </a>
              <a href="#" className="text-gray-700 font-medium">
                CONTACT
              </a>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
