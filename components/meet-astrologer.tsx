"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function MeetAstrologer() {
  return (
    <section className="py-16 md:py-24 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer white card */}
        <div className="bg-white rounded-[28px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* LEFT IMAGE */}
            <div className="relative h-[70vh] md:h-[80vh] lg:h-[88vh]">
              <div className="absolute inset-0 md:rounded-l-[28px] sm:rounded-t-[28px] overflow-hidden">
                <Image
                  src="https://panditjagannathguruji.com/cdn/shop/files/Meet_your_Astrologer.jpg?v=1753612109&width=2000"
                  alt="Pandit Jagannath Guruji"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="px-8 md:px-12 lg:px-16 py-12 md:py-20 flex flex-col justify-center">
              
              {/* Heading */}
              <h2
                className="text-4xl md:text-5xl font-serif font-bold text-[#7B5454] leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Meet your
                <br />
                Astrologer
              </h2>

              {/* Paragraphs */}
              <div className="space-y-5 text-[15.5px] md:text-base text-[#5F4B4B]">
                <p className="leading-relaxed">
                  <strong className="font-semibold text-[#5B4141]">Pandit Jagannath Guruji</strong> is a well-known name in
                  Indian astrology, trusted by thousands across the world for his accurate predictions and practical guidance. 
                  With deep knowledge in <strong>Vedic Astrology, Palmistry, and Face Reading</strong>, he brings years of 
                  experience and a calm, thoughtful approach to every consultation.
                </p>

                <p className="leading-relaxed">
                  Whether it’s career, relationships, marriage, or health — Guruji's insights are always rooted in 
                  tradition and delivered with care.
                </p>
              </div>

              {/* Button */}
              <div className="mt-8">
                <button className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-bold text-white bg-[#B65A4C] shadow-lg hover:bg-[#a34c40] transition">
                  READ FULL
                  <ArrowRight size={18} />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
