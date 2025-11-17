import Header from "@/components/header"
import Hero from "@/components/hero"
import MeetAstrologer from "@/components/meet-astrologer"
import AboutUs from "@/components/about-us"
import Services from "@/components/services"
import Reviews from "@/components/reviews"
import FAQs from "@/components/faqs"
import Testimonials from "@/components/testimonials"
import YouMayAlsoLike from "@/components/you-may-also-like"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Reviews />
        <Testimonials />
        <MeetAstrologer />
        {/* <Services /> */}
        {/* <YouMayAlsoLike /> */}
        <FAQs />
        <AboutUs />
        <Footer />
      </div>
    </>
  )
}
