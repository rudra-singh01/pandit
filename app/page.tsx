import Header from "@/components/header"

import MeetAstrologer from "@/components/meet-astrologer"
import AboutUs from "@/components/about-us"
import Reviews from "@/components/reviews"
import FAQs from "@/components/faqs"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import Hero from "@/components/hero"

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Reviews />
        <Testimonials />
        <MeetAstrologer />
        <FAQs />
        <AboutUs />
        <Footer />
      </div>
    </>
  )
}
