"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/contact";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Custom Services", href: "/manufacturing" },
  { label: "About Us", href: "/about" },
  { label: "Guides", href: "/guides" },
  { label: "Get a Quote", href: "/contact" },
];

export function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-surface/90 backdrop-blur-sm sticky top-0 w-full z-50 border-b border-border-silver/30">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 md:py-6 max-w-[1440px] mx-auto">
        {/* Brand Logo */}
        <a
          className="flex items-center gap-2 md:gap-3 group min-w-0"
          href="/"
          aria-label="Vinayaga Garments — home"
        >
          <Image
            src="/images/logo-mark.png"
            alt="Vinayaga Garments logo — a stylized monogram in a circular emblem"
            width={40}
            height={40}
            priority
            className="size-9 md:size-10 shrink-0 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-headline-sm text-headline-sm font-bold text-primary tracking-tight">
            Vinayaga Garments
          </span>
        </a>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex space-x-8 xl:space-x-12 items-center font-label-md text-label-md uppercase tracking-[0.1em]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              className="text-on-surface-variant hover:text-primary transition-colors duration-300"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Trailing Action (Desktop) — WhatsApp */}
        <div className="hidden lg:block">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="nofollow external noopener noreferrer"
            className="bg-secondary text-on-secondary px-8 py-3 rounded-md font-label-md text-label-md uppercase tracking-[0.1em] hover:opacity-90 transition-opacity duration-300 inline-flex items-center gap-2 cursor-pointer"
          >
            <MessageCircle className="size-[18px]" />
            Chat with us on WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle — 48px touch target */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="lg:hidden text-primary -mr-2 p-3 cursor-pointer rounded-md hover:bg-surface-container-low transition-colors"
              aria-label="Open menu"
            >
              <Menu className="size-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[85vw] max-w-[320px] bg-surface-container-lowest border-border-silver p-0"
          >
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <SheetDescription className="sr-only">
              Site navigation links and primary call to action.
            </SheetDescription>
            <div className="flex flex-col gap-10 pt-16 px-6 pb-10">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo-mark.png"
                  alt=""
                  width={36}
                  height={36}
                  className="size-9 shrink-0"
                />
                <span className="font-headline-sm text-headline-sm font-bold text-primary">
                  Vinayaga Garments
                </span>
              </div>
              <nav className="flex flex-col gap-8 font-label-md text-label-md uppercase tracking-[0.1em]">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.label}>
                    <a
                      className="text-on-surface-variant hover:text-primary transition-colors duration-300 py-1"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="nofollow external noopener noreferrer"
                  className="bg-secondary text-on-secondary px-8 py-4 rounded-md font-label-md text-label-md uppercase tracking-[0.1em] hover:opacity-90 transition-opacity duration-300 inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="size-[18px]" />
                  Chat with us on WhatsApp
                </a>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
