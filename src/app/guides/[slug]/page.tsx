import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { guides } from '@/data/guides-data';
import { TopNav } from "@/components/site/top-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SeoFooter } from "@/components/site/seo-footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return {};

  return {
    title: `${guide.title} | Vinayaga Garments`,
    description: guide.description,
    keywords: guide.keywords,
    alternates: {
      canonical: `https://garment.alfo.online/guides/${slug}`,
    }
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": guide.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": guide.h1,
    "description": guide.description,
    "image": "https://garment.alfo.online/api/placeholder/1200/675",
    "author": {
      "@type": "Organization",
      "name": "Vinayaga Garments"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vinayaga Garments",
      "logo": {
        "@type": "ImageObject",
        "url": "https://garment.alfo.online/icon.png"
      }
    },
    "datePublished": "2026-06-27",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav />
      <main className="flex-1 container mx-auto px-margin-mobile md:px-margin-desktop py-12 max-w-4xl">
        <div className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/guides">Guides</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{guide.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-serif-display leading-tight">
            {guide.h1}
          </h1>

          {/* AEO Answer Block */}
          <div className="my-8 p-6 bg-secondary/5 rounded-2xl border border-secondary/20 shadow-sm">
            <h2 className="text-lg font-bold text-secondary uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">lightbulb</span>
              Quick Answer
            </h2>
            <p className="text-xl font-medium leading-relaxed italic text-on-surface">
              {guide.answerBlock}
            </p>
          </div>

          <div className="guide-content mb-12" dangerouslySetInnerHTML={{ __html: guide.content }} />

          {/* Key Highlights */}
          <div className="my-12 p-8 bg-muted/50 rounded-2xl border border-border">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              Key Takeaways
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0">
              {guide.highlights.map((highlight, idx) => (
                <li key={idx} className="flex gap-3 items-start p-0 m-0">
                  <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5">star</span>
                  <span className="text-on-surface">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ Section */}
          <section className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {guide.faqs.map((faq, idx) => (
                <div key={idx} className="bg-muted/30 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </main>
      <SeoFooter />
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
