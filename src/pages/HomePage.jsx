import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton"
import Footer from "@/layout/Footer"
import Navbar from "@/layout/Navbar"
import BeforeAfterSection from "@/sections/BeforeAfterSection"
import FeaturedProjectSection from "@/sections/FeaturedProjectSection"
import FinalCTASection from "@/sections/FinalCTASection"
import HeroSection from "@/sections/HeroSection"
import ServiceAreasSection from "@/sections/ServiceAreasSection"
import ServicesSection from "@/sections/ServicesSection"
import TrustStripSection from "@/sections/TrustStripSection"
import WhyRivylSection from "@/sections/WhyRivylSection"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f4efe7] text-stone-950">
      <Navbar />
      <main>
        <HeroSection />
        <TrustStripSection />
        <BeforeAfterSection />
        <FeaturedProjectSection />
        <ServicesSection />
        <WhyRivylSection />
        <ServiceAreasSection />
        <FinalCTASection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}
