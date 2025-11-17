"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { Play } from "lucide-react"
import Image from "next/image"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function YouMayAlsoLike() {
  const services = [
    {
      id: 1,
      title: "COUPLE CONSULTATION",
      price: "From Rs. 3,999.00",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-10%20101814-nL9zacQvEMd5KHcyzohXz6TWvydmMM.png",
      tags: ["Married or Unmarried", "Frequent Contact", "Compatibility Analysis", "Gunotsav"],
    },
    {
      id: 2,
      title: "KUNDALI MATCHING",
      price: "From Rs. 4,999.00",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-10%20101814-nL9zacQvEMd5KHcyzohXz6TWvydmMM.png",
      tags: ["Married or Unmarried", "Frequent Contact", "Compatibility Analysis", "Gunotsav"],
    },
    {
      id: 3,
      title: "IN-PERSON CONSULTATION",
      price: "Rs. 10,000.00",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-10%20101814-nL9zacQvEMd5KHcyzohXz6TWvydmMM.png",
      tags: ["Married or Unmarried", "Frequent Contact", "Compatibility Analysis", "Gunotsav"],
    },
  ]

  return (
    <section className="bg-orange-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className="text-4xl md:text-5xl font-serif text-[#ff6c0c] font-bold mb-12">You may also like</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="space-y-4">
                {/* Card with Play Button */}
                <div className="relative group rounded-2xl overflow-hidden h-64">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition flex items-center justify-center">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-[#ff6c0c] transition">
                      <Play size={24} className="fill-[#ff6c0c] text-[#ff6c0c] ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-bold text-lg">{service.title}</h3>
                  </div>
                </div>

                {/* Title and Price */}
                <div>
                  <h3 className="font-bold text-gray-900 text-center">{service.title}</h3>
                  <p className="text-[#ff6c0c] font-semibold text-center">{service.price}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center text-sm">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <div key={index} className="text-gray-600">
                      {tag}
                      {index < 3 ? " • " : ""}
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
