import { TopNav } from "@/components/site/top-nav";
import { Hero } from "@/components/site/hero";
import { Capabilities } from "@/components/site/capabilities";
import { FeaturedWork } from "@/components/site/featured-work";
import { Process } from "@/components/site/process";
import { CtaBanner } from "@/components/site/cta-banner";
import { SiteFooter } from "@/components/site/site-footer";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";
import { SeoFooter } from "@/components/site/seo-footer";
import { ResourceHub } from "@/components/site/resource-hub";
import { HomeFaq } from "@/components/site/home-faq";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <TopNav />
      <main id="main" className="flex-1">
        <Hero />
        <Capabilities />
        <FeaturedWork />
        <Process />
        <ResourceHub />
        <HomeFaq />
        <CtaBanner />
        <SeoFooter />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
