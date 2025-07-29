import HeroSection from "./components/HeroSection";
import PainPointsSection from "./components/PainPointsSection";
import SolutionSection from "./components/SolutionSection";
import Feature3 from "./components/WhyItWorksSection";
import WhyItWorksSection from "./components/WhyItWorksSection2";
import BeautifulCTA from "./components/Cta";
import PricingSection from "./components/PricingSection";
import GuaranteeSection from "./components/GuaranteeSection";
import FooterGlow from "@/components/mvpblocks/footer-glow";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <WhyItWorksSection />
      <Feature3 />
      <BeautifulCTA />
      <PricingSection />
      <GuaranteeSection/>
      <FooterGlow/>
    </main>
  );
}
