"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Pandit Jagannath Guruji's predictions have been incredibly accurate! His guidance helped me make important career decisions, and I'm grateful for his wisdom.",
      author: "Priyal Sethi",
    },
    {
      id: 2,
      text: "The consultation was transformative. Guruji's insights into my life patterns were eye-opening and helped me understand myself better.",
      author: "Rajesh Kumar",
    },
    {
      id: 3,
      text: "I was skeptical at first, but Guruji's reading was remarkably insightful. Highly recommended for anyone seeking spiritual guidance.",
      author: "Neha Singh",
    },
  ]

  return (
    <section className="bg-[linear-gradient(115deg,_rgba(66,28,40,1)_3%,_rgba(187,76,64,1)_100%)] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">Hear from people like you!</h2>
          <div className="w-[40%] flex items-center justify-center mx-auto">
            <svg className="underline-svg-test" viewBox="0 0 461 14" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <g filter="url(#filter0_g_604_34)">
                <rect x="456.5" y="4" width="6" height="452" transform="rotate(90 456.5 4)" fill="#FBE7C4" fill-opacity="1"></rect>
              </g>
              <defs>
                <filter id="filter0_g_604_34" x="0.5" y="0" width="460" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feTurbulence type="fractalNoise" baseFrequency="0.050761420279741287 0.050761420279741287" numOctaves="3" seed="3193"></feTurbulence>
                  <feDisplacementMap in="shape" scale="8" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%"></feDisplacementMap>
                  <feMerge result="effect1_texture_604_34">
                    <feMergeNode in="displacedImage"></feMergeNode>
                  </feMerge>
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="pb-12"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-2xl p-8 md:p-12">
                  <div className="text-5xl text-amber-700 mb-6 text-center flex items-center justify-center"><Quote size={53}/></div>
                  <p className="text-lg md:text-xl text-center text-amber-900 font-serif leading-relaxed mb-8">
                    {testimonial.text.toUpperCase()}
                  </p>
                  <p className="text-center text-amber-700 font-semibold">— {testimonial.author}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
