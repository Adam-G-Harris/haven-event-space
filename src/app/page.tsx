import Hero from "@/components/sections/Hero";
import AwardsBar from "@/components/sections/AwardsBar";
import StatementSection from "@/components/sections/StatementSection";
import SpecsGrid from "@/components/sections/SpecsGrid";
import PhotoGrid from "@/components/sections/PhotoGrid";
import PullQuote from "@/components/sections/PullQuote";
import VenuesTeaser from "@/components/sections/VenuesTeaser";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AwardsBar />
      <StatementSection />
      <SpecsGrid />
      <PhotoGrid />
      <PullQuote />
      <VenuesTeaser />
      <CTASection />
    </main>
  );
}
