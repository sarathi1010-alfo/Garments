import { TopNav } from "@/components/site/top-nav";
import { Hero } from "@/components/site/hero";
import { Capabilities } from "@/components/site/capabilities";
import { FeaturedWork } from "@/components/site/featured-work";
import { Process } from "@/components/site/process";
import { ResourceHub } from "@/components/site/resource-hub";
import { HomeFaq } from "@/components/site/home-faq";
import { CtaBanner } from "@/components/site/cta-banner";
import { SiteFooter } from "@/components/site/site-footer";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";
import { SeoFooter } from "@/components/site/seo-footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <a
        href="#main"
        className="skip-link sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-on-primary focus:rounded-md focus:shadow-lg min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
      >
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
