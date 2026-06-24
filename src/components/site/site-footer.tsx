export function SiteFooter() {
  return (
    <footer className="bg-primary-container w-full border-t border-on-primary/10 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 px-margin-mobile md:px-margin-desktop py-[100px] max-w-[1440px] mx-auto">
        <div className="md:col-span-6 space-y-6">
          <div className="font-headline-md text-headline-md text-secondary tracking-tight">
            Vinayaga Garments
          </div>
          <p className="font-body-md text-body-md text-on-primary-container/70 max-w-sm">
            Premium Athletic Craftsmanship. Engineered for performance, tailored
            for trust.
          </p>
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
              href="#"
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
