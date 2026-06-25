import { Phone, PhoneCall, Mail, MessageCircle, User } from "lucide-react";
import Image from "next/image";
import { CONTACT, whatsappLink } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="bg-primary-container w-full border-t border-on-primary/10 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 px-margin-mobile md:px-margin-desktop py-[100px] max-w-[1440px] mx-auto">
        {/* Brand + contact details */}
        <div className="md:col-span-6 space-y-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo-mark.png"
              alt="Vinayaga Garments logo"
              width={56}
              height={56}
              className="size-14 shrink-0"
            />
            <div className="font-headline-md text-headline-md text-secondary tracking-tight">
              Vinayaga Garments
            </div>
          </div>
          <p className="font-body-md text-body-md text-on-primary-container/70 max-w-sm">
            Premium Athletic Craftsmanship. Engineered for performance, tailored
            for trust.
          </p>

          {/* Contact details */}
          <div className="pt-4 space-y-3 font-body-sm text-body-sm text-on-primary-container/80">
            <div className="flex items-center gap-3">
              <User className="size-4 text-secondary shrink-0" aria-hidden />
              <span>{CONTACT.owner}</span>
            </div>
            <a
              className="flex items-center gap-3 hover:text-secondary transition-colors"
              href={CONTACT.phoneHref}
            >
              <Phone className="size-4 text-secondary shrink-0" aria-hidden />
              <span>{CONTACT.phoneDisplay}</span>
            </a>
            <a
              className="flex items-center gap-3 hover:text-secondary transition-colors"
              href={CONTACT.telHref}
            >
              <PhoneCall className="size-4 text-secondary shrink-0" aria-hidden />
              <span>{CONTACT.telDisplay}</span>
            </a>
            <a
              className="flex items-center gap-3 hover:text-secondary transition-colors"
              href={CONTACT.emailHref}
            >
              <Mail className="size-4 text-secondary shrink-0" aria-hidden />
              <span>{CONTACT.email}</span>
            </a>
            <a
              className="flex items-center gap-3 hover:text-secondary transition-colors"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4 text-secondary shrink-0" aria-hidden />
              <span>WhatsApp: {CONTACT.whatsappDisplay}</span>
            </a>
          </div>

          <div className="pt-8">
            <p className="font-body-sm text-body-sm text-on-primary-container/50">
              © 2024 Vinayaga Garments. All rights reserved.
            </p>
          </div>
        </div>

        <div className="md:col-span-3 space-y-6">
          <h4 className="font-label-md text-label-md uppercase text-secondary tracking-[0.1em]">
            Company
          </h4>
          <div className="flex flex-col space-y-4">
            <a
              className="font-body-md text-body-md text-on-primary-container/80 hover:text-secondary transition-colors"
              href={CONTACT.emailHref}
            >
              Contact Us
            </a>
            <a
              className="font-body-md text-body-md text-on-primary-container/80 hover:text-secondary transition-colors"
              href="#process"
            >
              About Us
            </a>
            <a
              className="font-body-md text-body-md text-on-primary-container/80 hover:text-secondary transition-colors"
              href="#"
            >
              Sustainability
            </a>
          </div>
        </div>

        <div className="md:col-span-3 space-y-6">
          <h4 className="font-label-md text-label-md uppercase text-secondary tracking-[0.1em]">
            Legal
          </h4>
          <div className="flex flex-col space-y-4">
            <a
              className="font-body-md text-body-md text-on-primary-container/80 hover:text-secondary transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-body-md text-body-md text-on-primary-container/80 hover:text-secondary transition-colors"
              href="#"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
