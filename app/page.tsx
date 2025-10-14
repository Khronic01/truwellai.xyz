import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { StatsSection } from "@/components/stats-section"
import { LiveScanningSection } from "@/components/live-scanning-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { DownloadSection } from "@/components/download-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <LiveScanningSection />
        <TestimonialsSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  )
}
