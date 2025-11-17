"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function MeetAstrologer() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer white card */}
        <div className="bg-white rounded-[28px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* LEFT IMAGE */}
            <div className="relative h-[70vh] md:h-[80vh] lg:h-[88vh]">
              <div className="absolute inset-0 md:rounded-l-[28px] sm:rounded-t-[28px] overflow-hidden">
                <Image
                  src="https://ik.imagekit.io/e2chvlkmnb/WhatsApp%20Image%202025-11-17%20at%201.35.59%20PM.jpeg"
                  alt="Pandit Jagannath Guruji"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="px-8 md:px-12 lg:px-16 py-12 md:py-20 flex flex-col justify-start">
              
              {/* Heading */}
              <h2
                className="text-4xl md:text-4xl font-serif font-bold text-[#ff6c0c] leading-tight mb-6"
              >
                Meet your Astrologer
              </h2>

              {/* Paragraphs */}
              <div className="space-y-5 text-[15.5px] md:text-base text-[#5F4B4B]">
                <p className="leading-relaxed">
                  <strong className="font-semibold text-[#5B4141]">Pandit Parmanand Goswami Ji</strong> is a respected and trusted name in Indian astrology. With years of experience and thousands of satisfied clients, he is known for his accurate predictions, simple explanations, and practical solutions.
                </p>

                <p className="leading-relaxed">
                  His deep knowledge in <strong>Vedic Astrology, Kundali Reading, Palmistry, and Face Reading</strong> helps him understand every situation clearly. Guruji’s approach is calm, honest, and focused on giving the right guidance at the right time.
                </p>

                <p className="leading-relaxed">
                  Whether you are facing issues in <strong>career, relationships, marriage, money, or health</strong>, Goswami Ji’s insights are always rooted in true tradition and delivered with care.

                </p>
              </div>

              {/* Button */}
              {/* <div className="mt-8">
                <button className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-bold text-white bg-[#B65A4C] shadow-lg hover:bg-[#a34c40] transition">
                  READ FULL
                  <ArrowRight size={18} />
                </button>
              </div> */}

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
