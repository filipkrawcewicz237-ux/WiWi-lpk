import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Alternatives from "@/components/Alternatives";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Trends from "@/components/Trends";
import Pricing from "@/components/Pricing";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <Alternatives />
        <Features />
        <HowItWorks />
        <Trends />
        <Pricing />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
