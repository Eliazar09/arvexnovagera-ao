import type { Metadata } from 'next';
import { Fraunces, Manrope, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  axes: ['opsz', 'SOFT', 'WONK'],
  display: 'swap',
  preload: true,
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arvexagency.online"),
  title: {
    default: "Creación de Sitios Web y Automatización en América Latina | Arvex Agency",
    template: "%s | Arvex Agency",
  },
  description:
    "Creación de sitios web profesionales, automatización WhatsApp y sistemas web para toda América Latina. Proyectos modernos entregados en pocos días.",
  keywords: [
    "creación de sitios web",
    "automatización WhatsApp",
    "sistemas web",
    "América Latina",
    "agencia de tecnología",
    "sitios web profesionales",
    "diseño web LATAM",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arvex Agency — Sitios Web, Sistemas y Automatización",
    description:
      "Sitios web profesionales, automatización WhatsApp y sistemas web para toda América Latina.",
    url: "https://www.arvexagency.online",
    siteName: "Arvex Agency",
    locale: "es_419",
    type: "website",
    images: [
      {
        url: "https://www.arvexagency.online/og",
        width: 1200,
        height: 630,
        alt: "Arvex Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arvex Agency — Sitios Web y Automatización",
    description:
      "Sitios web profesionales, automatización WhatsApp y sistemas web para toda América Latina.",
    images: ["https://www.arvexagency.online/og"],
  },
};

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Arvex Agency',
  description: 'Boutique de tecnología. Sitios web profesionales, automatización de WhatsApp y sistemas web para América Latina.',
  url: 'https://www.arvexagency.online',
  telephone: '+55-95-9-8107-5842',
  email: 'arvexagency@outlook.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Boa Vista',
    addressRegion: 'RR',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 2.8235,
    longitude: -60.6758,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: 'USD50–USD149/mes',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Transferencia, Tarjeta, PayPal',
  areaServed: {
    '@type': 'Place',
    name: 'América Latina',
  },
  sameAs: [
    'https://instagram.com/arvexagency',
    'https://linkedin.com/company/arvexbr',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es-419"
      className={`dark ${fraunces.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-red focus:text-paper focus:text-sm"
        >
          Ir al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
