import { Metadata } from 'next';
import { TopNav } from "@/components/site/top-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SeoFooter } from "@/components/site/seo-footer";
import { CONTACT, whatsappLink } from "@/lib/contact";
import { MessageSquare, Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Get a Custom Apparel Quote - Vinayaga Garments",
  description: "Contact Vinayaga Garments for premium custom apparel manufacturing. Get a quote for team kits, corporate uniforms, and wholesale textile solutions. Located in Tamil Nadu.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20 px-margin-mobile md:px-margin-desktop text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif-display tracking-tight">
              Let's Build Your Custom Apparel Together
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              From professional sports teams to global corporate brands, we provide precision manufacturing solutions tailored to your needs.
            </p>
          </div>
        </section>

        <section className="py-20 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary font-serif-display">Contact Information</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Have questions about our manufacturing process, lead times, or pricing? Reach out to our expert team for a detailed consultation.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-secondary/10 p-4 rounded-full text-secondary">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">WhatsApp Us (Quickest Response)</h3>
                    <p className="text-muted-foreground mb-4">Chat with our manufacturing experts directly on WhatsApp.</p>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary font-bold text-lg hover:underline"
                    >
                      {CONTACT.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-secondary/10 p-4 rounded-full text-secondary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Email</h3>
                    <p className="text-muted-foreground mb-4">Send us your tech packs or detailed requirements.</p>
                    <a href={CONTACT.emailHref} className="text-secondary font-bold text-lg hover:underline">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-secondary/10 p-4 rounded-full text-secondary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Call Us</h3>
                    <p className="text-muted-foreground mb-2">Primary: <a href={CONTACT.phoneHref} className="text-secondary hover:underline">{CONTACT.phoneDisplay}</a></p>
                    <p className="text-muted-foreground">Landline: <a href={CONTACT.telHref} className="text-secondary hover:underline">{CONTACT.telDisplay}</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-secondary/10 p-4 rounded-full text-secondary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Manufacturing Hub</h3>
                    <p className="text-muted-foreground">
                      Vinayaga Garments<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-secondary/10 p-4 rounded-full text-secondary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">Monday – Sunday: 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-muted p-10 rounded-2xl border border-border flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6 text-primary font-serif-display">Ready to get a quote?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                The most efficient way to start is by contacting us via WhatsApp with your requirements. Our team will review your needs and get back to you with a preliminary estimate.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Free Design Consultation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Detailed Fabric Specifications</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Transparent Pricing & Lead Times</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Quality Assurance Guaranteed</span>
                </li>
              </ul>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-secondary text-secondary-foreground text-center rounded-xl font-bold text-xl hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Request Quote via WhatsApp
              </a>
              <p className="text-center mt-6 text-sm text-muted-foreground">
                Typically responds in less than 2 hours
              </p>
            </div>
          </div>
        </section>
      </main>
      <SeoFooter />
      <SiteFooter />
    </div>
  );
}
