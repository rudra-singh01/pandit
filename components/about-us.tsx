"use client"

import { ArrowRight } from "lucide-react"

export default function AboutUs() {
  return (
    <section className="bg-orange-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif text-amber-900 font-bold">About Us</h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            Our registered business name is <strong>SAI JAGANNATHA ASTROLOGY CENTRE</strong>, operating under the trade
            name <strong>Pandit Jagannath Guruji</strong>.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            For decades, Guruji has guided thousands across the globe with astrology, palmistry, face reading, and
            spiritual practices. His consultations aim to bring clarity, awareness, and confidence in life's important
            decisions.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            <span className="text-amber-900 font-bold">Please note:</span> our services are spiritual in nature and do
            not replace professional advice in health, finance, law, or career.
          </p>

          <button className="inline-flex items-center gap-2 bg-amber-700 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-800 transition">
            BUTTON LABEL <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
