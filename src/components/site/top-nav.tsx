"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NAV_LINKS = [
  { label: "Products", href: "#featured" },
  { label: "Custom Services", href: "#capabilities" },
  { label: "About Us", href: "#process" },
];

export function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-surface/90 backdrop-blur-sm sticky top-0 w-full z-50 border-b border-border-silver/30">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-[1440px] mx-auto">
        {/* Brand Logo */}
        <a
          className="font-headline-sm text-headline-sm font-bold text-primary tracking-tight"
          href="#"
        >
          Vinayaga Garments
        </a>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-12 items-center font-label-md text-label-md uppercase tracking-[0.1em]">
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

        {/* Trailing Action (Desktop) */}
        <div className="hidden md:block">
          <button className="bg-secondary text-on-secondary px-8 py-3 rounded-md font-label-md text-label-md uppercase tracking-[0.1em] hover:opacity-90 transition-opacity duration-300 cursor-pointer">
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden text-primary p-2 cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="size-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[280px] bg-surface-container-lowest border-border-silver"
          >
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <SheetDescription className="sr-only">
              Site navigation links and primary call to action.
            </SheetDescription>
            <div className="flex flex-col gap-8 pt-16 px-6">
              <span className="font-headline-sm text-headline-sm font-bold text-primary">
                Vinayaga Garments
              </span>
              <nav className="flex flex-col gap-6 font-label-md text-label-md uppercase tracking-[0.1em]">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.label}>
                    <a
                      className="text-on-surface-variant hover:text-primary transition-colors duration-300"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <button className="bg-secondary text-on-secondary px-8 py-3 rounded-md font-label-md text-label-md uppercase tracking-[0.1em] hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                  Get a Quote
                </button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
