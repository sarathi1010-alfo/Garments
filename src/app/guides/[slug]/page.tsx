import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { guides } from '@/data/guides-data';
import { TopNav } from "@/components/site/top-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SeoFooter } from "@/components/site/seo-footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from 'next/link';

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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4 text-primary font-serif-display tracking-tight leading-tight">
            {guide.h1}
          </h1>

          <div className="flex items-center text-sm text-muted-foreground mb-8">
            <span>Category: <span className="font-semibold text-secondary">{guide.category}</span></span>
            <span className="mx-3">•</span>
            <span>Last Updated: {guide.lastUpdated}</span>
          </div>

          <div className="bg-secondary/10 p-6 rounded-xl border-l-4 border-secondary mb-10">
            <h2 className="text-sm uppercase tracking-wider text-secondary font-bold mb-2 m-0">Quick Answer</h2>
            <p className="text-xl font-medium text-primary leading-relaxed italic m-0">
              {guide.answerBlock}
            </p>
          </div>

          <div className="bg-muted p-8 rounded-xl mb-10 border border-border">
            <h2 className="text-2xl font-bold mb-4 text-primary m-0">Key Takeaways</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-none p-0 m-0 mt-4">
              {guide.keyTakeaways.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-base m-0">
                  <span className="text-secondary font-bold text-xl leading-none">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-12">
            {guide.sections.map((section, idx) => (
              <section key={idx}>
                {section.level === 2 ? (
                  <h2 className="text-3xl font-bold text-primary mb-4">{section.title}</h2>
                ) : (
                  <h3 className="text-2xl font-bold text-primary mb-3">{section.title}</h3>
                )}
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          <section className="mt-16 bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 m-0">Frequently Asked Questions</h2>
            <div className="space-y-8 mt-6">
              {guide.faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-2 m-0">{faq.q}</h3>
                  <p className="text-muted-foreground m-0">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-16 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-6 text-primary m-0">Ready to start your custom project?</h2>
            <p className="mb-8">
              Contact Vinayaga Garments today for a professional consultation and quote on your custom apparel requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all"
              >
                Get a Custom Quote
              </Link>
              <Link
                href="/guides"
                className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-bold hover:bg-secondary/90 transition-all"
              >
                Back to All Guides
              </Link>
            </div>
          </div>
        </article>
      </main>
      <SeoFooter />
      <SiteFooter />
    </div>
  );
}
