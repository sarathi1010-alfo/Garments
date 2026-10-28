import type { Metadata } from "next";
import { Montserrat, Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics, AnalyticsNoScript } from "@/components/site/analytics";
import { GlobalSchema } from "@/components/site/global-schema";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://garment.alfo.online"),
  title: "Custom Athletic Apparel Manufacturer | Vinayaga Garments",
  description:
    "Custom athletic apparel manufacturer delivering precision sportswear, sublimated team jerseys, activewear, and reliable high-volume B2B wholesale orders.",
  keywords: [
    "custom athletic apparel manufacturer",
    "sublimated sportswear manufacturer",
    "custom team jerseys wholesale",
    "private label athletic clothing",
    "performance apparel manufacturing",
    "Vinayaga Garments",
  ],
  authors: [{ name: "Vinayaga Garments" }],
  alternates: {
    canonical: "https://garment.alfo.online/",
  },
  openGraph: {
    title: "Custom Athletic Apparel Manufacturer | Vinayaga Garments",
    description:
      "Custom athletic apparel manufacturer delivering precision sportswear, sublimated team jerseys, activewear, and reliable high-volume B2B wholesale orders.",
    url: "https://garment.alfo.online/",
    siteName: "Vinayaga Garments",
    images: [
      {
        url: "https://garment.alfo.online/icon.png",
        width: 180,
        height: 180,
        alt: "Vinayaga Garments Custom Athletic Apparel",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Athletic Apparel Manufacturer | Vinayaga Garments",
    description:
      "Custom athletic apparel manufacturer delivering precision sportswear, sublimated team jerseys, activewear, and reliable high-volume B2B wholesale orders.",
    images: ["https://garment.alfo.online/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Material Symbols (monoline geometric icons) — global in App Router */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap"
        />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} ${playfairDisplay.variable} antialiased bg-background text-on-surface font-body-md`}
      >
        <GlobalSchema />
        <AnalyticsNoScript />
        <Analytics />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
