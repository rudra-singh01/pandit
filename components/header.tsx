"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white border-b border-neutral-200 z-50 
        transition-transform duration-300 ease-in-out 
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="mx-auto px-4">
        <nav className="flex items-center justify-evenly gap-4 p-2" aria-label="Primary">
          
          {/* Left: Logo */}
          <div className="flex items-center">
            <Image
              src="https://ik.imagekit.io/devzones/starpandit(150%20x%2070%20px).png"
              alt="Star Pandit Logo"
              width={150}
              height={20}
              className=" object-contain"
            />
          </div>

          {/* Center Images */}
          <div className="flex items-center gap-2">
            <Image
              src="https://ik.imagekit.io/devzones/Gemini_Generated_Image_s3go7bs3go7bs3go.png?updatedAt=1759513742355"
              alt="Astro Banner 1"
              width={190}
              height={40}
              className=" hidden md:block object-contain"
            />
            <Image
              src="https://ik.imagekit.io/devzones/image.png"
              alt="Astro Banner 2"
              width={190}
              height={40}
              className=" hidden md:block object-contain"
            />
            <Image
              src="https://ik.imagekit.io/devzones/Gemini_Generated_Image_oz084moz084moz08.png?updatedAt=17595137423795"
              alt="Astro Banner 3"
              width={190}
              height={40}
              className=" hidden md:block object-contain"
            />
          </div>

          {/* Right: Contact Image */}
          <div className="flex items-end justify-end">
            <Image
              src="https://ik.imagekit.io/devzones/Add%20a%20heading.jpg"
              alt="Contact Info"
              width={250}
              height={80}
              className="object-contain"
            />
          </div>

        </nav>
      </div>
    </header>
  )
}
