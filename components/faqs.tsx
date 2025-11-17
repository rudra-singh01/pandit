"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Can I ask multiple questions during the consultation?",
      answer: "Yes, you can ask as many questions as you want within your selected time.",
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer: "Yes, you can reschedule your appointment. Cancellations depend on our policy, but we always try to help.",
    },
    {
      question: "What happens incase I miss my appointment?",
      answer: "If you miss the call, you can request a new slot. Rescheduling is subject to availability.",
    },
    {
      question: "Can we create a Janma Kundali if we do not know the birth time?",
      answer:
        "Yes, it’s possible. Pandit Ji uses special methods to estimate the birth time and create an accurate Kundali.",
    },
    {
      question: "What can I expect from the consultation?",
      answer:
        "You will receive clear guidance, practical remedies, and answers to your personal problems—explained in simple, easy language.",
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
