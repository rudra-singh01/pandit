"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Can I ask multiple questions during the consultation?",
      answer: "Yes, you can ask multiple questions during the consultation. Guruji will address all your concerns.",
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer: "Yes, you can cancel or reschedule your appointment up to 24 hours before the scheduled time.",
    },
    {
      question: "What happens incase I miss my appointment?",
      answer: "If you miss your appointment, the slot may be forfeited unless you reschedule it in advance.",
    },
    {
      question: "Can we create a Janma Kundali if we do not know the birth time?",
      answer:
        "A Janma Kundali can be created without the exact birth time, but accuracy is enhanced with precise timing.",
    },
    {
      question: "What can I expect from the consultation?",
      answer:
        "You can expect detailed insights into your life, relationships, career, and spiritual growth based on your birth chart.",
    },
  ]

  return (
    <section className="bg-gradient-to-br from-amber-700 to-amber-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif text-white font-bold mb-12">FAQs</h2>

        <div className="space-y-4 max-w-4xl">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/20">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-white hover:opacity-80 transition"
              >
                <span className="text-lg font-medium text-left">{faq.question}</span>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && <div className="pb-6 text-white/90 leading-relaxed">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
