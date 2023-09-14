import Header from "@/src/components/Header"
import HeroSection from "@/src/components/HeroSection"
import AboutSection from "@/src/components/AboutSection"
import ServiceSection from "@/src/components/ServicesSection"
import ResumeSection from "@/src/components/ResumeSection"
import ContactSection from "@/src/components/ContactSection"

import Footer from "@/src/components/Footer"
export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <ServiceSection/>
      <ResumeSection/>
     <ContactSection/>
    <Footer/>
    </>
  )
}
