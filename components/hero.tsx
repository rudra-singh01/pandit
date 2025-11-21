"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import { initializeRazorpay } from "../app/actions/payment"

// --- Strongly typed Razorpay shapes ---
type RazorpayResponse = {
  razorpay_payment_id?: string
  razorpay_order_id?: string
  razorpay_signature?: string
  [key: string]: unknown
}

type RazorpayOptions = {
  key: string
  amount: number
  currency?: string
  name?: string
  description?: string
  image?: string
  handler?: (response: RazorpayResponse) => void
  theme?: { color?: string }
}

interface RazorpayInstance {
  open: () => void
}

type RazorpayConstructor = new (opts: RazorpayOptions) => RazorpayInstance

declare global {
  interface Window {
    Razorpay?: RazorpayConstructor
  }
}

// Response returned by your server-side `initializeRazorpay` action
type RazorpayInitResponse = {
  key: string
  amount: number
  currency?: string
  name?: string
  description?: string
  image?: string
}

export default function Hero() {
  const [selectedDuration, setSelectedDuration] = useState("15")
  const [isProcessing, setIsProcessing] = useState(false)
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Updated prices (paise)
  const durationPrices: Record<string, number> = {
    "15": 250000, // ₹2500
    "30": 510000, // ₹5100
  }

  // Actual prices to display alongside the discounted/display price (in rupees)
  const actualPrices: Record<string, number> = {
    "15": 5100,
    "30": 8000,
  }

  const displayPrice = durationPrices[selectedDuration] / 100
  const actualPrice = actualPrices[selectedDuration] ?? displayPrice

  const handleBooking = async () => {
    setIsProcessing(true)
    const amount = durationPrices[selectedDuration]

    try {
      const paymentConfig = (await initializeRazorpay(amount, selectedDuration)) as RazorpayInitResponse

      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.async = true

      script.onload = () => {
        const options: RazorpayOptions = {
          key: paymentConfig.key,
          amount: paymentConfig.amount,
          currency: paymentConfig.currency,
          name: paymentConfig.name,
          description: paymentConfig.description,
          image: paymentConfig.image,
          handler: (response: RazorpayResponse) => {
            // Redirect to booking URL after successful payment. Append payment id for reference.
            const bookingUrl =
              "https://starpandit.trafft.com/booking?t=s&uuid=8781485d-1255-4081-ba81-24993f10baac"
            const redirectUrl = `${bookingUrl}${
              bookingUrl.includes("?") ? "&" : "?"
            }payment_id=${encodeURIComponent(response.razorpay_payment_id ?? "")}`
            window.location.href = redirectUrl
          },
          theme: { color: "#b45309" },
        }

        if (typeof window !== "undefined" && typeof window.Razorpay === "function") {
          try {
            const RzpCtor = window.Razorpay
            const rzp = new RzpCtor(options)
            rzp.open()
          } catch (err) {
            console.error("Failed to open Razorpay checkout:", err)
          }
        } else {
          // eslint-disable-next-line no-console
          console.error("Razorpay constructor not available on window")
        }
      }

      document.body.appendChild(script)
    } catch (error) {
      console.error(error)
      alert("Failed to initialize payment. Please try again.")
    }

    setIsProcessing(false)
  }

  const gallery = [
    {
      id: 1,
      src: "https://ik.imagekit.io/e2chvlkmnb/WhatsApp%20Image%202025-11-17%20at%201.23.51%20PM.jpeg",
      mobileSrc: "https://ik.imagekit.io/wor7mufym/starttta.png",
      alt: "Pandit Parmanand Goswami - 1",
    },
    {
      id: 2,
      src: "https://ik.imagekit.io/e2chvlkmnb/WhatsApp%20Image%202025-11-17%20at%201.24.15%20PM.jpeg",
      alt: "Thumbnail 1",
    },
  ]

  return (
    <section className="bg-white py-20 md:py-20 mt-3">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="rounded-sm md:rounded-xl overflow-hidden bg-gray-50 shadow-sm">
                <Swiper
                  onSwiper={(swiper: SwiperType) => setSwiperInstance(swiper)}
                  onSlideChange={(s: SwiperType) => setActiveIndex(s.activeIndex)}
                  slidesPerView={1}
                  loop={false}
                  className="h-[420px] md:h-[600px]"
                >
                  {gallery.map((img) => (
                    <SwiperSlide key={img.id}>
                      <div className="relative w-full h-[420px] md:h-[600px]">
                        <Image
                          src={isClient && isMobile && img.mobileSrc ? img.mobileSrc : img.src}
                          alt={img.alt}
                          fill
                          quality={100}
                          sizes={isMobile ? "100vw" : "50vw"}
                          className="  md:object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                {gallery.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => {
                      swiperInstance?.slideTo(idx)
                      setActiveIndex(idx)
                    }}
                    className={`relative rounded-lg overflow-hidden border-2 ${
                      activeIndex === idx ? "border-[#ff6c0c] scale-105" : "border-transparent"
                    }`}
                    style={{ width: 72, height: 72 }}
                  >
                    <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-serif text-[#ff6c0c] font-bold">
              Har Problem Ka Solution – With 1:1 Video Consultation!
            </h1>

            <p className="text-lg text-gray-700 font-semibold flex items-baseline gap-2">
              Rs. {displayPrice}
              <span className="text-sm text-red-500 line-through mt-0.5">₹{actualPrice}</span>
            </p>

            <p className="text-gray-600">
              Life gets difficult when you don’t know what to do next. Whether it’s love, marriage,
              career, money, or health, the right guidance can change everything.
            </p>
            <p className="text-gray-600">
              With our 1:1 Live Video Consultation, you get personal, accurate and practical
              solutions for every problem.
            </p>
            <p className="text-gray-600">
              Our expert astrologer Pandit Parmanand Goswami Ji studies your Kundali carefully and
              explains:
            </p>

            <ul className="space-y-3">
              {[
                "Why certain problems keep coming",
                "Which planets are affecting your life",
                "What you should do right now",
                "How to improve your relationships and career",
                "Which remedies will give fast results",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <svg className="w-5 h-5 text-[#ff6c0c]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3A1 1 0 106.3 10.7l2 2a1 1 0 001.4 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600">
              Every consultation is simple, honest and focused on giving you clarity.
            </p>

            <div className="flex gap-4 pt-4">
              {["15", "30"].map((duration) => (
                <button
                  key={duration}
                  onClick={() => setSelectedDuration(duration)}
                  className={`px-6 py-2 border-2 rounded-lg font-medium transition ${
                    selectedDuration === duration
                      ? "bg-[#ff6c0c] border-[#ff6c0c] text-white"
                      : "border-[#ff6c0c] text-[#ff6c0c] hover:bg-[#ff6c0c]"
                  }`}
                >
                  {duration} Minutes
                </button>
              ))}
            </div>

            <button
              onClick={handleBooking}
              disabled={isProcessing}
              className="w-full bg-[#ff6c0c] text-white font-bold py-4 mt-4 rounded-full hover:bg-[#ff6c0c] disabled:opacity-50"
            >
              {isProcessing ? "Processing..." : "BOOK CONSULTATION"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
