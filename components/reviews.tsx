"use client"

import { Star } from "lucide-react"

export default function Reviews() {
  const reviews = [
    {
      name: "Rohit Sharma",
      verified: true,
      date: "13/11/2025",
      rating: 5,
      title: "Very accurate and helpful guidance!",
      duration: "30 Minutes",
    },
    {
      name: "Aisha Verma",
      verified: true,
      date: "15/11/2025",
      rating: 5,
      title: "Got clarity in just one session!",
      duration: "15 Minutes",
    },
    {
      name: "Neeraj Singh",
      verified: true,
      date: "16/11/2025",
      rating: 5,
      title: "Best consultation I have ever taken.",
      duration: "30 Minutes",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-amber-700 text-amber-700" />
              ))}
            </div>
            <span className="text-gray-700 font-medium">3 Reviews</span>
          </div>
          {/* <button className="border-2 border-gray-400 text-gray-700 px-6 py-2 rounded-lg font-medium hover:border-amber-700 hover:text-amber-700 transition">
            Write a review
          </button> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="font-bold text-gray-900">{review.name}</h3>
                {review.verified && (
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-3">{review.date}</p>
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-700 text-amber-700" />
                ))}
                {[...Array(5 - review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-gray-300" />
                ))}
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{review.title}</h4>
              <p className="text-sm text-gray-600">Item type: {review.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
