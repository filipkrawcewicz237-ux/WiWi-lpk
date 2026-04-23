import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Alternatives from "@/components/Alternatives";
import Testimonials from "@/components/Testimonials";
import CTAAfterComparison from "@/components/CTAAfterComparison";
import Features from "@/components/Features";
import CTAAfterFeatures from "@/components/CTAAfterFeatures";
import HowItWorks from "@/components/HowItWorks";
import Trends from "@/components/Trends";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <Alternatives />
        <Testimonials />
        <CTAAfterComparison />
        <Features />
        <CTAAfterFeatures />
        <HowItWorks />
        <Trends />
        <Pricing />
        <Guarantee />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
