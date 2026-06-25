"use client";

import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Mail } from "lucide-react";
import { CONTACT, whatsappLink } from "@/lib/contact";

export type LegalDocId = "privacy" | "sustainability" | "terms";

export type LegalDoc = {
  id: LegalDocId;
  title: string;
  subtitle: string;
  /** Last-updated line shown under the title */
  updated?: string;
  /** Rendered as structured prose */
  body: React.ReactNode;
};

export function LegalModal({
  doc,
  open,
  onOpenChange,
}: {
  doc: LegalDoc | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  // Lock body scroll while open (the ScrollArea handles inner scroll).
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-2xl md:max-w-3xl max-h-[90vh] p-0 gap-0 bg-surface-container-lowest border-border-silver overflow-hidden"
      >
        <DialogTitle className="sr-only">{doc?.title ?? "Document"}</DialogTitle>
        <DialogDescription className="sr-only">
          {doc?.subtitle ?? "Legal document"}
        </DialogDescription>

        {/* Sticky header */}
        <div className="px-6 md:px-10 pt-8 pb-6 border-b border-border-silver bg-surface-container-lowest">
          <p className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.1em] mb-3">
            {doc?.subtitle}
          </p>
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary">
            {doc?.title}
          </h2>
          {doc?.updated && (
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">
              {doc.updated}
            </p>
          )}
        </div>

        {/* Scrollable body */}
        <ScrollArea className="max-h-[55vh] md:max-h-[60vh]">
          <div className="px-6 md:px-10 py-8 legal-prose">{doc?.body}</div>
        </ScrollArea>

        {/* Contact CTA footer */}
        <div className="px-6 md:px-10 py-5 border-t border-border-silver bg-surface-container-low flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Questions? Reach out directly.
          </p>
          <div className="flex gap-3">
            <a
              href={whatsappLink(
                `Hello ${CONTACT.brand}, I have a question regarding the ${doc?.title}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-5 py-2.5 rounded-md font-label-sm text-label-sm uppercase tracking-[0.05em] hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
            <a
              href={CONTACT.emailHref}
              className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2.5 rounded-md font-label-sm text-label-sm uppercase tracking-[0.05em] hover:bg-primary hover:text-on-primary transition-colors"
            >
              <Mail className="size-4" />
              Email
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
