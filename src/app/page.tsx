import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsAppButton from "@/components/layout/FloatingWhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import FloatingStats from "@/components/sections/FloatingStats";
import CoursesSection from "@/components/sections/CoursesSection";
import InteractiveAgentDemo from "@/components/sections/InteractiveAgentDemo";
import CurriculumBreakdown from "@/components/sections/CurriculumBreakdown";
import PackagesPricingSection from "@/components/sections/PackagesPricingSection";
import ResultsProofSection from "@/components/sections/ResultsProofSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AboutMentorSection from "@/components/sections/AboutMentorSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactEnrollSection from "@/components/sections/ContactEnrollSection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf9] text-[#171717] selection:bg-[#ff6f1e] selection:text-white">
      {/* Sticky Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1">
        <HeroSection />
        <FloatingStats />
        <CoursesSection />
        <InteractiveAgentDemo />
        <CurriculumBreakdown />
        <PackagesPricingSection />
        <ResultsProofSection />
        <TestimonialsSection />
        <AboutMentorSection />
        <FAQSection />
        <ContactEnrollSection />
      </main>

      {/* Superr Signature Footer Brand Band */}
      <Footer />

      {/* Floating Action CTA */}
      <FloatingWhatsAppButton />
    </div>
  );
}
