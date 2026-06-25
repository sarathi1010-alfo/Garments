import Script from "next/script";

/**
 * Analytics — Google Tag Manager (GTM-WNR968SW) + Google Analytics 4
 * (G-HZQ3QT11QC). Loaded via next/script with afterInteractive so they
 * never block first paint. GTM's <noscript> iframe is rendered in the body
 * for the no-JS fallback.
 *
 * Note: GA4 is also deployable through GTM's interface; both snippets are
 * included here per the site owner's explicit request.
 */
export const GA4_ID = "G-HZQ3QT11QC";
export const GTM_ID = "GTM-WNR968SW";

export function Analytics() {
  return (
    <>
      {/* Google Tag Manager — head script */}
      <Script id="gtm-init" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>

      {/* Google Analytics 4 — gtag.js */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}');`}
      </Script>
    </>
  );
}

/** GTM <noscript> fallback — render at the top of <body> */
export function AnalyticsNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="gtm-fallback"
      />
    </noscript>
  );
}
