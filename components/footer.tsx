"use client"

import { Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")

  return (
    <>
      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Services</h3>
              <ul className="space-y-3 text-white/90">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Search
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Janma Kundali
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Kundali Matching
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Couple Consultation
                  </a>
                </li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Information</h3>
              <ul className="space-y-3 text-white/90">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Predictions
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">SIGN UP</h3>
              <div className="flex items-center bg-white/10 rounded-full p-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent text-white placeholder-white/50 px-4 py-2 flex-1 outline-none"
                />
                <button className="bg-white text-amber-700 rounded-full p-2 hover:bg-yellow-50 transition">
                  <ArrowRight size={20} />
                </button>
              </div>
              <p className="text-white/70 text-sm mt-3">to receive latest updates and offers</p>

              {/* Social Icons */}
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-white hover:text-yellow-300 transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white hover:text-yellow-300 transition">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-white hover:text-yellow-300 transition">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white hover:text-yellow-300 transition">
                  <Youtube size={20} />
                </a>
                <a href="#" className="text-white hover:text-yellow-300 transition">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Footer Bottom */}
      <footer className="bg-orange-50 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 text-sm">
          <p>&copy; 2025 Pandit Jagannath Guruji. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
