export const runtime = 'edge';
import { ContactSection } from "@/components/sections/contact";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { HeroSection } from "@/components/sections/hero";
import { MetricsSection } from "@/components/sections/metrics";
import { ParallaxShowcase } from "@/components/sections/parallax-showcase";
import { PricingSection } from "@/components/sections/pricing";
import { TimelineSection } from "@/components/sections/timeline";
import { SocialProofSection } from "@/components/sections/social-proof";
import { getSiteContent } from "@/lib/contentStore";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getSiteContent();

  return (
    <div className="bg-white text-slate-900">
      <HeroSection hero={content.hero} />
      <MetricsSection metrics={content.metrics} />
      <FeatureGrid featureCluster={content.featureCluster} />
      <ParallaxShowcase parallax={content.parallax} />
      <TimelineSection timeline={content.timeline} />
      <PricingSection pricing={content.pricing} />
      <SocialProofSection socialProof={content.socialProof} />
      <ContactSection contact={content.contact} />
    </div>
  );
}
