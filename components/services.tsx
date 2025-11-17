   "use client"

import Image from "next/image"
import { Heart, Users, Briefcase, Gift, TrendingUp, Home } from "lucide-react"
import { useState } from "react"
import { initializeRazorpay } from "@/app/actions/payment"

export default function Services() {
  const [isProcessing, setIsProcessing] = useState(false)

  const services = [
    { icon: Heart, label: "Life Path & Guidance" },
    { icon: Users, label: "Family & Relationships" },
    { icon: Briefcase, label: "Financial Issues" },
    { icon: Gift, label: "Delayed Marriage" },
    { icon: TrendingUp, label: "Career & Business" },
    { icon: Home, label: "Life Path & Guidance" },
  ]

  const handleBooking = async () => {
    setIsProcessing(true)
    const amount = 349900 // Default price in paise (Rs. 3,499)
    const selectedDuration = "20"

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
            // Redirect to booking URL after successful payment. Append payment id for reference.
            const bookingUrl = "https://starpandit.trafft.com/booking?t=s&uuid=8781485d-1255-4081-ba81-24993f10baac"
            const redirectUrl = `${bookingUrl}${bookingUrl.includes('?') ? '&' : '?'}payment_id=${encodeURIComponent(
              response.razorpay_payment_id
            )}`
            window.location.href = redirectUrl
          },
          // No 'prefill' property is included — frontend will not send any customer prefill data
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
    <section className="bg-orange-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-96 rounded-3xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-10%20101624-B1c52P0kXlUVbwGIZ25P8LoxScq5ZA.png"
                alt="Service consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - Content & Services */}
          <div className="space-y-8">
            <h2 className="text-2xl font-serif text-amber-900 font-bold">the life</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <service.icon size={24} className="text-amber-900 shrink-0" />
                  <span className="text-gray-700 font-medium">{service.label}</span>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-bold text-gray-900">Who is this for & What is the purpose?</h3>
              <p className="text-gray-600 leading-relaxed">
                This service is for anyone who wants to understand themselves better, not just simple answers, but deep
                understanding.
              </p>
              <p className="text-gray-600 leading-relaxed">
                It doesn't matter if you're starting a new phase, feeling stuck in certain areas of your life without
                knowing why, or just curious about your own nature, this consultation gives you a clear starting point.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The goal is not to predict your future. It is to show you how your chart is made, what pushes you
                forward, what holds you back, and how timing is affecting your life right now. It gives clarity, not
                fixed answers.
              </p>
            </div>

            <button 
              onClick={handleBooking}
              disabled={isProcessing}
              className="w-full bg-amber-700 text-white font-bold py-4 rounded-full hover:bg-amber-800 transition disabled:opacity-50"
            >
              {isProcessing ? "Processing..." : "BOOK CONSULTATION"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
