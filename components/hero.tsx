"use client"

import Image from "next/image"
import { useState } from "react"
import { initializeRazorpay } from "@/app/actions/payment"

export default function Hero() {
  const [selectedDuration, setSelectedDuration] = useState("20")
  const [isProcessing, setIsProcessing] = useState(false)

  const durationPrices: Record<string, number> = {
    "20": 349900, // in paise for Razorpay
    "40": 699900,
    "60": 999900,
  }

  const handleBooking = async () => {
    setIsProcessing(true)
    const amount = durationPrices[selectedDuration]

    try {
      // Call server action to get Razorpay key securely
      const paymentConfig = await initializeRazorpay(amount, selectedDuration)

      // Load Razorpay script
      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.async = true
      script.onload = () => {
        const options = {
          key: paymentConfig.key,
          amount: paymentConfig.amount,
          currency: paymentConfig.currency,
          name: paymentConfig.name,
          description: paymentConfig.description,
          image: paymentConfig.image,
          handler: (response: any) => {
            alert("Payment successful! Payment ID: " + response.razorpay_payment_id)
            // Here you can send the payment details to your backend
          },
          // No prefill configured — frontend will not send any customer prefill data
          theme: {
            color: "#b45309",
          },
        }

        const rzp = new (window as any).Razorpay(options)
        rzp.open()
      }
      document.body.appendChild(script)
    } catch (error) {
      alert("Failed to initialize payment. Please try again.")
      console.error(error)
    }

    setIsProcessing(false)
  }

  return (
    <section className="bg-orange-50 py-12 md:py-20 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl h-[500px] md:h-screen rounded-3xl overflow-hidden">
              <Image
                src="https://panditjagannathguruji.com/cdn/shop/files/Meet_your_Astrologer.jpg?v=1753612109&width=2000"
                alt="Pandit Jagannath Guruji"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif text-amber-900 font-bold">Janma Kundali</h1>
            <p className="text-lg text-gray-700">Rs. 3,499.00</p>
            <p className="text-gray-600 leading-relaxed">
              Your Janma Kundali (birth chart) shows how your life works—how you think, how you feel, what you're good
              at, and where you get stuck.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Pandit Jagannath Guruji studies your Kundali carefully. He explains clearly why you make certain
              decisions, how your emotions affect your relationships, career, and overall life.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This helps you understand your life's patterns better, know the best times to act, and live with greater
              awareness and clarity.
            </p>

            {/* Duration Selection */}
            <div className="flex gap-4 pt-4 flex-wrap">
              {["20", "40", "60"].map((duration) => (
                <button
                  key={duration}
                  onClick={() => setSelectedDuration(duration)}
                  className={`px-6 py-2 border-2 font-medium rounded-lg transition ${
                    selectedDuration === duration
                      ? "border-amber-700 bg-amber-700 text-white"
                      : "border-amber-900 text-amber-900 hover:bg-amber-50"
                  }`}
                >
                  {duration} Minutes
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={handleBooking}
              disabled={isProcessing}
              className="w-full bg-amber-700 text-white font-bold py-4 rounded-full hover:bg-amber-800 transition disabled:opacity-50"
            >
              {isProcessing ? "Processing..." : "BOOK CONSULTATION"}
            </button>

            {/* Share Section */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-gray-600">Share:</span>
              <div className="flex gap-3">
                <button className="text-gray-600 hover:text-amber-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-amber-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-amber-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="1" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
