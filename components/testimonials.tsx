"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "I booked a session for career issues. Guruji told me the root cause and gave easy remedies. Within two weeks, things actually improved.",
      author:  "Priya Mehta",
    },
    {
      id: 2,
      text: " I loved the 1:1 video call. No confusion, no long stories — just direct solutions that make sense. Totally worth the money.",
      author: "Sahil Kapoor",
    },
    {
      id: 3,
      text: " I was struggling with relationship problems for months. Guruji guided me with full patience and gave me the perfect solution. My situation is much better now.",
      author: " Ankita Joshi",
    },
  ]

  return (
    <section className="bg-[linear-gradient(115deg,rgba(66,28,40,1)_3%,rgba(187,76,64,1)_100%)] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">
            Hear from people like you!
          </h2>

          {/* Decorative underline */}
          <div className="w-[40%] flex items-center justify-center mx-auto">
            <svg viewBox="0 0 461 14" fill="none" preserveAspectRatio="none" className="w-full underline-svg-test">
              <rect x="456.5" y="4" width="6" height="452" transform="rotate(90 456.5 4)" fill="#FBE7C4" />
            </svg>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="pb-8"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                  <div className="text-5xl text-amber-700 mb-6 text-center flex items-center justify-center">
                    <Quote size={53} />
                  </div>

                  <p className="text-lg md:text-xl text-center text-amber-900 font-serif leading-relaxed mb-8">
                    {testimonial.text.toUpperCase()}
                  </p>

                  <p className="text-center text-amber-700 font-semibold">
                    — {testimonial.author}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
