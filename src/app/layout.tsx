import type { Metadata } from "next";
import { Montserrat, Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
  title: "Vinayaga Garments | Premium Custom Apparel",
  description:
    "Premium custom athletic apparel manufacturing. We merge high-performance fabrics with precise engineering to deliver gear that stands the test of time, designed exactly to your specifications.",
  keywords: [
    "custom athletic apparel",
    "sublimation printing",
    "team kits",
    "corporate sportswear",
    "performance polos",
    "Vinayaga Garments",
  ],
  authors: [{ name: "Vinayaga Garments" }],
  openGraph: {
    title: "Vinayaga Garments | Premium Custom Apparel",
    description:
      "Engineered for Performance. Tailored for Trust. Premium custom athletic apparel manufacturing.",
    siteName: "Vinayaga Garments",
    type: "website",
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
