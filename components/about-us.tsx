"use client"

import { ArrowRight } from "lucide-react"

export default function AboutUs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif text-[#ff6c0c] font-bold">About Us</h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            Our registered business name is <strong>StarPandit</strong>, operating under the trade
            name <strong> Pandit Parmanand Goswami Ji.</strong>.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            For many years, Goswami Ji has guided people across India and around the world through <strong>Vedic Astrology, Kundali Reading, Palmistry, and Face Reading</strong>. His consultations are focused on bringing clarity, understanding, and confidence to important life decisions.

          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Pandit Ji’s approach is simple, honest, and rooted in traditional astrology. Thousands trust his guidance for matters related to <strong>love, marriage, career, money, family, and health</strong>.

          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            <span className="text-[#ff6c0c] font-bold">Please note:</span> Our services are spiritual in nature and do not replace professional advice in health, finance, law, or career planning.
          </p>

          {/* <button className="inline-flex items-center gap-2 bg-[#ff6c0c] text-white px-8 py-3 rounded-full font-bold hover:bg-[#ff6c0c] transition">
            BUTTON LABEL <ArrowRight size={20} />
          </button> */}
        </div>
      </div>
    </section>
  )
}
